/* Ici, j'initialise toutes mes variables qui me seront utiles dans mon JavaScript */

var bouttonJouer = document.getElementById("bouttonJouer");
var règles = document.getElementById("règles");
var interface = document.getElementById("interface");

var hpUlti = document.getElementById("hpUlti");
var hpLight = document.getElementById("hpLight");
var hpGlad = document.getElementById("hpGlad");
var hpNinja = document.getElementById("hpNinja");

var hpUltiLigne = document.getElementById("hpUltiLigne");
var hpLightLigne = document.getElementById("hpLightLigne");
var hpGladLigne = document.getElementById("hpGladLigne");
var hpNinjaLigne = document.getElementById("hpNinjaLigne");

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

var hero1Milieu = document.getElementById("hero1Milieu");
var hero2Milieu = document.getElementById("hero2Milieu");
var hero3Milieu = document.getElementById("hero3Milieu");
var hero4Milieu = document.getElementById("hero4Milieu");

var hero1 = document.getElementById("hero1");
var hero2 = document.getElementById("hero2");
var hero3 = document.getElementById("hero3");
var hero4 = document.getElementById("hero4");







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
        decompteDebutPartie.innerHTML = 1

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





function finManaUlti (){
    if (manaUlti.innerHTML == 0){
        manaUltiLigne.innerHTML ="0 mana"
    }
}

function finManaLight (){
    if (manaLight.innerHTML == 0){
        manaLightLigne.innerHTML ="0 mana"
    }
}

function finManaGlad (){
    if (manaGlad.innerHTML == 0){
        manaGladLigne.innerHTML ="0 mana"
    }
}

function finManaNinja (){
    if (manaNinja.innerHTML == 0){
        manaNinjaLigne.innerHTML ="0 mana"
    }
}





function finHpUlti (){
    if (hpUlti.innerHTML <= 0){
        hpUltiLigne.innerHTML = "Ulti est mort  "
        manaUltiLigne.style.visibility = "hidden"
        avantUlti.style.visibility = "hidden"
        hero1.style.visibility = "hidden"
    }
}

function finHpLight (){
    if (hpLight.innerHTML <= 0){
        hpLightLigne.innerHTML ="Light est mort"
        manaLightLigne.style.visibility = "hidden"
        avantLight.style.visibility = "hidden"
        hero2.style.visibility = "hidden"
    }
}

function finHpGlad (){
    if (hpGlad.innerHTML <= 0){
        hpGladLigne.innerHTML ="Glad est mort"
        manaGladLigne.style.visibility = "hidden"
        avantGlad.style.visibility = "hidden"
        hero3.style.visibility = "hidden"
    }
}

function finHpNinja (){
    if (hpNinja.innerHTML <= 0){
        hpNinjaLigne.innerHTML ="Ninja est mort"
        manaNinjaLigne.style.visibility = "hidden"
        avantNinja.style.visibility = "hidden"
        hero4.style.visibility = "hidden"
    }
}





function finHpBurner (){
    if (hpEnnemi1.innerHTML <= 0){
        ennemi1.style.visibility = "hidden"
    }
}

function finHpCleaner (){
    if (hpEnnemi2.innerHTML <= 0){
        ennemi2.style.visibility = "hidden"
    }
}

function finHpHurler (){
    if (hpEnnemi3.innerHTML <= 0){
        ennemi3.style.visibility = "hidden"
    }
}





function boiteUlti(){
    ordre.style.visibility = "visible";
    avantUlti.style.display ="none";
    texteUtli.style.display ="block";
    hero1Milieu.style.display = "block"
    hero1.style.visibility = "hidden"
}

function finBoiteUlti(){
    ordre.style.visibility = "hidden";
    avantUlti.style.display ="block";
    texteUtli.style.display ="none";
    hero1Milieu.style.display = "none"
    hero1.style.visibility = "visible"
}

/* Ici, j'initialise les choix de mon héro "Ulti" */

function choixUlti() {
    boiteUlti()
    boiteDialogue.innerHTML = "Ulti fait son choix"
    
    specialAvant.innerHTML = "Flamme (50 Mana)";
    specialApres.innerHTML = "> Flamme";

    var min=1; 
    var max=4;  
    var choixAttaqueRandom = Math.floor(Math.random() * (max - min)) + min; 

    var degatsAttaqueUlti =  Math.floor(Math.random() * 10 + 10)

    if (choixAttaqueRandom === 1) {
        bouttonAttaque.onclick = function(){
            hpEnnemi1.innerHTML = hpEnnemi1.innerHTML - degatsAttaqueUlti
            boiteDialogue.innerHTML = "Ulti attaque Burner et lui inflige " + degatsAttaqueUlti + " degats !"
            ordre.style.visibility = "hidden"
            finHpBurner ()
            finBoiteUlti()
            setTimeout(choixLight, 2000)        
        }
    }

    if (choixAttaqueRandom === 2) {
        bouttonAttaque.onclick = function(){
            hpEnnemi2.innerHTML = hpEnnemi2.innerHTML - degatsAttaqueUlti
            boiteDialogue.innerHTML = "Ulti attaque Cleaner et lui inflige " + degatsAttaqueUlti + " degats !"
            ordre.style.visibility = "hidden"
            finHpCleaner ()
            finBoiteUlti()
            setTimeout(choixLight, 2000)        
        }
    }

    if (choixAttaqueRandom === 3) {
        bouttonAttaque.onclick = function(){
            hpEnnemi3.innerHTML = hpEnnemi3.innerHTML - degatsAttaqueUlti
            boiteDialogue.innerHTML = "Ulti attaque Hurler et lui inflige " + degatsAttaqueUlti + " degats !"
            ordre.style.visibility = "hidden"
            finHpHurler ()
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
    var choixSpecialRandom = Math.floor(Math.random() * (max - min)) + min; 

    var degatsSpecialUlti =  Math.floor(Math.random() * 20 + 30)

    if (choixSpecialRandom === 1) {
        bouttonSpecial.onclick = function(){
            hpEnnemi1.innerHTML = hpEnnemi1.innerHTML - degatsSpecialUlti
            manaUlti.innerHTML = manaUlti.innerHTML - 50
            boiteDialogue.innerHTML = "Ulti utilise Flamme et inflige " + degatsSpecialUlti + " degats à Burner!"
            ordre.style.visibility = "hidden"
            finHpBurner ()
            finBoiteUlti()
            setTimeout(choixLight, 2000) 
            finManaUlti ()        
        }
    }

    if (choixSpecialRandom === 2) {
        bouttonSpecial.onclick = function(){
            hpEnnemi2.innerHTML = hpEnnemi2.innerHTML - degatsSpecialUlti
            manaUlti.innerHTML = manaUlti.innerHTML - 50
            boiteDialogue.innerHTML = "Ulti utilise Flamme et inflige " + degatsSpecialUlti + " degats à Cleaner!"
            ordre.style.visibility = "hidden"
            finHpCleaner ()
            finBoiteUlti()
            setTimeout(choixLight, 2000)  
            finManaUlti ()      
        }
    }

    if (choixSpecialRandom === 3) {
        bouttonSpecial.onclick = function(){
            hpEnnemi3.innerHTML = hpEnnemi3.innerHTML - degatsSpecialUlti
            manaUlti.innerHTML = manaUlti.innerHTML - 50
            boiteDialogue.innerHTML = "Ulti utilise Flamme et inflige " + degatsSpecialUlti + " degats à Hurler!"
            ordre.style.visibility = "hidden"
            finHpHurler ()
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
    hero2Milieu.style.display = "block"
    hero2.style.visibility = "hidden"
}

function finBoiteLight(){
    ordre.style.visibility = "hidden";
    avantLight.style.display ="block";
    texteLight.style.display ="none";
    hero2Milieu.style.display = "none"
    hero2.style.visibility = "visible"
}

/* Ici, j'initialise les choix de mon héro "Light" */

function choixLight() {
    boiteLight()
    boiteDialogue.innerHTML = "Light fait son choix"

    specialAvant.innerHTML = "Impact (50 Mana)";
    specialApres.innerHTML = "> Impact";

    var min=1; 
    var max=4;  
    var choixAttaqueRandom = Math.floor(Math.random() * (max - min)) + min; 

    var degatsAttaqueLight =  Math.floor(Math.random() * 10 + 10)

    if (choixAttaqueRandom === 1) {
        bouttonAttaque.onclick = function(){
            hpEnnemi1.innerHTML = hpEnnemi1.innerHTML - degatsAttaqueLight
            boiteDialogue.innerHTML = "Light attaque Burner et lui inflige " + degatsAttaqueLight + " degats !"
            ordre.style.visibility === "hidden"
            finHpBurner ()
            finBoiteLight()
            setTimeout(choixGlad, 2000)
        }
    }

    if (choixAttaqueRandom === 2) {
        bouttonAttaque.onclick = function(){
            hpEnnemi2.innerHTML = hpEnnemi2.innerHTML - degatsAttaqueLight
            boiteDialogue.innerHTML = "Light attaque Cleaner et lui inflige " + degatsAttaqueLight + " degats !"
            ordre.style.visibility = "hidden"
            finHpCleaner ()
            finBoiteLight()
            setTimeout(choixGlad, 2000)        
        }
    }

    if (choixAttaqueRandom === 3) {
        bouttonAttaque.onclick = function(){
            hpEnnemi3.innerHTML = hpEnnemi3.innerHTML - degatsAttaqueLight
            boiteDialogue.innerHTML = "Light attaque Hurler et lui inflige " + degatsAttaqueLight + " degats !"
            ordre.style.visibility = "hidden"
            finHpHurler ()
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
    var choixSpecialRandom = Math.floor(Math.random() * (max - min)) + min; 

    var degatsSpecialLight =  Math.floor(Math.random() * 20 + 30)

    if (choixSpecialRandom === 1) {
        bouttonSpecial.onclick = function(){
            hpEnnemi1.innerHTML = hpEnnemi1.innerHTML - degatsSpecialLight
            manaLight.innerHTML = manaLight.innerHTML - 50
            boiteDialogue.innerHTML = "Light utilise Impact et inflige " + degatsSpecialLight + " degats à Burner!"
            ordre.style.visibility = "hidden"
            finHpBurner ()
            finBoiteLight()
            setTimeout(choixGlad, 2000)    
            finManaLight ()    
        }
    }

    if (choixSpecialRandom === 2) {
        bouttonSpecial.onclick = function(){
            hpEnnemi2.innerHTML = hpEnnemi2.innerHTML - degatsSpecialLight
            manaLight.innerHTML = manaLight.innerHTML - 50
            boiteDialogue.innerHTML = "Light utilise Impact et inflige " + degatsSpecialLight + " degats à Cleaner!"
            ordre.style.visibility = "hidden"
            finHpCleaner ()
            finBoiteLight()
            setTimeout(choixGlad, 2000)   
            finManaLight ()     
        }
    }

    if (choixSpecialRandom === 3) {
        bouttonSpecial.onclick = function(){
            hpEnnemi3.innerHTML = hpEnnemi3.innerHTML - degatsSpecialLight
            manaLight.innerHTML = manaLight.innerHTML - 50
            boiteDialogue.innerHTML = "Light utilise Impact et inflige " + degatsSpecialLight + " degats à Hurler!"
            ordre.style.visibility = "hidden"
            finHpHurler ()
            finBoiteLight()
            setTimeout(choixGlad, 2000)   
            finManaLight ()     
        }
    }
}





function boiteGlad(){
    ordre.style.visibility = "visible";
    avantGlad.style.display ="none";
    texteGlad.style.display ="block";
    hero3Milieu.style.display = "block"
    hero3.style.visibility = "hidden"
}

function finBoiteGlad(){
    ordre.style.visibility = "hidden";
    avantGlad.style.display ="block";
    texteGlad.style.display ="none";
    hero3Milieu.style.display = "none"
    hero3.style.visibility = "visible"
}

/* Ici, j'initialise les choix de mon héro "Glad" */

function choixGlad() {
    boiteGlad()
    boiteDialogue.innerHTML = "Glad fait son choix"

    specialAvant.innerHTML = "Triomphe (50 Mana)";
    specialApres.innerHTML = "> Triomphe";

    var min=1; 
    var max=4;  
    var choixAttaqueRandom = Math.floor(Math.random() * (max - min)) + min; 

    var degatsAttaqueGlad =  Math.floor(Math.random() * 10 + 10)

    if (choixAttaqueRandom === 1) {
        bouttonAttaque.onclick = function(){
            hpEnnemi1.innerHTML = hpEnnemi1.innerHTML - degatsAttaqueGlad
            boiteDialogue.innerHTML = "Glad attaque Burner et lui inflige " + degatsAttaqueGlad + " degats !"
            ordre.style.visibility = "hidden"
            finHpBurner ()
            finBoiteGlad()
            setTimeout(choixNinja, 2000)        
        }
    }

    if (choixAttaqueRandom === 2) {
        bouttonAttaque.onclick = function(){
            hpEnnemi2.innerHTML = hpEnnemi2.innerHTML - degatsAttaqueGlad
            boiteDialogue.innerHTML = "Glad attaque Cleaner et lui inflige " + degatsAttaqueGlad + " degats !"
            ordre.style.visibility = "hidden"
            finHpCleaner ()
            finBoiteGlad()
            setTimeout(choixNinja, 2000)        
        }
        
    }

    if (choixAttaqueRandom === 3) {
        bouttonAttaque.onclick = function(){
            hpEnnemi3.innerHTML = hpEnnemi3.innerHTML - degatsAttaqueGlad
            boiteDialogue.innerHTML = "Glad attaque Hurler et lui inflige " + degatsAttaqueGlad + " degats !"
            ordre.style.visibility = "hidden"
            finHpHurler ()
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
    var choixSpecialRandom = Math.floor(Math.random() * (max - min)) + min; 

    var degatsSpecialGlad =  Math.floor(Math.random() * 20 + 30)

    if (choixSpecialRandom === 1) {
        bouttonSpecial.onclick = function(){
            hpEnnemi1.innerHTML = hpEnnemi1.innerHTML - degatsSpecialGlad
            manaGlad.innerHTML = manaGlad.innerHTML - 50
            boiteDialogue.innerHTML = "Glad utilise Triomphe et inflige " + degatsSpecialGlad + " degats à Burner!"
            ordre.style.visibility = "hidden"
            finHpBurner ()
            finBoiteGlad()
            setTimeout(choixNinja, 2000) 
            finManaGlad ()       
        }
        
    }

    if (choixSpecialRandom === 2) {
        bouttonSpecial.onclick = function(){
            hpEnnemi2.innerHTML = hpEnnemi2.innerHTML - degatsSpecialGlad
            manaGlad.innerHTML = manaGlad.innerHTML - 50
            boiteDialogue.innerHTML = "Glad utilise Triomphe et inflige " + degatsSpecialGlad + " degats à Cleaner!"
            ordre.style.visibility = "hidden"
            finHpCleaner ()
            finBoiteGlad()
            setTimeout(choixNinja, 2000)   
            finManaGlad ()     
        }
        
    }

    if (choixSpecialRandom === 3) {
        bouttonSpecial.onclick = function(){
            hpEnnemi3.innerHTML = hpEnnemi3.innerHTML - degatsSpecialGlad
            manaGlad.innerHTML = manaGlad.innerHTML - 50
            boiteDialogue.innerHTML = "Glad utilise Triomphe et inflige " + degatsSpecialGlad + " degats à Hurler!"
            ordre.style.visibility = "hidden"
            finHpHurler ()
            finBoiteGlad()
            setTimeout(choixNinja, 2000)   
            finManaGlad ()     
        }    
    }
}




function boiteNinja(){
    ordre.style.visibility = "visible";
    avantNinja.style.display ="none";
    texteNinja.style.display ="block";
    hero4Milieu.style.display = "block"
    hero4.style.visibility = "hidden"
}

function finBoiteNinja(){
    ordre.style.visibility = "hidden";
    avantNinja.style.display ="block";
    texteNinja.style.display ="none";
    hero4Milieu.style.display = "none"
    hero4.style.visibility = "visible"
}

/* Ici, j'initialise les choix de mon héro "Ninja" */

function choixNinja() {
    boiteNinja()
    boiteDialogue.innerHTML = "Ninja fait son choix"
    
    specialAvant.innerHTML = "Shuriken (50 Mana)";
    specialApres.innerHTML = "> Shuriken";

    var min=1; 
    var max=4;  
    var choixAttaqueRandom = Math.floor(Math.random() * (max - min)) + min; 

    var degatsAttaqueNinja =  Math.floor(Math.random() * 10 + 10)

    if (choixAttaqueRandom === 1) {
        bouttonAttaque.onclick = function(){
            hpEnnemi1.innerHTML = hpEnnemi1.innerHTML - degatsAttaqueNinja
            boiteDialogue.innerHTML = "Ninja attaque Burner et lui inflige " + degatsAttaqueNinja + " degats !"
            ordre.style.visibility = "hidden"
            finHpBurner ()
            finBoiteNinja()
            setTimeout(choixBurner, 2000)
        }
    }

    if (choixAttaqueRandom === 2) {
        bouttonAttaque.onclick = function(){
            hpEnnemi2.innerHTML = hpEnnemi2.innerHTML - degatsAttaqueNinja
            boiteDialogue.innerHTML = "Ninja attaque Cleaner et lui inflige " + degatsAttaqueNinja + " degats !"
            ordre.style.visibility = "hidden"
            finHpCleaner ()
            finBoiteNinja()
            setTimeout(choixBurner, 2000)
        }
    }

    if (choixAttaqueRandom === 3) {
        bouttonAttaque.onclick = function(){
            hpEnnemi3.innerHTML = hpEnnemi3.innerHTML - degatsAttaqueNinja
            boiteDialogue.innerHTML = "Ninja attaque Hurler et lui inflige " + degatsAttaqueNinja + " degats !"
            ordre.style.visibility = "hidden"
            finHpHurler ()
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
    var choixSpecialRandom = Math.floor(Math.random() * (max - min)) + min; 

    var degatsSpecialNinja =  Math.floor(Math.random() * 20 + 30)

    if (choixSpecialRandom === 1) {
        bouttonSpecial.onclick = function(){
            hpEnnemi1.innerHTML = hpEnnemi1.innerHTML - degatsSpecialNinja
            manaNinja.innerHTML = manaNinja.innerHTML - 50
            boiteDialogue.innerHTML = "Ninja utilise Shuriken et inflige " + degatsSpecialNinja + " degats à Burner!"
            ordre.style.visibility = "hidden"
            finHpBurner ()
            finBoiteNinja()
            setTimeout(choixBurner, 2000)
            finManaNinja ()
        }
    }

    if (choixSpecialRandom === 2) {
        bouttonSpecial.onclick = function(){
            hpEnnemi2.innerHTML = hpEnnemi2.innerHTML - degatsSpecialNinja
            manaNinja.innerHTML = manaNinja.innerHTML - 50
            boiteDialogue.innerHTML = "Ninja utilise Shuriken et inflige " + degatsSpecialNinja + " degats à Cleaner!"
            ordre.style.visibility = "hidden"
            finHpCleaner ()
            finBoiteNinja()
            setTimeout(choixBurner, 2000)
            finManaNinja ()
        }
    }

    if (choixSpecialRandom === 3) {
        bouttonSpecial.onclick = function(){
            hpEnnemi3.innerHTML = hpEnnemi3.innerHTML - degatsSpecialNinja
            manaNinja.innerHTML = manaNinja.innerHTML - 50
            boiteDialogue.innerHTML = "Ninja utilise Shuriken et inflige " + degatsSpecialNinja + " degats à Hurler!"
            ordre.style.visibility = "hidden"
            finHpHurler ()
            finBoiteNinja()
            setTimeout(choixBurner, 2000)
            finManaNinja ()
        }
    }
}





function choixBurner(){
    var min=1; 
    var max=5;  
    var choixAttaqueEnnemiRandom = Math.floor(Math.random() * (max - min)) + min; 

    var degatsEnnemi =  Math.floor(Math.random() * 20 + 20)

    if (choixAttaqueEnnemiRandom === 1) {
            hpUlti.innerHTML = hpUlti.innerHTML - degatsEnnemi
            boiteDialogue.innerHTML = "Burner attaque Ulti et lui inflige " + degatsEnnemi + " degats !"
            finHpUlti()
            setTimeout(choixCleaner, 2000)
        }

    if (choixAttaqueEnnemiRandom === 2) {
            hpLight.innerHTML = hpLight.innerHTML - degatsEnnemi
            boiteDialogue.innerHTML = "Burner attaque Light et lui inflige " + degatsEnnemi + " degats !"
            finHpUlti()
            setTimeout(choixCleaner, 2000)
        }
    
    if (choixAttaqueEnnemiRandom === 3) {
            hpGlad.innerHTML = hpGlad.innerHTML - degatsEnnemi
            boiteDialogue.innerHTML = "Ninja attaque Glad et lui inflige " + degatsEnnemi + " degats !"
            finHpGlad()
            setTimeout(choixCleaner, 2000)
        }
    
    if (choixAttaqueEnnemiRandom === 4) {
            hpNinja.innerHTML = hpNinja.innerHTML - degatsEnnemi
            boiteDialogue.innerHTML = "Ninja attaque Ninja et lui inflige " + degatsEnnemi + " degats !"
            finHpNinja()
            setTimeout(choixCleaner, 2000)
        }
}

function choixCleaner(){
    var min=1; 
    var max=5;  
    var choixAttaqueEnnemiRandom = Math.floor(Math.random() * (max - min)) + min; 

    var degatsEnnemi =  Math.floor(Math.random() * 20 + 20)

    if (choixAttaqueEnnemiRandom === 1) {
            hpUlti.innerHTML = hpUlti.innerHTML - degatsEnnemi
            boiteDialogue.innerHTML = "Cleaner attaque Ulti et lui inflige " + degatsEnnemi + " degats !"
            finHpUlti()
            setTimeout(choixHurler, 2000)
        }

    if (choixAttaqueEnnemiRandom === 2) {
            hpLight.innerHTML = hpLight.innerHTML - degatsEnnemi
            boiteDialogue.innerHTML = "Cleaner attaque Light et lui inflige " + degatsEnnemi + " degats !"
            finHpUlti()
            setTimeout(choixHurler, 2000)
        }
    
    if (choixAttaqueEnnemiRandom === 3) {
            hpGlad.innerHTML = hpGlad.innerHTML - degatsEnnemi
            boiteDialogue.innerHTML = "Cleaner attaque Glad et lui inflige " + degatsEnnemi + " degats !"
            finHpGlad()
            setTimeout(choixHurler, 2000)
        }
    
    if (choixAttaqueEnnemiRandom === 4) {
            hpNinja.innerHTML = hpNinja.innerHTML - degatsEnnemi
            boiteDialogue.innerHTML = "Cleaner attaque Ninja et lui inflige " + degatsEnnemi + " degats !"
            finHpNinja()
            setTimeout(choixHurler, 2000)
        }
}

function choixHurler(){
    var min=1; 
    var max=5;  
    var choixAttaqueEnnemiRandom = Math.floor(Math.random() * (max - min)) + min; 

    var degatsEnnemi =  Math.floor(Math.random() * 20 + 20)

    if (choixAttaqueEnnemiRandom === 1) {
            hpUlti.innerHTML = hpUlti.innerHTML - degatsEnnemi
            boiteDialogue.innerHTML = "Hurler attaque Ulti et lui inflige " + degatsEnnemi + " degats !"
            finHpUlti()
            setTimeout(choixUlti, 2000)        }

    if (choixAttaqueEnnemiRandom === 2) {
            hpLight.innerHTML = hpLight.innerHTML - degatsEnnemi
            boiteDialogue.innerHTML = "Hurler attaque Light et lui inflige " + degatsEnnemi + " degats !"
            finHpUlti()
            setTimeout(choixUlti, 2000)        }
    
    if (choixAttaqueEnnemiRandom === 3) {
            hpGlad.innerHTML = hpGlad.innerHTML - degatsEnnemi
            boiteDialogue.innerHTML = "Hurler attaque Glad et lui inflige " + degatsEnnemi + " degats !"
            finHpGlad()
            setTimeout(choixUlti, 2000)        }
    
    if (choixAttaqueEnnemiRandom === 4) {
            hpNinja.innerHTML = hpNinja.innerHTML - degatsEnnemi
            boiteDialogue.innerHTML = "Hurler attaque Ninja et lui inflige " + degatsEnnemi + " degats !"
            finHpNinja()
            setTimeout(choixUlti, 2000)        
        }
}





















hpUlti2.innerHTML = hpUlti.innerHTML
hpLight2.innerHTML = hpLight.innerHTML
hpGlad2.innerHTML = hpGlad.innerHTML
hpNinja2.innerHTML = hpNinja.innerHTML 