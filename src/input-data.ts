import { Hypergraph } from "./priority-traversal-types";

export const stackedBarChartHypergraph: Hypergraph = {
  "0": {
    id: "0",
    displayName: "Stacked Bar Chart",
    description:
      "Major Trophies for some English teams. Stacked bar chart. With axes team and sum trophies.",
    descriptionTokens: {
      label: "Stacked Bar Chart",
      shortDescription: "Major Trophies for some English teams.",
      longDescription:
        "Major Trophies for some English teams. Stacked bar chart. With axes team and sum trophies.",
    },
    parents: [],
    children: ["1", "2", "22"],
    priority: 0,
  },
  "1": {
    id: "1",
    displayName: "X-axis",
    description: "X Axis. Arsenal, Chelsea, Liverpool, Manchester United.",
    descriptionTokens: {
      label: "X-axis",
      shortDescription: "Contains 4 teams.",
      longDescription:
        "Contains Arsenal, Chelsea, Liverpool, Manchester United.",
    },
    parents: ["0"],
    children: ["3", "4", "5", "6"],
    priority: 1,
  },
  "2": {
    id: "2",
    displayName: "Legend",
    description: "Legend. Contest included: BPL, FA Cup, CL.",
    descriptionTokens: {
      label: "Legend",
      shortDescription: "Contains 3 contests.",
      longDescription: "Contains BPL, FA Cup, CL.",
    },
    parents: ["0"],
    children: ["7", "8", "9"],
    priority: 2,
  },
  "3": {
    id: "3",
    displayName: "Arsenal",
    description:
      "Team: Arsenal. Total trophies: 17. Contains: 3 contests. Bar representing the number of trophies won by Arsenal.",
    descriptionTokens: {
      label: "Arsenal",
      shortDescription: "Contains: 3 contests. Total trophies: 17.",
      longDescription:
        "Team: Arsenal. Total trophies: 17. Contains: 3 contests. Bar representing the number of trophies won by Arsenal.",
    },
    parents: ["1"],
    children: ["10", "11", "12"],
    priority: 2,
  },
  "4": {
    id: "4",
    displayName: "Chelsea",
    description:
      "Team: Chelsea. Total trophies: 15. Contains: 3 contests. Bar representing the number of trophies won by Chelsea.",
    descriptionTokens: {
      label: "Chelsea",
      shortDescription: "Contains: 3 contests. Total trophies: 15.",
      longDescription:
        "Team: Chelsea. Total trophies: 15. Contains: 3 contests. Bar representing the number of trophies won by Chelsea.",
    },
    parents: ["1"],
    children: ["13", "14", "15"],
    priority: 2,
  },
  "5": {
    id: "5",
    displayName: "Liverpool",
    description:
      "Team: Liverpool. Total trophies: 15. Contains: 3 contests. Bar representing the number of trophies won by Liverpool",
    descriptionTokens: {
      label: "Liverpool",
      shortDescription: "Contains: 3 contests. Total trophies: 15.",
      longDescription:
        "Team: Liverpool. Total trophies: 15. Contains: 3 contests. Bar representing the number of trophies won by Liverpool",
    },
    parents: ["1"],
    children: ["16", "17", "18"],
    priority: 2,
  },
  "6": {
    id: "6",
    displayName: "Manchester",
    description:
      "Team: Manchester United. Total trophies: 28. Contains: 3 contests. Bar representing the number of trophies won by Manchester United.",
    descriptionTokens: {
      label: "Manchester United",
      shortDescription: "Contains: 3 contests. Total trophies: 28.",
      longDescription:
        "Team: Manchester United. Total trophies: 28. Contains: 3 contests. Bar representing the number of trophies won by Manchester United.",
    },
    parents: ["1"],
    children: ["19", "20", "21"],
    priority: 2,
  },
  "7": {
    id: "7",
    displayName: "BPL",
    description:
      "Contest: BPL. Total trophies: 22. Contains: 4 teams. Legend grouping for the BPL competition.",
    descriptionTokens: {
      label: "BPL",
      shortDescription: "Contains: 4 teams. Total trophies: 22.",
      longDescription:
        "Contest: BPL. Total trophies: 22. Contains: 4 teams. Legend grouping for the BPL competition.",
    },
    parents: ["2"],
    children: ["10", "13", "16", "19"],
    priority: 3,
  },
  "8": {
    id: "8",
    displayName: "FA Cup",
    description:
      "Contest: FA Cup. Total trophies: 42. Contains: 4 teams. Legend grouping for the FA Cup competition.",
    descriptionTokens: {
      label: "FA Cup",
      shortDescription: "Contains: 4 teams. Total trophies: 42.",
      longDescription:
        "Contest: FA Cup. Total trophies: 42. Contains: 4 teams. Legend grouping for the FA Cup competition.",
    },
    parents: ["2"],
    children: ["11", "14", "17", "20"],
    priority: 3,
  },
  "9": {
    id: "9",
    displayName: "CL",
    description:
      "Contest: CL. Total trophies: 11. Contains: 4 teams. Legend grouping for the CL competition.",
    descriptionTokens: {
      label: "CL",
      shortDescription: "Contains: 4 teams. Total trophies: 11.",
      longDescription:
        "Contest: CL. Total trophies: 11. Contains: 4 teams. Legend grouping for the CL competition.",
    },
    parents: ["2"],
    children: ["12", "15", "18", "21"],
    priority: 3,
  },
  "10": {
    id: "10",
    displayName: "Arsenal BPL",
    description: "Team: Arsenal. Contest: BPL. Trophies: 3. Data point.",
    descriptionTokens: {
      label: "Arsenal BPL",
      shortDescription: "Trophies: 3.",
      longDescription: "Team: Arsenal. Contest: BPL. Trophies: 3. Data point.",
    },
    parents: ["3", "7"],
    children: [],
    priority: 4,
  },
  "11": {
    id: "11",
    displayName: "Arsenal FA Cup",
    description: "Team: Arsenal. Contest: FA Cup. Trophies: 14. Data point.",
    descriptionTokens: {
      label: "Arsenal FA Cup",
      shortDescription: "Trophies: 14.",
      longDescription:
        "Team: Arsenal. Contest: FA Cup. Trophies: 14. Data point.",
    },
    parents: ["3", "8"],
    children: [],
    priority: 4,
  },
  "12": {
    id: "12",
    displayName: "Arsenal CL",
    description: "Team: Arsenal. Contest: CL. Trophies: 0. Data point.",
    descriptionTokens: {
      label: "Arsenal CL",
      shortDescription: "Trophies: 0.",
      longDescription: "Team: Arsenal. Contest: CL. Trophies: 0. Data point.",
    },
    parents: ["3", "9"],
    children: [],
    priority: 4,
  },
  "13": {
    id: "13",
    displayName: "Chelsea BPL",
    description: "Team: Chelsea. Contest: BPL. Trophies: 5. Data point.",
    descriptionTokens: {
      label: "Chelsea BPL",
      shortDescription: "Trophies: 5.",
      longDescription: "Team: Chelsea. Contest: BPL. Trophies: 5. Data point.",
    },
    parents: ["4", "7"],
    children: [],
    priority: 4,
  },
  "14": {
    id: "14",
    displayName: "Chelsea FA Cup",
    description: "Team: Chelsea. Contest: FA Cup. Trophies: 8. Data point.",
    descriptionTokens: {
      label: "Chelsea FA Cup",
      shortDescription: "Trophies: 8.",
      longDescription:
        "Team: Chelsea. Contest: FA Cup. Trophies: 8. Data point.",
    },
    parents: ["4", "8"],
    children: [],
    priority: 4,
  },
  "15": {
    id: "15",
    displayName: "Chelsea CL",
    description: "Team: Chelsea. Contest: CL. Trophies: 2. Data point.",
    descriptionTokens: {
      label: "Chelsea CL",
      shortDescription: "Trophies: 2.",
      longDescription: "Team: Chelsea. Contest: CL. Trophies: 2. Data point.",
    },
    parents: ["4", "9"],
    children: [],
    priority: 4,
  },
  "16": {
    id: "16",
    displayName: "Liverpool BPL",
    description: "Team: Liverpool. Contest: BPL. Trophies: 1. Data point.",
    descriptionTokens: {
      label: "Liverpool BPL",
      shortDescription: "Trophies: 1.",
      longDescription:
        "Team: Liverpool. Contest: BPL. Trophies: 1. Data point.",
    },
    parents: ["5", "7"],
    children: [],
    priority: 4,
  },
  "17": {
    id: "17",
    displayName: "Liverpool FA Cup",
    description: "Team: Liverpool. Contest: FA Cup. Trophies: 8. Data point.",
    descriptionTokens: {
      label: "Liverpool FA Cup",
      shortDescription: "Trophies: 8.",
      longDescription:
        "Team: Liverpool. Contest: FA Cup. Trophies: 8. Data point.",
    },
    parents: ["5", "8"],
    children: [],
    priority: 4,
  },
  "18": {
    id: "18",
    displayName: "Liverpool CL",
    description: "Team: Liverpool. Contest: CL. Trophies: 6. Data point.",
    descriptionTokens: {
      label: "Liverpool CL",
      shortDescription: "Trophies: 6.",
      longDescription: "Team: Liverpool. Contest: CL. Trophies: 6. Data point.",
    },
    parents: ["5", "9"],
    children: [],
    priority: 4,
  },
  "19": {
    id: "19",
    displayName: "Manchester BPL",
    description:
      "Team: Manchester United. Contest: BPL. Trophies: 13. Data point.",
    descriptionTokens: {
      label: "Manchester United BPL",
      shortDescription: "Trophies: 13.",
      longDescription:
        "Team: Manchester United. Contest: BPL. Trophies: 13. Data point.",
    },
    parents: ["6", "7"],
    children: [],
    priority: 4,
  },
  "20": {
    id: "20",
    displayName: "Manchester FA Cup",
    description:
      "Team: Manchester United. Contest: FA Cup. Trophies: 12. Data point.",
    descriptionTokens: {
      label: "Manchester United FA Cup",
      shortDescription: "Trophies: 12.",
      longDescription:
        "Team: Manchester United. Contest: FA Cup. Trophies: 12. Data point.",
    },
    parents: ["6", "8"],
    children: [],
    priority: 4,
  },
  "21": {
    id: "21",
    displayName: "Manchester United CL",
    description:
      "Team: Manchester United. Contest: CL. Trophies: 3. Data point.",
    descriptionTokens: {
      label: "Manchester United CL",
      shortDescription: "Trophies: 3.",
      longDescription:
        "Team: Manchester United. Contest: CL. Trophies: 3. Data point.",
    },
    parents: ["6", "9"],
    children: [],
    priority: 4,
  },
  "22": {
    id: "22",
    displayName: "Y-axis",
    description:
      "Y-axis. Label: count trophies. Values range from 0 to 30 on a numerical scale.",
    descriptionTokens: {
      label: "Y-axis",
      shortDescription: "Y-axis. Count trophies.",
      longDescription:
        "Y-axis. Label: count trophies. Values range from 0 to 30 on a numerical scale.",
    },
    parents: ["0"],
    children: [],
    priority: 2,
  },
};
