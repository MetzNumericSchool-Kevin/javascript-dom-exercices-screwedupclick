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


// le DOM frère
const potions = [
    {
    nom: "Potion de soin",
    description: "Cette potion rouge vif a une odeur de fraise des bois. Un seul gorgée et vos blessures se referment comme par magie ! Effets secondaires possibles: cheveux roses pendant 24h.",
    prix: 10,
    },
    {
    nom: "Potion de sommeil",
    description: "Un liquide bleu nuit qui sent la lavande et les rêves. Une goutte et vous dormirez comme un bébé dragon ! Attention: ne pas utiliser si vous devez combattre un troll dans les prochaines 8 heures.",
    prix: 50,
    },
];

element = document.querySelector("liste_potion");
element = document.querySelector("template_potion");
element = document.content.cloneNode(true);
document.getElementById("nom_potion").textContent = "La potion s'appelle Berserker.";
document.getElementById("prix_potion").textContent = "Le prix de la potion est de 35 PO.";
document.getElementById("description_potion").textContent = "Cette potion va augmenter ta vigeur mais te rendra fou après l'avoir prise. D'où son nom.";