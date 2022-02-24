import React, { createContext, useContext } from 'react';
import { toast } from 'react-toastify';
import { mapBoxApi } from '../services/mapBoxApi';
import { getStorageParse } from '../utils/json';

type CardCityProps = {
  name: string,
  id: string,
  place_name: string
}

type WeatherContextData = {
  listCity: any;
  searchCity: (text: string) => void;
  clearCity: () => void;
  addNewCity: (item: CardCityProps) => void;
  cityDatabase: CardCityProps[];
}

type WeatherProviderProps = {
  children: React.ReactNode;
}

export const WeatherContext = createContext({} as WeatherContextData);

export function WeatherProvider({ children, ...rest }: WeatherProviderProps) {
  const [listCity, setListCity] = React.useState<any>([]);
  const [cityDatabase, setCityDatabase] = React.useState<any>([]);

  React.useEffect(() => {
    setCityDatabase(getStorageParse("@cities") || []);
  }, [])

  async function searchCity(text: string) {
    const cities: any = [];

    const { data } = await mapBoxApi.get(`geocoding/v5/mapbox.places/${text}.json?types=place&limit=8&access_token=${process.env.MAPBOX_API_TOKEN}`)

    data.features.forEach((item: any) => {
      // console.log(item);
      cities.push({
        name: item.text,
        id: item.id,
        place_name: item.place_name
      })

    })
    setListCity(cities.sort((a: any, b: any) => b.name - a.name));

  }

  function clearCity() {
    setListCity([]);
  }

  function addNewCity(city: CardCityProps) {
    const citiesStorage = getStorageParse("@cities");
    console.log("citiesStorage", citiesStorage);
    
    let newArray = [];

    if (citiesStorage) {
      const exists = citiesStorage.find((item: any) => item.id == city.id);

      if (exists) {
        const restant = citiesStorage.filter((item: any) => item.id != city.id)
        newArray.push(restant);

        toast.warn("Cidade removida")
      } else {
        newArray = [...citiesStorage, city];
      }

    } else {
      newArray.push(city);
    }

    localStorage.setItem("@cities", JSON.stringify(newArray));
    setCityDatabase(newArray);
  }

  return (
    <WeatherContext.Provider value={{
      searchCity,
      listCity,
      clearCity,
      addNewCity,
      cityDatabase
    }}>
      {children}
    </WeatherContext.Provider>
  )
}