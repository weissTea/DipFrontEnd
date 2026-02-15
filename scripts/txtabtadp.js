fetch("../txts/adpatifyAbout.txt")
    .then(response => response.text())
    .then(data =>{
        document.getElementById("home-content").innerText = data; 
    })
    .catch(error => {
        console.error("Fehler beim Laden der txt.datei: ", error);
    });