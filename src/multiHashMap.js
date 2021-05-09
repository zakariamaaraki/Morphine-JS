/**
 * @author: Maaraki Zakaria
 * MultiHashMap implementation in javaScript
 */

class MultiHashMap {

    constructor() {
        this.multiMap = new HashMap();
        this.nbElements = 0;
    }

    /**
     * Put the key and the value into the map.
     * @param {Object} key
     * @param {Object} value
     * @returns {Object} return an array with the previous values.
     */
    put(key, value) {
        let ans = this.multiMap.get(key);
        if (ans === undefined) {
            this.multiMap.put(key, [value]);
            ans = [];
        } else {
            this.multiMap.get(key).push(value);
        }
        this.nbElements++;
        return ans;
    }

    /**
     * Return an array of the values corresponding to the the specified key.
     * @param {Object} key
     * @returns {Object} array of values corresponding to the specified key.
     */
    get(key) {
        let ans = this.multiMap.get(key);
        if (ans === undefined)
            return [];
        return ans;
    }

    /**
     * Remlove the key and the values coresponding to the specified key and return the value.
     * @param {Object} key
     * @returns {Object} the array of values corresponding to the key removed.
     */
    remove(key) {
        this.multiMap.remove(key);
    }

    /**
     *  @returns {number} number of elements in the map.
     */
    size() {
        return this.nbElements;
    }

    /**
     * @returns true, or false if the map is not empty.
     */
    isEmpty() {
        return this.nbElements == 0;
    }

    /**
     * Set map empty
     */
    clear() {
        this.nbElements = 0;
        this.multiMap.clear();
    }

    /**
     * Check if the specified key already exist in the map.
     * @param {Object} key
     * @returns {boolean} true, or false if the key doesn't exist.
     */
    containsKey(key) {
        return this.multiMap.containsKey(key);
    }

    /**
     * Check if the specified value already exist.
     * @param {Object} value
     * @param {function(Object,Object):boolean} equalFunction function that check if two Obejects are equal or not.
     * @returns {boolean} true or false if the specified value doesn't exist.
     */
    containsValue(value, equalFunction) {
        let arr = this.valueSet();
        if (equalFunction === undefined) {
            for (val in arr) {
                if (value == arr[val])
                    return true;
            }
        } else {
            for (val in arr) {
                if (equalFunction(value, arr[val]))
                    return true;
            }
        }
        return false;
    }

    /**
     * @returns {Object} array that contains all the keys.
     */
    keySet() {
        return this.multiMap.keySet();
    }

    /**
     * @returns {Object} array that contains all the values.
     */
    valueSet() {
        let tmp = this.multiMap.valueSet();
        let ans = [];
        this.forEach((key, values) => {
            values.forEach((val) => {
                ans.push(val);
            })
        })
        return ans;
    }

    /**
     * Call the callback function for every element in the map,
     * to break the iteration the callback function must return false.
     * @param {*} callback The callback function
     */
    forEach(callback) {
        this.multiMap.forEach(callback);
    }

}