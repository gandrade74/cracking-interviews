let moveZerosToLeft = (a) => {
  let zeroIndex = 0;
  let i = 0;

  while (i < a.length) {
    if (a[i] === 0) {
      let j = i;

      while (zeroIndex < j) {
        a[j] = a[j - 1];
        a[j - 1] = 0;
        j--;
      }
    }

    i++;
  }

  return a;
};

let moveZerosToLeft2 = (a) => {
  let lastNonZeroFoundAt = a.length - 1;

  for (let cur = a.length - 1; cur >= 0; cur--) {
    if (a[cur] != 0) {
      const temp = a[lastNonZeroFoundAt];
      a[lastNonZeroFoundAt] = a[cur];
      a[cur] = temp;

      lastNonZeroFoundAt--;
    }
  }

  return a;
};

console.log(moveZerosToLeft2([1, 10, 20, 0, 59, 63, 0, 88, 0]));
console.log(moveZerosToLeft2([1, 0, 0]));
