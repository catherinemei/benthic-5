import { Hypergraph } from "./priority-traversal-types";

export const lineGraphHypergraph: Hypergraph = {
  "0": {
    id: "0",
    displayName: "Line Graph",
    description:
      "Monthly Average Temperature for Reggane and Tallinn. Line graph. With axes month and temperature Celsius.",
    descriptionTokens: {
      label: "Line Graph",
      shortDescription: "Monthly Average Temperature for Reggane and Tallinn.",
      longDescription:
        "Monthly Average Temperature for Reggane and Tallinn. Axes month and temperature Celsius.",
    },
    parents: [],
    children: ["1", "2", "41"],
    priority: 0,
  },
  "1": {
    id: "1",
    displayName: "X-axis",
    description: "X Axis. Contains January to December.",
    descriptionTokens: {
      label: "X-axis",
      shortDescription: "Contains 12 months.",
      longDescription:
        "Contains 12 months.",
    },
    parents: ["0"],
    children: ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"],
    priority: 1,
  },
  "2": {
    id: "2",
    displayName: "Legend",
    description: "Legend. Contains Reggane, Tallinn",
    descriptionTokens: {
      label: "Legend",
      shortDescription: "Contains 2 cities.",
      longDescription: "Contains 2 cities.",
    },
    parents: ["0"],
    children: ["15", "16"],
    priority: 2,
  },
  "3": {
    id: "3",
    displayName: "January",
    description:
      "Month: January. Contains: 2 points. Temperature of Reggane, Tallinn in January",
    descriptionTokens: {
      label: "January",
      shortDescription: "Month: January. Contains: 2 points.",
      longDescription:
        "Contains: 2 points. Temperature of Reggane and Tallinn in January.",
    },
    parents: ["1"],
    children: ["17", "18"],
    priority: 3,
  },
    "4": {
    id: "4",
    displayName: "February",
    description:
      "Month: February. Contains: 2 points. Temperature of Reggane, Tallinn in February.",
    descriptionTokens: {
      label: "February",
      shortDescription: "Month: February. Contains: 2 points.",
      longDescription:
        "Contains: 2 points. Temperature of Reggane and Tallinn in February.",
    },
    parents: ["1"],
    children: ["19", "20"],
    priority: 3,
  },
  "5": {
    id: "5",
    displayName: "March",
    description:
      "Month: March. Contains: 2 points. Temperature of Reggane, Tallinn in March.",
    descriptionTokens: {
      label: "March",
      shortDescription: "Month: March. Contains: 2 points.",
      longDescription:
        "Contains: 2 points. Temperature of Reggane and Tallinn in March.",
    },
    parents: ["1"],
    children: ["21", "22"],
    priority: 3,
  },
  "6": {
    id: "6",
    displayName: "April",
    description:
      "Month: April. Contains: 2 points. Temperature of Reggane, Tallinn in April.",
    descriptionTokens: {
      label: "April",
      shortDescription: "Month: April. Contains: 2 points.",
      longDescription:
        "Contains: 2 points. Temperature of Reggane and Tallinn in April.",
    },
    parents: ["1"],
    children: ["23", "24"],
    priority: 3,
  },
  "7": {
    id: "7",
    displayName: "May",
    description:
      "Month: May. Contains: 2 points. Temperature of Reggane, Tallinn in May.",
    descriptionTokens: {
      label: "May",
      shortDescription: "Month: May. Contains: 2 points.",
      longDescription:
        "Contains: 2 points. Temperature of Reggane and Tallinn in May.",
    },
    parents: ["1"],
    children: ["25", "26"],
    priority: 3,
  },
  "8": {
    id: "8",
    displayName: "June",
    description:
      "Month: June. Contains: 2 points. Temperature of Reggane, Tallinn in June.",
    descriptionTokens: {
      label: "June",
      shortDescription: "Month: June. Contains: 2 points.",
      longDescription:
        "Contains: 2 points. Temperature of Reggane and Tallinn in June.",
    },
    parents: ["1"],
    children: ["27", "28"],
    priority: 3,
  },
  "9": {
    id: "9",
    displayName: "July",
    description:
      "Month: July. Contains: 2 points. Temperature of Reggane, Tallinn in July.",
    descriptionTokens: {
      label: "July",
      shortDescription: "Month: July. Contains: 2 points.",
      longDescription:
        "Contains: 2 points. Temperature of Reggane and Tallinn in July.",
    },
    parents: ["1"],
    children: ["29", "30"],
    priority: 3,
  },
  "10": {
    id: "10",
    displayName: "August",
    description:
      "Month: August. Contains: 2 points. Temperature of Reggane, Tallinn in August.",
    descriptionTokens: {
      label: "August",
      shortDescription: "Month: August. Contains: 2 points.",
      longDescription:
        "Contains: 2 points. Temperature of Reggane and Tallinn in August.",
    },
    parents: ["1"],
    children: ["31", "32"],
    priority: 3,
  },
  "11": {
    id: "11",
    displayName: "September",
    description:
      "Month: September. Contains: 2 points. Temperature of Reggane, Tallinn in September.",
    descriptionTokens: {
      label: "September",
      shortDescription: "Month: September. Contains: 2 points.",
      longDescription:
        "Contains: 2 points. Temperature of Reggane and Tallinn in September.",
    },
    parents: ["1"],
    children: ["33", "34"],
    priority: 3,
  },
  "12": {
    id: "12",
    displayName: "October",
    description:
      "Month: October. Contains: 2 points. Temperature of Reggane, Tallinn in October.",
    descriptionTokens: {
      label: "October",
      shortDescription: "Month: October. Contains: 2 points.",
      longDescription:
        "Contains: 2 points. Temperature of Reggane and Tallinn in October.",
    },
    parents: ["1"],
    children: ["35", "36"],
    priority: 3,
  },
  "13": {
    id: "13",
    displayName: "November",
    description:
      "Month: November. Contains: 2 points. Temperature of Reggane, Tallinn in November.",
    descriptionTokens: {
      label: "November",
      shortDescription: "Month: November. Contains: 2 points.",
      longDescription:
        "Contains: 2 points. Temperature of Reggane and Tallinn in November.",
    },
    parents: ["1"],
    children: ["37", "38"],
    priority: 3,
  },
  "14": {
    id: "14",
    displayName: "December",
    description:
      "Month: December. Contains: 2 points. Temperature of Reggane, Tallinn in December.",
    descriptionTokens: {
      label: "December",
      shortDescription: "Month: December. Contains: 2 points.",
      longDescription:
        "Contains: 2 points. Temperature of Reggane and Tallinn in December.",
    },
    parents: ["1"],
    children: ["39", "40"],
    priority: 3,
  },
  "15": {
    id: "15",
    displayName: "Reggane",
    description:
      "City: Reggane. Contains: 12 temperature points. Monthly temperature data for Reggane.",
    descriptionTokens: {
      label: "Reggane",
      shortDescription: "Contains: 12 temperature points.",
      longDescription:
        "Contains: 12 points. Monthly temperature data for Reggane.",
    },
    parents: ["2"],
    children: ["17", "19", "21", "23", "25", "27", "29", "31", "33", "35", "37", "39"],
    priority: 3,
  },
  "16": {
    id: "16",
    displayName: "Tallinn",
    description:
      "City: Tallinn. Contains: 12 temperature points. Monthly temperature data for Tallinn.",
    descriptionTokens: {
      label: "Tallinn",
      shortDescription: "Contains: 12 temperature points.",
      longDescription:
        "Contains: 12 points. Monthly temperature data for Tallinn.",
    },
    parents: ["2"],
    children: ["18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38", "40"],
    priority: 3,
  },
  "17": {
    id: "17",
    displayName: "Reggane in January",
    description:
      "Month: January. City: Reggane. Average temperature: 16 Celsius.",
    descriptionTokens: {
      label: "Reggane in January",
      shortDescription: "Month: January. City: Reggane. Average temperature: 16 Celsius.",
      longDescription:
        "16 Celsius. Data point.",
    },
    parents: ["3", "15"],
    children: [],
    priority: 4,
  },
  "18": {
    id: "18",
    displayName: "Tallinn in January",
    description:
      "Month: January. City: Tallinn. Average temperature: -2.9 Celsius.",
    descriptionTokens: {
      label: "Tallinn in January",
      shortDescription: "Month: January. City: Tallinn. Average temperature: -2.9 Celsius.",
      longDescription:
        "-2.9 Celsius. Data point.",
    },
    parents: ["3", "16"],
    children: [],
    priority: 4,
  },
  "19": {
    id: "19",
    displayName: "Reggane in February",
    description:
      "Month: February. City: Reggane. Average temperature: 18.2 Celsius.",
    descriptionTokens: {
      label: "Reggane in February",
      shortDescription: "Month: February. City: Reggane. Average temperature: 18.2 Celsius.",
      longDescription:
        "18.2 Celsius. Data point.",
    },
    parents: ["4", "15"],
    children: [],
    priority: 4,
  },
  "20": {
    id: "20",
    displayName: "Tallinn in February",
    description:
      "Month: February. City: Tallinn. Average temperature: -3.6 Celsius.",
    descriptionTokens: {
      label: "Tallinn in February",
      shortDescription: "Month: February. City: Tallinn. Average temperature: -3.6 Celsius.",
      longDescription:
        "-3.6 Celsius. Data point.",
    },
    parents: ["4", "16"],
    children: [],
    priority: 4,
  },
  "21": {
    id: "21",
    displayName: "Reggane in March",
    description:
      "Month: March. City: Reggane. Average temperature: 23.1 Celsius.",
    descriptionTokens: {
      label: "Reggane in March",
      shortDescription: "Month: March. City: Reggane. Average temperature: 23.1 Celsius.",
      longDescription:
        "23.1 Celsius. Data point.",
    },
    parents: ["5", "15"],
    children: [],
    priority: 4,
  },
  "22": {
    id: "22",
    displayName: "Tallinn in March",
    description:
      "Month: March. City: Tallinn. Average temperature: -0.6 Celsius.",
    descriptionTokens: {
      label: "Tallinn in March",
      shortDescription: "Month: March. City: Tallinn. Average temperature: -0.6 Celsius.",
      longDescription:
        "-0.6 Celsius. Data point.",
    },
    parents: ["5", "16"],
    children: [],
    priority: 4,
  },
  "23": {
    id: "23",
    displayName: "Reggane in April",
    description:
      "Month: April. City: Reggane. Average temperature: 27.9 Celsius.",
    descriptionTokens: {
      label: "Reggane in April",
      shortDescription: "Month: April. City: Reggane. Average temperature: 27.9 Celsius.",
      longDescription:
        "27.9 Celsius. Data point.",
    },
    parents: ["6", "15"],
    children: [],
    priority: 4,
  },
  "24": {
    id: "24",
    displayName: "Tallinn in April",
    description:
      "Month: April. City: Tallinn. Average temperature: 4.8 Celsius.",
    descriptionTokens: {
      label: "Tallinn in April",
      shortDescription: "Month: April. City: Tallinn. Average temperature: 4.8 Celsius.",
      longDescription:
        "4.8 Celsius. Data point.",
    },
    parents: ["6", "16"],
    children: [],
    priority: 4,
  },
  "25": {
    id: "25",
    displayName: "Reggane in May",
    description:
      "Month: May. City: Reggane. Average temperature: 32.2 Celsius.",
    descriptionTokens: {
      label: "Reggane in May",
      shortDescription: "Month: May. City: Reggane. Average temperature: 32.2 Celsius.",
      longDescription:
        "32.2 Celsius. Data point.",
    },
    parents: ["7", "15"],
    children: [],
    priority: 4,
  },
  "26": {
    id: "26",
    displayName: "Tallinn in May",
    description:
      "Month: May. City: Tallinn. Average temperature: 10.2 Celsius.",
    descriptionTokens: {
      label: "Tallinn in May",
      shortDescription: "Month: May. City: Tallinn. Average temperature: 10.2 Celsius.",
      longDescription:
        "10.2 Celsius. Data point.",
    },
    parents: ["7", "16"],
    children: [],
    priority: 4,
  },
  "27": {
    id: "27",
    displayName: "Reggane in June",
    description:
      "Month: June. City: Reggane. Average temperature: 36.4 Celsius.",
    descriptionTokens: {
      label: "Reggane in June",
      shortDescription: "Month: June. City: Reggane. Average temperature: 36.4 Celsius.",
      longDescription:
        "36.4 Celsius. Data point.",
    },
    parents: ["8", "15"],
    children: [],
    priority: 4,
  },
  "28": {
    id: "28",
    displayName: "Tallinn in June",
    description:
      "Month: June. City: Tallinn. Average temperature: 14.5 Celsius.",
    descriptionTokens: {
      label: "Tallinn in June",
      shortDescription: "Month: June. City: Tallinn. Average temperature: 14.5 Celsius.",
      longDescription:
        "14.5 Celsius. Data point.",
    },
    parents: ["8", "16"],
    children: [],
    priority: 4,
  },
  "29": {
    id: "29",
    displayName: "Reggane in July",
    description:
      "Month: July. City: Reggane. Average temperature: 39.8 Celsius.",
    descriptionTokens: {
      label: "Reggane in July",
      shortDescription: "Month: July. City: Reggane. Average temperature: 39.8 Celsius.",
      longDescription:
        "39.8 Celsius. Data point.",
    },
    parents: ["9", "15"],
    children: [],
    priority: 4,
  },
  "30": {
    id: "30",
    displayName: "Tallinn in July",
    description:
      "Month: July. City: Tallinn. Average temperature: 17.6 Celsius.",
    descriptionTokens: {
      label: "Tallinn in July",
      shortDescription: "Month: July. City: Tallinn. Average temperature: 17.6 Celsius.",
      longDescription:
        "17.6 Celsius. Data point.",
    },
    parents: ["9", "16"],
    children: [],
    priority: 4,
  },
  "31": {
    id: "31",
    displayName: "Reggane in August",
    description:
      "Month: August. City: Reggane. Average temperature: 38.4 Celsius.",
    descriptionTokens: {
      label: "Reggane in August",
      shortDescription: "Month: August. City: Reggane. Average temperature: 38.4 Celsius.",
      longDescription:
        "38.4 Celsius. Data point.",
    },
    parents: ["10", "15"],
    children: [],
    priority: 4,
  },
  "32": {
    id: "32",
    displayName: "Tallinn in August",
    description:
      "Month: August. City: Tallinn. Average temperature: 16.5 Celsius.",
    descriptionTokens: {
      label: "Tallinn in August",
      shortDescription: "Month: August. City: Tallinn. Average temperature: 16.5 Celsius.",
      longDescription:
        "16.5 Celsius. Data point.",
    },
    parents: ["10", "16"],
    children: [],
    priority: 4,
  },
  "33": {
    id: "33",
    displayName: "Reggane in September",
    description:
      "Month: September. City: Reggane. Average temperature: 35.5 Celsius.",
    descriptionTokens: {
      label: "Reggane in September",
      shortDescription: "Month: September. City: Reggane. Average temperature: 35.5 Celsius.",
      longDescription:
        "35.5 Celsius. Data point.",
    },
    parents: ["11", "15"],
    children: [],
    priority: 4,
  },
  "34": {
    id: "34",
    displayName: "Tallinn in September",
    description:
      "Month: September. City: Tallinn. Average temperature: 12 Celsius.",
    descriptionTokens: {
      label: "Tallinn in September",
      shortDescription: "Month: September. City: Tallinn. Average temperature: 12 Celsius.",
      longDescription:
        "12 Celsius. Data point.",
    },
    parents: ["11", "16"],
    children: [],
    priority: 4,
  },
  "35": {
    id: "35",
    displayName: "Reggane in October",
    description:
      "Month: October. City: Reggane. Average temperature: 29.2 Celsius.",
    descriptionTokens: {
      label: "Reggane in October",
      shortDescription: "Month: October. City: Reggane. Average temperature: 29.2 Celsius.",
      longDescription:
        "29.2 Celsius. Data point.",
    },
    parents: ["12", "15"],
    children: [],
    priority: 4,
  },
  "36": {
    id: "36",
    displayName: "Tallinn in October",
    description:
      "Month: October. City: Tallinn. Average temperature: 6.5 Celsius.",
    descriptionTokens: {
      label: "Tallinn in October",
      shortDescription: "Month: October. City: Tallinn. Average temperature: 6.5 Celsius.",
      longDescription:
        "6.5 Celsius. Data point.",
    },
    parents: ["12", "16"],
    children: [],
    priority: 4,
  },
  "37": {
    id: "37",
    displayName: "Reggane in November",
    description:
      "Month: November. City: Reggane. Average temperature: 22 Celsius.",
    descriptionTokens: {
      label: "Reggane in November",
      shortDescription: "Month: November. City: Reggane. Average temperature: 22 Celsius.",
      longDescription:
        "22 Celsius. Data point.",
    },
    parents: ["13", "15"],
    children: [],
    priority: 4,
  },
  "38": {
    id: "38",
    displayName: "Tallinn in November",
    description:
      "Month: November. City: Tallinn. Average temperature: 2 Celsius.",
    descriptionTokens: {
      label: "Tallinn in November",
      shortDescription: "Month: November. City: Tallinn. Average temperature: 2 Celsius.",
      longDescription:
        "2 Celsius. Data point.",
    },
    parents: ["13", "16"],
    children: [],
    priority: 4,
  },
  "39": {
    id: "39",
    displayName: "Reggane in December",
    description:
      "Month: December. City: Reggane. Average temperature: 17.8 Celsius.",
    descriptionTokens: {
      label: "Reggane in December",
      shortDescription: "Month: December. City: Reggane. Average temperature: 17.8 Celsius.",
      longDescription:
        "17.8 Celsius. Data point.",
    },
    parents: ["14", "15"],
    children: [],
    priority: 4,
  },
  "40": {
    id: "40",
    displayName: "Tallinn in December",
    description:
      "Month: December. City: Tallinn. Average temperature: -0.9 Celsius.",
    descriptionTokens: {
      label: "Tallinn in December",
      shortDescription: "Month: December. City: Tallinn. Average temperature: -0.9 Celsius.",
      longDescription:
        "-0.9 Celsius. Data point.",
    },
    parents: ["14", "16"],
    children: [],
    priority: 4,
  },
  "41": {
    id: "41",
    displayName: "Y-axis",
    description:
      "Y-axis. Label: Temperature in Celsius. Values range from -10 to 50 on a numerical scale.",
    descriptionTokens: {
      label: "Y-axis",
      shortDescription: "Y-axis. Temperature in Celsius",
      longDescription:
        "Label: Temperature in Celsius. Values range from -10 to 50 on a numerical scale.",
    },
    parents: ["0"],
    children: [],
    priority: 2,
  },
};