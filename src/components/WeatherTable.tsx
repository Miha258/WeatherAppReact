import { useContext} from "react"
import { WeatherContext } from "../WeatherContext"
import { IWeatherObject } from "../types/Weather"
import WeatherTableObject from "./WeatherTableObject"

function WeatherTable() {
    const context = useContext(WeatherContext)
    return (
        <div className="absolute inset-x-20 top-48">
        {context?.weatherTable && !context?.error && !context.isLoading &&
            <div className="bg-white rounded-lg shadow-lg p-4">
            <h1 className=" ont-semibold mb-4">Tooday`s Forecast</h1>
            <div className="bg-gray-100 rounded-lg p-4 text-center">
            {context?.weatherTable?.map((weatherInfo: IWeatherObject, index: number) => 
                <WeatherTableObject 
                    key={index}
                    time={weatherInfo.time} 
                    icon={weatherInfo.icon} 
                    temp={weatherInfo.temp}
                    size={9}
                />
            )}
            </div>
        </div>}
        </div>
    );
}


export default WeatherTable