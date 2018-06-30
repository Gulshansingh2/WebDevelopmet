function doFirst(){
	var x= document.getElementById('canvas');
	canvas=x.getContext('2d');
	
	canvas.shadowOffsetX = 4;
	canvas.shadowOffsetY = 4;
	canvas.shadowBlur = 5;
	canvas.shadowColor = 'rgba(0,0,255,0.5)';
	
	canvas.font="bold 50px Tahoma";
	canvas.textAlign="start";
	canvas.fillText("start",100,100);
	
	canvas.save();
	
	canvas.translate(50,100);
	canvas.strokeText("after translate",0,100);
	
	canvas.rotate(1);
	canvas.strokeText("after rotation",100,100);
	
	canvas.scale(1.5,4);
	canvas.fillText("after scale",200,0);
	
	canvas.restore();
	canvas.fillText("after restore! ",300,100);
}
window.addEventListener("load",doFirst,false)	