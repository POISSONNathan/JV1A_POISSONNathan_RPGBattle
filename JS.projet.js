/* Ici, j'initialise toutes mes variables qui me seront utiles dans mon JavaScript */

var bouttonJouer = document.getElementById("bouttonJouer");
var bouttonVoirSpecial = document.getElementById("bouttonVoirSpecial");
var bouttonRetour = document.getElementById("bouttonRetour");
var règles = document.getElementById("règles");
var interface = document.getElementById("interface");
var descriptionSpecial = document.getElementById("specialHero");

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

var imageEnnemi1 = document.getElementById("burner");
var imageEnnemi2 = document.getElementById("cleaner");
var imageEnnemi3 = document.getElementById("hurler");

var boiteDialogue = document.getElementById("boiteDialogue");
var decompteDebutPartie = document.getElementById("decompteDebutPartie");

var ordre = document.getElementById("ordre");

var bouttonAttaque = document.getElementById("attaquerApres");
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

var ennemi1Milieu = document.getElementById("ennemi1Milieu");
var ennemi2Milieu = document.getElementById("ennemi2Milieu");
var ennemi3Milieu = document.getElementById("ennemi3Milieu");

var hero1 = document.getElementById("hero1");
var hero2 = document.getElementById("hero2");
var hero3 = document.getElementById("hero3");
var hero4 = document.getElementById("hero4");

var imageHero1 = document.getElementById("imageHero1");
var imageHero2 = document.getElementById("imageHero2");
var imageHero3 = document.getElementById("imageHero3");
var imageHero4 = document.getElementById("imageHero4");

var attaquer = document.getElementById("attaquer");
var defendre = document.getElementById("defendre");
var special = document.getElementById("special");

var finPartie = document.getElementById("finPartie");
var gagnant = document.getElementById("gagnant");

var mortBurner = document.getElementById("mortBurner")
var mortCleaner = document.getElementById("mortCleaner");
var mortHurler = document.getElementById("mortHurler");

var attaquerBlock = document.getElementById("attaquerBlock");
var defendreBlock = document.getElementById("defendreBlock");
var specialBlock = document.getElementById("specialBlock");

/* Ici, j'initialise mon boutton pour afficher la description de l'attaque spécial de chaque héros */

bouttonVoirSpecial.onclick = function(){
    règles.style.display = "none";
    descriptionSpecial.style.display ="block"
}

bouttonRetour.onclick = function(){
    règles.style.display = "block";
    descriptionSpecial.style.display ="none"
}

/* Ici, j'initialise mon boutton qui fait disparaître les règles au début de la partie et lance le decompte du début de partie */

bouttonJouer.onclick = function () {
    règles.style.display = "none";
    interface.style.visibility = "visible";
    decompte();
}

/* Ici, j'initialise mon decompte de début de partie */

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
        decompteDebutPartie.style.paddingLeft = "60px";
        decompteDebutPartie.style.paddingBottom = "30px";
        decompteDebutPartie.innerHTML = "A toi de jouer !";
    },3000);

    setTimeout( function (){
        decompteDebutPartie.style.display = "none"
        choixUlti()
    },5000); 
}

/* Ici, j'initialise les fonctions qui me seront utiles pour mon héro "Ulti" ex : Disparition à 0 hp du perso, changement de texte à 0 mana et si mon héro meurt */

function boiteUlti(){ /* fonction d'apparition de la boite de mon héro ulti */
    ordre.style.visibility = "visible";
    avantUlti.style.display ="none";
    texteUtli.style.display ="block";
    hero1Milieu.style.display = "block"
    hero1.style.visibility = "hidden"
    special.style.visibility = "visible"
    if (manaUlti.innerHTML == 0){
        special.style.visibility = "hidden"
        specialBlock.style.visibility = "hidden"
    }
}

function finBoiteUlti(){ /* fonction de fin de la boite de mon héro ulti */
    ordre.style.visibility = "hidden";
    avantUlti.style.display ="block";
    texteUtli.style.display ="none";
    hero1Milieu.style.display = "none"
    hero1.style.visibility = "visible"
    special.style.visibility = "hidden"
}

function finManaUlti (){ /* fonction qui indique que mon héro ulti a plus de mana */
    if (manaUlti.innerHTML == 0){
        manaUltiLigne.innerHTML ="0 mana"
    }
}

function finHpUlti (){ /* fonction qui indique que mon héro ulti est mort, il disparait et c'est écrit à la place des ses points de vies */
    if (hpUlti.innerHTML <= 0){
        hpUltiLigne.innerHTML = "Ulti est mort  "
        manaUltiLigne.style.visibility = "hidden"
        avantUlti.style.visibility = "hidden"
        setTimeout( function (){
            hero1.style.visibility = "hidden"
        },2000);
    }
}

/* Ici, j'initialise les fonctions qui me seront utiles pour mon héro "Light" ex : Disparition à 0 hp du perso, changement de texte à 0 mana et si mon héro meurt */

function boiteLight(){ /* fonction d'apparition de la boite de mon héro light */
    ordre.style.visibility = "visible";
    avantLight.style.display ="none";
    texteLight.style.display ="block";
    hero2Milieu.style.display = "block"
    hero2.style.visibility = "hidden"
    special.style.visibility = "visible"
    if (manaLight.innerHTML == 0){
        special.style.visibility = "hidden"
        specialBlock.style.visibility = "hidden"
    }
}

function finBoiteLight(){ /* fonction de fin de la boite de mon héro light */
    ordre.style.visibility = "hidden";
    avantLight.style.display ="block";
    texteLight.style.display ="none";
    hero2Milieu.style.display = "none"
    hero2.style.visibility = "visible"
    special.style.visibility = "hidden"
}

function finManaLight (){ /* fonction qui indique que mon héro light a plus de mana */
    if (manaLight.innerHTML == 0){
        manaLightLigne.innerHTML ="0 mana"
    }
}

function finHpLight (){ /* fonction qui indique que mon héro light est mort, il disparait et c'est écrit à la place des ses points de vies */
    if (hpLight.innerHTML <= 0){
        hpLightLigne.innerHTML ="Light est mort"
        manaLightLigne.style.visibility = "hidden"
        avantLight.style.visibility = "hidden"
        setTimeout( function (){
            hero2.style.visibility = "hidden"
        },2000);
    }
}

/* Ici, j'initialise les fonctions qui me seront utiles pour mon héro "Glad" ex : Disparition à 0 hp du perso, changement de texte à 0 mana et si mon héro meurt */

function boiteGlad(){ /* fonction d'apparition de la boite de mon héro glad */
    ordre.style.visibility = "visible";
    avantGlad.style.display ="none";
    texteGlad.style.display ="block";
    hero3Milieu.style.display = "block"
    hero3.style.visibility = "hidden"
    special.style.visibility = "visible"
    if (manaGlad.innerHTML == 0){
        special.style.visibility = "hidden"
        specialBlock.style.visibility = "hidden"
    }
}

function finBoiteGlad(){ /* fonction de fin de la boite de mon héro glad */
    ordre.style.visibility = "hidden";
    avantGlad.style.display ="block";
    texteGlad.style.display ="none";
    hero3Milieu.style.display = "none"
    hero3.style.visibility = "visible"
    special.style.visibility = "hidden"
}

function finManaGlad (){ /* fonction qui indique que mon héro glad a plus de mana */
    if (manaGlad.innerHTML == 0){
        manaGladLigne.innerHTML ="0 mana"
    }
}

function finHpGlad (){ /* fonction qui indique que mon héro glad est mort, il disparait et c'est écrit à la place des ses points de vies */
    if (hpGlad.innerHTML <= 0){
        hpGladLigne.innerHTML ="Glad est mort"
        manaGladLigne.style.visibility = "hidden"
        avantGlad.style.visibility = "hidden"
        setTimeout( function (){
            hero3.style.visibility = "hidden"
        },2000);
    }
}

/* Ici, j'initialise les fonctions qui me seront utiles pour mon héro "Ninja" ex : Disparition à 0 hp du perso, changement de texte à 0 mana et si mon héro meurt */

function boiteNinja(){ /* fonction d'apparition de la boite de mon héro ninja */
    ordre.style.visibility = "visible";
    avantNinja.style.display ="none";
    texteNinja.style.display ="block";
    hero4Milieu.style.display = "block"
    hero4.style.visibility = "hidden"
    special.style.visibility = "visible"
    if (manaNinja.innerHTML == 0){
        special.style.visibility = "hidden"
        specialBlock.style.visibility = "hidden"
    }
}

function finBoiteNinja(){ /* fonction de fin de la boite de mon héro ninja */
    ordre.style.visibility = "hidden";
    avantNinja.style.display ="block";
    texteNinja.style.display ="none";
    hero4Milieu.style.display = "none"
    hero4.style.visibility = "visible"
    special.style.visibility = "hidden"
}

function finManaNinja (){ /* fonction qui indique que mon héro ninja a plus de mana */
    if (manaNinja.innerHTML == 0){
        manaNinjaLigne.innerHTML ="0 mana"
    }
}

function finHpNinja (){ /* fonction qui indique que mon héro ninja est mort, il disparait et c'est écrit à la place des ses points de vies */
    if (hpNinja.innerHTML <= 0){
        hpNinjaLigne.innerHTML ="Ninja est mort"
        manaNinjaLigne.style.visibility = "hidden"
        avantNinja.style.visibility = "hidden"
        setTimeout( function (){
            hero4.style.visibility = "hidden"
        },2000);
    }
}

/* Ici, j'initialise les fonctions qui me seront utiles pour mes ennemis "Burner", "Cleaner" et "Hurler" ex : Disparition à 0 hp de l'ennemi */

function finHpBurner (){ /* fonction qui fait disparaitre mon ennemi burner */
    if (hpEnnemi1.innerHTML <= 0){
        hpEnnemi1.innerHTML = 0
        setTimeout( function (){
            ennemi1.style.display = "none"
            mortBurner.style.display = "block"
        },2000);
    }
}

function finHpCleaner (){ /* fonction qui fait disparaitre mon ennemi cleaner */
    if (hpEnnemi2.innerHTML <= 0){
        hpEnnemi2.innerHTML = 0
        setTimeout( function (){
            ennemi2.style.display = "none"
            mortCleaner.style.display = "block"
        },2000);
    }
}

function finHpHurler (){ /* fonction qui fait disparaitre mon ennemi hurler */
    if (hpEnnemi3.innerHTML <= 0){
        hpEnnemi3.innerHTML = 0
        setTimeout( function (){
            ennemi3.style.display = "none"
            mortHurler.style.display = "block"
        },2000);
    }
}

/* Ici, j'initialise des fonctions qui me permettent de mettre en valeur les ennemis visés par mes héros lors des actions */

function bordureEnnemi1() { /* fonction qui met en valeur mon ennemi burner quand il est attaqué */
    setTimeout( function (){
        imageEnnemi1.style.backgroundColor= "red";
    },0000);
    setTimeout( function (){
        imageEnnemi1.style.removeProperty("background-color");
    },2000);
}

function bordureEnnemi2() { /* fonction qui met en valeur mon ennemi cleaner quand il est attaqué */
    setTimeout( function (){
        imageEnnemi2.style.backgroundColor= "red";
    },0000);
    setTimeout( function (){
        imageEnnemi2.style.removeProperty("background-color");
    },2000);
}

function bordureEnnemi3() { /* fonction qui met en valeur mon ennemi hurler quand il est attaqué */
    setTimeout( function (){
        imageEnnemi3.style.backgroundColor= "red";
    },0000);
    setTimeout( function (){
        imageEnnemi3.style.removeProperty("background-color");
    },2000);
}

/* Ici, j'initialise des fonctions qui me permettent de mettre en valeur mes héros visés par les ennemis lors des actions de ripostes */

function bordureHero1() { /* fonction qui met en valeur mon hero  ulti quand il est attaqué */
    setTimeout( function (){
        imageHero1.style.backgroundColor= "red";
    },0000);
    setTimeout( function (){
        imageHero1.style.removeProperty("background-color");
    },2000);
}

function bordureHero2() { /* fonction qui met en valeur mon hero  light quand il est attaqué */
    setTimeout( function (){
        imageHero2.style.backgroundColor= "red";
    },0000);
    setTimeout( function (){
        imageHero2.style.removeProperty("background-color");
    },2000);
}

function bordureHero3() { /* fonction qui met en valeur mon hero  cleaner quand il est attaqué */
    setTimeout( function (){
        imageHero3.style.backgroundColor= "red";
    },0000);
    setTimeout( function (){
        imageHero3.style.removeProperty("background-color");
    },2000);
}

function bordureHero4() { /* fonction qui met en valeur mon hero  hurler quand il est attaqué */
    setTimeout( function (){
        imageHero4.style.backgroundColor= "red";
    },0000);
    setTimeout( function (){
        imageHero4.style.removeProperty("background-color");
    },2000);
}

/* Ici, j'initialise des fonctions font disparaître les héros et les ennemis lorsqu'ils ont 0 hp ou moins */

function finHpEnnemi(){ 
    finHpBurner ()
    finHpCleaner ()
    finHpHurler ()
}

function finHpHero(){
    finHpUlti()
    finHpLight ()
    finHpGlad ()
    finHpNinja ()
}

/* Ici, j'initialise les fonctions de mes ennemis afin de les mettre en valeurs lorsqu'ils attaquent */

function boiteBurner(){ /* fonction d'apparition de la boite de mon ennemi burner */
    ennemi1Milieu.style.display = "block"
    ennemi1.style.visibility = "hidden"
    setTimeout( function (){
        ennemi1Milieu.style.display = "none"
        ennemi1.style.visibility = "visible"
    },2000);
}

function boiteCleaner(){ /* fonction d'apparition de la boite de mon ennemi cleaner */
    ennemi2Milieu.style.display = "block"
    ennemi2.style.visibility = "hidden"
    setTimeout( function (){
        ennemi2Milieu.style.display = "none"
        ennemi2.style.visibility = "visible"
    },2000);
}

function boiteHurler (){ /* fonction d'apparition de la boite de mon ennemi hurler */
    ennemi3Milieu.style.display = "block"
    ennemi3.style.visibility = "hidden"
    setTimeout( function (){
        ennemi3Milieu.style.display = "none"
        ennemi3.style.visibility = "visible"
    },2000);
}

/* Ici, j'initialise les fonctions pour savoir qui joue après chaque héros en vérifiant si ils sont en vie ou non ainsi que les points de vie des ennemis pour savoir si la derniere 
action du héro fait gagner la partie */

function choixJoueurSuivantUlti (){
    if (hpLight.innerHTML > 0){
        setTimeout(choixLight, 2000)
    }
    else if (hpLight.innerHTML <= 0) {
        if (hpGlad.innerHTML > 0) {
            setTimeout(choixGlad, 2000)
        }    
        else if (hpGlad.innerHTML <= 0) {
            if (hpNinja.innerHTML > 0) {
                setTimeout(choixNinja, 2000)
            }
            else if (hpNinja.innerHTML <= 0){
                if (hpEnnemi1.innerHTML > 0){
                    setTimeout(choixBurner, 2000)
                }
                else if (hpEnnemi1.innerHTML <= 0){
                    if (hpEnnemi2.innerHTML > 0){
                        setTimeout(choixCleaner, 2000)
                    }
                    else if (hpEnnemi2.innerHTML <= 0){
                        if (hpEnnemi3.innerHTML > 0) {
                            setTimeout(choixHurler, 2000)
                        }
                        else if (hpEnnemi3.innerHTML <= 0){
                            interface.style.display = "none"
                            finPartie.style.display = "block"
                            gagnant.innerHTML = "Bien joué ! Tu as éliminé tous les ennemis !"
                        }
                    }
                }
            }
        }
    } 
}

function choixJoueurSuivantLight (){
    if (hpGlad.innerHTML > 0){
        setTimeout(choixGlad, 2000)
    }
    else if (hpGlad.innerHTML <= 0) {
        if (hpNinja.innerHTML > 0) {
            setTimeout(choixNinja, 2000)
        }  
        else if (hpNinja.innerHTML <= 0) {
            if (hpEnnemi1.innerHTML > 0){
                setTimeout(choixBurner, 2000)
            }
            else if (hpEnnemi1.innerHTML <= 0){
                if (hpEnnemi2.innerHTML > 0){
                    setTimeout(choixCleaner, 2000)
                }
                else if (hpEnnemi2.innerHTML <= 0){
                    if (hpEnnemi3.innerHTML > 0) {
                        setTimeout(choixHurler, 2000)
                    }
                    else if (hpEnnemi3.innerHTML <= 0){
                        interface.style.display = "none"
                        finPartie.style.display = "block"  
                        gagnant.innerHTML = "Bien joué ! Tu as éliminé tous les ennemis !"
                    }
                }
            }      
        }
    } 
}

function choixJoueurSuivantGlad (){
    if (hpNinja.innerHTML > 0){
        setTimeout(choixNinja, 2000)
    }
    else if (hpNinja.innerHTML <= 0) {
        if (hpEnnemi1.innerHTML > 0){
            setTimeout(choixBurner, 2000)
        }
        else if (hpEnnemi1.innerHTML <= 0){
            if (hpEnnemi2.innerHTML > 0){
                setTimeout(choixCleaner, 2000)
            }
            else if (hpEnnemi2.innerHTML <= 0){
                if (hpEnnemi3.innerHTML > 0) {
                    setTimeout(choixHurler, 2000)
                }
                else if (hpEnnemi3.innerHTML <= 0){
                    interface.style.display = "none"
                    finPartie.style.display = "block"  
                    gagnant.innerHTML = "Bien joué ! Tu as éliminé tous les ennemis !"
                }
            }
        }           
    } 
}

function choixJoueurSuivantNinja (){
    if (hpEnnemi1.innerHTML > 0){
        setTimeout(choixBurner, 2000)
    }
    else if (hpEnnemi1.innerHTML <= 0){
        if (hpEnnemi2.innerHTML > 0){
            setTimeout(choixCleaner, 2000)
        }
        else if (hpEnnemi2.innerHTML <= 0){
            if (hpEnnemi3.innerHTML > 0) {
                setTimeout(choixHurler, 2000)
            }
            else if (hpEnnemi3.innerHTML <= 0){
                interface.style.display = "none"
                finPartie.style.display = "block" 
                gagnant.innerHTML = "Bien joué ! Tu as éliminé tous les ennemis !"
            }
        }
    }    
}

/* Ici, j'initialise les fonctions pour savoir qui joue après chaque ennemis en vérifiant si ils sont en vie ou non ainsi que les points de vie des héros pour savoir si la derniere 
action de l'ennemi nous fait perdre la partie */

function choixJoueurSuivantBurner (){
    if (hpEnnemi2.innerHTML > 0){
        setTimeout(choixCleaner, 2000)
    }
    else if (hpEnnemi2.innerHTML <= 0){
        if (hpEnnemi3.innerHTML > 0){
            setTimeout(choixHurler, 2000)
        }
        else if (hpEnnemi3.innerHTML <= 0){
            if (hpUlti.innerHTML > 0) {
                setTimeout(choixUlti, 2000)
            }
            else if (hpUlti.innerHTML <= 0){
                if (hpLight.innerHTML > 0){
                    setTimeout(choixLight, 2000)
                }
                else if (hpLight.innerHTML <= 0){
                    if (hpGlad.innerHTML > 0){
                        setTimeout(choixGlad, 2000)
                    }
                    else if (hpGlad.innerHTML <= 0){
                        if (hpNinja.innerHTML > 0){
                            setTimeout(choixNinja, 2000)
                        }
                        else if (hpNinja.innerHTML <= 0){
                            interface.style.display = "none"
                            finPartie.style.display = "block" 
                            gagnant.innerHTML = "Dommage ! Tous tes héros sont morts !"
                        }
                    }
                }
            }
        }
    }    
}

function choixJoueurSuivantCleaner (){
    if (hpEnnemi3.innerHTML > 0){
        setTimeout(choixHurler, 2000)
    }
    else if (hpEnnemi3.innerHTML <= 0){
        if (hpUlti.innerHTML > 0) {
            setTimeout(choixUlti, 2000)
        }
        else if (hpUlti.innerHTML <= 0){
            if (hpLight.innerHTML > 0){
                setTimeout(choixLight, 2000)
            }
            else if (hpLight.innerHTML <= 0){
                if (hpGlad.innerHTML > 0){
                    setTimeout(choixGlad, 2000)
                }
                else if (hpGlad.innerHTML <= 0){
                    if (hpNinja.innerHTML > 0){
                        setTimeout(choixNinja, 2000)
                    }
                    else if (hpNinja.innerHTML <= 0){
                        interface.style.display = "none"
                        finPartie.style.display = "block" 
                        gagnant.innerHTML = "Dommage ! Tous tes héros sont morts !"
                        
                    }
                }
            }
        }
    }    
}

function choixJoueurSuivantHurler (){
    if (hpUlti.innerHTML > 0) {
        setTimeout(choixUlti, 2000)
    }
    else if (hpUlti.innerHTML <= 0){
        if (hpLight.innerHTML > 0){
            setTimeout(choixLight, 2000)
        }
        else if (hpLight.innerHTML <= 0){
            if (hpGlad.innerHTML > 0){
                setTimeout(choixGlad, 2000)
            }
            else if (hpGlad.innerHTML <= 0){
                if (hpNinja.innerHTML > 0){
                    setTimeout(choixNinja, 2000)
                }
                else if (hpNinja.innerHTML <= 0){
                    interface.style.display = "none"
                    finPartie.style.display = "block" 
                    gagnant.innerHTML = "Dommage ! Tous tes héros sont morts !"                   
                }
            }
        }
    }    
}

/* Ici, j'initialise les les fonctions de fin de partie, si les ennemis ou les héro gagnent la partie avant la fin d'une boucle */

function finPartieGagnante(){
    if (hpEnnemi1.innerHTML <= 0){
        if (hpEnnemi2.innerHTML <= 0){
            if (hpEnnemi3.innerHTML <= 0){
                interface.style.display = "none"
                finPartie.style.display = "block" 
                gagnant.innerHTML = "Bien joué ! Tu as éliminé tous les ennemis !"
            }
        }
    }
}

function finPartiePerdante(){
    if (hpUlti.innerHTML <= 0){
        if (hpLight.innerHTML <= 0){
            if (hpGlad.innerHTML <= 0){
                if (hpNinja.innerHTML <= 0){
                    interface.style.display = "none"
                    finPartie.style.display = "block" 
                    gagnant.innerHTML = "Dommage ! Tous tes héros sont morts !"
                }
            }
        }
    }
}

/* Ici, j'initialise les fonctions afin de de ne pas pouvoir utiliser une action 2 manches d'affilés */

function attaquerGrise(){ 
    attaquer.style.display = "none"
    attaquerBlock.style.display = "block"
    defendre.style.display = "block"
    defendreBlock.style.display = "none"
    special.style.display = "block"
    specialBlock.style.display = "none"
}

function defenseGrise(){
    defendre.style.display = "none"
    defendreBlock.style.display = "block"
    attaquer.style.display = "block"
    attaquerBlock.style.display = "none"
    special.style.display = "block"
    specialBlock.style.display = "none"
}

function specialeGrise(){
    special.style.display = "none"
    specialBlock.style.display = "block"
    attaquer.style.display = "block"
    attaquerBlock.style.display = "none"
    defendre.style.display = "block"
    defendreBlock.style.display = "none"
}

/* Ici, j'initialise la fonction d'attaque de chacun de mes héros */

function attaqueHero(nomHero){

    var min=1; 
    var max=4;  

    var choixAttaqueRandom = Math.floor(Math.random() * (max - min)) + min; /* pour choisir un ennemi aléatoire */
    var degatsAttaqueUlti =  Math.floor(Math.random() * 10 + 10) /* pour que mes héros font des dégats aléatoire entre 10 et 20 quand ils attaquent */
    var nomEnnemiAttaque

    if (choixAttaqueRandom === 1){
        if (hpEnnemi1.innerHTML <= 0){
            choixAttaqueRandom = 2
            if (hpEnnemi2.innerHTML <= 0){
                choixAttaqueRandom = 3
            } 
        }
    }
    if (choixAttaqueRandom === 2){
        if (hpEnnemi2.innerHTML <= 0){
            choixAttaqueRandom = 3
        }  
    }
    if (choixAttaqueRandom === 3){
        if (hpEnnemi3.innerHTML <= 0){
            choixAttaqueRandom = 1
            if (hpEnnemi1.innerHTML <= 0){
                choixAttaqueRandom = 2
            }
        }
    }

    if (choixAttaqueRandom === 1){
        nomEnnemiAttaque = "Burner"
        hpEnnemi1.innerHTML = hpEnnemi1.innerHTML - degatsAttaqueUlti
        bordureEnnemi1()
    }
    if (choixAttaqueRandom === 2){
        nomEnnemiAttaque = "Cleaner"
        hpEnnemi2.innerHTML = hpEnnemi2.innerHTML - degatsAttaqueUlti
        bordureEnnemi2()
    }
    if (choixAttaqueRandom === 3){
        nomEnnemiAttaque = "Hurler"
        hpEnnemi3.innerHTML = hpEnnemi3.innerHTML - degatsAttaqueUlti
        bordureEnnemi3()
    }
    boiteDialogue.innerHTML = nomHero + " attaque " + nomEnnemiAttaque + " et lui inflige " + degatsAttaqueUlti + " degats !" /* dialogue de l'action d'attaque */
    ordre.style.visibility = "hidden"
}

/* Ici, j'initialise les choix de mon héro "Ulti" */

function choixUlti() {
    boiteUlti()
    boiteDialogue.innerHTML = "Ulti fait son choix"
    
    specialAvant.innerHTML = "Flamme (50 Mana)"; /* je modifie le texte de l'attaque spécial par rapport à ce héro */
    specialBlock.innerHTML = "Flamme (50 Mana";
    bouttonSpecial.innerHTML = "> Flamme";

    special.style.display = "block"
    specialBlock.style.display = "none"
     
    bouttonAttaque.onclick = function(){ /* attaque de mon hero */
        var nomHero = "Ulti"
        attaqueHero(nomHero)
        defenseUlti = 0
        speUltiBlock = 1
        finHpEnnemi()
        finBoiteUlti()
        choixJoueurSuivantUlti ()
        setTimeout(finPartieGagnante, 2000)
    }
    
    bouttonDefense.onclick = function(){ /* defense de mon héro */
        boiteDialogue.innerHTML = "Ulti réduit les attaques reçus par les ennemis cette manche" /* dialogue de la defense */
        ordre.style.visibility = "hidden"
        defenseUlti = 1
        speUltiBlock = 2
        finBoiteUlti()
        choixJoueurSuivantUlti ()
    }
    
    var min=1; 
    var max=4;  
    
    var choixSpecialRandom = Math.floor(Math.random() * (max - min)) + min; 
    var degatsSpecialUlti =  Math.floor(Math.random() * 20 + 30)
    var nomEnnemiSpecial

    bouttonSpecial.onclick = function(){ /* attaque de mon hero */
        if (choixSpecialRandom === 1){
            if (hpEnnemi1.innerHTML <= 0){
                choixSpecialRandom = 2
                if (hpEnnemi2.innerHTML <= 0){
                    choixSpecialRandom = 3
                } 
            }
        }
        if (choixSpecialRandom === 2){
            if (hpEnnemi2.innerHTML <= 0){
                choixSpecialRandom = 3
            }  
        }
        if (choixSpecialRandom === 3){
            if (hpEnnemi3.innerHTML <= 0){
                choixSpecialRandom = 1
                if (hpEnnemi1.innerHTML <= 0){
                    choixSpecialRandom = 2
                }
            }
        }

        if (choixSpecialRandom === 1){ 
            nomEnnemiSpecial = "Burner"
            hpEnnemi1.innerHTML = hpEnnemi1.innerHTML - degatsSpecialUlti
            bordureEnnemi1()
        }
        if (choixSpecialRandom === 2){
            nomEnnemiSpecial = "Cleaner"
            hpEnnemi2.innerHTML = hpEnnemi2.innerHTML - degatsSpecialUlti
            bordureEnnemi2()
        }
        if (choixSpecialRandom === 3){
            nomEnnemiSpecial = "Hurler"
            hpEnnemi3.innerHTML = hpEnnemi3.innerHTML - degatsSpecialUlti
            bordureEnnemi3()
        }
        manaUlti.innerHTML = manaUlti.innerHTML - 50
        boiteDialogue.innerHTML = "Ulti utilise Flamme et inflige " + degatsSpecialUlti + " degats à " + nomEnnemiSpecial + " !" /* dialogue de l'action spéciale */
        ordre.style.visibility = "hidden"
        defenseUlti = 0 
        speUltiBlock = 3
        finHpEnnemi()
        finBoiteUlti()
        finManaUlti ()  
        choixJoueurSuivantUlti ()      
        setTimeout(finPartieGagnante, 2000)
    }
    if (speUltiBlock === 1){
        attaquerGrise ()
    }
    if (speUltiBlock === 2){
        defenseGrise ()
    }
    if (speUltiBlock === 3){
        specialeGrise ()
    }
}

/* Ici, j'initialise les choix de mon héro "Light" */

function choixLight() {
    boiteLight()
    boiteDialogue.innerHTML = "Light fait son choix"

    specialAvant.innerHTML = "Impact (50 Mana)"; /* je modifie le texte de l'attaque spécial par rapport à ce héro */
    specialBlock.innerHTML = "Impact (50 Mana)";
    bouttonSpecial.innerHTML = "> Impact";

    special.style.display = "block"
    specialBlock.style.display = "none"
     
    bouttonAttaque.onclick = function(){ /* attaque de mon hero */
        var nomHero = "Light"
        attaqueHero(nomHero)
        defenseLight = 0
        speLightBlock = 1
        finHpEnnemi()
        finBoiteLight()
        choixJoueurSuivantLight ()     
        setTimeout(finPartieGagnante, 2000)
    }
    
    bouttonDefense.onclick = function(){ /* defense de mon hero */
        boiteDialogue.innerHTML = "Light réduit les attaques reçus par les ennemis cette manche" /* dialogue de la defense */
        ordre.style.visibility = "hidden"
        defenseLight = 1
        speLightBlock = 2
        finBoiteLight()
        choixJoueurSuivantLight ()
    }
    
    /* Ici, l'attaque spécial de mon héro "Light" fait de gros dégats mais fait perdre en contrepartie entre 10 et 20 pv au héro */

    var min=1; 
    var max=4;  

    var choixSpecialRandom = Math.floor(Math.random() * (max - min)) + min; 
    var degatsSpecialLight =  Math.floor(Math.random() * 20 + 50)
    var pvPerdu = Math.floor(Math.random() * 10 + 10)
    var nomEnnemiSpecial

    bouttonSpecial.onclick = function(){ /* attaque special de mon hero */
        if (choixSpecialRandom === 1){
            if (hpEnnemi1.innerHTML <= 0){
                choixSpecialRandom = 2
                if (hpEnnemi2.innerHTML <= 0){
                    choixSpecialRandom = 3
                } 
            }
        }
        if (choixSpecialRandom === 2){
            if (hpEnnemi2.innerHTML <= 0){
                choixSpecialRandom = 3
            }  
        }
        if (choixSpecialRandom === 3){
            if (hpEnnemi3.innerHTML <= 0){
                choixSpecialRandom = 1
                if (hpEnnemi1.innerHTML <= 0){
                    choixSpecialRandom = 2
                }
            }
        }

        if (choixSpecialRandom === 1){
            nomEnnemiSpecial = "Burner"
            hpEnnemi1.innerHTML = hpEnnemi1.innerHTML - degatsSpecialLight
            bordureEnnemi1()
        }
        if (choixSpecialRandom === 2){
            nomEnnemiSpecial = "Cleaner"
            hpEnnemi2.innerHTML = hpEnnemi2.innerHTML - degatsSpecialLight
            bordureEnnemi2()
        }
        if (choixSpecialRandom === 3){
            nomEnnemiSpecial = "Hurler"
            hpEnnemi3.innerHTML = hpEnnemi3.innerHTML - degatsSpecialLight
            bordureEnnemi3()
        }
        manaLight.innerHTML = manaLight.innerHTML - 50
        hpLight.innerHTML = hpLight.innerHTML - pvPerdu
        boiteDialogue.innerHTML = "Light utilise Impact et inflige " + degatsSpecialLight + " degats à " + nomEnnemiSpecial + " , et perd " + pvPerdu + " points de vie !" /* dialogue de l'action speciale */
        ordre.style.visibility = "hidden"
        defenseLight = 0
        speLightBlock = 3
        finHpLight()
        finHpEnnemi()
        finBoiteLight()
        finManaLight ()    
        choixJoueurSuivantLight ()   
        setTimeout(finPartieGagnante, 2000)
    }
    if (speLightBlock === 1){
        attaquerGrise ()
    }
    if (speLightBlock === 2){
        defenseGrise ()
    }
    if (speLightBlock === 3){
        specialeGrise()
    }
}

/* Ici, j'initialise les choix de mon héro "Glad" */

function choixGlad() {
    boiteGlad()
    boiteDialogue.innerHTML = "Glad fait son choix"

    specialAvant.innerHTML = "Triomphe (50 Mana)"; /* je modifie le texte de l'attaque spécial par rapport à ce héro */
    specialBlock.innerHTML = "Triomphe (50 Mana)";
    bouttonSpecial.innerHTML = "> Triomphe";

    special.style.display = "block"
    specialBlock.style.display = "none"

    bouttonAttaque.onclick = function(){ /* attaque de mon hero */
        var nomHero = "Glad"
        attaqueHero(nomHero)
        defenseGlad = 0
        speGladBlock = 1
        finHpEnnemi()
        finBoiteGlad()
        choixJoueurSuivantGlad ()   
        setTimeout(finPartieGagnante, 2000)
    }
    
    bouttonDefense.onclick = function(){ /* defense de mon hero */
        boiteDialogue.innerHTML = "Glad réduit les attaques reçus par les ennemis cette manche" /* dialogue de la defense */
        ordre.style.visibility = "hidden"
        defenseGlad = 1
        speGladBlock = 2
        finBoiteGlad()
        choixJoueurSuivantGlad ()
    }

    /* Ici, l'attaque spécial de mon héro "Glad" vole des points de vie à un ennemi aléatoire, il lui retire puis de l'ajoute dans ses pv personnels */

    bouttonSpecial.onclick = function(){ /* attaque special de mon hero */
        manaGlad.innerHTML = manaGlad.innerHTML - 50
        hpGlad.innerHTML = 100
        boiteDialogue.innerHTML = "Glad régénère ses points de vie et revient à 100 !" /* dialogue de l'action speciale */
        ordre.style.visibility = "hidden"
        defenseGlad = 0
        speGladBlock = 3
        finHpEnnemi()
        finBoiteGlad()
        finManaGlad ()   
        choixJoueurSuivantGlad ()    
        setTimeout(finPartieGagnante, 2000)
    }
    if (speGladBlock === 1){
        attaquerGrise ()
    }
    if (speGladBlock === 2){
        defenseGrise ()
    }
    if (speGladBlock === 3){
        specialeGrise ()
    }
}

/* Ici, j'initialise les choix de mon héro "Ninja" */

function choixNinja() {
    boiteNinja()
    boiteDialogue.innerHTML = "Ninja fait son choix" 
    
    specialAvant.innerHTML = "Shuriken (50 Mana)"; /* je modifie le texte de l'attaque spécial par rapport à ce héro */
    specialBlock.innerHTML = "Shuriken (50 Mana)";
    bouttonSpecial.innerHTML = "> Shuriken";

    special.style.display = "block"
    specialBlock.style.display = "none"

    bouttonAttaque.onclick = function(){ /* attaque de mon hero */
        var nomHero = "Ninja"
        attaqueHero(nomHero)
        defenseNinja = 0
        speNinjalock = 1
        finHpEnnemi()
        finBoiteNinja()
        choixJoueurSuivantNinja ()    
        setTimeout(finPartieGagnante, 2000)
    }
    
    bouttonDefense.onclick = function(){ /* defense de mon hero */
        boiteDialogue.innerHTML = "Ninja réduit les attaques reçus par les ennemis cette manche" /* dialogue de la defense */
        ordre.style.visibility = "hidden"
        defenseNinja = 1
        speNinjalock = 2
        finBoiteNinja()
        choixJoueurSuivantNinja ()
    }

    /* Ici, l'attaque spécial de mon héro "Ninja" fait des dégats à chaque ennemis grâce aux shurikens */

    var degatsSpecialNinja =  Math.floor(Math.random() * 15 + 10)

    bouttonSpecial.onclick = function(){ /* attaque special de mon hero */
        hpEnnemi1.innerHTML = hpEnnemi1.innerHTML - degatsSpecialNinja
        hpEnnemi2.innerHTML = hpEnnemi2.innerHTML - degatsSpecialNinja
        hpEnnemi3.innerHTML = hpEnnemi3.innerHTML - degatsSpecialNinja
        bordureEnnemi1(),bordureEnnemi2(),bordureEnnemi3()
        manaNinja.innerHTML = manaNinja.innerHTML - 50
        boiteDialogue.innerHTML = "Ninja utilise Shuriken et inflige " + degatsSpecialNinja + " à chaque ennemis !" /* dialogue de l'action speciale */
        ordre.style.visibility = "hidden"
        defenseNinja = 0
        speNinjalock = 3
        finHpEnnemi()
        finBoiteNinja()
        finManaNinja ()     
        choixJoueurSuivantNinja ()   
        setTimeout(finPartieGagnante, 2000)
    }
    if (speNinjalock === 1){
        attaquerGrise ()
    }
    if (speNinjalock === 2){
        defenseGrise ()
    }
    if (speNinjalock === 3){
        specialeGrise ()
    }
}

/* Ici, j'initialise la fonction d'attaque aléatoire de chacun de mes ennemis */

function attaqueEnnemi(nomEnnemi) {
    var min=1; 
    var max=5;  
    var choixAttaqueEnnemiRandom = Math.floor(Math.random() * (max - min)) + min;  /* pour que mes ennemis vises un héro aléatoire */
    var degatsEnnemi =  Math.floor(Math.random() * 20 + 20) /* pour que mes ennemis font des dégats aléatoire entre 20 et 40 */

    if (choixAttaqueEnnemiRandom === 1){
        if (hpUlti.innerHTML <= 0){
            choixAttaqueEnnemiRandom += 1
        }
    }
    if (choixAttaqueEnnemiRandom === 2){
        if (hpLight.innerHTML <= 0){
            choixAttaqueEnnemiRandom += 1
        }  
    }
    if (choixAttaqueEnnemiRandom === 3){
        if (hpGlad.innerHTML <= 0){
            choixAttaqueEnnemiRandom += 1
        }
    }
    if (choixAttaqueEnnemiRandom === 4){
        if (hpNinja.innerHTML <= 0){
            choixAttaqueEnnemiRandom = choixAttaqueEnnemiRandom - 3 
            if (hpUlti.innerHTML <= 0){
                choixAttaqueEnnemiRandom += 1
                if (hpLight.innerHTML <= 0){
                    choixAttaqueEnnemiRandom += 1
                }  
            }
        }  
    }

    if (choixAttaqueEnnemiRandom === 1){
        if (defenseUlti == 1){ /* pour que lorsque la defense de ulti est activé ses dégats recu sont divisés par 2 */
            degatsEnnemi = Math.round(degatsEnnemi/2 )
            hpUlti.innerHTML = hpUlti.innerHTML - degatsEnnemi
            boiteDialogue.innerHTML = "Ulti se défend et divise les attaques par 2, " + nomEnnemi + " lui inflige " + degatsEnnemi + " degats"
            bordureHero1()
        }else{
            hpUlti.innerHTML = hpUlti.innerHTML - degatsEnnemi
            boiteDialogue.innerHTML = nomEnnemi + " attaque Ulti et lui inflige " + degatsEnnemi + " degats !"
            bordureHero1()
        }
    }
    if (choixAttaqueEnnemiRandom === 2){ 
        if (defenseLight == 1){ /* pour que lorsque la defense de light est activé ses dégats recu sont divisés par 2 */
            degatsEnnemi = Math.round(degatsEnnemi/2 )
            hpLight.innerHTML = hpLight.innerHTML - degatsEnnemi
            boiteDialogue.innerHTML = "Light se défend et divise les attaques par 2, " + nomEnnemi + " lui inflige " + degatsEnnemi + " degats"
            bordureHero2()
        }else{
            hpLight.innerHTML = hpLight.innerHTML - degatsEnnemi
            boiteDialogue.innerHTML = nomEnnemi + " attaque Light et lui inflige " + degatsEnnemi + " degats !"
            bordureHero2()
        }
    }
    if (choixAttaqueEnnemiRandom === 3){
        if (defenseGlad == 1){ /* pour que lorsque la defense de glad est activé ses dégats recu sont divisés par 2 */
            degatsEnnemi = Math.round(degatsEnnemi/2 )
            hpGlad.innerHTML = hpGlad.innerHTML - degatsEnnemi
            boiteDialogue.innerHTML = "Glad se défend et divise les attaques par 2, " + nomEnnemi + " lui inflige " + degatsEnnemi + " degats"
            bordureHero3()
        }else{
            hpGlad.innerHTML = hpGlad.innerHTML - degatsEnnemi
            boiteDialogue.innerHTML = nomEnnemi + " attaque Glad et lui inflige " + degatsEnnemi + " degats !"
            bordureHero3()
        }
    }
    if (choixAttaqueEnnemiRandom === 4){
        if (defenseNinja == 1){ /* pour que lorsque la defense de ninja est activé ses dégats recu sont divisés par 2 */
            degatsEnnemi = Math.round(degatsEnnemi/2 )
            hpNinja.innerHTML = hpNinja.innerHTML - degatsEnnemi
            boiteDialogue.innerHTML = "Ninja se défend et divise les attaques par 2, " + nomEnnemi + " lui inflige " + degatsEnnemi + " degats"
            bordureHero4()
        }else{
            hpNinja.innerHTML = hpNinja.innerHTML - degatsEnnemi
            boiteDialogue.innerHTML = nomEnnemi + " attaque Ninja et lui inflige " + degatsEnnemi + " degats !"
            bordureHero4()
        }
    }
    setTimeout(finPartiePerdante, 2000)
}

/* Ici, j'initialise l'attaque de mon ennemi "Burner" */

function choixBurner(){
    boiteBurner()
    var nomEnnemi = "Burner"
    attaqueEnnemi(nomEnnemi)
    finHpHero()
    choixJoueurSuivantBurner ()
}

/* Ici, j'initialise l'attaque de mon ennemi "Cleaner" */

function choixCleaner(){
    boiteCleaner()
    var nomEnnemi = "Cleaner"
    attaqueEnnemi(nomEnnemi)
    finHpHero()
    choixJoueurSuivantCleaner ()
}

/* Ici, j'initialise l'attaque de mon ennemi "Hurler" */

function choixHurler(){
    boiteHurler() 
    var nomEnnemi = "Hurler"
    attaqueEnnemi(nomEnnemi)
    finHpHero()
    choixJoueurSuivantHurler()
}