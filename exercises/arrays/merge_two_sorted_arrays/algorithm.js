import lodash from "lodash";

const merge = (a, m, b, n) => {
  while (m > 0 && n > 0) {
    if (a[m - 1] > b[n - 1]) {
      a[m + n - 1] = a[m - 1];
      m--;
    } else {
      a[m + n - 1] = b[n - 1];
      n--;
    }
  }

  while (n > 0) {
    a[m + n - 1] = b[n - 1];
    n--;
  }

  return a;
};

const merge2 = (a, n, b, m) => {
  let i = n - 1;
  let j = m - 1;
  let k = m + n - 1;

  while (k >= 0) {
    if (j < 0 || (i >= 0 && a[i] > b[j])) {
      a[k--] = a[i--];
    } else {
      a[k--] = b[j--];
    }
  }

  return a;
};

const firstArray = [1, 2, 4, 7, 9, 12, 15, 16, 19, 20, , , , , , , , , ,];
const secondArray = [3, 5, 6, 8, 10, 11, 13, 14, 17, 18, 20];

const { cloneDeep } = lodash;
const firstArray1 = cloneDeep(firstArray);
const firstArray2 = cloneDeep(firstArray);
const secondArray1 = cloneDeep(secondArray);
const secondArray2 = cloneDeep(secondArray);

const result = merge(firstArray1, 10, secondArray1, 10);
const result2 = merge2(firstArray2, 10, secondArray2, 10);

console.log("merge", result);
console.log("merge2", result2);
