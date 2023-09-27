import { useContext } from 'react'
import { WeatherContext } from "../WeatherContext"
import WeatherIcon from './WeatherIcon';



function TargetWeather() {
    const context = useContext(WeatherContext)

    return (
        <div>
            {context?.weatherDetails && !context.error && !context.isLoading &&
            <div className="relative p-3">
                <div className='ml-32'>
                    <h2 className="text-5xl font-semibold mb-20">{context?.city}</h2>
                    <p className='text-4xl'>{(context?.weatherDetails?.main.temp! - 273.15).toFixed().toString()}°C</p>
                </div>
                <div className="absolute inset-y-0 right-32 top-10 w-16 text-center text-3xl">
                    <WeatherIcon icon={context?.weatherDetails?.weather[0].icon}/>
                </div>
            </div>
            }
        </div>
    );
}

export default TargetWeather