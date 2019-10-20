
/**
 * @author: Maaraki Zakaria
 * Heap implementation in javaScript
 */

class Heap{

    constructor(compar){
      this.heap=[];
      this.comparator=(a,b)=>{
          return a<=b;
      }
      if(compar!=undefined)this.comparator=compar;
  
     /**
      * Print Recursively elements from the index specified in the input
      * @param {number} index 
      */
      this.printRec=(index)=>{
        if(index<this.heap.length){
          console.log(this.heap[index]);
          this.printRec(2*index+1);
          this.printRec(2*index+2);
        }
      }
  
     /**
      * Remove the element in the position corresponding to the specified input
      * @param {number} index 
      */
      this.removeTopRec=(index)=>{
        if(index*2+1>this.heap.length-1){
          for(let i=index+1;i<this.heap.length;i++){
            this.heap[index]=this.heap[i];
          }
          this.heap.pop();
        }else{
          if(index*2+2>this.heap.length-1){
            this.heap[index]=this.heap[index*2+1];
            this.removeTopRec(index*2+1);
          }else{
            if(this.comparator(this.heap[2*index+2],this.heap[2*index+1])){
              this.heap[index]=this.heap[2*index+1];
              this.removeTopRec(2*index+1);
            }else{
              this.heap[index]=this.heap[2*index+2];
              this.removeTopRec(2*index+2);
            }
          }
        }
      }
    }  
  
   /**
    * Insert the value specified in the input in the correct place.
    * @param {Object} value 
    */
    insert(value){
      this.heap.push(value);
      let index=this.heap.length-1;
      while(index>0 && this.comparator(this.heap[Math.floor((index-1)/2)],this.heap[index])){
        let tmp=this.heap[index];
        this.heap[index]=this.heap[Math.floor((index-1)/2)];
        this.heap[Math.floor((index-1)/2)]=tmp;
        index=Math.floor(index/2);
      }
    }
  
    /**
     * print the tree
     */
    print(){
      this.printRec(0);
    }
  
    /**
    * Return the element in the top of the heap
    * @returns {number} the element in the top of the heap
    */
    getTop(){
      if(this.heap.length==0)return undefined;
      else return this.heap[0];
    }
  
   /**
    * Remove the element in the top of the heap
    * @returns {number} the element in the top of the heap before deleting.
    */
    removeTop(){
      let ans=this.getTop();
      if(ans!==undefined)this.removeTopRec(0);
      return ans;
    }
  }