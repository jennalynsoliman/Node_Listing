//PROBLEM 4

class Node { //this define a node class to represent a single node in the linked list
    constructor(value) {
      this.value = value;  //assign the data value to the node
      this.next = null; // this initialize the next pointer to null
    }
  }
  
  class LinkedList { //a class linked list to manage a collection of nodes
    //this initialize the head of the list to null
    constructor() {
      this.head = null;
      //this keeps track the number of nodes in the list
      this.size = 0;
    }
    	//this append a new item to the end of the linked list
    append(value) {
      const newNode = new Node(value); //creating a new node to store the provided value
  
      if (!this.head) { //if thelist is empty
        this.head = newNode; //this set the head of the kist to the new node
      } else {
        //at this part it will start iterating from the head of the list
        let current = this.head;
        while (current.next) { //this traverse the list to find the last node
          current = current.next;
        }
        current.next = newNode; //once the last node reach this set its next pointe3r to the new node
      }
  
      this.size++; //this increment the size counter to reflect the addition of a new node
      this.print(); //this display the updated content of the list
    }
  
    print() { //prints the contents of the kinked list
      let current = this.head; // this start iterating from the head of the list
      let result = ""; //initialize and empty string to store the output
      while (current) {
        result += current.value + " ";
        current = current.next;
      }
      console.log(result.trim()); //remove any trailing space from thr result string
    }
  }
  
  // Create a linked list
  const list = new LinkedList();
  
  // to append the items or data to the linked list
  list.append("Data Structures - Array");
  list.append("Variable Type - Integer");
  list.append("Sorting Algorithm - Bubble Sort");