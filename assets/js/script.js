// alert("here")
function sendEmail(full_name, email, phone, message){
	
	var full_name = $(".full_name").val();
	var email = $(".email").val();
	var phone = $(".phone").val();
	var message = $(".message").val();
	// console.log(full_name, email, phone, message)
	Email.send({
	Host: "smtp.elasticemail.com",
	Username : "adekschris@gmail.com",
	Password : "55DAAE186A3F5679A973E8F4FAEF9647D7E3",
	To : 'christopher.adekunle@outlook.com',
	From : `adekschris@gmail.com`,
	Subject : "INFORMATION",
	Body : `This is gotten fron`,
	}).then(
		message => alert("mail sent successfully")
	);
}


$("#sending").on("click", function(e){
	e.preventDefault()
	// console.log('you')
	sendEmail()
})