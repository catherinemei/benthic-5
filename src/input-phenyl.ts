import { Hypergraph } from "./priority-traversal-types";

export const phenylHypergraph: Hypergraph = {
  "0": {
    id: "0",
    displayName: "Phenylalanine",
    description:
      "Chemical diagram for phenylalanine. Contains phenyl and alanine.",
    descriptionTokens: {
      label: "Phenylalanine",
      shortDescription:
        "Chemical diagram for phenylalanine. Contains phenyl and alanine.",
      longDescription:
        "Molecule containing phenyl and alanine.",
    },
    parents: [],
    children: ["1", "3"],
    priority: 0,
  },
  "1": {
    id: "1",
    displayName: "Alanine",
    description: "Amino acid containing carboxylic acid and amine.",
    descriptionTokens: {
      label: "Alanine",
      shortDescription: "Amino acid containing carboxylic acid and amine.",
      longDescription: "Amino acid containing carboxylic acid and amine.",
    },
    parents: ["0"],
    children: ["2", "4", "8", "9", "12"],
    priority: 1,
  },
  "2": {
    id: "2",
    displayName: "Carboxylic Acid",
    description: "Carboxylic acid group bonded to C8 of alanine.",
    descriptionTokens: {
      label: "Carboxylic Acid",
      shortDescription: "Carboxylic acid group bonded to C8 of alanine.",
      longDescription: "Group bonded to C8 of alanine.",
    },
    parents: ["1"],
    children: ["5", "6", "7"],
    priority: 2,
  },
  "3": {
    id: "3",
    displayName: "Phenyl",
    description: "Benzene ring bonded to alanine.",
    descriptionTokens: {
      label: "Phenyl",
      shortDescription: "Benzene ring bonded to alanine.",
      longDescription: "Benzene ring bonded to alanine.",
    },
    parents: ["0"],
    children: ["10", "11", "12", "13", "14", "15"],
    priority: 1,
  },
  "4": {
    id: "4",
    displayName: "Amine",
    description: "Bonded to C8 of alanine.",
    descriptionTokens: {
      label: "Amine",
      shortDescription: "Bonded to C8 of alanine.",
      longDescription: "Bonded to C8 of alanine.",
    },
    parents: ["1"],
    children: [],
    priority: 2,
  },
  "5": {
    id: "5",
    displayName: "O1 of carboxylic acid",
    description: "Bonded to C9 of carboxylic acid.",
    descriptionTokens: {
      label: "O1 of carboxylic acid",
      shortDescription: "Bonded to C9 of carboxylic acid.",
      longDescription: "Bonded to C9 of carboxylic acid.",
    },
    parents: ["2"],
    children: [],
    priority: 3,
  },
  "6": {
    id: "6",
    displayName: "Hydroxyl in Carboxylic Acid",
    description: "Bonded to C9 of carboxylic acid.",
    descriptionTokens: {
      label: "Hydroxyl in Carboxylic Acid",
      shortDescription: "Bonded to C9 of carboxylic acid.",
      longDescription: "Bonded to C9 of carboxylic acid.",
    },
    parents: ["2"],
    children: [],
    priority: 3,
  },
  "7": {
    id: "7",
    displayName: "C9 of carboxylic acid",
    description: "Bonded to O1 and hydroxyl in carboxylic acid.",
    descriptionTokens: {
      label: "C9 of carboxylic acid",
      shortDescription: "Bonded to O1 and hydroxyl in carboxylic acid.",
      longDescription: "Bonded to O1 and hydroxyl in carboxylic acid.",
    },
    parents: ["2"],
    children: [],
    priority: 3,
  },
  "8": {
    id: "8",
    displayName: "C8 of Alanine",
    description:
      "Part of carbon backbone of alanine. Bonded to carboxylic acid and amine.",
    descriptionTokens: {
      label: "C8 of Alanine",
      shortDescription:
        "Part of carbon backbone of alanine. Bonded to carboxylic acid and amine.",
      longDescription:
        "Carbon backbone of alanine. Bonded to carboxylic acid and amine.",
    },
    parents: ["1"],
    children: [],
    priority: 3,
  },
  "9": {
    id: "9",
    displayName: "C7 of Alanine",
    description:
      "Part of carbon backbone of alanine. Bonded to C8 of alanine and C3 of phenyl.",
    descriptionTokens: {
      label: "C7 of Alanine",
      shortDescription:
        "Part of carbon backbone of alanine. Bonded to C8 of alanine and C3 of phenyl.",
      longDescription:
        "Carbon backbone of alanine. Bonded to C8 of alanine and C3 of phenyl.",
    },
    parents: ["1"],
    children: [],
    priority: 3,
  },
  "10": {
    id: "10",
    displayName: "C1 of Phenyl",
    description: "Bonded to C2 and C6 of phenyl.",
    descriptionTokens: {
      label: "C1 of Phenyl",
      shortDescription: "Bonded to C2 and C6 of phenyl.",
      longDescription: "Bonded to C2 and C6 of phenyl.",
    },
    parents: ["3"],
    children: [],
    priority: 3,
  },
  "11": {
    id: "11",
    displayName: "C2 of Phenyl",
    description: "Bonded to C1 and C3 of phenyl.",
    descriptionTokens: {
      label: "C2 of Phenyl",
      shortDescription: "Bonded to C1 and C3 of phenyl.",
      longDescription: "Bonded to C1 and C3 of phenyl.",
    },
    parents: ["3"],
    children: [],
    priority: 3,
  },
  "12": {
    id: "12",
    displayName: "C3 of Phenyl",
    description: "Bonded to C2 and C4 of phenyl and C7 of alanine.",
    descriptionTokens: {
      label: "C3 of Phenyl",
      shortDescription: "Bonded to C2 and C4 of phenyl and C7 of alanine.",
      longDescription: "Bonded to C2 and C4 of phenyl and C7 of alanine.",
    },
    parents: ["1", "3"],
    children: [],
    priority: 3,
  },
  "13": {
    id: "13",
    displayName: "C4 of Phenyl",
    description: "Bonded to C3 and C5 of phenyl.",
    descriptionTokens: {
      label: "C4 of Phenyl",
      shortDescription: "Bonded to C3 and C5 of phenyl.",
      longDescription: "Bonded to C3 and C5 of phenyl.",
    },
    parents: ["3"],
    children: [],
    priority: 3,
  },
  "14": {
    id: "14",
    displayName: "C5 of Phenyl",
    description: "Bonded to C4 and C6 of phenyl.",
    descriptionTokens: {
      label: "C5 of Phenyl",
      shortDescription: "Bonded to C4 and C6 of phenyl.",
      longDescription: "Bonded to C4 and C6 of phenyl.",
    },
    parents: ["3"],
    children: [],
    priority: 3,
  },
  "15": {
    id: "15",
    displayName: "C6 of Phenyl",
    description: "Bonded to C1 and C5 of phenyl.",
    descriptionTokens: {
      label: "C6 of Phenyl",
      shortDescription: "Bonded to C1 and C5 of phenyl.",
      longDescription: "Bonded to C1 and C5 of phenyl.",
    },
    parents: ["3"],
    children: [],
    priority: 3,
  },
};
