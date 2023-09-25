import { useContext } from 'react'
import { WeatherContext } from "../WeatherContext"
import WeatherIcon from './WeatherIcon';



function TargetWeather() {
    const context = useContext(WeatherContext)

    return (
        <div className="absolute inset-x-20 top-24">
            {context?.weatherDetails && !context.error && !context.isLoading &&
            <div className="relative p-4">
                <h2 className="text-2xl font-semibold mb-2">{context?.city.toUpperCase()}</h2>
                <p className="text-gray-600 mb-4">{context?.weatherDetails?.weather[0].main}</p>
                <div className="absolute inset-y-0 right-0 w-16 text-center text-3xl">
                    <p>{(context?.weatherDetails?.main.temp! - 273.15).toFixed().toString()}°C</p>
                    <WeatherIcon icon={context?.weatherDetails?.weather[0].icon}/>
                </div>
            </div>
            }
        </div>
    );
}

export default TargetWeather