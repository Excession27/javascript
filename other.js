var nizOcena = [8, 5, 6, 9, 10, 8, 9, 7, 9, 3, 7, 4, 10, 2];

for (var i = 0; i < nizOcena.length; i++) {
    if (nizOcena[i] >= 6) {
        console.log("Polozio si, sa ocenom " + nizOcena[i]);
    }
    else {
        console.log("Pao si :(");
    }
}