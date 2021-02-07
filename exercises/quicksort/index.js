import lodash from "lodash";

import data from "./data.js";
import { myQuickSortRecursive, myQuickSortIterative } from "./algorithm.js";

const { cloneDeep } = lodash;
const data1 = cloneDeep(data);
const data2 = cloneDeep(data);

const myRecursive = myQuickSortRecursive(data1);
const myIterative = myQuickSortIterative(data2);

console.log("myRecursive", myRecursive);
console.log("myIterative", myIterative);
