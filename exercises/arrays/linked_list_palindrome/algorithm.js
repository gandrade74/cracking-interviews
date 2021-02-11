var isPalindrome = (head) => {
  const stack = [];
  const node = head;

  while (node != null) {
    stack.push(node.val);
    node = node.next;
  }

  while (head != null) {
    const val = stack.pop();

    if (val !== head.val) {
      return false;
    }

    head = head.next;
  }

  return true;
};
