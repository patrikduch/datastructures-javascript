class Node {
    constructor() {
        this.value = null;
        this.next = null;
    }
}

class SingleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {

        const newNode = new Node();
        newNode.value = value;

        if(!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }


     printList() {
        
        let current = this.head;
        const values = [];

        while (current) {
            values.push(current.value);

            current = current.next;
        }

        console.log(values.join(" -> "));        
    }


    contains(searchedValue) {

        let current = this.head;

        while(current) {

            if (current.value == searchedValue) {
                return searchedValue;
            }

            current = current.next;
        }

    }
}

const linkedList = new SingleLinkedList();
linkedList.append("A");
linkedList.append("B");
linkedList.append("C");


console.log(linkedList)


linkedList.printList();


const searchedItem = linkedList.contains("C");

console.log(searchedItem);