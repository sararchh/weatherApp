import React, { createContext, useContext } from 'react';
import { mapBoxApi } from '../services/mapBoxApi';

type WeatherContextData = {
  listCity: any;
  searchCity : (text: string) => void;
  clearCity : () => void;
}

type WeatherProviderProps = {
  children: React.ReactNode;
}

export const WeatherContext = createContext({} as WeatherContextData);

export function WeatherProvider({ children, ...rest }: WeatherProviderProps) {
  const [listCity, setListCity] = React.useState<any>([]);

  async function searchCity(text: string) {
    const cities: any = []; 

  const {data} = await mapBoxApi.get(`geocoding/v5/mapbox.places/${text}.json?types=place&limit=8&access_token=${process.env.MAPBOX_API_TOKEN}`)

    data.features.forEach((item: any)=>{
      // console.log(item);
      cities.push({
        name: item.text,
        id: item.id,
        place_name: item.place_name
      })
      
    })
    setListCity(cities.sort((a: any, b: any)=> b.name - a.name));
    
}

function clearCity(){
  setListCity([]);
}

  return (
    <WeatherContext.Provider value={{searchCity, listCity, clearCity}}>
      {children}
    </WeatherContext.Provider>
  )
}