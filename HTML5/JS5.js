function doFirst(){
	var x= document.getElementById('canvas');
	canvas=x.getContext('2d');
	
	var pic = new Image();
	pic.src="logo.png";
	pic.addEventListener("load",function(){canvas.drawImage(pic,0,0,
	x.width,x.height)},false);
	
	window.addEventListener("mousemove",cam,false);
}
function cam(e){
   canvas.clearRect(0,0,600,400);
   var xpos= e.clientX;
   var ypos= e.clientY;
   canvas.fillRect(xpos-25,ypos-25,50,50);
}
window.addEventListener("load",doFirst,false);	