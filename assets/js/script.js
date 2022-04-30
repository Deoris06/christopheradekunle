// alert("here")
function sendEmail(full_name, email, phone, message){
	
	var full_name = $(".full_name").val();
	var email = $(".email").val();
	var phone = $(".phone").val();
	var message = $(".message").val();
	// console.log(full_name, email, phone, message)
	Email.send({
    SecureToken : "2277c33c-385d-4205-8e12-24f104351d33",
    To : 'christopher.adekunle@outlook.com',
    From : "samuel@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}


$("#sending").on("click", function(e){
	e.preventDefault()
	// console.log('you')
	sendEmail()
})