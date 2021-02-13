let arei = [441, 1935, 2116, 9, 17, 1521, 50, 169, 25];

let arre = [1, 3, 1, 3, 4, 555, 556, 455, 5, 6, 7, 7, 6, 5, 555, 556, 455, 4, 3, 2, "string", "string", "another", "another"];
let arreUnsorted = [1, 3, 1, 3, 4, 555, 556, 455, 5, 6, 7, 7, 6, 5, 4, 3, 2, "string", "string", "another", "another"];

let areWhole = arei.filter(function (element){
    return Number.isInteger(Math.sqrt(element));
});

let rHol = arei.filter((element) => Number.isInteger(Math.sqrt(element)) ? true : false );

arre.sort();

let uniq = arre.filter((element, index, array) => (!(element ===  array[index+1])));

// function sortingFn(element, index, array) {
//     console.log(element, "element");
//     for (let e of array) {
//         console.log(e, "e");
//         debugger;
//         if (element === e) {
//             console.log(e, "e2");
//             return true;
//         }
//     }
// }

// console.clear();
// for (e of arreUnsorted) {
//     console.log(e);
// }


// let unique = arreUnsorted.filter((element, index, array) => sortingFn(element, index, array));

// let unique2 = arreUnsorted.filter(function (element, index, array) {
//     for (let e of array) {
//         console.log(e, "e");
//         console.log(element, "element");
//         debugger;
//         if (element === e) {
//             console.log(e, "e2");
//             return false;
//         }
//         else {
//             return true;
//         }
//     }
// });




// console.log(rHol);


// console.log(unique2);
// console.log(arre);

// console.log(areWhole);


console.log(uniq);