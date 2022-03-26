
import React,{ useState } from "react";
import Axios from "axios";
import MainCard from "./components/MainCard";
import FooterCard from "./components/FooterCard";

function App() {

  
  // burada apıden çekeceğiz verileri ama benim apıden çekeceğiz
  // url olucak ve endpointler olucak
  const [noData, setNoData] = useState('No Data Yet')
  const [searchInput, setSearchInput] = useState('')
  const [dataWeather, setDataWeather] = useState([])
  const [weatherDescription, setWeatherDescription] = useState("")
  const [region, setRegion] = useState('Unknown location')
  const [weatherIcon, setWeatherIcon] = useState("")




  const handleChange = ((input) => {
    const {value} = input.target
    setSearchInput(value);
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    getWeather(searchInput)
  }

  const getWeather = async (location) => {
    
    setDataWeather([])


    try {
      // fetch data from API(node.js)
      let res = await Axios.post(`http://localhost:8080/api/location?locationName=${location}`);
      
      let dataJSON = res.data.data[0];
      console.log(dataJSON);

      if(res.status != 200) {
        setNoData('Location Not Found')
        return
      }

      setDataWeather(dataJSON);
      setRegion(`${dataJSON.locationName} - ${dataJSON.locationRegion} - ${dataJSON.locationCountry}`);
      setWeatherIcon(`${dataJSON.weatherIcons}`);
      setWeatherDescription(`${dataJSON.weatherDescriptions}`);

    } catch (error) {
      console.log(error);
    }
  }







  return (


    <div className="bg-blue-300 flex items-center justify-center w-screen h-auto py-10">
    <div className="flex w-3/4 min-h-auto rounded-3xl shadow-lg m-auto bg-gray-100">
        {/* form card section  */}
      <div className="form-container">

        <div className="flex mt-6	mb-12 items-center justify-center">
  
          <h3 className="text-4xl font-bold text-green-700 shadow-md py-1 px-3
          rounded-lg bg-yellow-400 bg-opacity-50 "> Daily Weather App </h3>
        
        </div>
        

        <div className="flex flex-col my-48 items-center h-full">
          <hr className="h-2 bg-yellow-300  w-3/4 rounded-full mb-10" />

          <div className="flex mt-6	mb-12 items-center justify-center">
            <h1 className="text-green-600 text-3xl  shadow-md py-1 px-3
            rounded-lg bg-yellow-300 bg-opacity-50">Enter Your Location</h1>
          </div>
          <form noValidate onSubmit={handleSubmit} className="flex justify-center w-full">
            <input type="text"
              placeholder="Enter location"
              className="relative rounded-xl py-2 px-3 w-2/3 bg-gray-300 bg-opacity-60 text-white placeholder-gray-200"
              onChange={handleChange}
              required />
              <button type="submit" className="z-10">
                <i className="fa fa-search text-white -ml-10 border-l my-auto z-10 cursor-pointer p-3"
                aria-hidden="true" type="submit"></i>
              </button>

          </form>
          <hr className="h-2 bg-yellow-300  w-3/4 rounded-full mt-10" />

        </div>

      </div>
      {/* info card section  */}
      <div className="w-2/4 p-5">

        <div className="flex flex-col my-2">
          {/* card jsx  */}
          {dataWeather.length === 0 ?
            <div className="container p-4 flex items-center justify-center h-1/3 mb-auto">
              <h1 className="text-gray-300 text-4xl font-bold uppercase">{noData}</h1>
            </div> :
            <>
              <h1 className="text-5xl text-green-600 mt-auto text-center ml-16 mb-4">Today</h1>
              <MainCard _weatherIcon={weatherIcon} _weatherDescription={weatherDescription} _region={region} _Temperature={dataWeather.Temperature} />

              <FooterCard  _speed={dataWeather.windSpeed} _pressure={dataWeather.pressure} _humidity={dataWeather.humidity}/>
            </>
          }
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;

