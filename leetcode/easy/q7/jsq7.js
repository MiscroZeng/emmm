var reverse = function(x) {
    var target;
    if(x > 0){
        target = x.toString().split("").reverse().join("");
        // return Number(target);
        target = Number(target)
    }else if(x < 0){
        target = x.toString().split("").reverse();
        target.pop();
        target.unshift("-");
        // return Number(target.join(""));
        target = Number(target.join(""));
    }else{
        return 0;
    }

    if(target >= (Math.pow(2, 31) - 1) || target <= Math.pow(-2, 31)){
        return 0;
    }else{
        return target;
    }
};