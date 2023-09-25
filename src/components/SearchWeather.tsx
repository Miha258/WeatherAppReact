import { useContext, useCallback, useRef, useEffect } from 'react'
import { WeatherContext } from "../WeatherContext"
import { IWeatherItem,  IWeatherTable, IWeatherObject } from "../types/Weather"


function SearchWeather() {
    const context = useContext(WeatherContext)
    const inputRef = useRef<HTMLInputElement | null>(null)
    
    const updateWether = useCallback(() => {
        const city = inputRef.current?.value!
        if (!city) {
            return
        }

        context?.setLoading(true)
        setTimeout(() => {
            context?.setCity(city)
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a5acf9f18cd7ef7ad90d00e89794b2c5`)
            .then(data => data.json().then((data: IWeatherItem) => {
                if (data?.cod === "404"){
                    context?.setLoading(false)
                    context?.setError('City not found.Try again')
                    return 
                }
                context?.setWeatherDetails(data)
            }))
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=7&appid=a5acf9f18cd7ef7ad90d00e89794b2c5`)
            .then(data => data.json().then((data: IWeatherTable) => {
                if (data?.cod === "404"){
                    return
                }
                const weatherData = data.list.map(w => {
                    const unixTimestamp = w.dt * 1000
                    const date = new Date(unixTimestamp)
                    const hours = date.getHours()
                    const minutes = date.getMinutes()
                    const formattedHours = (hours < 10) ? `0${hours}` : hours
                    const formattedMinutes = (minutes < 10) ? `0${minutes}` : minutes

                    const formattedTime = `${formattedHours}:${formattedMinutes}`
                    let icon = w.weather[0].icon
                    
                    const weatherTableObject: IWeatherObject = {
                        time: formattedTime, 
                        icon: icon as '*png', 
                        temp: (w.main.temp - 273.15).toFixed(0).toString() + "°C", 
                    }
                    return weatherTableObject
                })
                context?.setWeatherTable(weatherData)
            }))
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&&appid=a5acf9f18cd7ef7ad90d00e89794b2c5`)
            .then(data => data.json().then((data: IWeatherTable) => {
                if (data?.cod === "404"){
                    return
                }

                let weatherDays: IWeatherObject[] = []

                data.list.forEach(w => {
                    const unixTimestamp = w.dt * 1000
                    const date = new Date(unixTimestamp)
                    const dayName = date.toLocaleDateString('en-US', { weekday: 'long' }); 
                    
                    if (!weatherDays.find(v => v.time == dayName)) {
                        let icon = w.weather[0].icon
                        const weatherDaysObject: IWeatherObject = {
                            time: dayName, 
                            icon: icon as '*png', 
                            temp: (w.main.temp - 273.15).toFixed(0).toString() + "°C"
                        }
                        weatherDays.push(weatherDaysObject)
                    }
                })
                context?.setWeatherDays(weatherDays)
            }))
            context?.setLoading(false)
            context?.setError(null)
        }, 1000)
    }, [])

    return (
        <div className="absolute inset-x-20 top-1">
            <div>
                <input ref={inputRef} type="text" id="first_name" className="bg-gray-100 rounded-lg border-gray-300 p-2 focus:outline-none w-full" placeholder='Enter city'/>
                <button
                    onClick={updateWether}
                    className="mt-2 bg-gray-200 hover:bg-gray-300 text-white rounded-lg py-2 px-4"
                >
                    Search
                </button>
            </div>
            {context?.isLoading && 
            <div className='text-center mt-40'>
                <svg className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
            }
            {context?.error && <h1 className='mt-7 text-2xl text-center'>{context.error}</h1>}
        </div>
    );
}

export default SearchWeather