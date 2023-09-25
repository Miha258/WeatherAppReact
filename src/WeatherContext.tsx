import { createContext, ReactNode, useState, Dispatch, SetStateAction} from 'react';
import { IWeatherItem, IWeatherObject} from './types/Weather';


interface IWeatherContext {
  city: string;
  weatherDetails: IWeatherItem | null;
  weatherTable: IWeatherObject[] | null;
  weatherDays: IWeatherObject[] | null;
  isLoading: boolean;
  error: string | null;
  setCity: Dispatch<SetStateAction<string>>;
  setWeatherDetails: Dispatch<SetStateAction<IWeatherItem | null>>;
  setWeatherTable: Dispatch<SetStateAction<IWeatherObject[] | null>>;
  setWeatherDays: Dispatch<SetStateAction<IWeatherObject[] | null>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setError: Dispatch<SetStateAction<string | null>>;
}

const WeatherContext = createContext<IWeatherContext | null>(null);

const WeatherContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [city, setCity] = useState('Lviv');
  const [weatherDetails, setWeatherDetails] = useState<IWeatherItem | null>(null)
  const [weatherTable, setWeatherTable] = useState<IWeatherObject[] | null>(null)
  const [weatherDays, setWeatherDays] = useState<IWeatherObject[] | null>(null)
  const [isLoading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  return (
    <WeatherContext.Provider
      value={{ city, weatherDetails, weatherTable, weatherDays, isLoading ,error, setCity, setWeatherDetails, setWeatherTable, setWeatherDays, setLoading ,setError}}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherContext, WeatherContextProvider };


