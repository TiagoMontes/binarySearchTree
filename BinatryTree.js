let array = [15, 10, 20, 8, 12, 17, 25, 6, 11, 16, 27]

class Node {
    constructor(value) {
        this.value = value
        this.right = null
        this.left = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insertNode(key) {
        if(this.root === null) {
            this.root = new Node(key)
        } else {
            this.#insertChildren(this.root, key)
        }
    }

    #insertChildren(current_node, key) {
        if(key < current_node.value) {
            if(current_node.left === null) {
                current_node.left = new Node(key)
            }
            if(current_node.left !== null) {
                this.#insertChildren(current_node.left, key)
            }
        }

        if(key > current_node.value) {
            if(current_node.right === null) {
                current_node.right = new Node(key)
            }
            if(current_node.right !== null) {
                this.#insertChildren(current_node.right, key)
            }
        }
    }

    inorderTraversal(node) {
        if (node !== null) {
            this.inorderTraversal(node.left)
            console.log(node.value)
            this.inorderTraversal(node.right)
        }
    }
}

function handleTree(binarySearchTree) {
    array.forEach((key) => {
        binarySearchTree.insertNode(key)
    })
}

function makeMagic() {
    let binarySearchTree = new BinarySearchTree()

    handleTree(binarySearchTree)
    binarySearchTree.inorderTraversal(binarySearchTree.root)
}

makeMagic()

// // Recursion
// function makeRecursion(value) {
//     if(value <= 10) {
//         makeRecursion(value + 1)
//         console.log(value)
//     }
// }
//
// makeRecursion(1)