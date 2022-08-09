const button = document.getElementById("btnhobbies");
const list = document.getElementById("hobbylist");
//const button = document.getElementById("btnhfoods");
//const list = document.getElementById("foodlist");
list.style.display = "none";

button.addEventListener("click", (event) => {
    if (list.style.display == "none") {
        list.style.display == "block";
    } else {
        list.style.display == "none";
    }
})