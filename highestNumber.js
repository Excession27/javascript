function findHighestValue (arei) {
    var highestValue = arei[0];
    for (var i = 0; i < arei.length; i++){
        if (highestValue < arei[i]) {
            highestValue = arei[i];
        }
    }
    console.log("Highest value in the provided array is: ", highestValue);
}

var properArray = [5, 10, 3, "string", 555, 2];

findHighestValue(properArray);