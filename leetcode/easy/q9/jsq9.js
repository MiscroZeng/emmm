/**
 * @param {number} 
 * @return {boolean}
 */

var isPalindrome = function(x) {
    var bool;
    var re = Number(x.toString().split('').reverse().join(''));
    console.log("x:" + x + " re:" + re);
    (x===re)? bool = true : bool = false;
    return bool
};