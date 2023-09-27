class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

const bst = new BST(2);
bst.left = new BST(1);
bst.right = new BST(10);

console.log(bst);
