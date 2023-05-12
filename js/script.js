function sendEmail() {
  var params = {
    from_name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_zpe4bup", "template_ecq5gyi", params)
    .then(function (res) {
      alert("Messsage sent successfully!!!");
    });
}
