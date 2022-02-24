import React from 'react';
import { Plus, Check } from 'react-feather';
import { WeatherContext } from '../../context/useWeather';

import { Container, ContentTop } from './styles';

type CardCityProps = {
  name: string,
  id: string,
  place_name: string
}

type itemProps = {
  item: CardCityProps,
}

const CardSearch: React.FC<itemProps> = ({ item }) => {
  const { addNewCity, cityDatabase } = React.useContext(WeatherContext);


  return (
    <Container>
      <ContentTop>
        <p>{item.place_name}</p>

        <button onClick={() => addNewCity(item)}>
          {cityDatabase.find(i => i.id == item.id) ?
            <Check color={"#72D8FF"}/>
            :
            <Plus />
          }
        </button>
      </ContentTop>

    </Container>
  )
}

export default CardSearch;