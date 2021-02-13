var matrixRows = prompt("Enter the desired number of rows/columns: ");
var arrayForCalculation = {};
var sumOfDiagonalNumbersLtR = 0;
var sumOfDiagonalNumbersRtL = 0;


for (var i = 0; i < matrixRows; i++) {
    arrayForCalculation[i] = [Math.round(Math.random()*10)];
    for (var j = 0; j < matrixRows; j++) {
        arrayForCalculation[i][j] = Math.round(Math.random()*10);
    }

}

console.log(arrayForCalculation);

var counterIterator = arrayForCalculation[0].length -1;

for (var i = 0; i < arrayForCalculation[0].length; i++) {
    sumOfDiagonalNumbersLtR += arrayForCalculation[i][i];
    sumOfDiagonalNumbersRtL += arrayForCalculation[i][counterIterator];
    counterIterator -= 1;

}

console.log(sumOfDiagonalNumbersLtR);
console.log(sumOfDiagonalNumbersRtL);

if (sumOfDiagonalNumbersLtR === sumOfDiagonalNumbersRtL){
    console.log("The sum of diagonals in the matrix is equal to each other", sumOfDiagonalNumbersRtL, sumOfDiagonalNumbersLtR)
}