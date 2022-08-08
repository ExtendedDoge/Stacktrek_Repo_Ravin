let Fahrenheit = document.getElementById('Faht')
let submit = document.getElementById('submit')
submit.addEventListener('click', (e) => {
    let Celsius = document.getElementById('temp').value
    e.preventDefault()
    result(Celsius)
})
const result = (cel) => {
    Fahrenheit.value = (9 * cel + 160) / 5
}