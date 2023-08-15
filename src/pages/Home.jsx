import Sidebar from "../components/Sidebar/Sidebar"
import Weather from "../components/Weather/Weather"


const Home=()=> {
  return (
    <div>
    <h1>Weather App</h1>
    <Sidebar/>
      <Weather/>
    </div>
  )
}

export default Home