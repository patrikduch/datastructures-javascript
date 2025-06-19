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


    remove(value) {

        if (!this.head) return;


        if (this.head.value == value) {
            this.head = this.head.next;

            if (!this.head) {
                this.tail = null;
            }
        }


        let current = this.head;

        while (current.next && current.value != value) {

            current = current.next;
        }


        if (current.next) {

            current.next = current.next.next;
        }
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


linkedList.remove("B")


linkedList.printList();


//const searchedItem = linkedList.contains("C");

//console.log(searchedItem);

