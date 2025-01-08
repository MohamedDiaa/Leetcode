/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    if(this.length > 0) 
    {
       return this[this.length - 1] 
    } 
    return -1;    
};

let r = [3,null,(n)=> n + 1,10].last();
console.log(r);