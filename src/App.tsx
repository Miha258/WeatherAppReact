import WeatherTable from "./components/WeatherTable";
import TargetWeather from "./components/TargetWeather";
import MenuBar from "./components/MenuBar";
import WeatherDetails from "./components/WeatherDetails";
import { WeatherContextProvider } from "./WeatherContext"
import SearchWeather from "./components/SearchWeather";
import WeatherDays from "./components/WeatherDays";


function App() {
  return (
    <div className="flex">
        <WeatherContextProvider>
            <MenuBar/>
            <SearchWeather/>
            <WeatherDays/>
            <TargetWeather/>
            <WeatherTable/>
            <WeatherDetails/>
        </WeatherContextProvider> 
    </div>
  );
}

export default App;
