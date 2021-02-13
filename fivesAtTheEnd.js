// filter funkcija - sa modulus 0 i nepar rezulatom kad se podeli sa 5

var digit = 5;
var arei = [132, 125, 636, 732, 455, 668, 840, 246, 412, 334, 415];

var fivesAtTheEnd = arei.filter(function (element) {

    return (element % digit === 0 && element % 2 === 1)
});

console.log(fivesAtTheEnd);

