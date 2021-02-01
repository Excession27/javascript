var unitChosen = prompt("Enter a unit of measurement to convert (type Mi or Km): ");
var value = prompt("Enter a value: ");
var convertedValue;

if (unitChosen === "Mi" || unitChosen === "mi") {
    alert(value + " miles to kilometers is " + (value * 1.609) + "km"); 
}
else if (unitChosen === "Km" || unitChosen === "km") {
    alert(value + " kilometers to miles is " + (value * 0.62)+ " mi"); 
}
else {
    alert("Invalid entry.")
}