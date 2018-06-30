function doFirst(){
	var x= document.getElementById('canvas');
	canvas=x.getContext('2d');
	//canvas.fillStyle="blue";
	//canvas.strokeStyle="red";
	//canvas.strokeRect(10,10,100,200);
	//canvas.fillRect(20,20,70,140);
	//canvas.clearRect(30,30,40,80);
	
	var g= canvas.createLinearGradient(0,0,500,500);
	g.addColorStop(1,"blue");
	g.addColorStop(.5,"green");
	g.addColorStop(.0,"red");
	canvas.fillStyle=g;
	canvas.fillRect(0,0,500,500);
}
function doSecond(){
	var x= document.getElementById('canvas');
	canvas=x.getContext('2d');

	canvas.beginPath();
	canvas.moveTo(100,100);
	canvas.lineTo(200,150);
	canvas.lineTo(250,50);
	canvas.lineTo(300,150);
	canvas.lineTo(400,100);
	canvas.lineTo(375,200);
	canvas.lineTo(475,250);
	canvas.lineTo(375,300);
	canvas.lineTo(425,400);
	canvas.lineTo(300,350);
	canvas.lineTo(250,450);
	canvas.lineTo(200,350);
	canvas.lineTo(100,400);
	canvas.lineTo(125,300);
	canvas.lineTo(25,250);
	canvas.lineTo(125,200);
	canvas.closePath();
	canvas.stroke();
}
window.addEventListener("load",doFirst,false)
window.addEventListener("load",doSecond,false)

