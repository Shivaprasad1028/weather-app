
const apiKey= "9fd49dba9a62cc3c11c9bbc8d3fa06d2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

		const searchBox = document.querySelector(".search input");
		const searchBtn = document.querySelector(".search button");
const weatherSymbol = document.querySelector(".weather-icon");
	
		
async function checkWeather(city){
	
	    const response = await fetch(apiUrl + city +  `&appid=${apiKey}`);
		if (response.status == '404'){
		document.querySelector(".error").style.display = "block";
			document.querySelector(".dp").style.display = "none";
		}
		var data  = await response.json();
		 console.log(data);

		 document.querySelector(".city").innerHTML = data.name;
		 document.querySelector(".number").innerHTML = 	Math.round(data.main.temp)  + "°c";
		 document.querySelector(".number1").innerHTML = data.main.humidity + "%";
		 document.querySelector(".number2").innerHTML = data.wind.speed + "km/h";
	
		 if(data.weather[0].main == "Clouds"){
	        weatherSymbol.src = "clouds.png"
		 }
		 else if(data.weather[0].main == "Clear"){
	        weatherSymbol.src = "clear.png"
		 }
		 else if(data.weather[0].main == "Smoke"){
	        weatherSymbol.src = "snow.png"
		 }
		 else if(data.weather[0].main == "Drizzle"){
	        weatherSymbol.src = "drizzle.png"
		 }
		 else if(data.weather[0].main == "Mist"){
	        weatherSymbol.src = "mist.png"
		 }
		
		 document.querySelector(".dp").style.display="block"


}
searchBtn.addEventListener('click', ()=>{
	checkWeather(searchBox.value);

});