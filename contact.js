function submitForm(){
	let name = document.getElementById('input-name').value
	let email = document.getElementById('input-email').value
	let phoneNumber = document.getElementById('input-phone-number').value
	let textarea = document.getElementById('input-textarea').value
	let subject = document.getElementById('input-subject').value

	if( name == '') {
		alert("Isi dulu dong")
	} else if ( email == '') {
		alert("Isi dulu dong emailnya")
	} else if ( phoneNumber == '') {
		alert("Isi dulu dong emailnya")
	} else if ( textarea == '') {
		alert("Isi dulu dong emailnya")
	} else if ( subject == '') {
		alert("Isi dulu dong emailnya")
	}



	console.log(name)
	console.log(email)
	console.log(phoneNumber)
	console.log(textarea)
	console.log(subject)

	let receiverMail = 'arya@gmail.com'

	let a = document.createElement('a')

	a.href = 'mailto:' + receiverMail + '?subject' + '&body=Halo nama saya ' + name + ', ' + textarea 

	a.click()
}