

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
     * @param {Object} key 
     * @param {Object} value 
     * @returns {Object} return the previous value, or undefined if it doesn't exist.
     */
    put(key,value){
        let hash="##"+key.toString();
        let ans=undefined;
        if(this.map[hash]===undefined){
            this.nbElements++;
        }else ans=this.map[hash].value;
          this.map[hash]={
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
        let ans=this.map["##"+key.toString()];
        if(ans===undefined)return undefined;
        return ans.value;
    }

    /**
     * Remlove the key and the value coresponding to the specified key and return the value.
     * @param {Object} key 
     * @returns {Object} the value corresponding to the key removed.
     */
    remove(key){
        let ans=map["##"+key.toString()];
        if(ans===undefined)return undefined;
        delete this.map["##"+key.toString()];
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
        this.map={};
        this.nbElements=0;
    }

    /**
     * Check if the specified key already exist in the map.
     * @param {Object} key 
     * @returns {boolean} true, or false if the key doesn't exist.
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
            for(key in this.map){           
                if(this.map[key].value==value)return true;
            }
        }else{
            for(key in this.map){           
                if(equalFunction(this.map[key].value,value))return true;
            }
        }
        return false;
    }

    /**
     * @returns {Object} array that contains all the keys.
     */
    keySet(){
        let ans=[];
        for(key in this.map){
            ans.push(this.map[key].key);
        }
        return ans;
    }

    /**
     * @returns {Object} array that contains all the values.
     */
    valueSet(){
        let ans=[];
        for(key in this.map){
            ans.push(this.map[key].value);
        }
        return ans;
    }

    /**
     * Call the callback function for every element in the map,
     * to break the iteration the callback function must return false.
     * @param {*} callback The callback function
     */
    forEach(callback){
        for(let key in this.map){
            let res=this.map[key];
            if(res.key===undefined)continue;
            if(callback(res.key,res.value)===false)break;
        }
    }
    
    /**
     * Call the callback function for every element in the map,
     * @param {callback(Object)} callback 
     * @returns {Object} new map.
     */
    Map(callback){
        let newMap=new HashMap();
        for(let key in this.map){
            let res=this.map[key];
            if(res.key===undefined)continue;
            newMap.put(res.key,callback(res.value));
        }
        return newMap;
    }

    /**
     * keep in the array only elements that satisfies the condition
     * specified in the callback function
     * @param {callback(Object):boolean} callback 
     * @returns {Object} new map.
     */
    Filter(callback){
        let newMap=new HashMap();
        for(let key in this.map){
            let res=this.map[key];
            if(res.key===undefined)continue;
            if(callback(res.value))newMap.put(res.key,res.value);
        }
        return newMap;
    }

    /**
     * Reduce the elements in the array to one element
     * @param {callback(Object,Object):Object} callback 
     * @returns {Object} reduced element.
     */
    Reduce(callback){
        let newMap=new HashMap();
        let reduced=undefined;
        for(let key in this.map){
            let res=this.map[key];
            if(res.key===undefined)continue;
            if(reduced===undefined)reduced=res.value
            else reduced=callback(reduced,res.value);
        }
        return reduced;
    }

    

}
