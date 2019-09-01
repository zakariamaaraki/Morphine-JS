/**
 * @author: Maaraki Zakaria
 * enqueue and dequeue and peek in constant time.
 */

class Queue {

    constructor(){
        this.list=new LinkedList();
    }

    /**
     * Add an element to the top of the queue.
     * @param {Object} value 
     * @returns {boolean} True, or false if the queue is empty.
     */
    enqueue(value){
        return this.list.add(value);
    }

    /**
     * Return the element in the top of the queue.
     * @returns {Object} The first element in the Queue.
     */
    peek(){
        return this.list.getFirst();
    }

    /**
     * Return and remove the element in the top of the queue.
     * @returns {Object} element in the top of the queue.
     */
    dequeue(){
        if(this.list.size()==0)return null;
        else {
            let ans=this.list.get(0);
            this.list.remove(0);
            return ans;
        }
    }

    /**
     * Size of the queue.
     * @returns {number} The size of the queue.
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
     * Sheck if the queue is empty.
     * @returns {boolean} true, or false if the queue is not empty.
     */
    isEmpty(){
        return this.list.isEmpty();
    }

    /**
     * Check if the queue contain the element specified. 
     * @param {Object} value The value we are looking for.
     * @param {function(Object,Object):number} callback The equals callback function.
     */
    contains(value, callback){
        return this.list.contains(value,callback);
    }

    /**
     * Call the callback function for every element in the queue,
     * to break the iteration the callback function must return false.
     * @param {function(Object)} callback The callback function
     */
    forEach(callback){
        this.list.forEach(callback);
    }

    /**
     * Reverse the queue elements.
     */
    reverse(){
        this.list.reverse();
    }
}