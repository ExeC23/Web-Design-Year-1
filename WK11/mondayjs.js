function validateForm(){
	let name = document.getElementById("name").value;
	
	let nameErr = document.getElementById("name-error");
	
	nameErr.textContent = "";
	let isValid = true; //boolean flag, flips to false if something wrong in Form
	// check if name is valid
	if(name === "" || name.length < 2){
		nameErr.textContent = "please enter your name correctly";
		isValid = false;
	}
	// Finally set up the return
	if(isValid){
		alert("form submitted");
		return true;
	}else{
		return false;
	}
}

