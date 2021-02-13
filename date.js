const datum = new Date();

let currentDate = datum.getDate();

console.clear();
console.log(datum);
console.log(datum.toLocaleDateString("rs-rp"));


const mins = 10;

function addMins (prevDate, mins) {
    const prevDateMinutes = prevDate.getMinutes();
    prevDate.setMinutes((prevDateMinutes + mins));
    return prevDate;
}

console.log(addMins(datum, mins), "novi");




let largestDate;
let max = 0;
const arr = ['2019/02/14', '2016/07/02', '2010/08/30', '2010/08/30', '2030/08/30', '2020/08/30'];

arr.forEach(function (element, index, array){
    const firstDate = new Date(element) || 0;
    const firstTime = firstDate.getTime();
    if (firstTime > max){
        max = firstTime;
        largestDate = element;
    } 
})

console.log(largestDate, "najvece vreme");

// Write a method that clears array from all unnecessary customElements, like false, undefined, null, zero, empty strings

const arrei = [2, 5, "string", false, 4, 6, "krompiri", "", null, 0, "potatoes", 342, {ime: "strahinja"}];

// let newArrei = arrei.filter(function (element) { return !(element === "" && element === false && element === 0 && element === undefined) && !(element === null )})

let newArrei = arrei.filter(function (element) {return element});


console.log(newArrei);