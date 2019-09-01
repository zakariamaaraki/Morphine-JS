/**
 * @author: Maaraki Zakaria
 * poll, add and peek in constant time.
 */

class Deque {

    constructor(){
        this.list=new LinkedList();
    }

    /**
     * Add an element to the top.
     * @param {Object} value 
     */
    addFirst(value){
        this.list.addFirst(value);
    }

    /**
     * Add an element to the end.
     * @param {Object} value 
     */
    addLast(value){
        this.list.addLast(value);
    }

    /**
     * Add an element to the top.
     * Similar to addFirst.
     * @param {Object} value 
     */
    add(value){
        this.list.addFirst(value);
    }

    /**
     * Return the element in the top.
     * @returns {Object} The first element.
     */
    peek(){
        return this.list.getFirst();
    }

    /**
     * Return the element in the top.
     * Similar to peek
     * @returns {Object} The first element.
     */
    peekFirst(){
        return this.list.getFirst();
    }

    /**
     * Return the last element.
     * @returns {Object} The last element.
     */
    peekLast(){
        return this.list.getLast();
    }

    /**
     * Return and remove the element in the top.
     * @returns {Object} element in the top.
     */
    poll(){
        if(this.list.size()==0)return null;
        else {
            let ans=this.list.get(0);
            this.list.remove(0);
            return ans;
        }
    }

    /**
     * Return and remove the element in the top.
     * Similar to poll.
     * @returns {Object} element in the top.
     */
    pollFirst(){
        if(this.list.size()==0)return null;
        else {
            let ans=this.list.get(0);
            this.list.remove(0);
            return ans;
        }
    }

     /**
     * Return and remove the last element.
     * @returns {Object} the last element.
     */
    pollLast(){
        if(this.list.size()==0)return null;
        else {
            let ans=this.list.get(this.list.size()-1);
            this.list.remove(this.list.size()-1);
            return ans;
        }
    }

    /**
     * Size of the deque.
     * @returns {number} The size of the deque.
     */
    size(){
        return this.list.size();
    }

    /**
     * Set the deque empty.
     */
    clear(){
        this.list.clear();
    }

    /**
     * Check if the deque is empty.
     * @returns {boolean} true, or false if the deque is not empty.
     */
    isEmpty(){
        return this.list.isEmpty();
    }

    /**
     * Check if the deque contain the specified element. 
     * @param {Object} value The value we are looking for.
     * @param {function(Object,Object):number} callback The equals callback function.
     */
    contains(value, callback){
        return this.list.contains(value,callback);
    }

    /**
     * Call the callback function for every element in the deque,
     * to break the iteration the callback function must return false.
     * @param {function(Object)} callback The callback function
     */
    forEach(callback){
        this.list.forEach(callback);
    }

    /**
     * Reverse the deque elements.
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
     * @return {string}  
     */
    toString(){
        return this.list.toString();
    }
}