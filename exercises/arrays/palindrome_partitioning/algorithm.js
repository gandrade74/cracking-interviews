const isPalindrome = (s, l, r) => {
  while (l < r) {
    if (s[l++] !== s[r--]) {
      return false;
    }
  }

  return true;
};

const dfs = (start, result, current, s) => {
  if (start >= s.length) {
    result.push(current);
  }

  for (let end = start; end < s.length; end++) {
    if (isPalindrome(s, start, end)) {
      current.push(s.slice(start, end + 1));
      dfs(end + 1, result, current, s);
      current = [];
    }
  }
};

const partition = (s) => {
  const result = [];
  dfs(0, result, [], s);
  return result;
};

console.log(partition("aaa"));
