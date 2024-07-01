function PalindromeChecker(strng) {
    for (let i = 0; i < strng.length / 2; i++) {
        if (strng[i] !== strng[strng.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

function enterInput() {
    let userInput = prompt("Enter an input").toLowerCase();
    if (userInput === null || userInput === "") {
       console.log("Invalid input");
        
    }
    //userInput = userInput
    console.log(PalindromeChecker(userInput));
}

enterInput(); 
