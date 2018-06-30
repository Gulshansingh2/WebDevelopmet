function getStuff(){
	var list=document.querySelectorAll('#cam');
	for(var i=0;i<list.length;i++)
	list[i].onclick=talk;
}
function talk(){
	alert('YoYo!');
}
window.onload=getStuff;