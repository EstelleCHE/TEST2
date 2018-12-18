// Association des boutons aux variables

let aireJG = document.querySelector(".aireJG");
let aireJ = document.querySelector(".aireJ");

// Les statistiques du personnage
let sante = document.querySelector(".sante");
let fatigue = document.querySelector(".fatigue");
let humeur = document.querySelector(".humeur");
let age = document.querySelector(".age");
let poids = document.querySelector(".poids");
let faim = document.querySelector(".faim");
let soif = document.querySelector(".soif");

 // Les boutons d'action donner à manger
let manger = document.querySelector(".manger");
let actLegume = document.querySelector(".legume");
let actDessert = document.querySelector(".dessert");

// Les boutons d'action donner à boire
let boire = document.querySelector(".boire");
let actEau = document.querySelector(".eau");
let actJus = document.querySelector(".jus");

// Les boutons d'action jouer
let actJouer = document.querySelector(".jouer");
let actBallon = document.querySelector(".ballon");
let actVelo = document.querySelector(".velo");
let actDeguiser = document.querySelector(".deguiser");
let actBoue = document.querySelector(".boue");

// les boutons d'action promener
let actPromener = document.querySelector(".promener");
let actMer = document.querySelector(".mer");
let actNeige = document.querySelector(".neige");
let actCirque = document.querySelector(".cirque");

let actDormir = document.querySelector(".dormir");
let actPause = document.querySelector(".pause");
let joueurTimer;
let dialogue = document.querySelector(".dialogue");


let joueur1 = {
    pseudo: localStorage.getItem("pseudo"),
    sante: 100,
    fatigue: 0,
    humeur: 50,
    age: 3,
    poids: 50,
    faim: 50,
    soif: 50,
    mangerBoire: function (quoi) {
        this.sante += quoi.impactSante;
        if  (joueur1.sante < 50) {
            couleur.sante = "red"
            affichage("Je me sens pas trés bien!!!!",
                "black",
                "img/back.jpg",
                "block",
                "img/peppapascontente.jpg",
                "block");
        }
        if  (joueur1.sante >= 50) {
            couleur.sante = "green"
            affichage("MESSAGE!",
                "white",
                "img/back.jpg",
                "block",
                "img/peppabouge.gif",
                "block");
        }

        this.humeur += quoi.impactHumeur;
        if  (joueur1.humeur < 50) {
            couleur.humeur = "red";
            affichage("Je m'ennuie!!!",
                "black",
                "img/back.jpg",
                "block",
                "img/peppapascontente.jpg",
                "block");
            }

        if  (joueur1.humeur >= 50) {
            couleur.humeur = "green";
            affichage("MESSAGE!",
                "white",
                "img/back.jpg",
                "block",
                "img/peppabouge.gif",
                "block");
        }

        this.poids += quoi.impactPoids;

        this.faim += quoi.impactFaim;
        if  (joueur1.faim > 50) {
            couleur.faim = "red";
            affichage("J'ai faim!",
                "black",
                "img/back.jpg",
                "block",
                "img/peppabulle.png",
                "block");
        }
        if  (joueur1.faim <= 50) {
            couleur.faim = "green";
            affichage("MESSAGE!",
                "black",
                "img/back.jpg",
                "block",
                "img/peppabouge.gif",
                "block");
        }

        this.soif += quoi.impactSoif;
        if  (joueur1.soif > 50) {
            couleur.soif = "red";
            affichage("J'ai soif!!!!",
                "white",
                "img/back.jpg",
                "block",
                "img/peppabulle.jpg",
                "block");
        }
        if  (joueur1.soif <= 50) {
            couleur.soif = "green";
            affichage("MESSAGE!",
                "white",
                "img/back.jpg",
                "block",
                "img/peppabouge.gif",
                "block");
        }
    },
    jouer: function (aQuoi) {
        this.humeur += aQuoi.impactHumeur;
        if  (joueur1.humeur < 50) {
            couleur.humeur = "red";
            affichage("Je m'ennuie!!!!",
                "black",
                "img/back.jpg",
                "block",
                "img/peppapascontente.jpg",
                "block");
        }
        if  (joueur1.humeur >= 50) {
            couleur.humeur = "green";
            affichage("MESSAGE!",
                "white",
                "img/back.jpg",
                "block",
                "img/peppabouge.gif",
                "block");
        }

        this.fatigue += aQuoi.impactFatigue;

        this.soif += aQuoi.impactSoif;
        if  (joueur1.soif > 50) {
            couleur.soif = "red";
            affichage("J'ai soif!!!",
                "black",
                "img/back.jpg",
                "block",
                "img/peppabulle.png",
                "block");
        }
        if  (joueur1.soif <= 50) {
            couleur.soif = "green";
            affichage("MESSAGE",
                "white",
                "img/back.jpg",
                "block",
                "img/peppabouge.gif",
                "black");
        }

        this.faim += aQuoi.impactFaim;
        if  (joueur1.faim > 50) {
            couleur.faim = "red";
            affichage("J'ai faim!!!",
                "black",
                "img/back.jpg",
                "block",
                "img/peppabulle.png",
                "block");
        }
        if  (joueur1.faim <= 50) {
            couleur.faim = "green";
            affichage("MESSAGE!",
                "white",
                "img/back.jpg",
                "block",
                "img/peppabouge.gif",
                "block");
        }
    },
    promener: function (ou) {
        this.humeur += ou.impactHumeur;
        if  (this.humeur < 50) {
            couleur.humeur = "red";
            affichage("Je m'ennuie!!!",
                "black",
                "img/back.jpg",
                "block",
                "img/peppapascontente.jpg",
                "block");
        }
        if  (this.humeur >= 50) {
            couleur.humeur = "green";
            affichage("MESSAGE",
                "white",
                "img/back.jpg",
                "block",
                "img/peppabouge.gif",
                "block");
        }

        this.fatigue += ou.impactFatigue;
        if  (this.fatigue > 50) {
            couleur.fatigue = "red"
            affichage("Je me sens pas trés bien!!!",
                "black",
                "img/back.jpg",
                "block",
                "img/peppapascontente.jpg",
                "block");


        }
        if  (this.fatigue <= 50) {
            couleur.fatigue = "green"
            affichage("MESSAGE",
                "white",
                "img/back.jpg",
                "block",
                "img/peppabouge.gif",
                "block");
            }


        this.soif += ou.impactSoif;
        if  (this.soif > 50) {
            couleur.soif = "red";
            affichage("J'ai soif!!!",
                "black",
                "img/back.jpg",
                "block",
                "img/peppabulle.png",
                "block");
        }
        if  (this.soif <= 50) {
            couleur.soif = "green";
            affichage("MESSAGE",
                "white",
                "img/back.jpg",
                "block",
                "img/peppabouge.gif",
                "block");
        }

        this.faim += ou.impactFaim;
        if  (this.faim > 50) {
            couleur.faim = "red";
            affichage("J'ai faim",
                "black",
                "img/back.jpg",
                "block",
                "img/peppabulle.png",
                "black");
            }
        if  (this.faim <= 50) {
            couleur.faim = "green";
            affichage("MESSAGE",
                "white",
                "img/back.jpg",
                "block",
                "img/peppabouge.gif",
                "block");
        }

        this.sante += ou.impactSante;
        if  (this.sante < 50) {
            couleur.sante = "red"
            affichage("Je me sens pas trés bien!!!!",
                "black",
                "img/back.jpg",
                "block",
                "img/peppapascontente.jpg",
                "block");
           }
        if  (this.sante >= 50) {
            couleur.sante = "green"
            affichage("MESSAGE!",
                "white",
                "img/back.jpg",
                "block",
                "img/peppabouge.gif",
                "block");
        }
    },
    affichageStat: function (couleur) {
        sante.style.backgroundColor= `${couleur.sante}`;
        sante.style.width =`${this.sante}%`;
        sante.style.height = "20px";
        sante.innerHTML = "Santé <br>";

        fatigue.style.backgroundColor= `${couleur.fatigue}`;
        fatigue.style.width =`${this.fatigue}%`;
        fatigue.style.height = "20px";
        fatigue.innerHTML = "Fatigue <br>";

        humeur.style.backgroundColor= `${couleur.humeur}`;
        humeur.style.width =`${this.humeur}%`;
        humeur.style.height = "20px";
        humeur.innerHTML = "Humeur <br>";

        poids.style.backgroundColor= `${couleur.poids}`;
        poids.style.width =`${this.poids}%`;
        poids.style.height = "20px";
        poids.innerHTML = "Poids <br>";

        age.style.backgroundColor= `${couleur.age}`;
        age.style.width=`${this.age}%`;
        age.style.height = "20px";
        age.innerHTML = "Age <br>";

        faim.style.backgroundColor= `${couleur.faim}`;
        faim.style.width =`${this.faim}%`;
        faim.style.height = "20px";
        faim.innerHTML = "Faim <br>";

        soif.style.backgroundColor= `${couleur.soif}`;
        soif.style.width =`${this.soif}%`;
        soif.style.height = "20px";
        soif.innerHTML = "Soif <br>";
    }
};
let couleur= {
   sante: "green",
    humeur: "green",
    poids: "green",
    age: "green",
    faim: "green",
    fatigue: "green",
    soif: "green"
}

let legume = {
    impactSante: 10,
    impactHumeur: -5,
    impactPoids: -2,
    impactSoif: 1,
    impactFaim: -5
}

let dessert = {
    impactSante: -2,
    impactHumeur: 10,
    impactPoids: 5,
    impactSoif: 10,
    impactFaim: -5
}

let eau = {
    impactSante: 5,
    impactHumeur: 0,
    impactPoids: -2,
    impactSoif: -10,
    impactFaim: 2
}


let jus = {
    impactSante: -5,
    impactHumeur: 5,
    impactPoids: 5,
    impactSoif: 2,
    impactFaim: -5
}

// Impact des différents jeux
let deguiser ={
    impactHumeur: 10,
impactFatigue: 5,
impactSoif: 2,
impactFaim: 2
}
let ballon ={
    impactHumeur: 7,
    impactFatigue: 10,
    impactSoif: 8,
    impactFaim: 5
}
let velo ={
    impactHumeur: 8,
    impactFatigue: 10,
    impactSoif: 10,
    impactFaim: 10
}
let boue ={
    impactHumeur: 20,
    impactFatigue: 8,
    impactSoif: 5,
    impactFaim: 5
}

// Impact des différentes promenades
let aLaMer = {
   impactHumeur: 10,
   impactFatigue: 5,
   impactSoif: 10,
  impactFaim: 5,
  impactSante: 10
}
let aLaNeige = {
    impactHumeur: 15,
    impactFatigue: 10,
    impactSoif: 5,
    impactFaim: 10,
    impactSante: 5
}
let auCirque = {
    impactHumeur: 20,
    impactFatigue: 5,
    impactSoif: 15,
    impactFaim: 15,
    impactSante: 0
}

// init
start();
joueur1.affichageStat(couleur);
affichage("MESSAGE",
    "white",
    "img/back.jpg",
    "block",
    "img/peppabouge.gif",
    "block");

function afficherBouton(item, State) {
    item.style.display = State;
}

function affichage(message,couleur,fond,affFond,perso,affPerso)
{
    dialogue.innerHTML = `<h2>${message}</h2>`;
    dialogue.style.color = couleur;
    personnage(perso, affPerso);
    arrierePlan(fond, affFond);
}
function autoStat(joueur) {

    joueur.sante -= 2;
    if  (joueur1.sante < 50) {
            couleur.sante = "red"
            affichage("Je me sens pas trés bien!!!",
                "black",
                "img/back.jpg",
                "block",
                "img/peppapascontente.jpg",
                "block");
    }
    if  (joueur1.sante >= 50) {
        couleur.sante = "green"
        affichage("MESSAGE",
            "white",
            "img/back.jpg",
            "block",
            "img/peppabouge.gif",
            "block");
    }
    joueur.humeur -= 2;
    if  (joueur1.humeur < 50) {
            couleur.humeur = "red";
        affichage("Je m'ennuie!!!",
            "black",
            "img/back.jpg",
            "block",
            "img/peppapascontente.jpg",
            "block");
    }
    if  (joueur1.humeur >= 50) {
        couleur.humeur = "green";
        affichage("MESSAGE",
            "white",
            "img/back.jpg",
            "block",
            "img/peppabouge.gif",
            "block");
    }
    joueur.fatigue += 2;
    if  (joueur1.fatigue > 50) {
        couleur.fatigue = "red";
        affichage("Je suis fatiguée!!!",
            "black",
            "img/back.jpg",
            "block",
            "img/peppapascontente.jpg",
            "block");
    }
    if  (joueur1.fatigue <= 50) {
        couleur.fatigue = "green";
        affichage("MESSAGE",
            "white",
            "img/back.jpg",
            "block",
            "img/peppabouge.gif",
            "block");
    }
    joueur.faim += 2;
    if  (joueur1.faim > 50) {
        couleur.faim = "red";
        affichage("J'ai faim!!!",
            "black",
            "img/back.jpg",
            "block",
            "img/peppaparle.png",
            "block");
    }
    if  (joueur1.faim <= 50) {
        couleur.faim = "green";
        affichage("MESSAGE",
            "white",
            "img/back.jpg",
            "block",
            "img/peppabouge.gif",
            "block");

    }
    joueur.soif += 2;
    if  (joueur1.soif > 50) {
        couleur.soif = "red";
        affichage("J'ai soif'!!!",
            "black",
            "img/back.jpg",
            "block",
            "img/peppaparle.png",
            "block");
    }
    if  (joueur1.soif <= 50) {
        couleur.soif = "green";
        affichage("MESSAGE",
            "white",
            "img/back.jpg",
            "block",
            "img/peppabouge.gif",
            "block");
    }
    joueur.age += 1;
    joueur.affichageStat(couleur);
    jeu();
}


function start() {
    joueurTimer = setInterval(function () {
        autoStat(joueur1)
    }, 10000);

}


function stop() {
    clearInterval(joueurTimer);
}

function jeu(){

    if (joueur1.sante <= 0) {
        // alert("Peppa est trop fatiguée!!");
        affichage("Peppa est tombée malade. Son père, ruiné par les médicaments pour la sauver n'a pas pu faire autrement que la manger!",
            "black",
            "img/bad_end.jpg",
            "block",
            "img/peppapascontente.jpg",
            "none");
        afficherBouton(actEau,"none");
        afficherBouton(actJus,"none");
        afficherBouton(actLegume,"none");
        afficherBouton(actDessert,"none");
        afficherBouton(actBallon,"none");
        afficherBouton(actVelo,"none");
        afficherBouton(actDeguiser,"none");
        afficherBouton(actBoue,"none");
        afficherBouton(actMer,"none");
        afficherBouton(actNeige,"none");
        afficherBouton(actCirque,"none");
        stop();
        actPause.disabled = true;
        document.querySelectorAll("button").disabled = true;
        resetBoutton = document.createElement('button');
        resetBoutton.textContent = 'recommencer';
        document.body.appendChild(resetBoutton);
        resetBoutton.addEventListener('click', reset);
    }
    if (joueur1.poids > 70){
        // alert("Peppa a trop mangé!!");
        affichage("Peppa a trop mangé. Son père affamé l'a mangée en raclette!",
            "black",
            "img/bad_end.jpg",
            "block",
            "img/peppapascontente.jpg",
            "none");
        afficherBouton(actEau,"none");
        afficherBouton(actJus,"none");
        afficherBouton(actLegume,"none");
        afficherBouton(actDessert,"none");
        afficherBouton(actBallon,"none");
        afficherBouton(actVelo,"none");
        afficherBouton(actDeguiser,"none");
        afficherBouton(actBoue,"none");
        afficherBouton(actMer,"none");
        afficherBouton(actNeige,"none");
        afficherBouton(actCirque,"none");
        stop();
        actPause.disabled = true;
        document.querySelectorAll("button").disabled = true;
        resetBoutton = document.createElement('button');
        resetBoutton.textContent = 'recommencer';
        document.body.appendChild(resetBoutton);
        resetBoutton.addEventListener('click', reset);
    }
    if (joueur1.age > 18) {
        // alert("BRAVO!!!! Peppa a grandi, elle quitte la maison.Elle est prête à mener sa propre vie!");
        affichage("Peppa a grandi. Elle s'est mariée et a eu 5 enfants. Achète la version 2 du jeu pour faire grandir les enfants de PEPPA!",
            "black",
            "img/happy_end.jpg",
            "block",
            "img/peppapascontente.jpg",
            "none");
        afficherBouton(actEau,"none");
        afficherBouton(actJus,"none");
        afficherBouton(actLegume,"none");
        afficherBouton(actDessert,"none");
        afficherBouton(actBallon,"none");
        afficherBouton(actVelo,"none");
        afficherBouton(actDeguiser,"none");
        afficherBouton(actBoue,"none");
        afficherBouton(actMer,"none");
        afficherBouton(actNeige,"none");
        afficherBouton(actCirque,"none");
        stop();
        actPause.disabled = true;
        document.querySelectorAll("button").disabled = true;
        resetBoutton = document.createElement('button');
        resetBoutton.textContent = 'recommencer';
        document.body.appendChild(resetBoutton);
        resetBoutton.addEventListener('click', reset);
    }
}


function reset() {

    location.reload();


}

function arrierePlan(image,affichage){
    aireJ.style.backgroundImage = `url(${image})`;
    aireJ.style.backgroundRepeat = "no-repeat";
    aireJ.style.backgroundSize = "cover";
    aireJ.style.display = affichage;
}
function personnage(image,affichage){
    aireJG.innerHTML = `<img src="${image}">`;
    aireJG.style.display= affichage;
}


// Les boutons principaux
manger.addEventListener("click",function() {
    afficherBouton(actLegume,"block");
    afficherBouton(actDessert,"block");
    afficherBouton(actEau,"none");
    afficherBouton(actJus,"none");
})
boire.addEventListener("click",function() {
    afficherBouton(actEau,"block");
    afficherBouton(actJus,"block");
    afficherBouton(actLegume,"none");
    afficherBouton(actDessert,"none");
})
actJouer.addEventListener("click",function() {
    afficherBouton(actBallon,"block");
    afficherBouton(actVelo,"block");
    afficherBouton(actDeguiser,"block");
    afficherBouton(actBoue,"block");
    afficherBouton(actMer,"none");
    afficherBouton(actNeige,"none");
    afficherBouton(actCirque,"none");
})
actPromener.addEventListener("click",function() {
    afficherBouton(actBallon,"none");
    afficherBouton(actVelo,"none");
    afficherBouton(actDeguiser,"none");
    afficherBouton(actBoue,"none");
    afficherBouton(actMer,"block");
    afficherBouton(actNeige,"block");
    afficherBouton(actCirque,"block");
})
actDormir.addEventListener("click", function() {
            affichage("MESSAGE",
            "white",
            "img/peppadort.jpg",
            "block",
            "img/peppa1.png",
            "none");
        joueur1.fatigue -= 50;
});

// Les boutons de choix de nourriture
actLegume.addEventListener("click", function () {
    joueur1.mangerBoire(legume);
    affichage("MESSAGE",
        "white",
        "img/peppaLegumes.jpg",
        "block",
        "img/peppapascontente.jpg",
        "none");
    joueur1.affichageStat(couleur)
});
actDessert.addEventListener("click", function () {
    joueur1.mangerBoire(dessert);
    affichage("MESSAGE",
        "white",
        "img/back.jpg",
        "block",
        "img/peppaglace.png",
        "block");
    joueur1.affichageStat(couleur)
});
// Les boutons de choix de boisson
actEau.addEventListener("click", function () {
    joueur1.mangerBoire(eau);
    affichage("MESSAGE",
        "white",
        "img/peppaBoitEau.jpg",
        "block",
        "img/peppaglace.png",
        "none");
    joueur1.affichageStat(couleur)
});
actJus.addEventListener("click", function () {
    joueur1.mangerBoire(dessert);
    affichage("MESSAGE",
        "white",
        "img/back.jpg",
        "block",
        "img/peppaglace.png",
        "block");
    joueur1.affichageStat(couleur)
});
// Les boutons de choix de jeu
actBallon.addEventListener("click", function () {
    joueur1.jouer(ballon);
    affichage("MESSAGE",
        "white",
        "img/back.jpg",
        "block",
        "img/peppaBallon.gif",
        "block");
    joueur1.affichageStat(couleur)
});
actVelo.addEventListener("click", function () {
    joueur1.jouer(velo);
    affichage("MESSAGE",
        "white",
        "img/back.jpg",
        "block",
        "img/peppaVeloPetite.png",
        "block");
    joueur1.affichageStat(couleur)
});
actDeguiser.addEventListener("click", function () {
    joueur1.jouer(deguiser);
    affichage("MESSAGE",
        "white",
        "img/back.jpg",
        "block",
        "img/peppafee.png",
        "block");
    joueur1.affichageStat(couleur)
});
actBoue.addEventListener("click", function () {
    joueur1.jouer(boue);
    affichage("MESSAGE",
        "white",
        "img/back.jpg",
        "block",
        "img/peppaBoue.gif",
        "block");
    joueur1.affichageStat(couleur)
});
// Les boutons de choix de promenade
actMer.addEventListener("click", function () {
    joueur1.promener(aLaMer);
    affichage("MESSAGE",
        "white",
        "img/peppaALaPlage.png",
        "block",
        "img/peppaglace.png",
        "none");
    joueur1.affichageStat(couleur)
});
actNeige.addEventListener("click", function () {
    joueur1.promener(aLaNeige);
    affichage("MESSAGE",
        "white",
        "img/peppaALaNeige.png",
        "block",
        "img/peppaglace.png",
        "none");
    joueur1.affichageStat(couleur)
});
actCirque.addEventListener("click", function () {
    joueur1.promener(auCirque);
    affichage("MESSAGE",
        "white",
        "img/peppaAuCirque.jpg",
        "block",
        "img/peppabouge.gif",
        "block");
    joueur1.affichageStat(couleur)
});

actPause.addEventListener("click", function () {

    if (actPause.innerHTML === "Pause") {
        console.log("2");
        stop();
        actPause.innerHTML = "Play";
    }
    else if (actPause.innerHTML === "Play") {
        console.log("1");
        start();
        actPause.innerHTML = "Pause";
    }

});



//var joueurTimer = setInterval(function() {autoStat(joueur1)}, 1000);

jeu();


