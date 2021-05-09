/**
 * @author: Maaraki Zakaria
 * add or remove elements at both ends in constant time.
 * linear time random access.
 */
class LinkedList {

    /**
     *
     * @constructor
     */
    constructor() {
        this.nbElements = 0;
        this.firstNode = null;
        this.lastNode = null;

        /**
         * Getting the node at the specified index.
         * @private
         * @param {number} index Index of the node.
         * @returns {Object} Returns the node at the specified index.
         */
        this.getNode = (index) => {
            if (index < 0 || index >= this.nbElements) return false;
            if (index == 0) return this.firstNode;
            if (index == this.nbElements - 1) return this.lastNode;
            let curr = this.firstNode;
            for (let i = 0; i < index; i++) {
                curr = curr.next;
            }
            return curr;
        }
    }

    /**
     * Getting the element at the specified index.
     * @param {number} index Index of the element
     * @returns {*} The element at the specified index, or undefined if the index is out of bounds
     */
    get(index) {
        if (index < 0 || index >= this.nbElements) return false;
        return this.getNode(index).element;
    }

    /**
     * Adding an element at the specified index.
     * @param {Object} value Item to be added
     * @param {*} index Optional, index where to add the item, if no index is specified the element is added to the end of the list
     * @returns {boolean} true, or false if the index is out of bounds
     */
    add(value, index) {
        if (index > this.nbElements || index < 0) return false;
        newElement = {
            element: value,
            next: null
        }
        if (this.nbElements == 0) {
            this.firstNode = newElement;
            this.lastNode = newElement;
        } else if (index == 0 || index == undefined) {
            newElement.next = this.firstNode;
            this.firstNode = newElement;
        } else if (index == this.nbElements) {
            this.lastNode.next = newElement;
            this.lastNode = this.lastNode.next;
        } else {
            let node = this.getNode(index - 1);
            newElement.next = node.next;
            node.next = newElement;
        }
        this.nbElements++;
        return true;
    }

    /**
     * Adding an element to the head of the list.
     * @param {Object} value Item to be added to the head of the list.
     */
    addFirst(value) {
        this.add(value, 0);
    }

    /**
     * Getting the first element in the list.
     * @returns {Object} the first element in the list.
     */
    getFirst() {
        return this.firstNode.element;
    }

    /**
     * Adding an element in the end of the list.
     * @param {Object} value Item to be added to the end of the list.
     */
    addLast(value) {
        this.add(value, this.nbElements);
    }

    /**
     * Getting the last element in the list.
     * @returns {Object} the last element in the list.
     */
    getLast() {
        return this.lastNode.element;
    }

    /**
     * Remove the element at the specific index.
     * @param {number} index the index of the element to remove.
     * @returns {boolean} true, or false of the element is out of bounds.
     */
    remove(index) {
        if (index >= this.nbElements || index < 0) return false;
        if (this.nbElements == 0) this.firstNode = this.lastNode = null;
        else if (index == 0) this.firstNode = this.firstNode.next;
        else {
            let node = this.getNode(index - 1);
            node.next = node.next.next;
        }
        return true;
    }

    /**
     * Clear the list.
     */
    clear() {
        this.nbElements = 0;
        this.firstNode = this.lastNode = null;
    }

    /**
     *  Return the size of the list.
     *  @returns {number} the size of the list.
     */
    size() {
        return this.nbElements;
    }

    /**
     * Check if the list is empty.
     * @returns true, or false if the list is not empty.
     */
    isEmpty() {
        return this.nbElements == 0;
    }

    /**
     * find the index of the specified element.
     * @param {Object} value The item to look for.
     * @param {function(Object,Object):boolean} equalsFunction Optional equal callback function.
     */
    indexOf(value, equalsFunction) {
        let curr = this.firstNode;
        let index = 0;
        if (equalsFunction) {
            while (curr != null) {
                if (equalsFunction(curr.element, value) == 0) return index;
                curr = curr.next;
                index++;
            }
            return false;
        } else {
            while (curr != null) {
                if (value == curr.element) return index;
                curr = curr.next;
                index++;
            }
            return -1;
        }
    }

    /**
     * Find the last index of specified element.
     * @param {Object} value The item to look for
     * @param {function(Object,Object):boolean} equalsFunction Optional equal callback function.
     */
    lastIndexOf(value, equalsFunction) {
        let curr = this.firstNode;
        let index = 0;
        let saveIndex = -1;
        if (equalsFunction) {
            while (curr != null) {
                if (equalsFunction(curr.element, value) == 0) saveIndex = index;
                curr = curr.next;
                index++;
            }
            return false;
        } else {
            while (curr != null) {
                if (value == curr.element) saveIndex = index;
                curr = curr.next;
                index++;
            }
            return saveIndex;
        }
    }

    /**
     * Return if the list contain the specified element.
     * @param {Object} value the element to look for.
     * @param {function(Object,Object):boolean} equalsFunction Option equal callback function.
     */
    contains(value, equalsFunction) {
        return this.indexOf(value, equalsFunction) != -1;
    }

    /**
     * iterate through the list and execute the callback function once per element.
     * to break the iteration return false in the callback function.
     * @param {function(Object):boolean} callback The callback function.
     */
    forEach(callback) {
        let curr = this.firstNode;
        while (curr != null) {
            if (callback(curr.element) == false) break;
            curr = curr.next;
        }
    }

    /**
     * Concat the list with another linkedList.
     * @param {Object} list LinkedList to concat.
     * @returns {boolean} true, or false if list is undefined.
     */
    concat(list) {
        if (!list) return false;
        list.forEach((a) => {
            this.addLast(a);
        });
        return true;
    }

    /**
     * Return a sublist of the linkedlist starting at the index beginIndex and ending at the index endIndex exclusif.
     * @param {number} beginIndex The starting index.
     * @param {number} endIndex the ending index.
     * @returns {Object} The sublist.
     */
    subList(beginIndex, endIndex) {
        if (beginIndex > endIndex || beginIndex < 0 || endIndex > this.nbElements) return false;
        list = new LinkedList();
        node = this.getNode(beginIndex);
        for (index = beginIndex; index < endIndex; index++) {
            list.addLast(node.element);
            node = node.next;
        }
        return list;
    }

    /**
     * To reduce the list to one element using callback function like arrays.
     * @param {function(Object,Object):Object} callback The callback function.
     */
    reduce(callback) {
        let curr = this.firstNode;
        let save = null;
        while (curr != null) {
            let ans = callback(curr.element, save);
            if (ans == false) break;
            save = ans;
            curr = curr.next;
        }
        return save;
    }

    /**
     * To transform the linkedlist to an Array.
     * @returns {Object} Return the resulting array.
     */
    toArray() {
        let arr = [];
        this.forEach((element) => {
            arr.push(element);
        })
        return arr;
    }

    /**
     * Join values in the list by adding a separator between them.
     * @param {string} separator The separator to add between two values.
     * @returns {string} The resulting string.
     */
    join(separator) {
        return this.toArray().join(separator);
    }

    /**
     * Transform the linkedlist to a String.
     * @returns {string} string.
     */
    toString() {
        return JSON.stringify(this.toArray());
    }

}
  