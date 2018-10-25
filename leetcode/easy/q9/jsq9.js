/**
 * @param {number} 
 * @return {boolean}
 */

var isPalindrome = function(x) {
    if(x < 0 || x %10 === 0 && x != 0){return false}
    var re = Number(x.toString().split('').reverse().join(''));
    return x===re
};