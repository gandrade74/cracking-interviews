const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const partition = (arr, left, right) => {
  const mid = Math.floor((right + left) / 2);
  const pivot = arr[mid];
  let i = left;
  let j = right;

  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }

    while (arr[j] > pivot) {
      j--;
    }

    if (i <= j) {
      swap(arr, i, j);
      i++;
      j--;
    }
  }

  return i;
};

const quickSort = (arr, left, right) => {
  if (arr.length <= 1) {
    return arr;
  }

  left = left || 0;
  right = right || arr.length - 1;

  const pivotIndex = partition(arr, left, right);

  if (left < pivotIndex - 1) {
    quickSort(arr, left, pivotIndex - 1);
  }

  if (right > pivotIndex) {
    quickSort(arr, pivotIndex, right);
  }

  return arr;
};

const quickSortIterative = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const stack = [{ left: 0, right: arr.length - 1 }];

  while (stack.length > 0) {
    const { left, right } = stack.pop();
    const pivotIndex = partition(arr, left, right);

    if (left < pivotIndex - 1) {
      stack.push({ left, right: pivotIndex - 1 });
    }

    if (right > pivotIndex) {
      stack.push({ pivotIndex, right });
    }
  }

  return arr;
};

let a = [55, 23, 26, 2, 18, 78, 23, 8, 2, 3];

console.log(quickSort(a));
console.log(quickSortIterative(a));
