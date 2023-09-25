import cloud from '../icons/cloud.png';
import wind from '../icons/wind.png';
import rain from '../icons/rain.png';
import snow from '../icons/snow.png';
import thunderstorm from '../icons/thunderstorm.png';
import sunny from '../icons/sunny.png';
import { useCallback, useState } from 'react';

type WeatherIconProps = {
  icon: string;
  size: number
};

function WeatherIcon({ icon, size }: WeatherIconProps) {
    const [newIcon, setIcon] = useState<string>(icon);
    const getImage = useCallback(() => {
        switch (icon) {
            case '01d':
            case '01n':
            return sunny
    
            case '02d':
            case '02n':
            case '03d':
            case '03n':
            case '04d':
            case '04n':
            return cloud
    
            case '09d':
            case '09n':
            case '10d':
            case '10n':
            return setIcon(rain);
        
            case '11d':
            case '11n':
            return thunderstorm
    
            case '13d':
            case '13n':
            setIcon(snow);
            break;
    
            case '50d':
            case '50n':
            return wind
        
            default:
            return sunny
        }
    }, [])
    
    const style = `p-${size}`
    return <img src={getImage()} alt="Weather Icon" className={style}/>;
}

export default WeatherIcon