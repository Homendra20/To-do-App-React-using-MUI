// import React, { useState } from 'react';
// const api = {
//   key: "7d4ef5d23648c7c62acd3ccfa1a0a30b",
//   base: "https://api.openweathermap.org/data/2.5/"
// }

// function App() {
//   const [query, setQuery] = useState('');
//   const [weather, setWeather] = useState({});

//   const search = evt => {
//     if (evt.key === "Enter") {
//       fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
//         .then(res => res.json())
//         .then(result => {
//           setWeather(result);
//           setQuery('');
//           console.log(result);
//         });
//     }
//   }

//   const dateBuilder = (d) => {
//     let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//     let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//     let day = days[d.getDay()];
//     let date = d.getDate();
//     let month = months[d.getMonth()];
//     let year = d.getFullYear();

//     return `${day} ${date} ${month} ${year}`
//   }

//   return (
//     <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
//       <main>
//         <div className="search-box">
//           <input 
//             type="text"
//             className="search-bar"
//             placeholder="Search..."
//             onChange={e => setQuery(e.target.value)}
//             value={query}
//             onKeyPress={search}
//           />
//         </div>
//         {(typeof weather.main != "undefined") ? (
//         <div>
//           <div className="location-box">
//             <div className="location">{weather.name}, {weather.sys.country}</div>
//             <div className="date">{dateBuilder(new Date())}</div>
//           </div>
//           <div className="weather-box">
//             <div className="temp">
//               {Math.round(weather.main.temp)}°c
//             </div>
//             <div className="weather">{weather.weather[0].main}</div>
//           </div>
//         </div>
//         ) : ('')}
//       </main>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { Input } from '@mui/material';
import Listcom from './Listcom';


function App() {
  const [data,setdata]=useState("")
  const [data1,setdata1]=useState([])
  const addData = (e)=>{
    setdata(e.target.value)
    
  }
const submitData =()=>{
  setdata1((add)=>{
    return[...add,data]
  })
  setdata("")
  
}

  return (
    <div className="container">
      <h1>TO DO APPLICATION</h1> <br />
      <Input defaultValue="" placeholder="add item here" required={data} value={data} onChange={addData} />
      <Button variant="contained" onClick={submitData}> <AddIcon  /></Button>
      
      {
        data1.map((abc , index)=>{
          return <Listcom key={index} text={abc}/>
        })
      }






      
    </div>
  )
}

export default App
