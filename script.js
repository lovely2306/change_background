let currentTheme = "main";

function updateImage(src) {
    const imgElement = document.querySelector("img");
    imgElement.src = src;
}

function Blue() {
    if (currentTheme === "blue") {
        resetTheme();
    } else {
        document.body.style.backgroundColor = "#133E87";
        document.body.style.color = "white";
        document.body.style.fontFamily = "'Impact', sans-serif"; 
        updateImage("images/boy.jpg"); //
        currentTheme = "blue";
    }
}

function Pink() {
    if (currentTheme === "pink") {
        resetTheme();
    } else {
        document.body.style.backgroundColor = "#F0A8D0";
        document.body.style.color = "black";
        document.body.style.fontFamily = "'Brush Script MT', cursive";
        updateImage("images/girl.jpg"); //
        currentTheme = "pink";
    }
}

function Brown() {
    if (currentTheme === "brown") {
        resetTheme();
    } else {
        document.body.style.backgroundColor = "#654520";
        document.body.style.color = "white";
        document.body.style.fontFamily = "'Georgia', serif";
        updateImage("images/oldie.jpg"); 
        currentTheme = "brown";
    }
}

function resetTheme() {
    document.body.style.backgroundColor = "#A1D6B2";
    document.body.style.color = "black";
    document.body.style.fontFamily = "default";
    updateImage("images/wc.jpg"); 
    currentTheme = "main";
}
