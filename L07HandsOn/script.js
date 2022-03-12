function regexChecker() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let regexChecker = /^[A-Z][a-z]+/g;
    if(firstName.match(regexChecker)&& lastName.match(regexChecker)) {
        alert("Yay, Your Inputs are All Correct")
        console.log(true);
}
    else {
        alert("Oh,no. That is an invalid format");
        console.log(false);
    }

}
