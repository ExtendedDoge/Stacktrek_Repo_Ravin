const btnhobbies = document.getElementById("btnhobbies");
const hobbylist = document.getElementById("hobbylist");

hobbylist.style.display = "none";

btnhobbies.addEventListener("click", function() {
    if (hobbylist.style.display == "none") {
        hobbylist.style.display = "block";
    } else {
        hobbylist.style.display = "none";
    }
})

const btnhfoods = document.getElementById("btnhfoods");
const foodlist = document.getElementById("foodlist");

foodlist.style.display = "none";

btnhfoods.addEventListener("click", function() {
    if (foodlist.style.display == "none") {
        foodlist.style.display = "block";
    } else {
        foodlist.style.display = "none";
    }
})

const btnseries = document.getElementById("btnseries");
const serieslist = document.getElementById("serieslist");

serieslist.style.display = "none";

btnseries.addEventListener("click", function() {
    if (serieslist.style.display == "none") {
        serieslist.style.display = "block";
    } else {
        serieslist.style.display = "none";
    }
})

const btnmovies = document.getElementById("btnmovies");
const movieslist = document.getElementById("movieslist");

movieslist.style.display = "none";

btnmovies.addEventListener("click", function() {
    if (movieslist.style.display == "none") {
        movieslist.style.display = "block";
    } else {
        movieslist.style.display = "none";
    }
})