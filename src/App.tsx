import WeatherTable from "./components/WeatherTable";
import TargetWeather from "./components/TargetWeather";
import MenuBar from "./components/MenuBar";
import WeatherDetails from "./components/WeatherDetails";
import { WeatherContextProvider } from "./WeatherContext"
import SearchWeather from "./components/SearchWeather";
import WeatherDays from "./components/WeatherDays";


function App() {
  return (
    <div>
        <WeatherContextProvider>
            <div className="flex">
              <MenuBar/>
              <div className="flex-grow p-4">
                  <SearchWeather />
                  <TargetWeather />
                  <WeatherTable/>
                  <WeatherDetails/>
              </div>
              <div className="flex-none w-96">
                <WeatherDays/>
              </div>
            </div>
        </WeatherContextProvider> 
    </div>
  );
}

export default App;
