function validateSyntax() {
    let input = document.getElementById('petInput').value.trim();
    

    // Validation logic goes here

    let petStart = "pet_";


    let validParameter = new parameter('^' + petStart + '[0-9]+[a-zA-Z]+$', 'i');

    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here


   // Check if input starts with 'pet_' and followed by alphanumeric characters

            document.getElementById('result').innerText = result;
}


