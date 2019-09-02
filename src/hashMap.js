
/**
 * @author: Maaraki Zakaria
 * HashMap implementation in javaScript
 */

class HashMap{

    constructor(){
        this.map={};
        this.nbElements=0;
    }

    /**
     * Put the key and the value into the map.
     * @param {string} key 
     * @param {Object} value 
     * @returns {Object} return the previous value, or undefined if it doesn't exist.
     */
    put(key,value){
        let hash="##"+key.toString();
        if(map[hash]===undefined){
            ans=undefined;
            this.nbElements++;
        }else ans=map[hash].value;
        map[hash]={
            key: key,
            value: value
        }
        return ans;
    }

    /**
     * Return the value corresponding to the the specified key.
     * @param {Object} key 
     * @returns {Object} value corresponding to the specified key.
     */
    get(key){
        let ans=map["##"+key.toString()];
        if(ans===undefined)return undefined;
        return ans.value;
    }

    /**
     * Remlove the key and the value coresponding to the specified key and return the value.
     * @param {Object} key 
     * @returns {Object} the value corresponding to the key valye removed.
     */
    remove(key){
        let ans=map["##"+key.toString()];
        if(ans===undefined)return undefined;
        delete map["##"+key.toString()];
        this.nbElements--;
        return ans.value;
    }

    /**
     * @returns {number} number of elements in the map.
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
     * Set map empty
     */
    clear(){
        map={};
        nbElements=0;
    }

    /**
     * Check if the specified key already exist in the map.
     * @param {Object} key 
     * @returns {boolean} true, or if the key doesn't exist.
     */
    containsKey(key){
        return this.get(key)!=undefined;
    }

    /**
     * Check if the specified value already exist.
     * @param {Object} value 
     * @param {function(Object,Object):boolean} equalFunction function that check if two Obejects are equal or not.
     * @returns {boolean} true or false if the specified value doesn't exist.
     */
    containsValue(value,equalFunction){
        if(equalFunction==undefined){
            for(key in map){           
                if(map[key].value==value)return true;
            }
        }else{
            for(key in map){           
                if(equalFunction(map[key].value,value))return true;
            }
        }
        return false;
    }

    /**
     * @returns {Object} array that contains all the keys.
     */
    keySet(){
        let ans=[];
        for(key in map){
            ans.push(map[key].key);
        }
        return ans;
    }

    /**
     * @returns {Object} array that contains all the values.
     */
    valueSet(){
        let ans=[];
        for(key in map){
            ans.push(map[key].value);
        }
        return ans;
    }

    /**
     * Call the callback function for every element in the map,
     * to break the iteration the callback function must return false.
     * @param {*} callback The callback function
     */
    forEach(callback){
        for(key in map){
            res=map[key];
            if(res.key===undefined)continue;
            if(callback(res.key,res.value)===false)break;
        }
    }

}