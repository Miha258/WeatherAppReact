import { useContext } from "react"
import { WeatherContext } from "../WeatherContext"
import { IWeatherObject } from "../types/Weather"
import WeatherDayObject from "./WeatherDayObject"

function WeatherDays() {
    const context = useContext(WeatherContext)
    return (
        <div className="ml-auto mr-20 mt-20">
        {context?.weatherTable && !context?.error && !context.isLoading &&
            <div className="bg-slate-700 rounded-2xl shadow-lg p-4">
            <h1 className="text-gray-500 font-semibold mb-4">Few Days Forecast</h1>
            <div className="grid grid-rows-5 gap-4 rounded-2xl divide-gray-600 divide-y">
            {context?.weatherDays?.map((weatherInfo: IWeatherObject, index: number) => 
                <WeatherDayObject 
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


export default WeatherDays