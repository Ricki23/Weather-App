const APIkey="9d09a2664070eeb62aa791faa318f0d0"
const APIURL="https://api.openweathermap.org/data/2.5/weather?q=";
const searchbox=document.querySelector(".search input");
const searchbttn=document.querySelector(".search button");
const weathericon=document.querySelector(".weather-icon")

async function checkweather(city)
{
    const response = await fetch(APIURL+city+`&appid=${APIkey}`);

    if(response.status == 404)
    {
        alert("Invalid city name");
    }
    else
    {
    var data=await response.json();

    console.log(data);

    const k=Math.round((data.main.temp-32)/9);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=k + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".wind").innerHTML=data.wind.speed + " km/hr";

    if(data.weather[0].main === "Clouds")
    {
        weathericon.src="images/clouds.png";
    }
    else if(data.weather[0].main === "Clear")
    {
        weathericon.src="images/clear.png";
    }
    else if(data.weather[0].main === "Drizzle")
    {
        weathericon.src="images/drizzle.png";
    }
    else if(data.weather[0].main === "Rain")
    {
        weathericon.src="images/rain.png";
    }
    else if(data.weather[0].main === "Mist")
    {
        weathericon.src="images/mist.png";
    }
    else if(data.weather[0].main === "Snow")
    {
        weathericon.src="images/snow.png";
    }
    

    document.querySelector(".weather").style.display="block";
}

}
searchbttn.addEventListener("click",()=>{
    checkweather(searchbox.value);
})
