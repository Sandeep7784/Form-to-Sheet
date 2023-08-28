function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhoneNumber(phone) {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
}

function validateAndSubmit() {
    const name = document.querySelector('input[name="Name"]');
    const email = document.querySelector('input[name="E-Mail"]');
    const contact = document.querySelector('input[name="Contact"]');
    const city = document.querySelector('input[name="city"]');
    const message = document.querySelector('textarea[name="Message"]');

    if (name.value === '' || email.value === '' || contact.value === '' || city.value === '' || message.value === '') {
        alert('Please fill in all the required fields.');
    } else if (!isValidEmail(email.value)) {
        alert('Please enter a valid email address.');
    } else if (!isValidPhoneNumber(contact.value)) {
        alert('Please enter a valid contact number.');
    } else {
        $.ajax({
            url:"https://api.apispreadsheets.com/data/fdHcL2EQeWbTjdw8/",
            type:"post",
            data:$("#myForm").serializeArray(),
            success: function(){
                alert("Your message sent succesfully :)")
                name.value = '';
                email.value = '';
                contact.value = '';
                city.value = '';
                message.value = '';
            },
            error: function(){
                alert("There was an error :(")
            }
        });
    }
}
