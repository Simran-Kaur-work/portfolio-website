function SendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "kaursimran0072@gmail.com",
        Password : "Sim@r_an_kaur_12345",
        To : 'kaursimran0072@gmail.com',
        From : document.getElementId("email").value,
        Subject : "new contact form from enquiry",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
    
}