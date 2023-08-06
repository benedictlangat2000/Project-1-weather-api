# Weather App

The Weather App is a simple web application that allows users to get weather information for different cities. Users can search for a city, and the application will display the current weather conditions for that city, including temperature, humidity, wind speed, and weather description. The weather app also has a table where one can make a report.

![Weather App Screenshot](weather-app-screenshot.png)

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Getting Started
sample image of the webpage
![Screenshot](images\Screenshot.png)
### Prerequisites

To run the Weather App locally, you'll need the following installed on your system:

- Node.js: You can download and install Node.js from the official website: [https://nodejs.org](https://nodejs.org)

### Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```
# Technologies Used
HTML
CSS
JavaScript
OpenWeatherMap API
JSON Server (as a mock backend for weather data)
# Features
Current Weather Display: The application displays the current weather information for a specific city, including temperature, humidity, wind speed, and weather description. It also shows an appropriate weather icon based on the current weather condition.

Weather Data Table: The app includes a table to display weather data for different cities. The table shows the day, city, temperature, time, humidity, wind speed, and weather description.

Search Functionality: Users can enter the city name in the search box and click the search button to check the weather for that city. If the city is found, the weather information is displayed; otherwise, an error message is shown.

Add Weather Data: Users can add weather data for a new city by entering the required information in the input fields and clicking the "Create" button.

Update Weather Data: Users can update weather data for an existing city by entering the updated information in the input fields and clicking the "Update" button.

Delete Weather Data: Users can delete weather data for a specific city by clicking the "Delete" button next to the city's data in the table.


# Algorithm
1. Start

2. Declare variables:

- apiKey: Store the API key for the OpenWeatherMap API.
- apiUrl: Store the base URL for fetching weather data from the API.
- searchBox: Get the input element for the city search.
- searchBtn: Get the button element for triggering the search.
- weatherIcon: Get the image element for displaying weather icons.
- weatherTable: Get the table element for displaying weather data.
- getForm: Get the form element for getting weather data.
- addForm: Get the form element for adding weather data.
- updateForm: Get the form element for updating weather data.
- deleteForm: Get the form element for deleting weather data.

3. Function checkWeather(city):

- Accepts a city as input.
- Fetches weather data for the given city from the OpenWeatherMap API using the apiKey and apiUrl.
- If the response status is 404 (City not found):
- Displays an error message and hides the weather display.
- Else:
Parses the JSON response and extracts the weather information.
Updates the weather display with the fetched data.
- Shows the appropriate weather icon based on the weather condition.
Shows the weather display and hides the error message.
- End of checkWeather() function.
Event Listener for searchBtn:

- Calls the checkWeather() function with the value of searchBox as the city name.
- End of Event Listener.
# Function updateDateTime():

 Retrieves the current date and time using JavaScript's Date object.
Formats the date and time to the desired display format.
Updates the date and time elements on the page.
End of updateDateTime() function.
Call updateDateTime() to display the current date and time on page load.

Set Interval for updateDateTime():

Calls updateDateTime() every second to keep the date and time updated.
End of Set Interval.
Function createWeatherRow(data):

Accepts data as input, which represents weather data for a city.
Creates a new table row with the weather data and appends it to the weatherTable.
End of createWeatherRow() function.
Function fetchWeatherData():

Fetches weather data from the JSON Server using fetch.
Parses the JSON response and gets the weather data as an array.
Clears the existing content of weatherTable.
Calls createWeatherRow() for each weather data entry to populate the table.
End of fetchWeatherData() function.
Call fetchWeatherData() to populate the weather data table on page load.

# Function handleFormSubmit(event):

Prevents the default form submission behavior.
Retrieves the form data and determines the method (POST or PATCH) based on the form attribute.
Constructs the request URL and creates the request body using the form data.
Sends a fetch request to the JSON Server API with the appropriate method, headers, and body.
If the response is successful, calls fetchWeatherData() to refresh the weather data table.
End of handleFormSubmit() function.
Add Event Listeners for the forms (getForm, addForm, updateForm, deleteForm):
Attach the handleFormSubmit() function to the submit event for each form.
End of Event Listeners.

# Running the Application
To run the Weather App, follow these steps:

Clone the Repository: Download or clone the repository to your local machine.

Start JSON Server: The application uses JSON Server as a mock backend to store weather data. To start JSON Server, open a terminal, navigate to the project directory, and run the following command:
```js
json-server --watch db.json --port 
```
- Open the App: Open the "index.html" file in your web browser. The Weather App should now be up and running.
- Additional Notes
The application uses the OpenWeatherMap API to fetch weather data for a given city. 

- The background image used in the application is fetched from Unsplash. The image URL is defined in the CSS file and might change over time.

- The application uses JavaScript's fetch API to communicate with the JSON Server. When adding, updating, or deleting weather data, the application sends requests to the JSON Server API.

- The weather icons displayed in the application are selected based on the current weather condition fetched from the OpenWeatherMap API. The image URLs for the icons are defined in the JavaScript file.

- The application utilizes setInterval to update the current date and time every second on the page.

- The weather data table is populated by fetching data from the JSON Server and dynamically creating rows for each weather entry using JavaScript.

- The application uses Flexbox for layout and responsive design.

# How to Use the Application
Search Weather for a City:

- Enter the city name in the search box.
Click the search button to fetch and display the current weather for the entered city.
Add Weather Data:

- Enter the day, city name, temperature, time, humidity, wind speed, and weather description in the corresponding input fields.
Click the "Create" button to add the weather data to the table.
Update Weather Data:

- Enter the updated information (day, city name, temperature, time, humidity, wind speed, and weather description) in the corresponding input fields.
- Click the "Update" button to update the weather data in the table.
Delete Weather Data:

- Click the "Delete" button next to the city's data in the table to remove the weather data for that city.

# Deploying

Use netfly to deploy the application, below is the link for deployed app.
// https://celadon-panda-4093a2.netlify.app/

# MIT 
LICENCE
Copyright <YEAR- 2023> <COPYRIGHT HOLDER- BENEDICT LANGAT>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.







