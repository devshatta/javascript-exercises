const sumAll = function(n, m) {
    if (n < 0 || m < 0 || typeof(m) !== 'number' || typeof(n) !== 'number'){
        return 'ERROR'
        } else {
            if(n < m){
                n1 = n
                n2 = m 
        }   else{
                n1 = m
                n2 = n
        }
        return (n1 + n2)*(n2 / 2)}
        };




// let sum;
//     let nNum = num1;
//     for (let i = 0; i < num2; i++){
//         nNum++;
//         sum += nNum;
//     } return sum;


// let msg;
//     if (
//         ((num1 || num2) < 0)
//     ){
//         msg = "ERROR";
//         return msg;
//     } else {
//         let sum = num1;
//         for (let i = 0; i < num2; i++){
//             sum += 1;
//             return sum;
//         }
//     } 
// // else {
//     let sum = num2;
//     for (let i = 0; i < num1; i++){
//         sum += 1;
//         return sum;
//     }
// }
//(Number.isInteger(num1) || Number.isInteger(num2))
// Do not edit below this line
module.exports = sumAll;
