lastMod();
setInterval(() => lastMod(), 1000);
//return last modified
function lastMod(){
    let modDisplay = document.getElementById("lastMod");
    modDisplay.innerText = "\u00A9 2025 TruBrew | Last Modified: " + document.lastModified;
}


