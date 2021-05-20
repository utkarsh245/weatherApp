
let weather = {
  "apikey": "dbe2aba122753f13b3d2b88a9d287857",
  fetchWeather: function(city){
    fetch("http://api.openweathermap.org/data/2.5/weather?q="
     + city
     + "&units=metric&appid="
     + this.apikey
   )
    .then((response) => response.json())
    .then((data) => this.displayWeather(data));
  },


  displayWeather: function(data) {
    const {name} = data;
    const {icon, description} = data.weather[0];
    const {temp, humidity} = data.main;
    const {speed} = data.wind;
    const {sunrise, sunset, country} = data.sys;
    console.log(name, icon, description, temp, humidity, speed, sunrise, sunset, country);
    document.querySelector(".city").innerText = name + ", " + country;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + " °C";
    document.querySelector(".Humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".Wind").innerText = "Wind speed: " + speed + " m/sec";
    document.querySelector(".sunrise").innerText = "Sunrise: " + sunrise + " UTC";
    document.querySelector(".sunset").innerText = "Sunset: " + sunset + " UTC";
    document.querySelector(".weather").classList.remove("loading");
  },

  search: function(){
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".btn").addEventListener("click", function(){
  weather.search();
}
);

document.querySelector(".seach-bar")
.addEventListener("keyup", function(event){
  if(event.key == "Enter"){
    weather.search();
  }
});
