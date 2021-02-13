function isNumber (elNumero) {
    if (typeof elNumero === "number") {
        console.log("It is a number.");
    }
    else {
        console.log("It is not a number.");
    }
    console.log(Number.isFinite(elNumero), elNumero);
}

var caseA = 4;
var caseB = "4";
var caseC = NaN;
var caseD = Infinity;
var caseE = "Good old string";
var caseF = 4.4;

isNumber(caseA);
isNumber(caseB);
isNumber(caseC);
isNumber(caseD);
isNumber(caseE);
isNumber(caseF);