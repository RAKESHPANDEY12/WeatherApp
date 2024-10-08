var city=document.querySelector("#city")
var btn=document.querySelector("#btn")

btn.addEventListener("click",async function(){
    document.querySelector('h3').innerText=city.value;
var data=await weather();
document.querySelector("#img2").src=data.current.condition.icon;
document.querySelector("h4").innerText=data.current.condition.text;
document.querySelector("#temperature").innerText=data.current.temp_c;
document.querySelector("#wind").innerText=`${data.current.wind_kph}/${data.current.humidity}`;

})

async function weather() {
   var res= await fetch(`http://api.weatherapi.com/v1/forecast.json?key=21f064967150411487892611240510&q=${city.value}`)
    var CityData=await res.json();
   return CityData;
}