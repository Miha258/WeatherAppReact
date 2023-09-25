import { IWeatherObject } from "../types/Weather"
import WeatherIcon from "./WeatherIcon"

function WeatherDayObject(props: IWeatherObject) {
    return (
        <div
            className="inline w-32 h-16 border-x-2 border-gray-300p-2 mr-4 mb-4 text-center"
            >
            <div className="text-gray-700">{props.time}</div>
                <WeatherIcon icon={props.icon} />
                {props.temp}
        </div>
    )
}

export default WeatherDayObject