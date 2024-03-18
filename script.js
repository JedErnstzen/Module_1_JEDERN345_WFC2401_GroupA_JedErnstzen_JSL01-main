function validateSyntax() {
    
    // fetches value from html and also trims whitespace
    let input = document.getElementById('petInput').value.trim();
    
    // declares a variable that is named
    let petStart = "pet_";

    // Constructs regex pattern starting with dynamic variable.
    let validParameter = new RegExp('^'.concat(petStart, '[0-9]{4}[a-zA-Z]+$'));



    let result = ''; // Placeholder for validation result

   
   // if and else statement which validates the result and changes the color of the Circle   
   if (validParameter.test(input)) {
    result = 'Valid Syntax';
    document.getElementById('indicator').style.backgroundColor = '#00FF00';
} else {
    result = 'Invalid Syntax';
    document.getElementById('indicator').style.backgroundColor = '#FF0000';
}

    // Updates the html result with the content from the variable "result"
    document.getElementById('result').innerText = result;
}










