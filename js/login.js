$("input[type=button]").click(function() { 
		login2() //Recojo la información. Yo creo el nombre. *data-"nombre"*-> Ejemplo: data-api
});

function login2() {	
	user = document.querySelector("#login").value;
	pass = document.querySelector("#password").value;

	if(user == "admin" && pass == "1234"){
		localStorage.setItem("user", user);
		window.location="cartas.html";
	}else{
		
		$("#alert-pro").removeClass("invisible");
	}
}


