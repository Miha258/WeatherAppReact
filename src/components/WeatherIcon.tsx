import cloud from '../icons/cloud.png';
import wind from '../icons/wind.png';
import rain from '../icons/rain.png';
import snow from '../icons/snow.png';
import thunderstorm from '../icons/thunderstorm.png';
import sunny from '../icons/sunny.png';
import { useCallback } from 'react';

type WeatherIconProps = {
  icon: string;
};

function WeatherIcon({ icon }: WeatherIconProps) {
    const getImage = useCallback(() => {
        switch (icon) {
            case '01d':
            case '01n':
                return sunny;

            case '02d':
            case '02n':
            case '03d':
            case '03n':
            case '04d':
            case '04n':
                return cloud;

            case '09d':
            case '09n':
            case '10d':
            case '10n':
                return rain;

            case '11d':
            case '11n':
                return thunderstorm;

            case '13d':
            case '13n':
                return snow;

            case '50d':
            case '50n':
                return wind;

            default:
                return sunny;
        }
    }, [icon]);

    return <img className='p-2' src={getImage()} alt="Weather Icon"/>;
}

export default WeatherIcon;