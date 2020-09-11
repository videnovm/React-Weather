import React, { useState } from "react"

function App() {
  const API_KEY = "27246259aabc1b11ce70b1b84bb09bf4";
  const [input, setInput] = useState("");
  const [weather, setWeather] = useState({});

  const getWeather = (e) => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${API_KEY}`)
        .then((res) => res.json())
        .then((result) => {
          setInput("");
          setWeather(result);
          console.log(result);
        })
        .catch(err=>
          alert("Please enter correct city name!")
        );
  };

  return (
      <main>
        <div className="search-container">
          <h1 className="heading">Weather Application</h1>
          <p className="text1">Enter a city below in the box for search: </p>
          <input className="search-bar" type="text" placeholder="Search..."
            onChange={(e) => setInput(e.target.value)} value={input}
          />
           <button className="submit" type="submit" onClick={getWeather} >Submit</button>
        </div>
        {typeof weather.main != "undefined" ? (
          <div className="data-container">
            <div className="location"> City: {weather.name}, {weather.sys.country}</div>
            <div className="temperature"> Temperature: {weather.main.temp}°C</div>
            <div className="weather"> Weather: {weather.weather[0].main}</div>
          </div>
        ) : (
          ""
        )}
      </main> 
  );
}

export default App;
