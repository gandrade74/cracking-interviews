var merge = (intervals) => {
  const result = [intervals[0]];

  for (let i = 0; i < intervals.length; i++) {
    const x = intervals[i][0];
    const y = intervals[i][1];
    const y2 = result[result.length - 1][1];

    if (y2 >= x) {
      result[result.length - 1][1] = Math.max(y, y2);
    } else {
      result.push(intervals[i]);
    }
  }

  return result;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
