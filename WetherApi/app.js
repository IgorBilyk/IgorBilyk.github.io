window.addEventListener('load', ()=> {
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

    var days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];

    arrow.addEventListener('click', () => {
        articlesContainer.classList.toggle('active-articles');
        arrow.classList.toggle('active-arrow');
     })
    hasContent = () => {
        let li = document.querySelector('#li');
        let hasContent = articles.contains(li);
        
        if(hasContent){
            arrow.classList.remove('none');
        }else{
            arrow.classList.add('none'); 
        }
    
    }
   
    getNews = () => {
        fetch(`https://newsapi.org/v2/top-headlines?category=general&pageSize=5&country=pt&apiKey=${apiNewsKey}`)
        .then(res => res.json())
        .then(article =>{
            let title = article.articles[1].title
            /* console.log(article.articles[1]);
            let li = document.createElement('li');
            li.innerText = `${title}`
            articles.appendChild(li); */
            
               /*  console.log(article.articles) */
            for(let i = 0; i < article.articles.length; i++){
                
                let li = document.createElement('li');
                li.setAttribute('id', 'li');
                let link = document.createElement('a');
                link.setAttribute('target', '_blank')
                link.setAttribute('href', `${article.articles[i].url}`);
                link.innerText = `${article.articles[i].title.slice(0,40)+'...'}`
                li.appendChild(link);
                articles.appendChild(li);
            }
            hasContent();
        
            
           console.log( article.articles[0].title,+ '///'+ article.articles[1].title,+ '///'+ article.articles[2].title)
           console.log(articles.contains(li));
        })
        .catch(error =>{
            console.log("error");
        })
            
    }
            
    
   
   //Get weather by city name
    btnGetWeather.addEventListener('click', (e) =>{
        city = document.querySelector('#input').value;
        if(!online){
            e.preventDefault();
            alert('Please, check your internet connection!!!')
            return false;
        }else if(!city){
            e.preventDefault();
            searchCity.innerHTML = "<p style= 'color:red'>Please, insert your city !!!</p>";
            searchCity.setAttribute("style", "background: none) ;");
            searchIcon.setAttribute('src',"")
            result.innerHTML = '';   
            return false;
       }else if (city.length > 15){
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
                console.log(data.weather[0].main);
                if(weatherDescr === 'Clouds'){
                    searchCity.setAttribute("style", "background: url('img/sky-sunny.jpg');background-size: cover");                                                  /*   style.background = "url('img/sky-sunny.jpg')"; */
                }else if(weatherDescr === 'Clear'){
                    searchCity.setAttribute("style", "background: url('img/clear-sky.jpg'); background-size: cover");  
                }else if(weatherDescr === 'Rain'){
                    searchCity.setAttribute("style", "background: url('img/raining-in-the-city-2448749.jpg');");  
                }
            let iconcode = data.weather[0].icon;
            result.innerHTML =  '<strong>' + city + ' ' + Math.round(data.main.temp) + " C<sup>o</sup><strong>"
            searchIcon.setAttribute('src',"http://openweathermap.org/img/w/" + iconcode + ".png")
            form.reset();
           
            setTimeout(getNews, 2000);
        
           
        })
    }
})




})

