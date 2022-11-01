


let button = document.querySelector('.submit')
let inputvaalue = document.querySelector('.inputvalue')
let name = document.querySelector('.name')
let description = document.querySelector('.desc')
let temperature = document.querySelector('.temp')
let icons = document.querySelector('.icon')


button.addEventListener('click', function () {

    fetch(`  https://api.openweathermap.org/data/2.5/weather?q=${inputvaalue.value}&appid=a97e8e93c3a2a416df1e41a87a301394&units=metric `)
        .then(response => response.json())
        .then(sara => {
            let namevalue = sara['name'];
            let icon = sara['weather'][0]['icon'];


            let tempvalue = sara['main']['temp']
            let datavalue = sara['weather'][0]['description']
            name.innerText = namevalue
            description.innerText = datavalue
            temperature.innerText = ` ${tempvalue}C`
            icons.innerHTML = `<img src=" http://openweathermap.org/img/wn/${icon}.png " />`
            console.log(namevalue)
        })

})