// When the user clicks the submit button
document.querySelector('button').addEventListener('click', function(event) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    
    // If it empty, an error message appears
    if (!name || !email) {
        alert('Error');
        event.preventDefault();  // Stop the form from submitting if it empty
    } else {
        alert('Submitted!');
    }
});
