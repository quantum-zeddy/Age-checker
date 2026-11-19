let outlet = document.getElementById("output")
function check() {
	let age = document.getElementById("myAge").value

	if (age >= 18) {
		let qual = "you are an adult"
		outlet.textContent = qual
		console.log(qual)
	} else if (age === ""){
		let qual = "Kindly enter your age"
		outlet.textContent = qual
		console.log(qual)
	}
	else {
		let qual = "you are under 18"
		outlet.textContent = qual
	    console.log(qual)
	}
}
