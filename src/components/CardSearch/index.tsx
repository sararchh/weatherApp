import React from 'react';
import { Plus } from 'react-feather';

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
  return (
    <Container>
      <ContentTop>
        <p>{item.place_name}</p>
        <Plus/>
      </ContentTop>

    </Container>
  )
}

export default CardSearch;