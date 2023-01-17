function summ() {
	example = document.getElementById("example").value;
	document.getElementById("smooth").click();
	if(example === ""){
		document.getElementById("output").innerHTML = "output:";
	}
	else {
		output = eval(example)
		document.getElementById("output").innerHTML = "output:" + output;
	}

}
