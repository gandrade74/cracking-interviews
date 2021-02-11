const rotateArray2 = (arr, n) => {
  const len = arr.length;

  n = n % len;

  if (n < 0) {
    n = n + len;
  }

  const reverseArray = (arr, start, end) => {
    while (start <= end) {
      const temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  };

  reverseArray(arr, 0, arr.length - 1);
  reverseArray(arr, 0, n - 1);
  reverseArray(arr, n, arr.length - 1);

  return arr;
};

const rotateArray = (arr, n) => {
  const len = arr.length;

  n = n % len;

  if (n < 0) {
    n = n + len;
  }

  const temp = [];
  const start = len - n;

  for (let i = start; i < len; i++) {
    temp.push(arr[i]);
  }

  for (let i = len - 1; i >= n; i--) {
    arr[i] = arr[i - n];
  }

  for (let i = 0; i < n; i++) {
    arr[i] = temp[i];
  }

  return arr;
};

console.log(rotateArray([1, 10, 20, 0, 59, 86, 32, 11, 9, 40], -3));
console.log(rotateArray2([1, 10, 20, 0, 59, 86, 32, 11, 9, 40], -3));
