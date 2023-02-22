const sumAll = function(n1,n2) {
    min = Math.min(n1,n2);
    max = Math.max(n1,n2);
    let sum = 0;
    if(typeof n1 === "string" || typeof n2 === "string") return "ERROR";
    else if(isNaN(n1) || isNaN(n2)) return "ERROR";
    else if(n1 < 0 || n2 < 0) return "ERROR";
    for (min;min <= max;min ++){
        sum += min
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
