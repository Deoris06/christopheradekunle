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
	let isEmpty = Object.values(params);
	if(isEmpty[1].length !== 0 && isEmpty[3].length !== 0 && isEmpty[0].length !== 0){
		emailjs.send("service_63oqjzk", "template_t2y8ma7", params).then((response) => {
			if(response){
				Swal.fire({
				  position: 'top',
				  icon: 'success',
				  title: 'Your message has been sent!',
				  showConfirmButton: false,
				  timer: 1500
				})
			}
		}).catch((error) => {
			console.log("mail not sent", error)
		})

		

	}else{
		Swal.fire({
		  icon: 'error',
		  title: 'Oops...',
		  text: 'Please fill all the details in the form before you submit.',
		})
	}
	
}


$("#sending").on("click", function(e){
	e.preventDefault()
	// console.log('you')
	sendEmail();
})