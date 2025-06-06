import {
  For,
  createSignal,
  Show,
  createMemo,
  onMount,
  onCleanup,
} from "solid-js";
import {
  TraversalOutputProps,
  HypergraphNodeProps,
} from "./priority-traversal-types";

/**
 * Component to output the traversal structure to the DOM
 * Contains both the visualization for the traversal structure (optional) and
 * also screen reader output for traversal structure
 */
export function TraversalOutputComponentKeyboardParentFocus(
  props: TraversalOutputProps
) {
  const [currentNodeId, setCurrentNodeId] = createSignal<string | null>(
    props.nodeGraph[0].id
  );

  // Keeps track of traversal history for undo
  const [history, setHistory] = createSignal<string[]>(["0"]);

  // This will store the default paths from the root node to each node
  const [defaultPaths, setDefaultPaths] = createSignal<Map<string, string[]>>(
    new Map()
  );

  const currentNode = createMemo(() => {
    if (currentNodeId() !== null) {
      return props.nodeGraph[currentNodeId()!];
    }
    return props.nodeGraph[0]; // Default to the first node if none is selected
  });

  const findSiblingOfFocusedParent = (nodeId: string): string[] => {
    if (history().length === 1) {
      return [];
    } else {
      const focusedParent = history()[history().length - 2];
      const allChildrenOfParent = props.nodeGraph[focusedParent].children;
      const siblingsOnly = allChildrenOfParent.filter((childId) => {
        return childId !== nodeId;
      });

      return siblingsOnly;
    }
  };

  const handleTabIndexSwitch = (oldElement: HTMLElement | null, newElement: HTMLElement | null): void => {
    if (oldElement) {
      oldElement.setAttribute("tabindex", "-1");
    }
  
    if (newElement) {
      newElement.setAttribute("tabindex", "0");
      newElement.focus();
    }
  };

  const handleNodeClick = (
    oldId: string,
    newId: string,
    isFocusedParent?: boolean
  ) => {
    // 4 possibilities for clicking on current node
    // 1. Click on an adjacent node (sibling), then focus moves to that sibling node; update history to be on that node
    // 2. Click on the current focused node; same as pressing enter on this node, add to history and make it become focused parent
    // 3. Click on parent focus; same as going up to parent
    // 4. Clicking on node in parent context; same as switching parent context (by pressing P)

    if (oldId === "-1" || newId === "-1" || !oldId || !newId) {
      return;
    }

    const newNodeSiblings = findSiblingOfFocusedParent(oldId);
    let finalFocusedNode = newId;

    if (newNodeSiblings.includes(newId)) {
      // Case 1
      const curHistory = history();
      curHistory.pop();
      setHistory([...curHistory, newId]);
    } else if (newId === oldId) {
      // Case 2
      const childrenNodes = props.nodeGraph[newId].children;
      if (childrenNodes.length > 0) {
        // If node has children, then focus on first child
        const firstChildId = childrenNodes[0];
        setHistory([...history(), firstChildId]);
        finalFocusedNode = firstChildId;
      }
    } else if (
      props.nodeGraph[oldId].parents.includes(newId) &&
      isFocusedParent
    ) {
      // Case 3
      // If new node is a parent of the old node
      // Then use the default path to the new node as new history
      const defaultPath = defaultPaths().get(newId);
      setHistory([...(defaultPath ?? ["0"])]);
    } else if (
      props.nodeGraph[oldId].parents.includes(newId) &&
      !isFocusedParent
    ) {
      // Case 4
      const curHistory = history();
      curHistory.pop();
      curHistory.pop();
      setHistory([...curHistory, newId, oldId]);
      finalFocusedNode = oldId;
    }

    setCurrentNodeId(finalFocusedNode);

    // Moves screen reader focus
    setTimeout(() => {
      const newNode = document.getElementById(`info-${finalFocusedNode}`);

      if (newNode) {
        if (!newNode.hasAttribute("tabindex")) {
          newNode.setAttribute("tabindex", "0");
        }
        newNode.focus();
      }
    }, 0);
  };
  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === "ArrowUp" && event.shiftKey) {
      const focusedElement = document.activeElement as HTMLElement;
      const focusedElementId = focusedElement?.id;
      const historyList = history();

      if (
        currentNode().displayName.includes("hangs") ||
        currentNode().displayName.includes("anchored")
      ) {
        // Hack for user study - do not let users go up on Hangs/anchor relations
        const parentSection = document.getElementById(`parents-group-text`);
        handleTabIndexSwitch(focusedElement, parentSection);
        parentSection?.focus();
      } else if (focusedElementId === "parents-group-text") {
        // Select current parent node in focus
        if (historyList.length == 2) {
          // First level child going back to root node
          const curNodeId = historyList.pop();
          const previousNodeId = historyList[historyList.length - 1];
          if (previousNodeId) {
            setHistory([...historyList]); // Update history without the last node
            setCurrentNodeId(previousNodeId);

            const previousNodeElement = document.getElementById(
              `info-${previousNodeId}`
            );
            if (previousNodeElement) {
              handleTabIndexSwitch(focusedElement, previousNodeElement);
              previousNodeElement.focus();
            }
          }
        } else if (historyList.length > 2) {
          // At any other node - might take alternate path up and need to calculate default path

          const curNodeId = historyList.pop();
          const parentNodeId = historyList[historyList.length - 1];
          const grandParentNodeId = historyList[historyList.length - 2];

          if (
            grandParentNodeId &&
            props.nodeGraph[parentNodeId!].parents.includes(grandParentNodeId)
          ) {
            setHistory([...historyList]);
            setCurrentNodeId(parentNodeId);
          } else {
            // update history to be default path up to parent node
            const defaultPath = defaultPaths().get(parentNodeId!);
            setHistory([...(defaultPath ?? ["0"])]);
            setCurrentNodeId(parentNodeId);
          }

          const parentNodeElement = document.getElementById(
            `info-${parentNodeId}`
          );

          if (parentNodeElement) {
            handleTabIndexSwitch(focusedElement, parentNodeElement);
            parentNodeElement.focus();
          }
        } else {
          // At root node - only 1 node in history and cannot select/go-up
          const parentSection = document.getElementById(`parents-group-text`);
          handleTabIndexSwitch(focusedElement, parentSection);
          parentSection?.focus();
        }
      } else if (focusedElementId.startsWith("context-")) {
        // Select new parent node in focus

        const curNodeId = historyList.pop();
        const oldParentNode = historyList.pop();
        const parentNodeId = focusedElementId.split("-")[3];
        const grandParentNodeId = historyList[historyList.length - 1];

        if (
          grandParentNodeId &&
          props.nodeGraph[parentNodeId!].parents.includes(grandParentNodeId)
        ) {
          setHistory([...historyList, parentNodeId]);
          setCurrentNodeId(parentNodeId);
        } else {
          // update history to be default path up to parent node
          const defaultPath = defaultPaths().get(parentNodeId!);
          setHistory([...(defaultPath ?? ["0"])]);
          setCurrentNodeId(parentNodeId);
        }

        const parentNodeElement = document.getElementById(
          `info-${parentNodeId}`
        );

        if (parentNodeElement) {
          handleTabIndexSwitch(focusedElement, parentNodeElement);
          parentNodeElement.focus();
        }
      } else {
        // From adjacent nodes, either go up to parent in focus (if only 1 parent)
        // Or allow user to select new parent to focus on

        const numParents =
          props.nodeGraph[historyList[historyList.length - 1]].parents.length;

        if (numParents === 1) {
          if (historyList.length == 2) {
            // First level child going back to root node
            const curNodeId = historyList.pop();
            const previousNodeId = historyList[historyList.length - 1];
            if (previousNodeId) {
              setHistory([...historyList]); // Update history without the last node
              setCurrentNodeId(previousNodeId);

              const previousNodeElement = document.getElementById(
                `info-${previousNodeId}`
              );
              if (previousNodeElement) {
                handleTabIndexSwitch(focusedElement, previousNodeElement);
                previousNodeElement.focus();
              }
            }
          } else if (historyList.length > 2) {
            // At any other node - might take alternate path up and need to calculate default path

            const curNodeId = historyList.pop();
            const parentNodeId = historyList[historyList.length - 1];
            const grandParentNodeId = historyList[historyList.length - 2];

            if (
              grandParentNodeId &&
              props.nodeGraph[parentNodeId!].parents.includes(grandParentNodeId)
            ) {
              setHistory([...historyList]);
              setCurrentNodeId(parentNodeId);
            } else {
              // update history to be default path up to parent node
              const defaultPath = defaultPaths().get(parentNodeId!);
              setHistory([...(defaultPath ?? ["0"])]);
              setCurrentNodeId(parentNodeId);
            }

            const parentNodeElement = document.getElementById(
              `info-${parentNodeId}`
            );

            if (parentNodeElement) {
              handleTabIndexSwitch(focusedElement, parentNodeElement);
              parentNodeElement.focus();
            }
          } else {
            // At root node - only 1 node in history and cannot select/go-up
            const parentSection = document.getElementById(`parents-group-text`);
            handleTabIndexSwitch(focusedElement, parentSection);
            parentSection?.focus();
          }
        } else {
          const currentParentNode = document.getElementById(`parents-group-text`);
          handleTabIndexSwitch(focusedElement, currentParentNode);
          currentParentNode?.focus();
        }
      }

      event.preventDefault();
    } else if (event.key === "ArrowDown" && event.shiftKey) {
      const focusedElement = document.activeElement as HTMLElement;
      const focusedElementId = focusedElement?.id;

      if (focusedElementId.startsWith("parents")) {
        const currentNode = document.getElementById(`info-${currentNodeId()}`);
        if (currentNode) {
          handleTabIndexSwitch(focusedElement, currentNode);
          currentNode.focus();
        }
      } else {
        // Directly navigate to first child if children exist
        // If not, then select entire group and announce that no children exist
        const firstChildId = props.nodeGraph[currentNodeId()!].children[0];
        if (firstChildId) {
          // update history list with traversed children node
          setHistory((prev) => [...prev, firstChildId]);

          setCurrentNodeId(firstChildId);

          const newSection = document.getElementById(`info-${firstChildId}`);
          if (newSection) {
            handleTabIndexSwitch(focusedElement, newSection);
            newSection.focus();
          }
        }
      }
      event.preventDefault();
    } else if (event.key === "h") {
      const titleSection = document.getElementById(`home`);

      const lastNodeId = history()[history().length - 1];
      const lastNodeButton = document.getElementById(`info-${lastNodeId}`);

      if (lastNodeButton) {
        handleTabIndexSwitch(titleSection, lastNodeButton);
        lastNodeButton.focus();
      } else {
        titleSection?.focus();
      }
    } else if (
      event.key === "ArrowLeft" ||
      event.key === "ArrowRight" ||
      event.key === "ArrowUp" ||
      event.key === "ArrowDown"
    ) {
      const focusedElement = document.activeElement as HTMLElement;
      const focusedElementId = focusedElement?.id;

      if (focusedElementId.startsWith("info-") || focusedElementId === "home") {
        const elmInGroup = Array.from(
          document.querySelectorAll(`#home li`)
        ) as HTMLElement[];

        const currentIndex = elmInGroup.indexOf(focusedElement);
        let newIndex = currentIndex;

        if (
          (event.key === "ArrowLeft" || event.key === "ArrowUp") &&
          currentIndex > 0
        ) {
          newIndex = currentIndex - 1;
        } else if (
          (event.key === "ArrowRight" || event.key === "ArrowDown") &&
          currentIndex < elmInGroup.length - 1
        ) {
          newIndex = currentIndex + 1;
        }

        const newNodeId = elmInGroup[newIndex]?.id.split("info-")[1];
        if (newNodeId) {
          const historyList = history();
          const previousAdjNode = historyList.pop();
          setHistory([...historyList, newNodeId]);
          setCurrentNodeId(newNodeId);
        }
        handleTabIndexSwitch(focusedElement, elmInGroup[newIndex]);
        elmInGroup[newIndex]?.focus();

        event.preventDefault();
      } else if (focusedElementId.startsWith("context")) {
        // Navigating around while on one of the nodes within option-nodes list
        const contextElms = Array.from(
          document.querySelectorAll(`#option-nodes li`)
        ) as HTMLElement[];

        const currentIndex = contextElms.indexOf(focusedElement);
        let newIndex = currentIndex;

        if (
          (event.key === "ArrowLeft" || event.key === "ArrowUp") &&
          currentIndex > 0
        ) {
          newIndex = currentIndex - 1;
          handleTabIndexSwitch(focusedElement, contextElms[newIndex]);
          contextElms[newIndex]?.focus();
        } else if (
          (event.key === "ArrowRight" || event.key === "ArrowDown") &&
          currentIndex < contextElms.length - 1
        ) {
          newIndex = currentIndex + 1;
          handleTabIndexSwitch(focusedElement, contextElms[newIndex]);
          contextElms[newIndex]?.focus();
        } else if (
          (event.key === "ArrowLeft" || event.key === "ArrowUp") &&
          currentIndex <= 0
        ) {
          const parentGroup = document.getElementById("parents-group-text");
          handleTabIndexSwitch(focusedElement, parentGroup);
          parentGroup?.focus();
        } else if (
          (event.key === "ArrowRight" || event.key === "ArrowDown") &&
          currentIndex >= contextElms.length - 1
        ) {
          const parentGroup = document.getElementById("parents-group-text");
          handleTabIndexSwitch(focusedElement, parentGroup);
          parentGroup?.focus();
        }

        event.preventDefault();
      } else if (focusedElementId === "parents-group-text") {
        // Selecting another parent to focus on
        const contextElms = Array.from(
          document.querySelectorAll(`#option-nodes li`)
        ) as HTMLElement[];
        handleTabIndexSwitch(focusedElement, contextElms[0]);
        contextElms[0]?.focus();
        event.preventDefault();
      } else {
        event.preventDefault();
      }
    } else if (event.key === "Enter") {
      const focusedElement = document.activeElement as HTMLElement;
      const focusedElementId = focusedElement?.id;

      if (focusedElementId.startsWith("info-")) {
        const firstChildId = props.nodeGraph[currentNodeId()!].children[0];
        if (firstChildId) {
          // update history list with traversed children node
          setHistory((prev) => [...prev, firstChildId]);

          setCurrentNodeId(firstChildId);

          const newSection = document.getElementById(`info-${firstChildId}`);
          if (newSection) {
            handleTabIndexSwitch(focusedElement, newSection);
            newSection.focus();
          }
        }
      } else if (focusedElementId.startsWith("context")) {
        const newParentId = focusedElementId.split("-")[3];
        let curHistory = history();
        const curNodeId = curHistory.pop();
        const oldParent = curHistory.pop();
        // Hack for now - this should never happen in regular Benthic
        // When all nodes are connected to the root
        if (oldParent === '0') {
          setHistory((prev) => [oldParent, newParentId, currentNodeId()!]);
        } else{
          setHistory((prev) => [...curHistory, newParentId, currentNodeId()!]);
        }
        setCurrentNodeId(currentNodeId());

        const newCurrentNodeSection = document.getElementById(
          `info-${currentNodeId()}`
        );
        if (newCurrentNodeSection) {
          handleTabIndexSwitch(focusedElement, newCurrentNodeSection);
          newCurrentNodeSection.focus();
        }
      } else {
        event.preventDefault();
      }
    } else {
      event.preventDefault();
    }
  };

  onMount(() => {
    const paths = calculateDefaultPaths(props.nodeGraph);
    setDefaultPaths(paths);

    window.addEventListener("keydown", handleKeyPress);
  });

  onCleanup(() => {
    window.removeEventListener("keydown", handleKeyPress);
  });

  return (
    <Show when={currentNodeId()}>
      <HypergraphNodeComponentKeyboardOnly
        history={history()}
        parentFocusId={
          history().length > 1
            ? currentNode().displayName.includes("hangs") ||
              currentNode().displayName.includes("anchored")
              ? "-1"
              : history()[history().length - 2]
            : "-1"
        }
        node={currentNode()}
        nodeGraph={props.nodeGraph}
        onNodeClick={handleNodeClick}
      />
    </Show>
  );
}

/**
 * Component to output a single node in the hypergraph
 * Screen reader output for single node in traversal structure
 */
export function HypergraphNodeComponentKeyboardOnly(
  props: HypergraphNodeProps
) {
  // based on the parent node in focus, siblings are the child nodes of that parent
  // history can be found as props.history
  function findSiblings(currentId: string) {
    if (props.history.length == 1) {
      return [currentId];
    } else {
      const parentFocus = props.history[props.history.length - 2];
      const siblings = props.nodeGraph[parentFocus].children;
      return siblings;
    }
  }

  const sortAdjacents = createMemo(() => {
    const adjacentNodeIds = findSiblings(props.node.id);

    // If the current node is one of Anchor or Hangs, then only show the node in the sibling list
    // Else filter out all of those nodes
    if (
      props.node.displayName.includes("hangs") ||
      props.node.displayName.includes("anchored")
    ) {
      return [props.node];
    }

      const adjacentNodes = Array.from(adjacentNodeIds)
      .map((nodeId) => props.nodeGraph[nodeId])

    // Hack for user study - do not show any nodes that start with Hangs
    const actualNodes = adjacentNodes.filter((n) => {
      return (
        !n.displayName.includes("hangs") &&
        !n.displayName.includes("anchored")
      );
    });

    return actualNodes;
  });

  const nonFocusedParentIds = createMemo(() => {
    const parentIds = props.node.parents;

    // Hack - prevents hangs relation from showing up at top level
    if (
      props.node.displayName.includes("hangs") ||
      props.node.displayName.includes("anchored")
    ) {
      return [];
    }

    // Root node - has no parents, so no non-focused parents
    if (props.history.length == 1) {
      return [];
    }
    const nonFocusedParents = parentIds.filter(
      (parentId) => parentId !== props.parentFocusId
    );

    return nonFocusedParents;
  });

  const nonFocusedParents = createMemo(() => {
    return nonFocusedParentIds().map((parentId) => props.nodeGraph[parentId]);
  });

  return (
    <div>
      <ul
        id="parents-group"
        role='tree'
      >
        <li role='treeitem' id='parents-group-text'>
        <span
          style={{ "font-weight": "bold" }}
          onClick={() =>
            props.onNodeClick(props.node.id, props.parentFocusId, true)
          }
        >
          {nonFocusedParentIds().length === 0
            ? `${
                props.parentFocusId === "-1"
                  ? "No current groupings."
                  : `Currently grouping by ${
                      props.nodeGraph[props.parentFocusId].displayName
                    }. `
              } ${props.node.displayName} belongs to 0 additional groups.`
            : `Currently grouping by ${
                props.nodeGraph[props.parentFocusId].displayName
              }. ${props.node.displayName} belongs to ${
                nonFocusedParentIds().length
              } additional groups. Use arrow and enter keys to make selection.`}
        </span>
        </li>
      </ul>

      <ul id="option-nodes" role='tree'>
        <For each={nonFocusedParents()}>
          {(parent, idx) => (
            <li
              id={`context-${props.node.id}-${idx()}-${parent.id}`}
              onClick={() => props.onNodeClick(props.node.id, parent.id, false)}
              role='treeitem'
            >
              <span>{`${
                parent.displayName
              } group. Press Enter to switch context to this grouping.`}</span>
            </li>
          )}
        </For>
      </ul>
      <br />

      <ul id="home" aria-live="assertive" role='tree'>
        <For
          each={sortAdjacents()}
          fallback={<li style={{ color: "grey" }}>None</li>}
        >
          {(adjacent, idx) => (
            <li
              id={`info-${adjacent.id}`}
              onClick={() => props.onNodeClick(props.node.id, adjacent.id)}
              role='treeitem'
            >
              <span>{`${adjacent.displayName}${adjacent.description}`}</span>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
}

/**
 * Function to calculate the shortest path from root (node "0") to all other nodes.
 * This function uses BFS to explore the graph and generates a map of default paths.
 */
function calculateDefaultPaths(
  nodeGraph: Record<string, any>,
  rootId: string = "0"
) {
  const defaultPaths = new Map<string, string[]>();
  const queue: [string, string[]][] = [[rootId, [rootId]]]; // Tuple of [currentNode, path to currentNode]

  while (queue.length > 0) {
    const [currentNodeId, pathToCurrent] = queue.shift()!;

    // If this node is already visited, skip it
    if (defaultPaths.has(currentNodeId)) continue;

    // Store the path to the current node
    defaultPaths.set(currentNodeId, pathToCurrent);

    // Explore the children of the current node and continue BFS
    const children = nodeGraph[currentNodeId].children;
    for (const childId of children) {
      if (!defaultPaths.has(childId)) {
        queue.push([childId, [...pathToCurrent, childId]]);
      }
    }
  }

  return defaultPaths;
}
