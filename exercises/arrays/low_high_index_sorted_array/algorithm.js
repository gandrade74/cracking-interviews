let findLowIndex = (arr, key) => {
  let start = 0;
  let end = arr.length - 1;
  let lowest = -1;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (arr[mid] === key) {
      if (lowest < 0 || mid < lowest) {
        lowest = mid;
      }

      if (arr[mid - 1] < key) {
        return lowest;
      } else {
        end = mid - 1;
      }
    } else if (arr[mid] > key) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return lowest;
};

let findHighIndex = function (arr, key) {
  let start = 0;
  let end = arr.length - 1;
  let highest = -1;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (arr[mid] === key) {
      highest = mid > highest ? mid : highest;

      if (arr[mid + 1] > key) {
        return highest;
      } else {
        start = mid + 1;
      }
    } else if (arr[mid] > key) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return highest;
};

console.log(
  findHighIndex(
    [1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6],
    6
  )
);

console.log(
  findLowIndex(
    [1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6],
    6
  )
);
