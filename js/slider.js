'use strict';

/////////////////////////////////////////

var sliderIndex;
var pics;

function slideFoward(x){

	//Appel de la fonction showSlide, incrémentation
	showSlide(sliderIndex += x); 
}

//Fonction affiche slider
function showSlide(x){
	var i;

	//Récupération des éléments du slide
	pics=document.getElementsByClassName("e-slider");
	console.log(pics.length);
	console.log("sliderIndex : "+sliderIndex);

	//si le tableau element de slide est supérieur à argument 
	if(x > pics.length)
		{
			sliderIndex=1;
		}
		else{
			console.log("x = "+x);
			}
	if (x < 1)
		{
			sliderIndex = pics.length;
		}	
	else{
			console.log("x = "+x);
		}

		//Boucle qui donne un display none à tous les élémentsdu slide
	for (i=0;i<pics.length;i++){
		pics[i].style.display = "none";
	}

	//display = 'block' sur un element slide en fonction du slideIndex-1 
	pics[sliderIndex-1].style.display="block";	
}

sliderIndex=1;
var affslide=showSlide(sliderIndex);