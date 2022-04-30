// alert("here")
(function(){
      emailjs.init("alxUeg3dPRCMNZVNU");
})();
function sendEmail(full_name, email, phone, message){
	
	var full_name = $(".full_name").val();
	var email = $(".email").val();
	var phone = $(".phone").val();
	var message = $(".message").val();
	var params = {
		from_name: full_name,
		email_id: email,
		phone: phone,
		message:message
	}
	emailjs.send("service_63oqjzk", "template_t2y8ma7", params).then((response) => {

	}).catch((error) => {

	})
}


$("#sending").on("click", function(e){
	e.preventDefault()
	// console.log('you')
	sendEmail()
})