const lis = (arr) => {
  const lengthsArr = Array(arr.length).fill(1);
  let prevElIdx = 0;
  let currElIdx = 1;

  while (currElIdx < arr.length) {
    if (arr[prevElIdx] < arr[currElIdx]) {
      const newLen = lengthsArr[prevElIdx] + 1;
      if (newLen > lengthsArr[currElIdx]) {
        lengthsArr[currElIdx] = newLen;
      }
    }

    prevElIdx += 1;

    if (prevElIdx === currElIdx) {
      currElIdx += 1;
      prevElIdx = 0;
    }
  }

  let longestIncreasingLength = 0;

  for (let i = 0; i < lengthsArr.length; i += 1) {
    if (lengthsArr[i] > longestIncreasingLength) {
      longestIncreasingLength = lengthsArr[i];
    }
  }

  return longestIncreasingLength;
};

lis([1, 2, 1, 5]);
lis([0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]);
