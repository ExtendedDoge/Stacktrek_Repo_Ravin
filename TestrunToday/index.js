var hobbies = ['Going to the Gym', 'Playing Online Games', 'Coding'];
var hobbylist = document.getElementById('hobbylist');
hobbies.forEach(function(name) {
    var li = document.createElement('li');
    hobbylist.appendChild(li);
    li.innerHTML += name;
});
hobbylist.style.display = "none";
btnhobbies.addEventListener("click", function() {
    if (hobbylist.style.display == "none") {
        hobbylist.style.display = "block";
    } else {
        hobbylist.style.display = "none";
    }
})

var foods = ['Chicken Adobo', 'Chicken Cordon Bleu', 'Chicken Afritada', 'Lechon Manok', 'Fried Chicken'];
var foodlist = document.getElementById('foodlist');
foods.forEach(function(name) {
    var li = document.createElement('li');
    foodlist.appendChild(li);
    li.innerHTML += name;
});
foodlist.style.display = "none";
btnfoods.addEventListener("click", function() {
    if (foodlist.style.display == "none") {
        foodlist.style.display = "block";
    } else {
        foodlist.style.display = "none";
    }
})

var series = ['Lucifer', 'Stranger Things', 'Love Death + Robots', 'Brooklyn Nine-Nine', 'Bojack Horseman'];
var serieslist = document.getElementById('serieslist');
series.forEach(function(name) {
    var li = document.createElement('li');
    serieslist.appendChild(li);
    li.innerHTML += name;
});
serieslist.style.display = "none";
btnseries.addEventListener("click", function() {
    if (serieslist.style.display == "none") {
        serieslist.style.display = "block";
    } else {
        serieslist.style.display = "none";
    }
})

var movies = ['Kimi no Na wa', 'White Chicks', 'Harry Potter Movies'];
var movieslist = document.getElementById('movieslist');
movies.forEach(function(name) {
    var li = document.createElement('li');
    movieslist.appendChild(li);
    li.innerHTML += name;
});
movieslist.style.display = "none";
btnmovies.addEventListener("click", function() {
    if (movieslist.style.display == "none") {
        movieslist.style.display = "block";
    } else {
        movieslist.style.display = "none";
    }
})