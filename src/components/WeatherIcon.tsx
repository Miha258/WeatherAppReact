import sunny from '../icons/sunny.png';
import sunny_n from '../icons/sunny_n.png';
import clear from '../icons/clear.png';
import clear_n from '../icons/clear_n.png';
import part_cloud from '../icons/part_cloud.png'
import part_cloud_n from '../icons/part_cloud_n.png'
import full_cloud from '../icons/full_cloud.png'
import full_cloud_n from '../icons/full_cloud_n.png'
import rain from '../icons/rain.png';
import rain_n from '../icons/rain_n.png';
import part_rain from '../icons/part_rain.png';
import part_rain_n from '../icons/part_rain_n.png';
import snow from '../icons/snow.png';
import snow_n from '../icons/snow_n.png';
import thunderstorm from '../icons/thunderstorm.png';
import thunderstorm_n from '../icons/thunderstorm_n.png';
import foggy from '../icons/foggy.png';

import { useMemo } from 'react';

type WeatherIconProps = {
  icon: string;
};

function WeatherIcon({ icon }: WeatherIconProps) {
    icon = useMemo(() => {
        switch (icon) {
            case '01d':
                return sunny
            case '01n':
                return sunny_n

            case '02d':
                return clear
            case '02n':
                return clear_n
            case '03d':
                return part_cloud
            case '03n':
                return part_cloud_n
            case '04d':
                return full_cloud
            case '04n':
                return full_cloud_n

            case '09d':
                return rain
            case '09n':
                return rain_n
            case '10d':
                return part_rain
            case '10n':
                return part_rain_n
            case '11d':
                return thunderstorm
            case '11n':
                return thunderstorm_n
            case '13d':
                return snow
            case '13n':
                return snow_n
            case '50d':
            case '50n':
                return foggy
            default:
                return sunny;
        }
    }, [icon]);

    return <img className={"ml-12"} width={100} height={100} src={icon} alt="Weather Icon"/>;
}

export default WeatherIcon;