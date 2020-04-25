window.addEventListener('load', ()=> {
let form = document.querySelector('form');
let result = document.querySelector('#result');
let out = document.querySelector('#out');
let searchIcon = document.querySelector('#search-icon');
let icon = document.querySelector('#icon');
let btnGetWeather = document.querySelector('#btnGetWeather');
let input = document.querySelector('#input').value;
let apiKey = '1192ae3d1ebdb8edcae3bdfb00ac72b6';
let searchCity = document.querySelector('.search-city');

//Variables for 5 days weather
let iconForDay =document.querySelector('#weather-day');
let dayTeampreture = document.querySelector('#day-temperature');
let weatherCityName = document.querySelector('#weather-city');
let dayDate = document.querySelector('#day-date-day');
let dayHour = document.querySelector('#day-date-hour');


  

var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

/* var x = document.getElementById("demo");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;

}
getLocation();
 */
navigator.geolocation.getCurrentPosition(function(position) {
    
    let long = position.coords.longitude;
    let lat = position.coords.latitude;
        //Call to get requested by customer city  
getCurrentCity = () => {
    /* fetch('http://api.openweathermap.org/data/2.5/weather?q=Lisbon&units=metric&appid=1192ae3d1ebdb8edcae3bdfb00ac72b6')  */
    fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&appid=1192ae3d1ebdb8edcae3bdfb00ac72b6`)
    .then(res => res.json())
    .then(data =>{
/*         console.log(data.list[0]); */
        
        //Creating variable for date
        let date = data.list[0].dt_txt;
        let result = date.slice(10, 16);
        let result2 = parseInt(date.slice(8, 10));

        for(var i = 3; i < 10; i+= 4){
            console.log(data.list[i].main.temp, result2 + i)
            
        }
       /*  console.log(data.list[0]); */
         let iconcode = data.list[0].weather[0].icon;
        let iconUrl = "http://openweathermap.org/img/w/" + iconcode + ".png";/*
        let weatherDesc = data.weather[0].main;
        let weatherFullDesc = data.weather[0].description;*/
/*         iconForDay.setAttribute('src', iconUrl);  */
        
        //Insert data to HTML 
       /*  weatherCityName.innerHTML = `Lisbon `; */
       /*  dayDate.innerHTML = days[new Date().getDay()] + " " + result2; */
        /* dayHour.innerHTML = result; */
     /*    dayTeampreture.innerHTML = `${(Math.round(data.list[0].main.temp))} C<sup>o</sup> ` */
        new Date().getDay()
        new Date().getDay()
        new Date().getDay()

        fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&appid=1192ae3d1ebdb8edcae3bdfb00ac72b6`)
    .then(res => res.json())
    .then(data =>{})
        insertCityWeather((Math.round(data.list[0].main.temp)) +  " C<sup>o</sup>",days[new Date().getDay() - 1]+ " " + (result2 ), `http://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png` );
        insertCityWeather((Math.round(data.list[8].main.temp)) +  " C<sup>o</sup>",days[new Date().getDay()    ] + " " + (result2 + 1), `http://openweathermap.org/img/w/${data.list[8].weather[0].icon}.png` );
        insertCityWeather((Math.round(data.list[17].main.temp)) +  " C<sup>o</sup>",days[new Date().getDay() + 1] + " " + (result2 + 2),`http://openweathermap.org/img/w/${iconcode}.png` );
        insertCityWeather((Math.round(data.list[28].main.temp)) +  " C<sup>o</sup>",days[new Date().getDay() + 2] + " " + (result2 + 3),`http://openweathermap.org/img/w/${iconcode}.png` );
        insertCityWeather((Math.round(data.list[36].main.temp)) +  " C<sup>o</sup>",days[new Date().getDay() + -4] + " " + (result2 + 4),`http://openweathermap.org/img/w/${iconcode}.png` );
  
    })
     .catch(error =>{
        
            console.log(error);       
        

  }
     )}
     getCurrentCity();


  });

btnGetWeather.addEventListener('click', (e) =>{
    e.preventDefault();
    //Taking data from input
    let city = document.querySelector('#input').value;

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then(res => res.json())
    .then(data =>{
        let weatherDescr = data.weather[0].main;
        console.log(data.weather[0].main);
        if(weatherDescr === 'Clouds'){
            searchCity.setAttribute("style", "background: url('img/sky-sunny.jpg');");                                                  /*   style.background = "url('img/sky-sunny.jpg')"; */
        }else if(weatherDescr === 'Clear'){
            searchCity.setAttribute("style", "background: url('img/clear-sky.jpg');");  
        }else if(weatherDescr === 'Raining'){
            searchCity.setAttribute("style", "background: url('img/raining-in-the-city-2448749.jpg');");  
        }
        let iconcode = data.weather[0].icon;
        let iconUrl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        searchIcon.setAttribute('src', iconUrl);

        result.innerHTML ='<strong>' + city +'</strong>' + ' ' + Math.round(data.main.temp)  + ' C' + '<sup>o</sup>'

        form.reset();
    })
    .catch(error =>{
/*         console.log("error"); */
    })
  
})



/* console.log(days[new Date().getDay()]); */



   

})

// Insert data to HTML 



insertCityWeather = (temp, date, img) =>{
    let wrapperWeather = document.querySelector('.wrapper-weather');
    let paragraph = document.createElement('p');
    let paragraph2 = document.createElement('p');
    let image = document.createElement('img');
    let div = document.createElement('div');
    div.className = 'weather-day';
    wrapperWeather.appendChild(div);
    image.setAttribute('src', img);         
    paragraph.className = 'day-temperature';
    paragraph.innerHTML = temp;
    paragraph2.innerHTML = date;    
    div.appendChild(paragraph2);
    div.appendChild(paragraph); 
    div.appendChild(image);

}   
/* insertCityWeather(); */