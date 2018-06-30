function doFirst(){
	mypic=document.getElementById('logo');
	mypic.addEventListener("dragstart",startDrag,false);
	mypic.addEventListener("dragend",endDrag,false);
	lbox=document.getElementById('left');
	lbox.addEventListener("dragenter",dragenter,false);
	lbox.addEventListener("dragleave",dragleave,false);
	lbox.addEventListener("dragover",function(e){e.preventDefault();},false);
	lbox.addEventListener("drop",dropped,false);
}
function startDrag(e){
	var code = '<img src="logo.png">';
	e.dataTransfer.setData('Text',code);
}
function dropped(e){
	e.preventDefault();
	lbox.innerHTML = e.dataTransfer.getData('Text');
}
function endDrag(e){
	pic = e.target;
	pic.style.visibility= 'hidden';
}
function dragenter(e){
	e.preventDefault();
	lbox.style.background="SkyBlue";
	lbox.style.border="3px solid orange";
}
function dragleave(e){
	e.preventDefault();
	lbox.style.background="white";
	lbox.style.border="3px solid navy";
}
window.addEventListener("load",doFirst,false);
