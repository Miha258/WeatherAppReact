import { useContext } from 'react'
import { WeatherContext } from "../WeatherContext"

function WeatherDetails() {
    const context = useContext(WeatherContext)
    return (
        <div>
            {context?.weatherDetails && !context.error && !context.isLoading &&
            <div className="rounded-2xl p-4">
                <h1 className="font-semibold mb-4">Air conditions</h1>
                <div className="grid grid-cols-2 gap-2">
                    <div>
                        <h3 className='text-sm'>Real Feel</h3>
                        <span className='text-2xl'>
                            {(context?.weatherDetails?.main.feels_like - 273.15).toFixed(0).toString()}
                        </span>
                    </div>
                    <div>
                        <h3 className='text-sm'> Wind</h3>
                        <span className='text-2xl'>
                            {context?.weatherDetails?.wind.speed} km/h
                        </span>
                    </div>
                    <div>
                        <h3 className='text-sm'>Humidityn</h3>
                        <span className='text-2xl'>{context?.weatherDetails?.main.humidity}%</span>
                    </div>
                    <div>
                        <h3 className='text-sm'>Clouds</h3>
                        <span className='text-2xl'>{context?.weatherDetails?.clouds.all}%</span>
                    </div>
                </div>
            </div>}
        </div>
    );
}

export default WeatherDetails