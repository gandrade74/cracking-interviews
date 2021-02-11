let binarySearchRotated = (arr, key) => {
  let start = 0;
  let end = arr.length - 1;

  if (start > end) {
    return -1;
  }

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (arr[mid] === key) {
      return mid;
    }

    if (arr[start] <= arr[mid] && key < arr[mid] && key >= arr[start]) {
      end = mid - 1;
    } else if (arr[end] >= arr[mid] && key > arr[mid] && key <= arr[end]) {
      start = mid + 1;
    } else if (arr[end] <= arr[mid]) {
      start = mid + 1;
    } else if (arr[start] >= arr[mid]) {
      end = mid - 1;
    } else {
      return -1;
    }
  }

  return -1;
};

console.log(binarySearchRotated([10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9], 11));
console.log(binarySearchRotated([4, 5, 6, 1, 2, 3], 3));
