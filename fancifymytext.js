function showAlert() {
    alert("Hello, world!");
}

document.getElementById("biggerButton").onclick = function() {
    showAlert();  
    let textArea = document.getElementById("textArea");
    textArea.style.fontSize = "24pt";
};
document.getElementById("fancy").onchange = function() {
    let textArea = document.getElementById("textArea");
    if (this.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    }
};

document.getElementById("boring").onchange = function() {
    let textArea = document.getElementById("textArea");
    if (this.checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
};

document.getElementById("mooButton").onclick = function() {
    let textArea = document.getElementById("textArea");
    let text = textArea.value.toUpperCase();
    let sentences = text.split(".");
    textArea.value = sentences.join("-Moo.");
};
