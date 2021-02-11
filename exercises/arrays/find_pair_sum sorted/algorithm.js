let findSumOfTwo = (arr, val) => {
  let i = 0;
  let j = arr.length - 1;

  while (i <= j) {
    const v = arr[i] + arr[j];

    if (v === val) {
      return true;
    }

    if (v < val) {
      i++;
    } else {
      j--;
    }
  }

  return false;
};

let v = [1, 3, 4, 5, 7, 14, 15];
let test = [3, 20, 1, 2, 7];

for (i = 0; i < test.length; i++) {
  let output = findSumOfTwo(v, test[i]);
  console.log("findSumOfTwo(v, " + test[i] + ") = " + output);
}
