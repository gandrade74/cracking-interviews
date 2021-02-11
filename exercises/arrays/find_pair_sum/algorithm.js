let findSumOfTwo = (arr, val) => {
  let set = new Set();

  for (let n of arr) {
    const diff = val - n;

    if (set.has(diff)) {
      return true;
    }

    set.add(n);
  }

  return false;
};

let v = [5, 7, 1, 2, 8, 4, 3];
let test = [3, 20, 1, 2, 7];

for (let i = 0; i < test.length; i++) {
  let output = findSumOfTwo(v, test[i]);
  console.log("findSumOfTwo(v, " + test[i] + ") = " + output);
}
