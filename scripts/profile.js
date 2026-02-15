





document.addEventListener("DOMContentLoaded", function(){

    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if(isLoggedIn !== "true"){
        window.location.href = "login.html";
    }

});


function changeEmail(){
   const emailInput = document.getElementById("email-input");
   const warning = document.getElementById("email-warning");
   const newEmail = emailInput.value.trim();

    if (!isValidEmail(newEmail)) {
        warning.innerText = "Bitte eine gültige E-Mail eingeben.";
        warning.style.display = "block";
        return;
    }
    warning.style.display = "none";

    //sessionStorage.setItem("userEmail", newEmail);
    localStorage.setItem("userEmail", newEmail);
    document.getElementById("saved-email").innerText = newEmail;

     emailInput.value = "";
}




document.addEventListener("DOMContentLoaded", function () {

    const savedEmail = localStorage.getItem("userEmail");

    if (savedEmail) {
        document.getElementById("saved-email").innerText = savedEmail;
    }

});


function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function reloadPage() {
    window.location.reload();
}




function changeName(){
    const nameInput = document.getElementById("name-input");
    const newName = document.getElementById("name-input").value; 
    if (newName.trim() !== ""){   
        localStorage.setItem("displayName" , newName);  
        document.getElementById("saved-name").innerText = newName;      
    }
     nameInput.value = "";
     window.location.reload();
     
}

document.addEventListener("DOMContentLoaded", function () {

    const savedName = localStorage.getItem("displayName");

    if (savedName) {
        document.getElementById("saved-name").innerText = savedName;
    }

});





document.getElementById("name-input")
    .addEventListener("keypress", function(event){
        if(event.key === "Enter") {
            changeName();
        }
    })


const uploadInput = document.getElementById("profile-upload");
const previewImage = document.getElementById("profile-preview");



uploadInput.addEventListener("change", function () {

    const file = this.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = function () {
        const base64Image = reader.result;

        // im Profil anzeigen
        previewImage.src = base64Image;

        // speichern
        //localStorage.setItem("profileImage", base64Image);
        localStorage.setItem("profileImage", base64Image);
    };

    reader.readAsDataURL(file);
});


// Beim Laden gespeichertes Bild setzen
document.addEventListener("DOMContentLoaded", function () {

    const savedImage = localStorage.getItem("profileImage");

    if (savedImage) {
        previewImage.src = savedImage;
    }
});




document.addEventListener("DOMContentLoaded", function(){

    const storedUser = localStorage.getItem("user");

    if(storedUser){

        const user = JSON.parse(storedUser);

        document.getElementById("profile-name").innerText = user.username;
        document.getElementById("profile-email").innerText = user.email;
    }
});




