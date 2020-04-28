let cities = {
        AT : "Austria",
        BE : "Belgium",
        BG : "Bulgaria",
        CY: "Cyprus",
        CZ: "Czech Republic",
        DE: "Germany",
        DK: "Denmark",
        EE: "Estonia",
        ES: "Spain",
        FI :"Finland",
        FR: "France",
        GR: "Greece",
        HR: "Croatia",
        HU: "Hungary" 
    };
    let city = [ 
        {"name": "Afghanistan", "code": "AF"}, 
        {"name": "land Islands", "code": "AX"}, 
        {"name": "Albania", "code": "AL"}, 
        {"name": "Algeria", "code": "DZ"}, 
        {"name": "American Samoa", "code": "AS"}, 
        {"name": "AndorrA", "code": "AD"}, 
        {"name": "Angola", "code": "AO"}, 
        {"name": "Anguilla", "code": "AI"}, 
        {"name": "Antarctica", "code": "AQ"}, 
        {"name": "Antigua and Barbuda", "code": "AG"}, 
        {"name": "Argentina", "code": "AR"}, 
        {"name": "Armenia", "code": "AM"}, 
        {"name": "Aruba", "code": "AW"}, 
        {"name": "Australia", "code": "AU"}, 
        {"name": "Austria", "code": "AT"}, 
        {"name": "Azerbaijan", "code": "AZ"}, 
        {"name": "Bahamas", "code": "BS"}, 
        {"name": "Bahrain", "code": "BH"}, 
        {"name": "Bangladesh", "code": "BD"}, 
        {"name": "Barbados", "code": "BB"}, 
        {"name": "Belarus", "code": "BY"}, 
        {"name": "Belgium", "code": "BE"}, 
        {"name": "Belize", "code": "BZ"}, 
        {"name": "Benin", "code": "BJ"}, 
        {"name": "Bermuda", "code": "BM"}, 
        {"name": "Bhutan", "code": "BT"}, 
        {"name": "Bolivia", "code": "BO"}, 
        {"name": "Bosnia and Herzegovina", "code": "BA"}, 
        {"name": "Botswana", "code": "BW"}, 
        {"name": "Bouvet Island", "code": "BV"}, 
        {"name": "Brazil", "code": "BR"}, 
        {"name": "British Indian Ocean Territory", "code": "IO"}, 
        {"name": "Brunei Darussalam", "code": "BN"}, 
        {"name": "Bulgaria", "code": "BG"}, 
        {"name": "Burkina Faso", "code": "BF"}, 
        {"name": "Burundi", "code": "BI"}, 
        {"name": "Cambodia", "code": "KH"}, 
        {"name": "Cameroon", "code": "CM"}, 
        {"name": "Canada", "code": "CA"}, 
        {"name": "Cape Verde", "code": "CV"}, 
        {"name": "Cayman Islands", "code": "KY"}, 
        {"name": "Central African Republic", "code": "CF"}, 
        {"name": "Chad", "code": "TD"}, 
        {"name": "Chile", "code": "CL"}, 
        {"name": "China", "code": "CN"}, 
        {"name": "Christmas Island", "code": "CX"}, 
        {"name": "Cocos (Keeling) Islands", "code": "CC"}, 
        {"name": "Colombia", "code": "CO"}, 
        {"name": "Comoros", "code": "KM"}, 
        {"name": "Congo", "code": "CG"}, 
        {"name": "Congo, The Democratic Republic of the", "code": "CD"}, 
        {"name": "Cook Islands", "code": "CK"}, 
        {"name": "Costa Rica", "code": "CR"}, 
        {"name": "Cote D'Ivoire", "code": "CI"}, 
        {"name": "Croatia", "code": "HR"}, 
        {"name": "Cuba", "code": "CU"}, 
        {"name": "Cyprus", "code": "CY"}, 
        {"name": "Czech Republic", "code": "CZ"}, 
        {"name": "Denmark", "code": "DK"}, 
        {"name": "Djibouti", "code": "DJ"}, 
        {"name": "Dominica", "code": "DM"}, 
        {"name": "Dominican Republic", "code": "DO"}, 
        {"name": "Ecuador", "code": "EC"}, 
        {"name": "Egypt", "code": "EG"}, 
        {"name": "El Salvador", "code": "SV"}, 
        {"name": "Equatorial Guinea", "code": "GQ"}, 
        {"name": "Eritrea", "code": "ER"}, 
        {"name": "Estonia", "code": "EE"}, 
        {"name": "Ethiopia", "code": "ET"}, 
        {"name": "Falkland Islands (Malvinas)", "code": "FK"}, 
        {"name": "Faroe Islands", "code": "FO"}, 
        {"name": "Fiji", "code": "FJ"}, 
        {"name": "Finland", "code": "FI"}, 
        {"name": "France", "code": "FR"}, 
        {"name": "French Guiana", "code": "GF"}, 
        {"name": "French Polynesia", "code": "PF"}, 
        {"name": "French Southern Territories", "code": "TF"}, 
        {"name": "Gabon", "code": "GA"}, 
        {"name": "Gambia", "code": "GM"}, 
        {"name": "Georgia", "code": "GE"}, 
        {"name": "Germany", "code": "DE"}, 
        {"name": "Ghana", "code": "GH"}, 
        {"name": "Gibraltar", "code": "GI"}, 
        {"name": "Greece", "code": "GR"}, 
        {"name": "Greenland", "code": "GL"}, 
        {"name": "Grenada", "code": "GD"}, 
        {"name": "Guadeloupe", "code": "GP"}, 
        {"name": "Guam", "code": "GU"}, 
        {"name": "Guatemala", "code": "GT"}, 
        {"name": "Guernsey", "code": "GG"}, 
        {"name": "Guinea", "code": "GN"}, 
        {"name": "Guinea-Bissau", "code": "GW"}, 
        {"name": "Guyana", "code": "GY"}, 
        {"name": "Haiti", "code": "HT"}, 
        {"name": "Heard Island and Mcdonald Islands", "code": "HM"}, 
        {"name": "Holy See (Vatican City State)", "code": "VA"}, 
        {"name": "Honduras", "code": "HN"}, 
        {"name": "Hong Kong", "code": "HK"}, 
        {"name": "Hungary", "code": "HU"}, 
        {"name": "Iceland", "code": "IS"}, 
        {"name": "India", "code": "IN"}, 
        {"name": "Indonesia", "code": "ID"}, 
        {"name": "Iran, Islamic Republic Of", "code": "IR"}, 
        {"name": "Iraq", "code": "IQ"}, 
        {"name": "Ireland", "code": "IE"}, 
        {"name": "Isle of Man", "code": "IM"}, 
        {"name": "Israel", "code": "IL"}, 
        {"name": "Italy", "code": "IT"}, 
        {"name": "Jamaica", "code": "JM"}, 
        {"name": "Japan", "code": "JP"}, 
        {"name": "Jersey", "code": "JE"}, 
        {"name": "Jordan", "code": "JO"}, 
        {"name": "Kazakhstan", "code": "KZ"}, 
        {"name": "Kenya", "code": "KE"}, 
        {"name": "Kiribati", "code": "KI"}, 
        {"name": "Korea, Democratic People'S Republic of", "code": "KP"}, 
        {"name": "Korea, Republic of", "code": "KR"}, 
        {"name": "Kuwait", "code": "KW"}, 
        {"name": "Kyrgyzstan", "code": "KG"}, 
        {"name": "Lao People'S Democratic Republic", "code": "LA"}, 
        {"name": "Latvia", "code": "LV"}, 
        {"name": "Lebanon", "code": "LB"}, 
        {"name": "Lesotho", "code": "LS"}, 
        {"name": "Liberia", "code": "LR"}, 
        {"name": "Libyan Arab Jamahiriya", "code": "LY"}, 
        {"name": "Liechtenstein", "code": "LI"}, 
        {"name": "Lithuania", "code": "LT"}, 
        {"name": "Luxembourg", "code": "LU"}, 
        {"name": "Macao", "code": "MO"}, 
        {"name": "Macedonia, The Former Yugoslav Republic of", "code": "MK"}, 
        {"name": "Madagascar", "code": "MG"}, 
        {"name": "Malawi", "code": "MW"}, 
        {"name": "Malaysia", "code": "MY"}, 
        {"name": "Maldives", "code": "MV"}, 
        {"name": "Mali", "code": "ML"}, 
        {"name": "Malta", "code": "MT"}, 
        {"name": "Marshall Islands", "code": "MH"}, 
        {"name": "Martinique", "code": "MQ"}, 
        {"name": "Mauritania", "code": "MR"}, 
        {"name": "Mauritius", "code": "MU"}, 
        {"name": "Mayotte", "code": "YT"}, 
        {"name": "Mexico", "code": "MX"}, 
        {"name": "Micronesia, Federated States of", "code": "FM"}, 
        {"name": "Moldova, Republic of", "code": "MD"}, 
        {"name": "Monaco", "code": "MC"}, 
        {"name": "Mongolia", "code": "MN"}, 
        {"name": "Montenegro", "code": "ME"},
        {"name": "Montserrat", "code": "MS"},
        {"name": "Morocco", "code": "MA"}, 
        {"name": "Mozambique", "code": "MZ"}, 
        {"name": "Myanmar", "code": "MM"}, 
        {"name": "Namibia", "code": "NA"}, 
        {"name": "Nauru", "code": "NR"}, 
        {"name": "Nepal", "code": "NP"}, 
        {"name": "Netherlands", "code": "NL"}, 
        {"name": "Netherlands Antilles", "code": "AN"}, 
        {"name": "New Caledonia", "code": "NC"}, 
        {"name": "New Zealand", "code": "NZ"}, 
        {"name": "Nicaragua", "code": "NI"}, 
        {"name": "Niger", "code": "NE"}, 
        {"name": "Nigeria", "code": "NG"}, 
        {"name": "Niue", "code": "NU"}, 
        {"name": "Norfolk Island", "code": "NF"}, 
        {"name": "Northern Mariana Islands", "code": "MP"}, 
        {"name": "Norway", "code": "NO"}, 
        {"name": "Oman", "code": "OM"}, 
        {"name": "Pakistan", "code": "PK"}, 
        {"name": "Palau", "code": "PW"}, 
        {"name": "Palestinian Territory, Occupied", "code": "PS"}, 
        {"name": "Panama", "code": "PA"}, 
        {"name": "Papua New Guinea", "code": "PG"}, 
        {"name": "Paraguay", "code": "PY"}, 
        {"name": "Peru", "code": "PE"}, 
        {"name": "Philippines", "code": "PH"}, 
        {"name": "Pitcairn", "code": "PN"}, 
        {"name": "Poland", "code": "PL"}, 
        {"name": "Portugal", "code": "PT"}, 
        {"name": "Puerto Rico", "code": "PR"}, 
        {"name": "Qatar", "code": "QA"}, 
        {"name": "Reunion", "code": "RE"}, 
        {"name": "Romania", "code": "RO"}, 
        {"name": "Russian Federation", "code": "RU"}, 
        {"name": "RWANDA", "code": "RW"}, 
        {"name": "Saint Helena", "code": "SH"}, 
        {"name": "Saint Kitts and Nevis", "code": "KN"}, 
        {"name": "Saint Lucia", "code": "LC"}, 
        {"name": "Saint Pierre and Miquelon", "code": "PM"}, 
        {"name": "Saint Vincent and the Grenadines", "code": "VC"}, 
        {"name": "Samoa", "code": "WS"}, 
        {"name": "San Marino", "code": "SM"}, 
        {"name": "Sao Tome and Principe", "code": "ST"}, 
        {"name": "Saudi Arabia", "code": "SA"}, 
        {"name": "Senegal", "code": "SN"}, 
        {"name": "Serbia", "code": "RS"}, 
        {"name": "Seychelles", "code": "SC"}, 
        {"name": "Sierra Leone", "code": "SL"}, 
        {"name": "Singapore", "code": "SG"}, 
        {"name": "Slovakia", "code": "SK"}, 
        {"name": "Slovenia", "code": "SI"}, 
        {"name": "Solomon Islands", "code": "SB"}, 
        {"name": "Somalia", "code": "SO"}, 
        {"name": "South Africa", "code": "ZA"}, 
        {"name": "South Georgia and the South Sandwich Islands", "code": "GS"}, 
        {"name": "Spain", "code": "ES"}, 
        {"name": "Sri Lanka", "code": "LK"}, 
        {"name": "Sudan", "code": "SD"}, 
        {"name": "Suriname", "code": "SR"}, 
        {"name": "Svalbard and Jan Mayen", "code": "SJ"}, 
        {"name": "Swaziland", "code": "SZ"}, 
        {"name": "Sweden", "code": "SE"}, 
        {"name": "Switzerland", "code": "CH"}, 
        {"name": "Syrian Arab Republic", "code": "SY"}, 
        {"name": "Taiwan, Province of China", "code": "TW"}, 
        {"name": "Tajikistan", "code": "TJ"}, 
        {"name": "Tanzania, United Republic of", "code": "TZ"}, 
        {"name": "Thailand", "code": "TH"}, 
        {"name": "Timor-Leste", "code": "TL"}, 
        {"name": "Togo", "code": "TG"}, 
        {"name": "Tokelau", "code": "TK"}, 
        {"name": "Tonga", "code": "TO"}, 
        {"name": "Trinidad and Tobago", "code": "TT"}, 
        {"name": "Tunisia", "code": "TN"}, 
        {"name": "Turkey", "code": "TR"}, 
        {"name": "Turkmenistan", "code": "TM"}, 
        {"name": "Turks and Caicos Islands", "code": "TC"}, 
        {"name": "Tuvalu", "code": "TV"}, 
        {"name": "Uganda", "code": "UG"}, 
        {"name": "Ukraine", "code": "UA"}, 
        {"name": "United Arab Emirates", "code": "AE"}, 
        {"name": "United Kingdom", "code": "GB"}, 
        {"name": "United States", "code": "US"}, 
        {"name": "United States Minor Outlying Islands", "code": "UM"}, 
        {"name": "Uruguay", "code": "UY"}, 
        {"name": "Uzbekistan", "code": "UZ"}, 
        {"name": "Vanuatu", "code": "VU"}, 
        {"name": "Venezuela", "code": "VE"}, 
        {"name": "Viet Nam", "code": "VN"}, 
        {"name": "Virgin Islands, British", "code": "VG"}, 
        {"name": "Virgin Islands, U.S.", "code": "VI"}, 
        {"name": "Wallis and Futuna", "code": "WF"}, 
        {"name": "Western Sahara", "code": "EH"}, 
        {"name": "Yemen", "code": "YE"}, 
        {"name": "Zambia", "code": "ZM"}, 
        {"name": "Zimbabwe", "code": "ZW"} 
        ]

/* const keys = Object.keys(cities);
let getCity = (city, key) => {
  console.log(Object.keys(city))
  for(let i = 0; i < keys; i++){
      console.log(keys[i])
  }
} */
/* 
getCity(cities); */

getCity = (cities, findKey) =>{
    for( var key in cities){
        if(key == findKey){
            return false;
            
    }
   
}

}

getCity(cities, 'ff');


var countryCodes = {
    'NL' : 'Netherlands',
    'FR' : 'France'
    // and all the other countries
 }

 var code = 'NL';
 var inverseCountryCodes = {};
 for(i in countryCodes) {
   

    
    
 }
  
 let result = [];
 let good = []; 
 let myCity = 'GB';
for(let i = 0; i < city.length; i++){
    if(myCity == city[i].code){
        console.log( city[i].name);
        good.push[city[i].name];

    }else{
       result.push(city[i].name);
    }
    
}

//Call to get Lisbon city
getCurrentCity = () => {
    /* fetch('http://api.openweathermap.org/data/2.5/weather?q=Lisbon&units=metric&appid=1192ae3d1ebdb8edcae3bdfb00ac72b6') */
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=Lisbon&units=metric&appid=1192ae3d1ebdb8edcae3bdfb00ac72b6`)
    .then(res => res.json())
    .then(data =>{
        console.log(data.list);
        //Creating variable for date
        let date = data.list[0].dt_txt;
        let result = date.slice(10, 20);

        console.log(result);
        let iconcode = data.weather[0].icon;
        let iconUrl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        let weatherDesc = data.weather[0].main;
        let weatherFullDesc = data.weather[0].description;
        icon.setAttribute('src', iconUrl);
        
        dayTeampreture.innerHTML =  `<strong>${Math.round(data.main.temp)} C<sup>o</sup></strong> ${weatherDesc} (${weatherFullDesc})`
    })
        .catch(error =>{
        console.log(error[0])
    }) 

/*
Call to get Lisbon city
getCurrentCity = () => {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Lisbon&units=metric&appid=1192ae3d1ebdb8edcae3bdfb00ac72b6') 
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=Lisbon&units=metric&appid=1192ae3d1ebdb8edcae3bdfb00ac72b6`)
    .then(res => res.json())
    .then(data =>{
        console.log(data.list);
        //Creating variable for date
        let date = data.list[0].dt_txt;
        let result = date.slice(10, 20);

        console.log(result);
        let iconcode = data.weather[0].icon;
        let iconUrl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        let weatherDesc = data.weather[0].main;
        let weatherFullDesc = data.weather[0].description;
        icon.setAttribute('src', iconUrl);
        
        out.innerHTML =  `<strong>${Math.round(data.main.temp)} C<sup>o</sup></strong> ${weatherDesc} (${weatherFullDesc})`
    })
     .catch(error =>{
        console.log(error[0])

     */    }) 


     btnGetWeather.addEventListener('click', (e) =>{
        e.preventDefault();
        //Taking data from input
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
      
    })
    //Multiple Api Calls 

    let weather = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    let news = (`https://newsapi.org/v2/top-headlines?category=general&pageSize=5&country=pt&apiKey=${apiNewsKey}`)
    Promise.all([weather, news])
    .then( files => {
        files.forEach(file => {
            process( file.json())
        })
    })
    .catch( err => {

    });
    let process = (prom) => {
        prom.then(data => {
            console.log(123);

        })
    }

    ///////////////
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
            insertCityWeather((Math.round(data.list[0].main.temp)) +  " C<sup>o</sup>",days[new Date().getDay() + 6] + " " + (result2 ), `http://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png` );
            insertCityWeather((Math.round(data.list[8].main.temp)) +  " C<sup>o</sup>",days[new Date().getDay()    ] + " " + (result2 + 1), `http://openweathermap.org/img/w/${data.list[8].weather[0].icon}.png` );
            insertCityWeather((Math.round(data.list[17].main.temp)) +  " C<sup>o</sup>",days[new Date().getDay() + 1] + " " + (result2 + 2),`http://openweathermap.org/img/w/${iconcode}.png` );
            insertCityWeather((Math.round(data.list[28].main.temp)) +  " C<sup>o</sup>",days[new Date().getDay() + 2] + " " + (result2 + 3),`http://openweathermap.org/img/w/${iconcode}.png` );
            insertCityWeather((Math.round(data.list[36].main.temp)) +  " C<sup>o</sup>",days[new Date().getDay() + 3] + " " + (result2 + 4),`http://openweathermap.org/img/w/${iconcode}.png` );
      
        })
         .catch(error =>{
            
                console.log(error);       
            
    
      }
         )}
         getCurrentCity();
    
    
      });
    

        //Test Button
        test.addEventListener('click', () => {
            
            Promise.all([
                fetch(`https://newsapi.org/v2/top-headlines?category=general&pageSize=5&country=pt&apiKey=${apiNewsKey}`),
                fetch('https://jsonplaceholder.typicode.com/users')
            ])
                .then(function (responses) {
                    // Get a JSON object from each of the responses
                    return responses.map(function (response) {
                        return response.json();
                    });
                }).then(function (data) {
                    // Log the data to the console
                    // You would do something with both sets of data here
                    
                     
                     console.log(data[0][0]);
                }).catch(function (error) {
                    // if there's an error, log it
                    console.log(error);
                });
        })
    
 
      getFiveWeather.addEventListener('click', () => {
        /* navigator.geolocation.getCurrentPosition(function(position) { */
        
           /*  let long = position.coords.longitude;
            let lat = position.coords.latitude; */
                //Call to get requested by customer city  
        getCurrentCity = () => {
            
            fetch(`http://api.openweathermap.org/data/2.5/forecast?city=Lisbon&units=metric&appid=1192ae3d1ebdb8edcae3bdfb00ac72b6`)
            .then(res => res.json())
            .then(data =>{
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
            
                console.log(data.list)
                fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&appid=1192ae3d1ebdb8edcae3bdfb00ac72b6`)
            .then(res => res.json())
            .then(data =>{})
            Console.log(data.list)
                insertCityWeather((Math.round(data.list[0].main.temp)) +  " C<sup>o</sup>",days[new Date().getDay() + 2] + " " + (result2 ), `http://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png` );
                insertCityWeather((Math.round(data.list[8].main.temp)) +  " C<sup>o</sup>",days[new Date().getDay()    ] + " " + (result2 + 1), `http://openweathermap.org/img/w/${data.list[8].weather[0].icon}.png` );
                insertCityWeather((Math.round(data.list[17].main.temp)) +  " C<sup>o</sup>",days[new Date().getDay() + 1] + " " + (result2 + 2),`http://openweathermap.org/img/w/${iconcode}.png` );
                insertCityWeather((Math.round(data.list[28].main.temp)) +  " C<sup>o</sup>",days[new Date().getDay() + 2] + " " + (result2 + 3),`http://openweathermap.org/img/w/${iconcode}.png` );
                insertCityWeather((Math.round(data.list[37].main.temp)) +  " C<sup>o</sup>",days[new Date().getDay() + -4] + " " + (result2 + 4),`http://openweathermap.org/img/w/${iconcode}.png` );
          
            })
             .catch(error =>{
                
                    console.log(error);       
                
        
          }
             )}
             getCurrentCity();
        
        
          /* }); */
        
    })
    
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

    
 /*       .catch(error =>{
            console.log("error");
        }) 
        //Fetch to News API

    fetch(`https://newsapi.org/v2/top-headlines?category=general&pageSize=5&country=pt&apiKey=${apiNewsKey}`)
        .then(res => res.json())
        .then(article =>{
            console.log(article.articles);
            article.innerHTML = ` Hello `;
        
            
           console.log( article.articles[0].title,+ '///'+ article.articles[1].title,+ '///'+ article.articles[2].title)
          
        })
        .catch(error =>{
            console.log("error");
        }) 
        //Fetch to News API



       }
    })
         */
      