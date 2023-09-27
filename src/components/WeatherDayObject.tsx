import { IWeatherObject } from "../types/Weather"
import WeatherIcon from "./WeatherIcon"

function WeatherDayObject(props: IWeatherObject) {
    return (
        <div
            className="w-full mb-1 pt-5 divide-gray-600 divide-y text-center">
            <div className="grid grid-cols-3 gap-3">
                <span className="text-gray-500">{props.time.slice(0,3)}</span>
                <WeatherIcon icon={props.icon}/>
                <span>{props.temp}</span>
            </div>
        </div>
    )
}

export default WeatherDayObject