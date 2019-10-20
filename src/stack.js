/**
 * @author: Maaraki Zakaria
 * push, pop and peek in constant time.
 */

class Stack{

    constructor(){
        this.list=new LinkedList();
    }

    /**
     * Add an element to the top of the stack.
     * @param {Object} value The element to push to the stack. 
     */
    push(value){
        this.list.addLast(value);
    }

    /**
     * Remove and return the top of the stack.
     * @returns {Object} The top of the stack.
     */
    pop(){
        if(list.size==0)return null;
        let ans=this.list.getFirst();
        this.list.remove(0);
        return ans;
    }

    /**
     * Return the top of the stack.
     * @return {Object} The top of the stack.
     */
    peek(){
        return this.list.getFirst();
    }

    /**
     * Size of the stack.
     * @returns {number} The size of the stack.
     */
    size(){
        return this.list.size();
    }

    /**
     * Set the queue empty.
     */
    clear(){
        this.list.clear();
    }

    /**
     * Check if the stack is empty.
     * @returns {boolean} true, or false if the stack is not empty.
     */
    isEmpty(){
        return this.list.isEmpty();
    }

    /**
     * Check if the stack contain the specified element. 
     * @param {Object} value The value we are looking for.
     * @param {function(Object,Object):number} callback The equals callback function.
     */
    contains(value, callback){
        return this.list.contains(value,callback);
    }

    /**
     * Call the callback function for every element in the stack,
     * to break the iteration the callback function must return false.
     * @param {function(Object)} callback The callback function
     */
    forEach(callback){
        this.list.forEach(callback);
    }

     /**
     * Reverse the stack elements.
     */
    reverse(){
        this.list.reverse();
    }

    /**
     * @returns {Object}
     */
    toArray(){
        return this.list.toArray();
    }

    /**
     * @returns {string}
     */
    toString(){
        return this.list.toString();
    }

}