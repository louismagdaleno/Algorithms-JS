class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

let head = new Node('hello');
head.next = new Node('world');
head.next.next = new Node('!');

let temp = head;

while (temp != null) {
    console.log(temp.value);
    temp = temp.next;
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        if (!this.head) {
            this.head = new Node(val);
            this.tail = this.head;
        } else {
            this.tail.next = new Node(val);
            this.tail = this.tail.next;
        }
        this.length ++;
        return this;
    }
    pop() {
        let deleted = this.head;
        if (!this.head){
            return 'Cant pop empty list';
        } else {
           
            let temp = this.head;
            while (temp.next !== null) {
                temp = temp.next;
            }
            this.tail = temp;
            this.tail.next = null;
            
        }
        this.length --;
        return deleted;
    }
    shift(){
        if (!this.head) {
            return undefined;
        }
        var temp = this.head;
        this.head = temp.next;
        this.length--;
        temp.next = null;
        return temp;
    }
    unshift(val){
        var temp = new Node(val);

        temp.next = this.head;
        this.head = temp;
        this.length++;
        return this;


    }
    get(val) {
        if (val > this.length - 1 || val < 0) return undefined;
        let temp = this.head;
        let counter = 0;
        while (counter != val) {
            counter ++;
            temp = temp.next;
        }

        return temp;
    }
    set(index, val) {
       let temp = this.get(index);
       temp.value = val;
        return temp;
    }
    insert(index,val){

        if (index < 0 || index > this.length) return false;
        if (!this.head || index === this.length) {
            return this.push(val);
        }
        if (index === 0) {
            return  this.unshift(val);
        }
     
        var tempNode = new Node(val);


        let before = this.get(index - 1);

        let after = this.get(index);

        tempNode.next = after;
        before.next = tempNode;
        return this;
    }
    print(){
        let arr = [];
        let temp = this.head;
        while (temp != null) {
            arr.push(temp.value);
            temp = temp.next
        }
        return arr;
    }

    reverse(){
        // create temp node variable, initialize it to the head
        var node = this.head;

        // swap the head and tail
        this.head = this.tail;
        this.tail = node;

        // create two variables, for next and prev - initialize prev to null
        var next;
        var prev = null;

        // for loop over length of the linkedlist
        for(var i = 0; i < this.length; i++){
          // set next equal to node.next
          next = node.next;
          // set node.next equal to prev
          node.next = prev;
          // previous = node
          prev = node;
          // node = next
          node = next;
        }
        // return reversed linked list
        return this;
      }
   
}

let myFirstLinkedList = new LinkedList();

myFirstLinkedList.push('hello');
console.log(myFirstLinkedList.tail.value);
console.log(myFirstLinkedList.length)
myFirstLinkedList.push('world');
console.log(myFirstLinkedList.tail.value)
console.log(myFirstLinkedList.length)
console.log(myFirstLinkedList.pop());
console.log(myFirstLinkedList.tail.value)
console.log(myFirstLinkedList.length)
myFirstLinkedList.push('world');
myFirstLinkedList.push('world');
myFirstLinkedList.push('world');
myFirstLinkedList.push('world');
console.log(myFirstLinkedList.length)
console.log(myFirstLinkedList.shift());
console.log(myFirstLinkedList.length);
console.log(myFirstLinkedList.head);
myFirstLinkedList.unshift('first');
console.log(myFirstLinkedList)
console.log(myFirstLinkedList.get(3));
console.log(myFirstLinkedList.set(3,'TOASTER OVEN'));
console.log(myFirstLinkedList.insert(4, 'hahaha'));


let numbers = new LinkedList();
numbers.push(1);
numbers.push(2);
numbers.push(3);
numbers.push(4);
numbers.push(5);
console.log(numbers.print())