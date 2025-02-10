// achète mes potions, vilain !
let element = document.querySelector("description_boutique");
var newElement = document.createElement("p");
var textNode = document.createTextNode("Pour cela, il vous suffit de cliquer sur une des potions de la liste ci-dessous pour l'acheter.");
document.body.appendChild(p);


// roger le comique (ou pas)
element = document.querySelector("blague_de_roger_le_sorcier");
element.remove();


// event listerner (mais j'ai pas envie d'écouter lol)
const bouton = document.querySelector("call_archibald");
bouton.addEventListener("click", function() {
alert("🧙‍♂️ J'arrive, j'arrive Aventurier !");
});


// changeons les couleurs (mais pas trop non plus)
element = document.querySelectorAll("boites_magique");
bouton = document.querySelector("btn_change_red", "btn_change_blue", "btn_change_green");
btn_change_red = document.style.backgroundColor = "red";
btn_change_blue = document.style.backgroundColor = "blue";
btn_change_green = document.style.backgroundColor = "green";


