import { useContext} from "react"
import { WeatherContext } from "../WeatherContext"
import { IWeatherObject } from "../types/Weather"
import WeatherTableObject from "./WeatherTableObject"

function WeatherTable() {
    const context = useContext(WeatherContext)
    return (
        <div>
        {context?.weatherTable && !context?.error && !context.isLoading &&
            <div className="bg-slate-700 rounded-2xl shadow-lg p-4">
            <h1 className="mb-4 text-gray-500">Tooday`s Forecast</h1>
            <div className="grid grid-cols-7 text-center rounded-2xl divide-gray-600 divide-x">
            {context?.weatherTable?.map((weatherInfo: IWeatherObject, index: number) => 
                <WeatherTableObject 
                    key={index}
                    time={weatherInfo.time} 
                    icon={weatherInfo.icon} 
                    temp={weatherInfo.temp}
                />
            )}
            </div>
        </div>}
        </div>
    );
}


export default WeatherTable