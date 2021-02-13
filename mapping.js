var array1 = [1,0,2,3,4];
var array2 = [3,5,6,7,8,13];

var array3 = array1.map(function(element, index){
    return element + array2[index]

})

var arrayThree = array2.map(function(element, index){
    return element + array1[index]

})

console.log(array3);
console.log(arrayThree);