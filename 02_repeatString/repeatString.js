const repeatString = function(str, num) {
   let rStr = "";
   if (num >= 0){
    for (let i = 0;i < num;i++){
            rStr += str;
    }
    return rStr;
    //    return str;
    } else {
        rStr = "ERROR";
        return rStr;
    }
   };
   


// Do not edit below this line
module.exports = repeatString;
