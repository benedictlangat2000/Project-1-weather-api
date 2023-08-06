// const express = require('express');
// const bodyParser = require('body-parser');
// const fs = require('fs').promises; // Use fs.promises

// const app = express();
// const PORT = 3000;

// // Middleware to parse JSON data from requests
// app.use(express.json());

// // Read data from db.json
// const readDataFromDb = () => {
//   return fs.readFile('db.json')
//     .then(data => JSON.parse(data))
//     .catch(err => {
//       console.error('Error reading data from db.json:', err);
//       return { weatherData: [] };
//     });
// };

// // Write data to db.json
// const writeDataToDb = (data) => {
//   return fs.writeFile('db.json', JSON.stringify(data, null, 2))
//     .catch(err => {
//       console.error('Error writing data to db.json:', err);
//     });
// };

// // Fetch all weather data
// app.get('/weather', (req, res) => {
//   readDataFromDb()
//     .then(data => res.json(data.weatherData))
//     .catch(err => res.status(500).json({ message: 'Internal Server Error' }));
// });

// // Add new weather data
// app.post('/weather', (req, res) => {
//   readDataFromDb()
//     .then(data => {
//       const newWeatherData = req.body;
//       newWeatherData.id = data.weatherData.length + 1;
//       data.weatherData.push(newWeatherData);
//       return writeDataToDb(data)
//         .then(() => res.status(201).json(newWeatherData))
//         .catch(err => res.status(500).json({ message: 'Internal Server Error' }));
//     })
//     .catch(err => res.status(500).json({ message: 'Internal Server Error' }));
// });

// // Update weather data by ID (PATCH method)
// app.patch('/weather/:id', (req, res) => {
//   readDataFromDb()
//     .then(data => {
//       const weatherItem = data.weatherData.find(item => item.id === parseInt(req.params.id));
//       if (weatherItem) {
//         Object.assign(weatherItem, req.body);
//         return writeDataToDb(data)
//           .then(() => res.json(weatherItem))
//           .catch(err => res.status(500).json({ message: 'Internal Server Error' }));
//       } else {
//         res.status(404).json({ message: 'Weather data not found' });
//       }
//     })
//     .catch(err => res.status(500).json({ message: 'Internal Server Error' }));
// });

// // Delete weather data by ID
// app.delete('/weather/:id', (req, res) => {
//   readDataFromDb()
//     .then(data => {
//       const index = data.weatherData.findIndex(item => item.id === parseInt(req.params.id));
//       if (index !== -1) {
//         const deletedItem = data.weatherData.splice(index, 1)[0];
//         return writeDataToDb(data)
//           .then(() => res.json(deletedItem))
//           .catch(err => res.status(500).json({ message: 'Internal Server Error' }));
//       } else {
//         res.status(404).json({ message: 'Weather data not found' });
//       }
//     })
//     .catch(err => res.status(500).json({ message: 'Internal Server Error' }));
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
