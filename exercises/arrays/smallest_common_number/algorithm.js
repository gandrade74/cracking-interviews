const findLeastCommonNumber = (a, b, c) => {
  let i = 0,
    j = 0,
    k = 0;

  while (i < a.length && j < b.length && k < c.length) {
    if (a[i] === b[j] && a[i] === c[k]) {
      return a[i];
    }

    if (b[j] < a[i]) {
      j++;
    }

    if (c[k] < a[i]) {
      k++;
    }

    if (b[j] > a[i] || c[k] > a[i]) {
      i++;
    }
  }

  return -1;
};

const a = [1, 2, 3, 4, 5, 6, 7, 8];
const b = [1, 2, 3, 4, 5];
const c = [5, 6, 7, 8, 9, 10];

console.log(findLeastCommonNumber(a, b, c));
