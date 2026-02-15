const container = document.querySelector(".leaves-container");

function createLeaf() {
    const leaf = document.createElement("div");
    leaf.classList.add("leaf");


    leaf.style.left = Math.random() * 100 + "vw";
    leaf.style.animationDuration = (3 + Math.random() * 5) + "s";
    leaf.style.opacity = Math.random(); 


    container.appendChild(leaf);

    //setTimeout(() => {
     //    leaf.remove(); 
    // }, 8000);
    // würde funktioneren, blätter verschwinden aber in der Mitte des Screens
    
    leaf.addEventListener("animationend", () => {
        leaf.remove();
    });
}

setInterval(createLeaf, 500);