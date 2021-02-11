class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
}

const node1 = new ListNode(1);
node1.next = new ListNode(3);
node1.next.next = new ListNode(5);

const node2 = new ListNode(2);
node2.next = new ListNode(4);
node2.next.next = new ListNode(9);

const list = new LinkedList(node1);
const list2 = new LinkedList(node2);

const merge = (headA, headB) => {
  const dummyNode = new ListNode(0);
  let tail = dummyNode;

  while (true) {
    if (headA == undefined) {
      tail.next = headB;
      break;
    }

    if (headB == undefined) {
      tail.next = headA;
      break;
    }

    if (headA.data <= headB.data) {
      tail.next = headA;
      headA = headA.next;
    } else {
      tail.next = headB;
      headB = headB.next;
    }

    tail = tail.next;
  }

  return dummyNode.next;
};

const mergeUtil = (h1, h2) => {
  if (h1.next == undefined) {
    h1.next = h2;
    return h1;
  }

  let curr1 = h1,
    next1 = h1.next;
  let curr2 = h2,
    next2 = h2.next;

  while (next1 != null && curr2 != null) {
    if (curr2.data >= curr1.data && curr2.data <= next1.data) {
      next2 = curr2.next;
      curr1.next = curr2;
      curr2.next = next1;

      curr1 = curr2;
      curr2 = next2;
    } else {
      if (next1.next != null) {
        next1 = next1.next;
        curr1 = curr1.next;
      } else {
        next1.next = curr2;
        return h1;
      }
    }
  }
  return h1;
};

const mergeInPlace = (h1, h2) => {
  if (h1 == undefined) return h2;
  if (h2 == undefined) return h1;

  if (h1.data < h2.data) {
    return mergeUtil(h1, h2);
  } else {
    return mergeUtil(h2, h1);
  }
};

const result = mergeInPlace(node1, node2);
console.log(JSON.stringify(result));
