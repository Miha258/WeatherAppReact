import { IWeatherObject } from "../types/Weather"
import WeatherIcon from "./WeatherIcon"

function WeatherTableObject(props: IWeatherObject) {
    return (
        <div
            className="inline-block w-32 h-32 border-x-2 border-gray-300p-2 mr-4 mb-4 text-center"
            >
            <div className="text-gray-700">{props.time}</div>
                <WeatherIcon icon={props.icon}/>
                {props.temp}
        </div>
    )
}

export default WeatherTableObject