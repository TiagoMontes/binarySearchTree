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

    #insertChildren(currentNode, key) {
        if(key < currentNode.value) {
            if(currentNode.left === null) {
                currentNode.left = new Node(key)
            }
            if(currentNode.left !== null) {
                this.#insertChildren(currentNode.left, key)
            }
        }

        if(key > currentNode.value) {
            if(currentNode.right === null) {
                currentNode.right = new Node(key)
            }
            if(currentNode.right !== null) {
                this.#insertChildren(currentNode.right, key)
            }
        }
    }

    inOrderTraversal(node) {
        if (node !== null) {
            this.inOrderTraversal(node.left)
            console.log(node.value)
            this.inOrderTraversal(node.right)
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
    binarySearchTree.inOrderTraversal(binarySearchTree.root)
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