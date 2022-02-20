import React from 'react';
import CardSearch from '../../components/CardSearch';
import HeaderView from '../../components/Header';
import NoData from '../../components/NoData';
import { WeatherContext } from '../../context/useWeather';

import { ContentCards } from './styles';

type Props = {

}

const HomeScreen: React.FC<Props> = () => {
  const { listCity } = React.useContext(WeatherContext);

  return (
    <>
      <HeaderView />
      <ContentCards>
        <div>
          <p>Resultados da Pesquisa:</p>
        </div>
        {Boolean(listCity.length) && listCity.map((city: any) => (
          <CardSearch key={city.id} item={city} />
        ))}
      </ContentCards>

      {!Boolean(listCity.length) && (
        <NoData title="Sem cidades adicionadas, faça a busca adicione a cidade de sua preferência." />
      )}


    </>
  )
}

export default HomeScreen;