import React, { createContext, useContext } from 'react';
import { toast } from 'react-toastify';
import { mapBoxApi } from '../services/mapBoxApi';
import { openWeatherApi } from '../services/openWeatherApi';
import { getStorageParse } from '../utils/json';

type CardCityProps = {
  name: string,
  id: string,
  place_name: string,
  temperature?: number,
  temp_max?: number,
  temp_min?: number,
  description?: string,
}

type WeatherContextData = {
  listCity: any;
  searchCity: (text: string) => void;
  clearCity: () => void;
  addNewCity: (item: CardCityProps) => void;
  cityDatabase: CardCityProps[];
  searchMode: Boolean;
  handleAddFavorite: (item: any) => void;
}

type WeatherProviderProps = {
  children: React.ReactNode;
}

export const WeatherContext = createContext({} as WeatherContextData);

export function WeatherProvider({ children, ...rest }: WeatherProviderProps) {
  const [listCity, setListCity] = React.useState<any>([]);
  const [cityDatabase, setCityDatabase] = React.useState<any>([]);
  const [searchMode, setSearchMode] = React.useState<Boolean>(false);

  React.useEffect(() => {
    setCityDatabase(getStorageParse("@cities") || []);
    getDataWeatherOfCities();
  }, [])

  async function getDataWeatherOfCities() {
    // const { data } = await openWeatherApi.get(`weather?lat=${'-18.5395'}&lon=${'-40.2904'}&appid=${process.env.OPEN_WEATHER_API_KEY}`)
    //   const { data } =  await openWeatherApi.get(`/onecall?lat=${'-18.5395'}&lon=${'-40.2904'}&exclude=current,minutely,hourly,alerts&lang=pt_br&units=${"metric"}&appid=${process.env.OPEN_WEATHER_API_KEY}`)
    // console.log(data);


    const cities = getStorageParse("@cities");
    if (cities.length > 0) {
      const newArray: any = [];
      cities.forEach(async (city: any) => {
        const { data: {daily} } = await openWeatherApi.get(`/onecall?lat=${city.latitude}&lon=${city.longitude}&exclude=current,minutely,hourly,alerts&lang=pt_br&units=${"metric"}&appid=${process.env.OPEN_WEATHER_API_KEY}`)

        newArray.push({
          ...city,
          temperature: daily[0]?.temp?.day,
          temp_max: daily[0]?.temp?.max,
          temp_min: daily[0]?.temp?.min,
          description: daily[0]?.weather[0]?.description,
        })
      })
      setCityDatabase(newArray);
      localStorage.setItem("@cities", JSON.stringify(newArray));
    }

  }



  async function searchCity(text: string) {
    if (text.length == 0) return;
    setSearchMode(true);
    const cities: any = [];

    const { data } = await mapBoxApi.get(`geocoding/v5/mapbox.places/${text}.json?types=place&limit=8&access_token=${process.env.MAPBOX_API_TOKEN}`)
    // console.log(data);

    data.features.forEach((item: any) => {
      // console.log(item);
      cities.push({
        name: item.text,
        id: item.id,
        place_name: item.place_name,
        latitude: item?.geometry.coordinates[1],
        longitude: item?.geometry.coordinates[0],
        favorite: false,
        temperature: 0,
        temp_max: 0,
        temp_min: 0,
        description: '',
      })

    })
    setListCity(cities.sort((a: any, b: any) => b.name - a.name));

  }

  function clearCity() {
    setListCity([]);
    setSearchMode(false);
  }

  function addNewCity(city: CardCityProps) {
    const citiesStorage = getStorageParse("@cities");
    // console.log("citiesStorage", citiesStorage);

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

  function handleAddFavorite(item: any) {
    const selected = cityDatabase.find((i: any) => i.id == item.id);
    const restant = cityDatabase.filter((i: any) => i.id != item.id);

    const itemSelected: any = { ...selected, favorite: true }
    const newArray = [...restant, itemSelected];
    setCityDatabase(newArray);

    localStorage.setItem("@cities", JSON.stringify(newArray));
  }

  return (
    <WeatherContext.Provider value={{
      searchCity,
      listCity,
      clearCity,
      addNewCity,
      cityDatabase,
      searchMode,
      handleAddFavorite
    }}>
      {children}
    </WeatherContext.Provider>
  )
}