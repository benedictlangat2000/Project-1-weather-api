
const apiKey="14dc31f092951b87fbc42e5c652dc0d7";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

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
  const addForm = document.getElementById("add-form");
  const updateForm = document.getElementById("update-form");
  const deleteForm = document.getElementById("delete-form");
  
  // Function to create a new table row with weather data
  function createWeatherRow(data) {
      const row = document.createElement("tr");
      row.innerHTML = `
          <td>${data.Day}</td>
          <td>${data.city}</td>
          <td>${data.temperature}</td>
          <td>${data.time}</td>
          <td>${data.humidity}</td>
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
  
  // Function to fetch weather data and populate the table
  async function fetchWeatherData() {
      try {
          const response = await fetch(apiUrl);
          if (!response.ok) {
              throw new Error("Failed to fetch data");
          }
          const data = await response.json();
          weatherTable.innerHTML = ""; // Clear existing table
          data.forEach(createWeatherRow);
      } catch (error) {
          console.error(error);
      }
  }
  
  // Function to handle form submissions for adding, updating, and deleting data
  async function handleFormSubmit(event) {
      event.preventDefault();
      const formData = new FormData(event.target);
      const method = event.target.getAttribute("method").toUpperCase();
      const url = method === "PATCH" ? `${apiUrl}/${formData.get("city")}` : apiUrl;
      const requestBody = {};
  
      formData.forEach((value, key) => {
          requestBody[key] = value;
      });
  
      try {
          const response = await fetch(url, {
              method,
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(requestBody),
          });
  
          if (!response.ok) {
              throw new Error("Failed to submit form");
          }
  
          fetchWeatherData(); // Refresh the table after successful form submission
      } catch (error) {
          console.error(error);
      }
  }
  
  // Attach event listeners to forms
  addForm.addEventListener("submit", handleFormSubmit);
  updateForm.addEventListener("submit", handleFormSubmit);
  deleteForm.addEventListener("submit", handleFormSubmit);
  
  // Fetch data and populate the table on page load
  fetchWeatherData();
  