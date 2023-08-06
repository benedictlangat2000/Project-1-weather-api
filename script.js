
const apiKey="14dc31f092951b87fbc42e5c652dc0d7";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

// Function to check weather for a given city
async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display ="block";
        document.querySelector(".weather").style.display ="none";
    }else{
        var data =await response.json();
       

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  +"°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

// Update the weather icon based on the weather condition
        if (data.weather[0].main=="Clouds"){
            weatherIcon.src = "images/clouds.png"
        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src = "images/clear.png"
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src = "images/Drizzle.png"
        }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src = "images/mist.png"
        }
        else if(data.weather[0].main=="Snow"){
            weatherIcon.src = "images/snow.png"
        }
        else if(data.weather[0].main=="Wind"){
            weatherIcon.src = "images/wind.png"
        }

        document.querySelector(".weather").style.display= "block";
        document.querySelector(".error").style.display ="none";
    }
    var data =await response.json();
       

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  +"°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";


        if (data.weather[0].main=="Clouds"){
            weatherIcon.src = "images/clouds.png"
        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src = "images/clear.png"
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src = "images/Drizzle.png"
        }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src = "images/mist.png"
        }
        else if(data.weather[0].main=="Snow"){
            weatherIcon.src = "images/snow.png"
        }
        else if(data.weather[0].main=="Wind"){
            weatherIcon.src = "images/wind.png"
        }

        document.querySelector(".weather").style.display= "block";
        
}
 // Call checkWeather when the search button is clicked
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
  });

  // Function to update date and time on the page
  function updateDateTime() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
    const currentDate = new Date();
    const day = days[currentDate.getDay()];
    const month = months[currentDate.getMonth()];
    const date = currentDate.getDate();
    const year = currentDate.getFullYear();
  
    const hour = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const ampm = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 || 12;
    const formattedMinutes = minutes.toString().padStart(2, "0");
  
    const timeElement = document.getElementById("time");
    const dateElement = document.getElementById("date");
  
    if (timeElement) {
      timeElement.textContent = `${formattedHour}:${formattedMinutes} ${ampm}`;
    }
  
    if (dateElement) {
      dateElement.textContent = `${day}, ${date} ${month} ${year}`;
    }
  }
  
  // Call the function to update date and time on page load
  updateDateTime();
  
  // Update date and time every second
  setInterval(updateDateTime, 1000);

   const weatherTable = document.getElementById("weather-table");
   const getForm =document.getElementById("get-form");
   const addForm = document.getElementById("add-form");
   const updateForm = document.getElementById("update-form"); 
   const deleteForm = document.getElementById("delete-form");

  // Function to create a new table row with weather data
  function createWeatherTable(data) {
      const row = document.createElement("tr");
      row.innerHTML = `
          <td>${data.Day}</td>
          <td>${data.city}</td>
          <td>${data.temperature}</td>
          <td>${data.time}</td>
          <td>${data.humidity}</td>
          <td>${data.wind}</td>
          <td>${data.Description}</td>
          <td>
              <button class="update-btn" data-id="${data.id}">Update</button>
              <button class="post-btn" data-id="${data.id}">Create</button>
              <button class="Patch-btn" data-id="${data.id}">Patch</button>
              <button class="delete-btn" data-id="${data.id}">Delete</button>

          </td>
      `;
      weatherTable.appendChild(row);
  }

fetchWeatherData();
 const inputCity = document.getElementById("city");
 const inputDay = document.getElementById("Day");
 const inputTemperature = document.getElementById("Temperature");
 const inputTime = document.getElementById("Time");
 const inputHumidity = document.getElementById("Humidity");
 const inputWind = document.getElementById("Wind");
 const inputDescription = document.getElementById("Description");

  //Function to fetch weather data and populate the table
  async function fetchWeatherData() {
    try {
        const response = await fetch(`http://localhost:3000/weatherData`);
        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        
        if (weatherTable) { // Check if the element exists
            weatherTable.innerHTML = ``; // Clear existing table
            data.forEach(createWeatherRow);
        } else {
            console.error("weatherTable element not found");
        }
    } catch (error) {
        console.error(error);
    }
}

  // Fetch data and populate the table on page load

 function handleFormSubmit(event) {
    event.preventDefault();
 }

 fetch("http://localhost:3000/weatherData",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
        city:inputCity,
        Day:inputDay,
        temperature:inputTemperature,
        time:inputTime,
        humidity:inputHumidity,
        wind:inputWind,
        Description:inputDescription
        
    })
 })
 
 .then((response)=>{
    if (response.status=== 201){
        alert("City has been posted successfully!");
    }else{
        alert("failed to post the city,please try again")
    }
 })
 

 // function to patch weather report
 function patchData(e){
    e.preventDefault()
  }
  
    // Get the weatherId from the update-form
const weatherIdValue = document.getElementById("update-form");

 fetch("http://localhost:3000/weatherData",{
    method:"PATCH",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
        day:inputDay,
        temperature:inputTemperature,
        time:inputTime,
        humidity:inputHumidity,
        wind:inputWind,
        description:inputDescription
    })
 })
 .then((response)=>{
    if (response===200){
        alert("City data has been updated successfully!");
    }else{
        alert("failed to add the city data,please try again")
    }
 })

 function deleteWeatherData(weatherId) {
    fetch(`http://localhost:3000/weatherData/${weatherId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          alert("Weather data has been deleted successfully!");
        } else {
          alert("Failed to delete weather data, please try again.");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("An error occurred while deleting weather data.");
      });
  }
  // Function to handle weather data deletion
function handleDelete(event) {
    const weatherId = event.target.getAttribute("data-id");

    if (weatherId) {
        deleteWeatherData(weatherId);
    }
}
