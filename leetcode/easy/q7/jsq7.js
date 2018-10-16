var reverse = function(x) {
    var target;
    if(x > 0 && x < Math.pow(2, 31) - 1){
        target = x.toString().split("").reverse().join("");
        return target;
    }else if( x > Math.pow(-2, 31) && x < 0){
        target = x.toString().split("").reverse();
        target.pop();
        target.unshift("-");
        return Number(target.join(""));
    }else{
        return 0;
    }
};