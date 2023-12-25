const {
  NotImplementedError
} = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.tree = {
      data: null,
      left: null,
      right: null
    }
  }

  root() {
    return this.tree.data ? this.tree : null;
  }

  add(data) {
    this.tree = this.#_addLeaf(this.tree, data);
  }

  #_addLeaf(tree, data) {
    if (!tree) {
      tree = {
        data: data,
        left: null,
        right: null
      }
    } else if (!tree.data) {
      tree.data = data;
    } else if (data <= tree.data) {
      tree.left = this.#_addLeaf(tree.left, data)
    } else if (data > tree.data) tree.right = this.#_addLeaf(tree.right, data);
    return tree;
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    return this.#_findLeaf(this.tree, data);
  }

  #_findLeaf(tree, data) {
    if (!tree) {
      return null;
    } else if (!tree.data) {
      return null
    } else if (tree.data === data) {
      return tree;
    } else if (data <= tree.data) {
      return this.#_findLeaf(tree.left, data)
    } else if (data > tree.data) {
      return this.#_findLeaf(tree.right, data);
    }
  }

  remove(data) {
    if (this.has(data)) this.tree = this.#_removeLeaf(this.tree, data);
  }

  #_removeLeaf(tree, data) {
    if (data < tree.data) {
      tree.left = this.#_removeLeaf(tree.left, data);
    }
    if (data > tree.data) {
      tree.right = this.#_removeLeaf(tree.right, data)
    };
    if (data === tree.data) {
      if (!tree.left && !tree.right) {
        return null;
      } else if (!tree.left) {
        return tree.right;
      } else if (!tree.right) {
        return tree.left;
      } else {
        let maxL = this.#_getMax(tree.left, tree.left.data);
        tree.data = maxL;
        tree.left = this.#_removeLeaf(tree.left, maxL);
      }
    }
    return tree;
  }

  min() {
    return this.#_getMin(this.tree.left, this.tree.data);
  }

  #_getMin(tree, data) {
    if (!tree) {
      return data;
    } else if (tree.data < data) {
      return this.#_getMin(tree.left, tree.data);
    } else if (!tree.left) return data;
    return this.#_getMin(tree.left, tree.left.data);
  }

  #_getMax(tree, data) {
    if (!tree) {
      return data;
    } else if (!tree.right) {
      return data;
    }
    return this.#_getMax(tree.right, tree.right.data);
  }

  max() {
    return this.#_getMax(this.tree.right, this.tree.data);
  }
}

module.exports = {
  BinarySearchTree
};