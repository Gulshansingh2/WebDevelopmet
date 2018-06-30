function doFirst(){
	var button = document.getElementById("button");
	button.addEventListener("click", save, false);
	display();
}
function save(){
	var one = document.getElementById("one").value;
	var two = document.getElementById("two").value;
	sessionStorage.setItem(one,two);
	document.getElementById("one").value="";
	document.getElementById("two").value="";
	display();
}	
function display(){
	var right = document.getElementById("right");
	right.innerHTML = "";
	
	for(var x=0;x<sessionStorage.length;x++){
		var a = sessionStorage.key(x);
		var b = sessionStorage.getItem(a);
		right.innerHTML += "Key: "+a+" - Value: "+b+"<br>"; 
	}
}
window.addEventListener("load",doFirst,false);