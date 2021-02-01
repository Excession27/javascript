var nameToBeFound = prompt("Are you in our database? Enter your name to check: ");

var arrayOfNames = ["Marko", "Darko", "Zarko", "Janko", "Veljko", "Zeljko", "Vasko", "Velicko", "Branko", "Stanko", "Gvozdenko", "Strahinjko", "Strahinja"];

for (var i = 0; i < arrayOfNames.length; i++) {
    if (arrayOfNames[i] === nameToBeFound) {
        console.log("You are in our database, " + arrayOfNames[i] + ".");

    }
}