import { IWeatherObject } from "../types/Weather"
import WeatherIcon from "./WeatherIcon"

function WeatherTableObject(props: IWeatherObject) {
    return (
        <div
            className="inline-block mb-4"
            >
            <div className="object-center">
                <span className="text-gray-500">{props.time}</span>
                <br/>
                <br/>
                <WeatherIcon icon={props.icon}/>
                <br/>
                {props.temp}
            </div>
        </div>
    )
}

export default WeatherTableObject