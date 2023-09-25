import { useContext } from "react"
import { WeatherContext } from "../WeatherContext"
import { IWeatherObject } from "../types/Weather"
import WeatherDayObject from "./WeatherTableObject"

function WeatherDays() {
    const context = useContext(WeatherContext)
    return (
        <div className="absolute inset-x-20 bottom-[-150px]">
        {context?.weatherTable && !context?.error && !context.isLoading &&
            <div className="bg-white rounded-lg shadow-lg p-4">
            <h1 className=" ont-semibold mb-4">Few Days Forecast</h1>
            <div className="bg-gray-100 rounded-lg p-5 text-center">
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