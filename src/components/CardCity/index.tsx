import React from 'react';
import { Heart } from 'react-feather';

import { Container, ContentTop, ContentBottom } from './styles';

type CardCityProps = {
  name: string,
  id: string,
  place_name: string
}

type itemProps = {
  item: CardCityProps,
}

const CardCity: React.FC<itemProps> = ({item}) => {
  return (
    <Container>
      <ContentTop>
        <div>
          <h3>{item.place_name}</h3>
          <p>Brasil</p>
        </div>
        <p>32º</p>
      </ContentTop>

      <ContentBottom>
        <div>
          <p className="text01">Chuva leve</p>
          <p>32º - 49º</p>
        </div>
        <Heart color="#F91F1F" size={32} />
      </ContentBottom>

    </Container>
  )
}

export default CardCity;