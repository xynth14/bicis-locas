function primerMayuscula(string){
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function validarEmail(email) 
{
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
}

function validateForm(){
	/* Escribe tú código aquí */
	var name = document.getElementById("name").value;
	var lastname = document.getElementById("lastname").value;
	var inputEmail = document.getElementById("input-email").value; 
	var inputPassword = document.getElementById("input-password").value;
	var select = document.getElementsByClassName("form-control")[4].value;

	if(name == ""){
		alert("Ingrese un Nombre");
		document.getElementById("name").focus();
	}else if(!name.match(/[a-z]/)){
		alert("Nombre: Ingresar Sólo Letra");
		document.getElementById("name").focus();
	}else if(primerMayuscula(name.toLowerCase()) != name){
		alert("Nombre: Ingresar la primera letra en Mayuscula");
		document.getElementById("name").focus();
	}else if(lastname == ""){
		alert("Ingrese Apellido");
		document.getElementById("lastname").focus();
	}else if(!lastname.match(/[a-z]/)){
		alert("Apellido: Ingresar Solo Letra");
		document.getElementById("lastname").focus();
	}else if(primerMayuscula(lastname.toLowerCase()) != lastname){
		alert("Apellido: Ingresar la primera letra en Mayuscula");
		document.getElementById("lastname").focus();
	}else if(inputEmail == ""){
		alert("Ingrese Correo Electronico");
		document.getElementById("input-email").focus();
	}else if(!validarEmail(inputEmail)){
		alert("Ingresar Correo Electronico Válido! \n Ej. name@domain.com");
		document.getElementById("input-email").focus();
	}else if(inputPassword == ""){
		alert("Ingrese una Contraseña");
		document.getElementById("input-password").focus();
	}else if(inputPassword.length <= 5){
		alert("Contraseña: Debe ingresar al menos 6 caracteres");
		document.getElementById("input-password").focus();
	}else if(inputPassword == 123456 || inputPassword == 098754){
		alert("Password no puede ser igual a '123456' o '098754'");
		document.getElementById("input-password").focus();
	}else if(select== 0){
		alert("Debe Seleccionar un Tipo de Bici");
		document.getElementsByClassName("form-control")[4].focus();
	}else{
		alert("Datos validados con Exito!.");
	}

}