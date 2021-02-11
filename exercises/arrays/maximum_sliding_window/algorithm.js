let findMaxSlidingWindow = (arr, windowSize) => {
  const result = [];

  if (arr.length == 0) {
    return result;
  }

  if (windowSize > arr.length) {
    return result;
  }

  let left = 0;
  let right = windowSize - 1;

  while (right < arr.length) {
    let max;

    for (let i = left; i <= right; i++) {
      if (arr[i] > max || max == undefined) {
        max = arr[i];
      }
    }

    result.push(max);
    left++;
    right++;
  }

  return result;
};

let findMaxSlidingWindow2 = (arr, windowSize) => {
  if (arr.length == 0) {
    return result;
  }

  if (windowSize > arr.length) {
    return result;
  }

  let result = [];
  let window = [];

  for (let i = 0; i < windowSize; i++) {
    while (window.length > 0 && arr[i] >= arr[window[window.length - 1]]) {
      window.pop();
    }

    window.push(i);
  }

  result.push(arr[window[0]]);

  for (let i = windowSize; i < arr.length; i++) {
    while (window.length > 0 && arr[i] >= arr[window[window.length - 1]]) {
      window.pop();
    }

    if (window.length > 0 && window[0] <= i - windowSize) {
      window.shift();
    }

    window.push(i);
    result.push(arr[window[0]]);
  }

  return result;
};

console.log(findMaxSlidingWindow([3, 0, 1, -1, 2, 4, 3, 0], 3));
console.log(findMaxSlidingWindow2([3, 0, 1, -1, 2, 4, 3, 0], 3));
