const longestValidParentheses = (s) => {
  let left = 0;
  let right = 0;
  let maxlength = 0;

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) == "(") {
      left++;
    } else {
      right++;
    }
    if (left == right) {
      maxlength = Math.max(maxlength, 2 * right);
    } else if (right >= left) {
      left = right = 0;
    }
  }
  left = right = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s.charAt(i) == "(") {
      left++;
    } else {
      right++;
    }
    if (left == right) {
      maxlength = Math.max(maxlength, 2 * left);
    } else if (left >= right) {
      left = right = 0;
    }
  }
  return maxlength;
};

console.log(longestValidParentheses("(((()"));
console.log(longestValidParentheses("()"));
console.log(longestValidParentheses("()()"));
console.log(longestValidParentheses(")()())"));
console.log(longestValidParentheses("()(())"));
console.log(longestValidParentheses("()(()"));
