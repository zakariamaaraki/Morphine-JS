
/**
 * @author: Maaraki Zakaria
 * HashSet implementation in javaScript
 */

class HashSet{

    constructor(){
        this.set={};
        this.nbElements=0;
    }

    /**
     * Put the value into the set.
     * @param {Object} value 
     * @returns {Boolean} True if the set did not already contain the specified element.
     */
    add(value){
        let hash="##"+value.toString();
        if(this.set[hash]===undefined){
            ans=true;
            this.nbElements++;
        }else ans=false;
          this.set[hash]=value;
        return ans;
    }

    /**
     * Remlove the specified value
     * @param {Object} value
     * @returns {Boolean} true if the value already exist, or false.
     */
    remove(value){
        let ans=this.set["##"+value.toString()];
        if(ans===undefined)return false;
        delete this.set["##"+value.toString()];
        this.nbElements--;
        return true;
    }

    /**
     * @returns {number} number of elements in the set.
     */
    size(){
        return this.nbElements;
    }

    /**
     * @returns true, or false if the map is not empty.
     */
    isEmpty(){
        return this.nbElements==0;
    }

    /**
     * Set set empty
     */
    clear(){
        this.set={};
        this.nbElements=0;
    }

    /**
     * Check if the specified value already exist in the set.
     * @param {Object} value
     * @returns {boolean} true, or false if the value doesn't exist.
     */
    contains(value){
        let ans=this.set["##"+value.toString()];
        if(ans===undefined)return false;
        return true;
    }

    /**
     * Call the callback function for every element in the set,
     * to break the iteration the callback function must return false.
     * @param {*} callback The callback function
     */
    forEach(callback){
        for(value in this.set){
            res=this.set[value];
            if(res===undefined)continue;
            if(callback(res)===false)break;
        }
    }

}