const form = document.getElementById('form');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const errorMessages = document.getElementById('error-messages');

form.addEventListener('submit', function(e){

    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Gespeicherten User holen
    const storedUser = localStorage.getItem("user");

    if(!storedUser){
        errorMessages.innerText = "Kein Account gefunden!";
        return;
    }

    const user = JSON.parse(storedUser);

    //Vergleich
    if(email === user.email && password === user.password){

        // als eingeloggt markieren
        localStorage.setItem("isLoggedIn", "true");

        // Username für Navbar direkt setzen
        localStorage.setItem("displayName", user.username);

        window.location.href = "profile.html";

    }else{
        errorMessages.innerText = "Email oder Passwort falsch!";
    }

});