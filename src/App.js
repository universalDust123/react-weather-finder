import React, {useState}  from 'react';
import './index.css'






function App() {

  // const api = {
  //   key : "221ad3345c8bcab327b86b463e6ce3b7",
  //   base : "api.openweathermap.org/data/2.5/"
  // }

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt =>{
    if (evt.key === "Enter"){
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ query }&appid=221ad3345c8bcab327b86b463e6ce3b7`)
        .then(res => res.json())
        .then(result => {
          console.log(result);
          setWeather(result);
          setQuery('');
         
        });
        
    }
  }

  // const [query, setQuery] = useState('');
  // const [weather, setWeather] = useState({});



  // fetch(`https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=221ad3345c8bcab327b86b463e6ce3b7`)
  //    .then(res => res.json())
  //    .then(result =>{
  //      console.log(result);
  //    });



  const dateBuilder =(d)=>{
    let  months = ["January", "	February", "March", "April", "May", "June", "July", "August",
   "September", "October", "November", "December"];
   let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"];
    
   let day = days[d.getDay()];
   let date = d.getDate();
   let month = months[d.getMonth()];
   let year = d.getFullYear();

   return day +" "+ date + " "+ month + " " + year ;
  
  }

  return (
    <div className= {(typeof weather.main != "undefined") ?( (weather.main.temp > 289 )? 
    "app-warm": "app" ) : 'app'  }  >
      <main >
        <div className="search-box">
           <input type="text"
           className="search-bar"
           placeholder="Search..."
           onChange={e => setQuery(e.target.value)}
           value = {query}
           onKeyPress = {search}
           />
        </div>
        {(typeof weather.main != "undefined") ? (
          <div>

            <div className="location-box">
            <div className="location">{weather.name}, {weather.sys.country} </div>
            <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
            <div className="temp">
             {Math.round(weather.main.temp)-273}°c
            </div>
            <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>

        ): ('')  }
       
      
      </main>
      
    </div>
  );
}

export default App;
