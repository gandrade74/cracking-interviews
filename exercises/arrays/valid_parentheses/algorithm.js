const isValid = (s) => {
  if (s.length % 2 != 0) {
    return false;
  }

  const dict = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const stack = [];

  for (let c of s) {
    if (dict[c] != undefined) {
      const top = stack.pop();

      if (top != dict[c]) {
        return false;
      }
    } else {
      stack.push(c);
    }
  }

  return stack.length === 0;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));
