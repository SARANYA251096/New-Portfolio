function sendEmail() {
    Email.send({
      SecureToken: "9d9e5372-66a0-4781-96f3-5a8438461541",
      To: "vizhi121@gmail.com",
      From: document.getElementById("email").value,
      Subject: "New contact form enquiry",
      Body:
        "Name: " +
        document.getElementById("name").value +
        "<br> Email: " +
        document.getElementById("email").value +
        "<br> Message: " +
        document.getElementById("message").value,
    }).then((message) => alert("Message sent successfully!!!"));
}