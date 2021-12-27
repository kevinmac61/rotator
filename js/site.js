function getString(){
    // make the alert invisible
    document.getElementById("alert").classList.add("invisible");

    // get the input from the form
    let initValue = document.getElementById("theString").value;

    let returnObj = checkForPalindrome(initValue);
    
    displayMessage(returnObj);
}

    // check if a palindrome
function checkForPalindrome(initValue) {

    // convert to lowercase
    initValue = initValue.toLowerCase();
    //remove any spaces and other special characters
    let regex = /[^a-z0-9]/gi;
    initValue = initValue.replace(regex, "");

    let revString = [];
    let returnObj = {};

    for (let index = initValue.length - 1; index >= 0; index--) {
        revString += initValue[index];
    }

    if (revString == initValue){
        returnObj.msg = "Well Done! You've entered a Palindrome.";
    }
    else {
        returnObj.msg = "Sorry, you did not enter a Palindrome.";
    }

    returnObj.reversed = revString;
    return returnObj;
}


//display the message to screen
function displayMessage(returnObj) {
    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `Your phrase reversed is ${returnObj.reversed}`;
    // make the alert visible
    document.getElementById("alert").classList.remove("invisible");
}