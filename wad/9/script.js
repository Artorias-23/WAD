function getWeather() {
    const city = document.getElementById('cityInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
  
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "weather.json", true);
    xhr.onload = function () {
      if (this.status === 200) {
        const data = JSON.parse(this.responseText);
        if (data[city]) {
          const weather = data[city];
          resultDiv.innerHTML = `
            <h3>Weather in ${city.charAt(0).toUpperCase() + city.slice(1)}</h3>
            <p><strong>Temperature:</strong> ${weather.temperature}</p>
            <p><strong>Humidity:</strong> ${weather.humidity}</p>
            <p><strong>Condition:</strong> ${weather.condition}</p>
          `;
        } else {
          resultDiv.innerHTML = `<p>City not found in database.</p>`;
        }
      }
    };
    xhr.send();
  }
  