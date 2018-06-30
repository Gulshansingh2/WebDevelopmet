var pageCounter = 1;
var btn  = document.getElementById("btn");
var animalContainer = document.getElementById("animal-info");

btn.addEventListener("click",function(){
	var ourReq = new XMLHttpRequest();
	ourReq.open('GET','https://learnwebcode.github.io/json-example/animals-' + pageCounter +'.json');
	ourReq.onload = function(){
		if (ourReq.status >= 200 && ourReq.status < 400){
			//console.log(ourReq.responseText);
			var ourData = JSON.parse(ourReq.responseText);
			//console.log(ourData[0]);
			renderHTML(ourData);
		} else {
			console.log("Connected to the server but it returned an error.");
		}
	};
	
	ourReq.onerror = function() {
		console.log("Connection error");
	};
	
	ourReq.send();
	pageCounter++;
	if (pageCounter > 3){
		btn.classList.add("hide-me");
	}
});


function renderHTML(data){
	var htmlstr = "";
	
	for(i = 0; i < data.length;i++){
		htmlstr += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";
		
		for(j = 0; j < data[i].foods.likes.length; j++){
			if(j == 0){
				htmlstr += data[i].foods.likes[j];
			}
			else {
				htmlstr += " and " + data[i].foods.likes[j];
			}
		}
		
		htmlstr += ' and dislikes ';
		
		for(j = 0; j < data[i].foods.dislikes.length; j++){
			if(j == 0){
				htmlstr += data[i].foods.dislikes[j];
			}
			else {
				htmlstr += " and " + data[i].foods.dislikes[j];
			}
		}
		
		htmlstr += '.</p>';
	}
	
	animalContainer.insertAdjacentHTML('beforeend',htmlstr);
}
