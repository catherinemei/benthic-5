export type Id = string;

export type RelationNode = {
  id: Id;
  displayName: string;
  description?: string;
  parents: Id[];
  children: Id[];
  priority: number;
};

export type Hypergraph = {
  [id: Id]: RelationNode;
};

export type TraversalOutputProps = {
  nodeGraph: Hypergraph;
  showHypergraph?: boolean;
};


export type HypergraphNodeProps = {
  node: RelationNode;
  nodeGraph: Hypergraph;
  history: string[];
  parentFocusId: string;
  onNodeClick: (
    curId: string,
    newId: string,
    isFocusedParent?: boolean
  ) => void;
};