function checkPassword (pass) {
    pass = pass.trim();
    var isPassGrtr8 = (pass.length >= 8);
    var isPassSimple = (pass === "sifra" || pass === "test" || pass === "password");
    var numberCheck = /\d/;
    var hasNumbers = numberCheck.test(pass);
    
    console.log("Password is longer than 8 characters: ", isPassGrtr8);
    console.log("Password is generic: ", isPassSimple);
    console.log("Password has numbers: ", hasNumbers);
    
    if ((isPassSimple === false) && (hasNumbers === true) && (isPassGrtr8 === true)) {
        console.log("You have a great password :)");
    }
    else {
        console.log("You should probably create a better password.");
    }
}

var userPass = prompt("Enter a password: ");

checkPassword(userPass);