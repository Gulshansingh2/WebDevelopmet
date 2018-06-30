function dofirst(){
	var x= document.getElementById('canvas');
	canvas=x.getContext('2d');
	canvas.shadowOffsetX = 4;
	canvas.shadowOffsetY = 4;
	canvas.shadowBlur = 5;
	canvas.shadowColor = 'rgba(0,0,255,0.5)';
	
	canvas.font="bold 50px Comic Sans MS";
	canvas.textAlign="start";
	canvas.fillText("My Video Player",100,50);
	
	barSize=600;
	movie=document.getElementById('movie');
	playButton=document.getElementById('playButton');
	Bar=document.getElementById('defaultBar');
	progressBar=document.getElementById('progressBar');
	
	playButton.addEventListener('click',playorpause, false);
	Bar.addEventListener('click',clickedBar, false);
}

function playorpause(){
	if(!movie.paused && !movie.ended){
		movie.pause();
		playButton.innerHTML='Play';
		window.clearInterval(updateBar);
	}
	else{
		movie.play();
		playButton.innerHTML='Pause';
		updateBar=setInterval(update, 500);
	}
}
function update(){
	if(!movie.ended){
		var size=parseInt(movie.currentTime*barSize/movie.duration);
		progressBar.style.width=size+'px';
	}
	else{
		progressBar.style.width='0px';
		playButton.innerHTML='Play';
		window.clearInterval(updateBar)
	}
}
function clickedBar(c){
	if(!movie.paused && !movie.ended){
		var mouseX=c.pageX-Bar.offsetLeft;
		var newtime=mouseX*movie.duration/barSize;
		movie.currentTime=newtime;
		progressBar.style.width=mouseX+'px';
	}
}
window.addEventListener('load',dofirst,false);