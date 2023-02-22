const removeFromArray = function (array, ...args) {
    const newArray = [];
    array.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item);
          }
    });
        return newArray;
    };

    // #2 way
    // let removeArray = function(array, ...args){
    //     return array.filter(val => !args.includes(val))
    // }
    // Do not edit below this line
    module.exports = removeFromArray;
