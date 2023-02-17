function sendMessage() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    console.log(name);
    console.log(email);
    console.log(subject);
    console.log(message);


    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "info@sureshyadav.info.np",
        Password: "781BCC35845536BE80D3578E704FB563102D",
        To: "sureshyadav.info.np@gmail.com",
        From: email,
        Subject: subject,
        Body: message
    }).then(
        message => alert(message)
    );
}