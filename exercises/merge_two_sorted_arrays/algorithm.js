const merge = (a, m, b, n) => {
  while (m > 0 && n > 0) {
    if (a[m - 1] > b[n - 1]) {
      a[m + n - 1] = a[m - 1];
      m--;
    } else {
      a[m + n - 1] = b[n - 1];
      n--;
    }
  }

  while (n > 0) {
    a[m + n - 1] = b[n - 1];
    n--;
  }

  return a;
};

const merge2 = (a, n, b, m) => {
  let i = n - 1;
  let j = m - 1;
  let k = m + n - 1;

  while (k >= 0) {
    if (j < 0 || (i >= 0 && a[i] > b[j])) {
      a[k--] = a[i--];
    } else {
      a[k--] = b[j--];
    }
  }

  return a;
};

export { merge, merge2 };
