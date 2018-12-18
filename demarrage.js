let pseudo = document.querySelector(".pseudo");
let submitPseudo = document.querySelector(".submitPseudo");
let test = false;

function chgtPage() {
    localStorage.setItem("pseudo",pseudo.value);
    location.replace("aireJ.html");
}

submitPseudo.addEventListener("click",function (){chgtPage()});