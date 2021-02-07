import lodash from "lodash";

import { firstArray, secondArray } from "./data.js";
import { merge, merge2 } from "./algorithm.js";

const { cloneDeep } = lodash;
const firstArray1 = cloneDeep(firstArray);
const firstArray2 = cloneDeep(firstArray);
const secondArray1 = cloneDeep(secondArray);
const secondArray2 = cloneDeep(secondArray);

const result = merge(firstArray1, 10, secondArray1, 10);
const result2 = merge2(firstArray2, 10, secondArray2, 10);

console.log("merge", result);
console.log("merge2", result2);
