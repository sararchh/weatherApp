import React from 'react';
import { Heart } from 'react-feather';
import { WeatherContext } from '../../context/useWeather';

import { Container, ContentTop, ContentBottom } from './styles';

type CardCityProps = {
  name: string,
  id: string,
  place_name: string,
  favorite: boolean,
  temperature: number,
  temp_max: number,
  temp_min: number,
  description: string,
}

type itemProps = {
  item: CardCityProps,
}

const CardCity: React.FC<itemProps> = ({ item }) => {
  const { handleAddFavorite } = React.useContext(WeatherContext)

  return (
    <Container>
      <ContentTop>
        <div>
          <h3>{item.place_name}</h3>
        </div>
        <p>{item.temperature?.toFixed(0)}ºC</p>
      </ContentTop>

      <ContentBottom>
        <div>
          <p className="text01">{item.description}</p>
          <p>{item?.temp_min && item?.temp_min.toFixed(0)}ºC - {item?.temp_max && item?.temp_max.toFixed(0)}ºC</p>
        </div>

        <button onClick={() => handleAddFavorite(item)}>
          {item?.favorite ?
            <Heart color="#F91F1F" size={32} />
            :
            <Heart color="#6e6e6e" size={32} />

          }
        </button>
      </ContentBottom>

    </Container>
  )
}

export default CardCity;