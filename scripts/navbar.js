fetch("../components/navbar.html")
    .then(response => response.text())
    .then(data => {
    document.getElementById("navbar").innerHTML = data;

    // Anzeigename
    const savedName = localStorage.getItem("displayName");
    if (savedName) {
        const nameField = document.getElementById("display-name");
        if (nameField) {
            nameField.innerText = savedName;
        }
    }

    const savedImage = localStorage.getItem("profileImage");

    if (savedImage) {
    const navbarImage = document.getElementById("navbar-profile-image");
        if (navbarImage) {
            navbarImage.src = savedImage;
        }
    }




    // Sidebar Logik
    const menuBtn = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    if (menuBtn && sidebar && overlay) {

        menuBtn.addEventListener("click", () => {
            sidebar.classList.toggle("active");
            overlay.classList.toggle("active");
        });

        overlay.addEventListener("click", () => {
            sidebar.classList.remove("active");
            overlay.classList.remove("active");
        });

    } else {
        console.error("Sidebar Elemente nicht gefunden!");
    }
})



    
.catch(error => console.error("Fehler beim laden des Navbar: " + error));





function logout(){
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("displayName");
    window.location.href = "login.html";
}






    





    