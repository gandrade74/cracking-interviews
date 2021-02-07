const swap = (items, i, j) => {
  const temp = items[i];
  items[i] = items[j];
  items[j] = temp;
};

const partition = (items, low, high) => {
  const mid = Math.floor((high + low) / 2);
  const pivot = items[mid];
  let left = low;
  let right = high;

  while (left <= right) {
    while (items[left] < pivot) {
      left++;
    }

    while (items[right] > pivot) {
      right--;
    }

    if (left <= right) {
      swap(items, left, right);
      left++;
      right--;
    }
  }

  return left;
};

const myQuickSortRecursive = (items, left, right) => {
  if (items.length <= 1) {
    return items;
  }

  left = left || 0;
  right = right || items.length - 1;

  const index = partition(items, left, right);

  if (left < index - 1) {
    myQuickSortRecursive(items, left, index - 1);
  }

  if (right > index) {
    myQuickSortRecursive(items, index, right);
  }

  return items;
};

const myQuickSortIterative = (items) => {
  if (items.length <= 1) {
    return arr;
  }

  const stack = [{ l: 0, r: items.length - 1 }];

  while (stack.length > 0) {
    const { l, r } = stack.pop();
    const index = partition(items, l, r);

    if (l < index - 1) {
      stack.push({ l, r: index - 1 });
    }

    if (r > index) {
      stack.push({ l: index, r });
    }
  }

  return items;
};

export { myQuickSortRecursive, myQuickSortIterative };
