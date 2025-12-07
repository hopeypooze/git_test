//node class represents individual elements

class Node {
  constructor(value) {
    this.value = value; //data part of the node
    this.next = null; //pointer to the next node
  }
}

class LinkedList {
  constructor() {
    this.head = null; //keeps track of the start of list
  }

  append(value) {
    let newnode = new Node(value);
    if (!this.head) {
      this.head = newnode;
      return;
    }
    let current = this.head;
    while (current.next) {
      //does this take us to the end of the list?
      current = current.next;
    }
    current.next = newnode;
  }
  printList() {
    //traverses list
    let current = this.head;
    let result = "";
    while (current) {
      result += current.value + "->";
      current = current.next;
    }
    console.log(result + "null");
  }

  delete(value) {
    if (!this.head) {
      console.log("list is empty");
      return;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }
    let prev = null;
    let current = this.head;
    while (current && current.value !== value) {
      prev = current;
      current = current.next;
    }
    if (!current) {
      console.log(this.head, "value not found in list");
    }
  }

  countElements() {
    //traverses list
    let current = this.head;
    let count = 0;
    while (current) {
      count++;
      current = current.next;
    }
    // console.log(count);
    return count;
  }

  getMiddle() {
    let n = Math.floor(this.countElements() / 2);
    let count = n - 1;
    console.log(n);
    let current = this.head;
    while (count-- > 0) {
      current = current.next;
      console.log(current);
    }
    return current.value;
  }

  getMiddleSmart() {
    let fast = this.head;
    let slow = this.head;

    while (fast != null && fast.next != null) {
      fast = fast.next.next;

      slow = slow.next;
    }
    return slow.value;
  }

  reverseList() {
    let prevNode = null;
    let currentNode = this.head;
    let nextNode = null;

    while (currentNode !== null) {
      nextNode = currentNode.next; //node to the right of current
      currentNode.next = prevNode; //swap value ahead with value behind current
      prevNode = currentNode; //moves operation a step to the right (prev and current both)
      currentNode = nextNode;
    }
    this.head = prevNode;
  }
}

let list = new LinkedList();

list.append(10);

list.append(20);
list.append(30);
list.append(40);

list.append(50);

list.printList();
console.log("middle", list.getMiddleSmart());
list.reverseList();
list.printList();

// function fastSlowArray() {
//   let fastI = 0;
//   let slowI = 0;
//   while (fastI + 2 <= fsArr.length) {
//     console.log("fast", fastI);
//     fastI = fastI + 2;
//     console.log("slow", slowI);
//     slowI++;
//   }
//   console.log(fsArr[slowI]);
// }

// fsArr = [1, 2, 3];
// fastSlowArray(fsArr);
