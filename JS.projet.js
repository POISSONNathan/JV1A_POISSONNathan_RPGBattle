/* Ici, j'initialise toutes mes variables qui me seront utiles dans mon JavaScript */

var bouttonJouer = document.getElementById("bouttonJouer");
var règles = document.getElementById("règles");
var interface = document.getElementById("interface");

var hpUlti2 = document.getElementById("hpUltiImage");
var hpUlti = document.getElementById("hpUlti");
var hpLight2 = document.getElementById("hpLightImage");
var hpLight = document.getElementById("hpLight");
var hpGlad2 = document.getElementById("hpGladImage");
var hpGlad = document.getElementById("hpGlad");
var hpNinja2 = document.getElementById("hpNinjaImage");
var hpNinja = document.getElementById("hpNinja");

var manaUlti = document.getElementById("manaUlti");
var manaLight = document.getElementById("manaLight");   
var manaGlad = document.getElementById("manaGlad");
var manaNinja = document.getElementById("manaNinja");

var manaUltiLigne = document.getElementById("manaUltiLigne");
var manaLightLigne = document.getElementById("manaLightLigne");
var manaGladLigne = document.getElementById("manaGladLigne");
var manaNinjaLigne = document.getElementById("manaNinjaLigne");

var hpEnnemi1 = document.getElementById("hpEnnemi1Image");
var hpEnnemi2 = document.getElementById("hpEnnemi2Image");
var hpEnnemi3 = document.getElementById("hpEnnemi3Image");

var ennemi1 = document.getElementById("ennemi1");
var ennemi2 = document.getElementById("ennemi2");
var ennemi3 = document.getElementById("ennemi3");

var boiteDialogue = document.getElementById("boiteDialogue");
var decompteDebutPartie = document.getElementById("decompteDebutPartie");

var ordre = document.getElementById("ordre");

var specialAvant = document.getElementById("specialAvant");
var specialApres = document.getElementById("specialApres");

var bouttonAttaque = document.getElementById("attaqueApres");
var bouttonDefense = document.getElementById("defendreApres");
var bouttonSpecial = document.getElementById("specialApres");

var avantUlti = document.getElementById("avantUlti");
var avantLight = document.getElementById("avantLight");
var avantGlad = document.getElementById("avantGlad");
var avantNinja = document.getElementById("avantNinja");

var texteUtli = document.getElementById("apresUlti");
var texteLight = document.getElementById("apresLight");
var texteGlad = document.getElementById("apresGlad");
var texteNinja = document.getElementById("apresNinja");



bouttonJouer.onclick = function () {
    règles.style.display = "none";
    interface.style.visibility = "visible";
    decompte();
}


function decompte(){

    setTimeout( function (){
        decompteDebutPartie.innerHTML = 3
    },0000);

    setTimeout( function (){
        decompteDebutPartie.innerHTML = 2
    },1000);

    setTimeout( function (){
        decompteDebutPartie.innerHTML = 1h
        
    },2000);

    setTimeout( function (){
        decompteDebutPartie.style.fontSize = '72px';
        decompteDebutPartie.innerHTML = "A toi de jouer !"
    },3000);

    setTimeout( function (){
        decompteDebutPartie.style.display = "none"
        choixUlti()
    },4000); 
}

function finManaUlti ()
{
    if (manaUlti.innerHTML == 0){
        manaUltiLigne.innerHTML ="FAFA"
    }
}






function boiteUlti(){
    ordre.style.visibility = "visible";
    avantUlti.style.display ="none";
    texteUtli.style.display ="block";
}

function finBoiteUlti(){
    ordre.style.visibility = "hidden";
    avantUlti.style.display ="block";
    texteUtli.style.display ="none";
}

/* Ici, j'initialise les choix de mon héro "Ulti" */

function choixUlti() {
    boiteUlti()
    boiteDialogue.innerHTML = "Ulti fait son choix"
    
    specialAvant.innerHTML = "Flamme (50 Mana)";
    specialApres.innerHTML = "> Flamme";

    var min=1; 
    var max=4;  
    var choisAttaqueRandom = Math.floor(Math.random() * (max - min)) + min; 

    var degatsAttaqueUlti =  Math.floor(Math.random() * 10 + 10)

    if (choisAttaqueRandom === 1) {
        bouttonAttaque.onclick = function(){
            hpEnnemi1.innerHTML = hpEnnemi1.innerHTML - degatsAttaqueUlti
            boiteDialogue.innerHTML = "Ulti attaque Burner et lui inflige " + degatsAttaqueUlti + " degats !"
            ordre.style.visibility = "hidden"
            finBoiteUlti()
            setTimeout(choixLight, 2000)        
        }
    }

    if (choisAttaqueRandom === 2) {
        bouttonAttaque.onclick = function(){
            hpEnnemi2.innerHTML = hpEnnemi2.innerHTML - degatsAttaqueUlti
            boiteDialogue.innerHTML = "Ulti attaque Cleaner et lui inflige " + degatsAttaqueUlti + " degats !"
            ordre.style.visibility = "hidden"
            finBoiteUlti()
            setTimeout(choixLight, 2000)        
        }
    }

    if (choisAttaqueRandom === 3) {
        bouttonAttaque.onclick = function(){
            hpEnnemi3.innerHTML = hpEnnemi3.innerHTML - degatsAttaqueUlti
            boiteDialogue.innerHTML = "Ulti attaque Hurler et lui inflige " + degatsAttaqueUlti + " degats !"
            ordre.style.visibility = "hidden"
            finBoiteUlti()
            setTimeout(choixLight, 2000)        
        }
    }


    bouttonDefense.onclick = function(){
        boiteDialogue.innerHTML = "Ulti se defend et ne peut pas être attaqué cette manche"
        ordre.style.visibility = "hidden"
        finBoiteUlti()
        setTimeout(choixLight, 2000)
    }
    
    
    var min=1; 
    var max=4;  
    var choisSpecialRandom = Math.floor(Math.random() * (max - min)) + min; 

    var degatsSpecialUlti =  Math.floor(Math.random() * 20 + 30)

    if (choisSpecialRandom === 1) {
        bouttonSpecial.onclick = function(){
            hpEnnemi1.innerHTML = hpEnnemi1.innerHTML - degatsSpecialUlti
            manaUlti.innerHTML = manaUlti.innerHTML - 50
            boiteDialogue.innerHTML = "Ulti utilise Flamme et inflige " + degatsSpecialUlti + " degats à Burner!"
            ordre.style.visibility = "hidden"
            finBoiteUlti()
            setTimeout(choixLight, 2000)        
        }
    }

    if (choisSpecialRandom === 2) {
        bouttonSpecial.onclick = function(){
            hpEnnemi2.innerHTML = hpEnnemi2.innerHTML - degatsSpecialUlti
            manaUlti.innerHTML = manaUlti.innerHTML - 50
            boiteDialogue.innerHTML = "Ulti utilise Flamme et inflige " + degatsSpecialUlti + " degats à Cleaner!"
            ordre.style.visibility = "hidden"
            finManaUlti () 
            finBoiteUlti()
            setTimeout(choixLight, 2000)       
        }
    }

    if (choisSpecialRandom === 3) {
        bouttonSpecial.onclick = function(){
            hpEnnemi3.innerHTML = hpEnnemi3.innerHTML - degatsSpecialUlti
            manaUlti.innerHTML = manaUlti.innerHTML - 50
            boiteDialogue.innerHTML = "Ulti utilise Flamme et inflige " + degatsSpecialUlti + " degats à Hurler!"
            ordre.style.visibility = "hidden"
            finBoiteUlti()
            setTimeout(choixLight, 2000)     
            finManaUlti ()   
        }
    }
}





function boiteLight(){
    ordre.style.visibility = "visible";
    avantLight.style.display ="none";
    texteLight.style.display ="block";
}

function finBoiteLight(){
    ordre.style.visibility = "hidden";
    avantLight.style.display ="block";
    texteLight.style.display ="none";
}

/* Ici, j'initialise les choix de mon héro "Light" */

function choixLight() {
    boiteLight()
    boiteDialogue.innerHTML = "Light fait son choix"

    specialAvant.innerHTML = "Impact (50 Mana)";
    specialApres.innerHTML = "> Impact";

    var min=1; 
    var max=4;  
    var choisAttaqueRandom = Math.floor(Math.random() * (max - min)) + min; 

    var degatsAttaqueLight =  Math.floor(Math.random() * 10 + 10)

    if (choisAttaqueRandom === 1) {
        bouttonAttaque.onclick = function(){
            hpEnnemi1.innerHTML = hpEnnemi1.innerHTML - degatsAttaqueLight
            boiteDialogue.innerHTML = "Light attaque Burner et lui inflige " + degatsAttaqueLight + " degats !"
            ordre.style.visibility === "hidden"
            finBoiteLight()
            setTimeout(choixGlad, 2000)
        }
    }

    if (choisAttaqueRandom === 2) {
        bouttonAttaque.onclick = function(){
            hpEnnemi2.innerHTML = hpEnnemi2.innerHTML - degatsAttaqueLight
            boiteDialogue.innerHTML = "Light attaque Cleaner et lui inflige " + degatsAttaqueLight + " degats !"
            ordre.style.visibility = "hidden"
            finBoiteLight()
            setTimeout(choixGlad, 2000)        
        }
    }

    if (choisAttaqueRandom === 3) {
        bouttonAttaque.onclick = function(){
            hpEnnemi3.innerHTML = hpEnnemi3.innerHTML - degatsAttaqueLight
            boiteDialogue.innerHTML = "Light attaque Hurler et lui inflige " + degatsAttaqueLight + " degats !"
            ordre.style.visibility = "hidden"
            finBoiteLight()
            setTimeout(choixGlad, 2000)        
        }
    }


    bouttonDefense.onclick = function(){
        boiteDialogue.innerHTML = "Light se defend et ne peut pas être attaqué cette manche"
        ordre.style.visibility = "hidden"
        finBoiteLight()
        setTimeout(choixGlad, 2000)    
    }
    
    
    var min=1; 
    var max=4;  
    var choisSpecialRandom = Math.floor(Math.random() * (max - min)) + min; 

    var degatsSpecialLight =  Math.floor(Math.random() * 20 + 30)

    if (choisSpecialRandom === 1) {
        bouttonSpecial.onclick = function(){
            hpEnnemi1.innerHTML = hpEnnemi1.innerHTML - degatsSpecialLight
            manaLight.innerHTML = manaLight.innerHTML - 50
            boiteDialogue.innerHTML = "Light utilise Impact et inflige " + degatsSpecialLight + " degats à Burner!"
            ordre.style.visibility = "hidden"
            finBoiteLight()
            setTimeout(choixGlad, 2000)        
        }
    }

    if (choisSpecialRandom === 2) {
        bouttonSpecial.onclick = function(){
            hpEnnemi2.innerHTML = hpEnnemi2.innerHTML - degatsSpecialLight
            manaLight.innerHTML = manaLight.innerHTML - 50
            boiteDialogue.innerHTML = "Light utilise Impact et inflige " + degatsSpecialLight + " degats à Cleaner!"
            ordre.style.visibility = "hidden"
            finBoiteLight()
            setTimeout(choixGlad, 2000)        
        }
    }

    if (choisSpecialRandom === 3) {
        bouttonSpecial.onclick = function(){
            hpEnnemi3.innerHTML = hpEnnemi3.innerHTML - degatsSpecialLight
            manaLight.innerHTML = manaLight.innerHTML - 50
            boiteDialogue.innerHTML = "Light utilise Impact et inflige " + degatsSpecialLight + " degats à Hurler!"
            ordre.style.visibility = "hidden"
            finBoiteLight()
            setTimeout(choixGlad, 2000)        
        }
    }
}





function boiteGlad(){
    ordre.style.visibility = "visible";
    avantGlad.style.display ="none";
    texteGlad.style.display ="block";
}

function finBoiteGlad(){
    ordre.style.visibility = "hidden";
    avantGlad.style.display ="block";
    texteGlad.style.display ="none";
}

/* Ici, j'initialise les choix de mon héro "Glad" */

function choixGlad() {
    boiteGlad()
    boiteDialogue.innerHTML = "Glad fait son choix"

    specialAvant.innerHTML = "Triomphe (50 Mana)";
    specialApres.innerHTML = "> Triomphe";

    var min=1; 
    var max=4;  
    var choisAttaqueRandom = Math.floor(Math.random() * (max - min)) + min; 

    var degatsAttaqueGlad =  Math.floor(Math.random() * 10 + 10)

    if (choisAttaqueRandom === 1) {
        bouttonAttaque.onclick = function(){
            hpEnnemi1.innerHTML = hpEnnemi1.innerHTML - degatsAttaqueGlad
            boiteDialogue.innerHTML = "Glad attaque Burner et lui inflige " + degatsAttaqueGlad + " degats !"
            ordre.style.visibility = "hidden"
            finBoiteGlad()
            setTimeout(choixNinja, 2000)        
        }
    }

    if (choisAttaqueRandom === 2) {
        bouttonAttaque.onclick = function(){
            hpEnnemi2.innerHTML = hpEnnemi2.innerHTML - degatsAttaqueGlad
            boiteDialogue.innerHTML = "Glad attaque Cleaner et lui inflige " + degatsAttaqueGlad + " degats !"
            ordre.style.visibility = "hidden"
            finBoiteGlad()
            setTimeout(choixNinja, 2000)        
        }
        
    }

    if (choisAttaqueRandom === 3) {
        bouttonAttaque.onclick = function(){
            hpEnnemi3.innerHTML = hpEnnemi3.innerHTML - degatsAttaqueGlad
            boiteDialogue.innerHTML = "Glad attaque Hurler et lui inflige " + degatsAttaqueGlad + " degats !"
            ordre.style.visibility = "hidden"
            finBoiteGlad()
            setTimeout(choixNinja, 2000)        
        }
    }


    bouttonDefense.onclick = function(){
        boiteDialogue.innerHTML = "Glad se defend et ne peut pas être attaqué cette manche"
        ordre.style.visibility = "hidden"
        finBoiteGlad()
        setTimeout(choixNinja, 2000)        
    }
    
    
    
    var min=1; 
    var max=4;  
    var choisSpecialRandom = Math.floor(Math.random() * (max - min)) + min; 

    var degatsSpecialGlad =  Math.floor(Math.random() * 20 + 30)

    if (choisSpecialRandom === 1) {
        bouttonSpecial.onclick = function(){
            hpEnnemi1.innerHTML = hpEnnemi1.innerHTML - degatsSpecialGlad
            manaGlad.innerHTML = manaGlad.innerHTML - 50
            boiteDialogue.innerHTML = "Glad utilise Triomphe et inflige " + degatsSpecialGlad + " degats à Burner!"
            ordre.style.visibility = "hidden"
            finBoiteGlad()
            setTimeout(choixNinja, 2000)        
        }
        
    }

    if (choisSpecialRandom === 2) {
        bouttonSpecial.onclick = function(){
            hpEnnemi2.innerHTML = hpEnnemi2.innerHTML - degatsSpecialGlad
            manaGlad.innerHTML = manaGlad.innerHTML - 50
            boiteDialogue.innerHTML = "Glad utilise Triomphe et inflige " + degatsSpecialGlad + " degats à Cleaner!"
            ordre.style.visibility = "hidden"
            finBoiteGlad()
            setTimeout(choixNinja, 2000)        
        }
        
    }

    if (choisSpecialRandom === 3) {
        bouttonSpecial.onclick = function(){
            hpEnnemi3.innerHTML = hpEnnemi3.innerHTML - degatsSpecialGlad
            manaGlad.innerHTML = manaGlad.innerHTML - 50
            boiteDialogue.innerHTML = "Glad utilise Triomphe et inflige " + degatsSpecialGlad + " degats à Hurler!"
            ordre.style.visibility = "hidden"
            finBoiteGlad()
            setTimeout(choixNinja, 2000)        
        }    
    }
}




function boiteNinja(){
    ordre.style.visibility = "visible";
    avantNinja.style.display ="none";
    texteNinja.style.display ="block";
}

function finBoiteNinja(){
    ordre.style.visibility = "hidden";
    avantNinja.style.display ="block";
    texteNinja.style.display ="none";
}

/* Ici, j'initialise les choix de mon héro "Ninja" */

function choixNinja() {
    boiteNinja()
    boiteDialogue.innerHTML = "Ninja fait son choix"
    
    specialAvant.innerHTML = "Shuriken (50 Mana)";
    specialApres.innerHTML = "> Shuriken";

    var min=1; 
    var max=4;  
    var choisAttaqueRandom = Math.floor(Math.random() * (max - min)) + min; 

    var degatsAttaqueNinja =  Math.floor(Math.random() * 10 + 10)

    if (choisAttaqueRandom === 1) {
        bouttonAttaque.onclick = function(){
            hpEnnemi1.innerHTML = hpEnnemi1.innerHTML - degatsAttaqueNinja
            boiteDialogue.innerHTML = "Ninja attaque Burner et lui inflige " + degatsAttaqueNinja + " degats !"
            ordre.style.visibility = "hidden"
            finBoiteNinja()
            setTimeout(choixBurner, 2000)
        }
    }

    if (choisAttaqueRandom === 2) {
        bouttonAttaque.onclick = function(){
            hpEnnemi2.innerHTML = hpEnnemi2.innerHTML - degatsAttaqueNinja
            boiteDialogue.innerHTML = "Ninja attaque Cleaner et lui inflige " + degatsAttaqueNinja + " degats !"
            ordre.style.visibility = "hidden"
            finBoiteNinja()
            setTimeout(choixBurner, 2000)
        }
    }

    if (choisAttaqueRandom === 3) {
        bouttonAttaque.onclick = function(){
            hpEnnemi3.innerHTML = hpEnnemi3.innerHTML - degatsAttaqueNinja
            boiteDialogue.innerHTML = "Ninja attaque Hurler et lui inflige " + degatsAttaqueNinja + " degats !"
            ordre.style.visibility = "hidden"
            finBoiteNinja()
            setTimeout(choixBurner, 2000)
        }
    }


    bouttonDefense.onclick = function(){
        boiteDialogue.innerHTML = "Ninja se defend et ne peut pas être attaqué cette manche"
        ordre.style.visibility = "hidden"
        finBoiteNinja()
        setTimeout(choixBurner, 2000)
    }
    
    
    var min=1; 
    var max=4;  
    var choisSpecialRandom = Math.floor(Math.random() * (max - min)) + min; 

    var degatsSpecialNinja =  Math.floor(Math.random() * 20 + 30)

    if (choisSpecialRandom === 1) {
        bouttonSpecial.onclick = function(){
            hpEnnemi1.innerHTML = hpEnnemi1.innerHTML - degatsSpecialNinja
            manaNinja.innerHTML = manaNinja.innerHTML - 50
            boiteDialogue.innerHTML = "Ninja utilise Shuriken et inflige " + degatsSpecialNinja + " degats à Burner!"
            ordre.style.visibility = "hidden"
            finBoiteNinja()
            setTimeout(choixBurner, 2000)
        }
    }

    if (choisSpecialRandom === 2) {
        bouttonSpecial.onclick = function(){
            hpEnnemi2.innerHTML = hpEnnemi2.innerHTML - degatsSpecialNinja
            manaNinja.innerHTML = manaNinja.innerHTML - 50
            boiteDialogue.innerHTML = "Ninja utilise Shuriken et inflige " + degatsSpecialNinja + " degats à Cleaner!"
            ordre.style.visibility = "hidden"
            finBoiteNinja()
            setTimeout(choixBurner, 2000)
        }
    }

    if (choisSpecialRandom === 3) {
        bouttonSpecial.onclick = function(){
            hpEnnemi3.innerHTML = hpEnnemi3.innerHTML - degatsSpecialNinja
            manaNinja.innerHTML = manaNinja.innerHTML - 50
            boiteDialogue.innerHTML = "Ninja utilise Shuriken et inflige " + degatsSpecialNinja + " degats à Hurler!"
            ordre.style.visibility = "hidden"
            finBoiteNinja()
            setTimeout(choixBurner, 2000)
        }
    }
}





function choixBurner(){




}



















hpUlti2.innerHTML = hpUlti.innerHTML
hpLight2.innerHTML = hpLight.innerHTML
hpGlad2.innerHTML = hpGlad.innerHTML
hpNinja2.innerHTML = hpNinja.innerHTML 