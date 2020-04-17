
window.addEventListener('load', ()=>{
let form = document.querySelector('form');
let result = document.querySelector('#result');
let out = document.querySelector('#out');
let searchIcon = document.querySelector('#search-icon');
let icon = document.querySelector('#icon');
let btnGetWeather = document.querySelector('#btnGetWeather');
let input = document.querySelector('#input').value;
let apiKey = '1192ae3d1ebdb8edcae3bdfb00ac72b6';

getCurrentCity = () => {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Lisbon&appid=1192ae3d1ebdb8edcae3bdfb00ac72b6')
    .then(res => res.json())
    .then(data =>{
        let iconcode = data.weather[0].icon;
        let iconUrl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        icon.setAttribute('src', iconUrl);

        out.innerHTML =  Math.round(data.main.temp - 273) + ' C' + '<sup>o</sup>'
    })
    .catch(error =>{
        console.log(error)
    })
}

getCurrentCity();
btnGetWeather.addEventListener('click', (e) =>{
    e.preventDefault();
    let city = document.querySelector('#input').value;

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(res => res.json())
    .then(data =>{

        let iconcode = data.weather[0].icon;
        let iconUrl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        searchIcon.setAttribute('src', iconUrl);

        result.innerHTML ='<strong>' + city +'</strong>' + ' ' + Math.round(data.main.temp - 273) + ' C' + '<sup>o</sup>'

        form.reset();
    })
    .catch(error =>{
        console.log(error)
    })
    console.log(city);
})


})
