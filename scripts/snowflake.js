const container = document.querySelector(".snowflake-container");

function createSnow() {
    const snow = document.createElement("div");
    snow.classList.add("snowflake");


    snow.style.left = Math.random() * 100 + "vw";
    snow.style.animationDuration = (3 + Math.random() * 5) + "s";
    snow.style.opacity = Math.random(); 


    container.appendChild(snow);
    
    snow.addEventListener("animationend", () => {
        snow.remove();
    });
}

setInterval(createSnow, 200);