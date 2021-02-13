

function calculateFactorial (factorial) {
    var calculation = 1;
    for (var factorial; factorial > 1; factorial--) {
        calculation *= factorial; 
    }
    return calculation;
}


console.log(calculateFactorial(5));