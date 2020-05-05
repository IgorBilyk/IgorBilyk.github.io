window.addEventListener('load', ()=> {
    //All variables 
    let form = document.querySelector('form');
    let result = document.querySelector('#result');
    let out = document.querySelector('#out');
    let searchIcon = document.querySelector('#search-icon');
    let icon = document.querySelector('#icon');
    let btnGetWeather = document.querySelector('#btnGetWeather');
    let input = document.querySelector('#input').value;
    let apiKey = '1192ae3d1ebdb8edcae3bdfb00ac72b6';    
    let apiNewsKey = `46154422b4d645079df3846f1188a586`;
    let searchCity = document.querySelector('.search-city');
    
    //Variables for 5 days weather
    let getFiveWeather = document.querySelector('#getFiveWeather');
    let test = document.querySelector('#test');
    let iconForDay =document.querySelector('#weather-day');
    let dayTeampreture = document.querySelector('#day-temperature');
    let weatherCityName = document.querySelector('#weather-city');
    let dayDate = document.querySelector('#day-date-day');
    let dayHour = document.querySelector('#day-date-hour');
    let city;
    let online = navigator.onLine;
    let articles = document.querySelector('#articles');
    let article = document.querySelector('#article');
    let arrow = document.querySelector('.fa-arrow-circle-right');
    let articlesContainer = document.querySelector('article');
    let history = document.querySelector('.history');
    let cityStorage = [];

    //Days array for displaying correct day name
    var days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];
    //Function to Arrow (Explore articles section)
    arrow.addEventListener('click', () => {
        articlesContainer.classList.toggle('active-articles');
        arrow.classList.toggle('active-arrow');
     })
     //Check if articles section already receives a data
    hasContent = () => {
        let li = document.querySelector('.li');
        let hasContent = articles.contains(li);
        
        if(hasContent){
            arrow.classList.remove('none');
        }else{
            arrow.classList.add('none'); 
        }
    
    }
   //Api call to News and fetching data
    getNews = () => {
        fetch(`https://newsapi.org/v2/top-headlines?category=general&pageSize=5&country=pt&apiKey=${apiNewsKey}`)
        .then(res => res.json())
        .then(article =>{
           /*  console.log(article.articles[1]); */
            let title = article.articles[1].title
            //Loping through all articles titles and inser title into HTML and also add pictures to articles
            for(let i = 0; i < article.articles.length; i++){
                /* console.log(article.articles[i].url); */
                let img = document.createElement('img');
                let li = document.createElement('li');
                li.setAttribute('class', 'li');
                img.setAttribute('src',`${article.articles[i].urlToImage}`)
                let link = document.createElement('a');
                link.setAttribute('target', '_blank')
                link.setAttribute('href', `${article.articles[i].url}`);
                link.innerText = `${article.articles[i].title.slice(0,40)+'...'}`
                li.appendChild(link);
                link.appendChild(img);
                articles.appendChild(li);
                
            }
            //Call function to verify if articles section has content
            hasContent();
        
            
          /*  console.log( article.articles[0].title,+ '///'+ article.articles[1].title,+ '///'+ article.articles[2].title)
           console.log(articles.contains(li)); */
        })
        //Handle an error
        .catch(error =>{
            console.log("error");
        })
            
    }
            
    
   
   //Get weather by city name
   //Api call to openWeatherApi
    btnGetWeather.addEventListener('click', (e) =>{
        city = document.querySelector('#input').value;
        //Check if client has internet connection
        if(!online){
            e.preventDefault();
            alert('Please, check your internet connection!!!')
            return false;
        }else if(!city){   //Check if  client inserted input value
            e.preventDefault();
            searchCity.innerHTML = "<p style= 'color:red'>Please, insert your city !!!</p>";
            searchCity.setAttribute("style", "background: none) ;");
            searchIcon.setAttribute('src',"")
            result.innerHTML = '';   
            return false;

       }else if (city.length > 45){ //Check if input value is longer than 45 characters 
        e.preventDefault();
        searchCity.innerHTML = "<p style= 'color:red'>Please, insert only city name !!!</p>";
        searchCity.setAttribute("style", "background: none) ;");
        searchIcon.setAttribute('src',"")
        result.innerHTML = '';   
        form.reset();
    
       }else if(city){
    
        searchCity.innerHTML = " ";
        e.preventDefault();
        //Fetching Data from NewWeatherApi
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then(res => res.json())
        .then(data =>{
            let weatherDescr = data.weather[0].main;
                console.log(data);
                if(weatherDescr === 'Clouds'){
                    searchCity.setAttribute("style", "background: url('img/sky-sunny.jpg');background-size: cover");                                                  /*   style.background = "url('img/sky-sunny.jpg')"; */
                }else if(weatherDescr === 'Clear'){
                    searchCity.setAttribute("style", "background: url('img/clear-sky.jpg'); background-size: cover");  
                }else if(weatherDescr === 'Rain'){
                    searchCity.setAttribute("style", "background: url('img/raining-in-the-city-2448749.jpg');");  
                }
            let iconcode = data.weather[0].icon;
            result.innerHTML =  '<strong>' + city.charAt(0).toUpperCase() + city.slice(1) + ' ' + Math.round(data.main.temp) + " C<sup>o</sup><strong>"
            document.querySelector('#humidity').innerHTML = ` Humidity: ${data.main.humidity} %`
            document.querySelector('#description').innerHTML = `Condition: ${data.weather[0].description}`.charAt(0).toUpperCase() +data.weather[0].description.slice(1);
            searchIcon.setAttribute('src',"http://openweathermap.org/img/w/" + iconcode + ".png")
            addCity(city);
            /* checkCity(); */
            
            //Reset the input value
            form.reset();
           //Call Api News with delay of 2 seconds
            setTimeout(getNews, 2000);
            /* console.log(cityStorage); */
        
           
        })
    }
})

getFiveWeather.addEventListener('click', () => {
    city = document.querySelector('#input').value;
    console.log(city
        );
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=1192ae3d1ebdb8edcae3bdfb00ac72b6`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
})
   
    .catch( error => {
        console.log(error)
    })
})

/* let checkCity = () => {
    if(cityStorage.length < 1){
        console.log("False");

    }else{
        console.log('True');
    }
} */
let addCity = (city) => {
    cityStorage.push(city);
    localStorage.setItem('city', JSON.stringify(cityStorage));
    console.log(localStorage.getItem('city'));
}
/* let showCity = () => {
    let cities = JSON.parse(localStorage.getItem('city'));
    cities.forEach( city => {
        let p = document.createElement('p');
        p.innerText = city;
        console.log(city);
        document.querySelector('.history-container').appendChild('p');

    }) 
   
} */
/* history.addEventListener('click', () =>{
    let citiesLength = JSON.parse(localStorage.getItem('city')).length;
    let cities = JSON.parse(localStorage.getItem('city'));
    let out = document.querySelector('#output');
   
        if(out.textContent == city){
            cities.forEach( city => {
            console.log('true')
            })
        }else{
            console.log('false')
            out.innerHTML += city + '<br>';
        }
        
     
        



}) */


})