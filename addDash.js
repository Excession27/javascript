function addDash (stringToBeDashed) {
    // Naravno ima i prostiji nacin sa + ili sa concat(), ali eto nasao sam i ovu funkciju pa rekoh da je iskoristim
    stringToBeDashed = stringToBeDashed.padEnd((stringToBeDashed.length + 1), "-");
    stringToBeDashed = stringToBeDashed.padStart((stringToBeDashed.length + 1), "-");
    return stringToBeDashed;
}

var userInput = prompt("Enter a string to which you want to add das")

console.log(addDash(userInput));