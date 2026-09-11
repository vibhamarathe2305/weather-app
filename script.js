let apiKey = "57094c0984a57ca80d42fb4b26f2dce7";

let searchBtn = document.querySelector("#searchBtn");

searchBtn.addEventListener("click",function(){
    let city = document.querySelector("#cityInput").value;

    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=metric";

    fetch(url)
        .then(function(response){
            return response.json()
        }).then(function(data){
            console.log(data);
            console.log("Testing weatherResult update");
            
            let weatherResult = document.querySelector("#weatherResult");

            weatherResult.innerHTML = data.name + "-" + data.main.temp + "-" + data.weather[0].description 
            
            console.log(weatherResult);
            
        })
    })


