
const apiKey= 'f60529b122824b500a49b153b605ed8c';
const apiUrl= 'https://api.openweathermap.org/data/2.5/weather?units=metric';
let searchInput=document.querySelector("#srch");
async function getWeather(city){
    let weatherIcon=document.querySelector(".weather img")
    const response=await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`)
    const data=await response.json();
    document.getElementById("cityname").innerHTML=data.name;
    document.getElementById("citytemp").innerHTML=Math.round(data.main.temp)+"°c";
    document.getElementById("weatherdescription").innerHTML=data.weather[0].description;
    document.getElementById("Temp_max").innerHTML=data.main.temp_max+"°";
    document.getElementById("Temp_min").innerHTML=data.main.temp_min+"°";
    document.getElementById("Humidity").innerHTML=data.main.humidity+"%";
    document.getElementById("Cloudy").innerHTML=data.clouds.all+"%";
    document.getElementById("Wind").innerHTML=data.wind.speed+" km/h";
    if(data.weather[0].main=="Clouds"){
        weatherIcon.src="./images/clouds.png";
    }else if(data.weather[0].main=="Clear"){
        weatherIcon.src="./images/clear.png";
    }else if(data.weather[0].main=="Rain"){
        weatherIcon.src="./images/clouds.png"
    }else if(data.weather[0].main=="Clouds"){
        weatherIcon.src="./images/rain.png";
    }else if(data.weather[0].main=="Snow"){
        weatherIcon.src="./images/snow.png";
    }else if(data.weather[0].main=="Mist"){
        weatherIcon.src="./images/mist.png";
    }else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="./images/drizzle.png";}
        console.log(data);
    
   

  
}
document.querySelector("#btn").addEventListener("click",(event)=>{
    getWeather(searchInput.value);
})



