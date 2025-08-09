function Validar() {
	let red = document.getElementById("Nmbr").value;
	let clave = document.getElementById("pswrd").value;
	let seguridad = document.getElementById("sec").value;
	let oculta = document.getElementById("oc").value;
	
	let form_cont = document.getElementById("formulario");
	
	red.required = true;
	clave.required = true;
	seguridad.required = true;
	oculta.required = true;
	
	let Seguridad = ["WPA", "WEP"];
	let Oculta = ["yes", "no"];
	
	let space = document.getElementById("top");
	let m1 = document.getElementById("E1");
	let m2 = document.getElementById("E2");
	let m3 = document.getElementById("E3");
	let m4 = document.getElementById("E4");
	
	m1.style.display = "none";
	m2.style.display = "none";
	m3.style.display = "none";
	m4.style.display = "none";
	space.style.display = "block";
	
	if (red.length < 1 || red.length > 32) {m1.style.display = "block";} 
	else if (clave.length < 1) {m2.style.display = "block";}
	else if (!Seguridad.includes(seguridad)) {m3.style.display = "block";}
	else if (!Oculta.includes(oculta)) {m4.style.display = "block";}
	else {
		space.style.display = "none";
		//form_cont.method = "POST";
		form_cont.submit()
	}
}