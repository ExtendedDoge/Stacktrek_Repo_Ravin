function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
        const setBg = () => {
            const randomColor = Math.floor(Math.random() * 16777215).toString(16);
            document.body.style.backgroundColor = "#" + randomColor;
            color.innerHTML = "#" + randomColor;
        }

        genNew.addEventListener("click", setBg);
        setBg();
    }
    document.getElementById("myInput").value = "";
}