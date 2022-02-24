import React from 'react';
import CardCity from '../../components/CardCity';
import CardSearch from '../../components/CardSearch';
import HeaderView from '../../components/Header';
import NoData from '../../components/NoData';
import { WeatherContext } from '../../context/useWeather';

import { ContentCards } from './styles';

type Props = {

}

const HomeScreen: React.FC<Props> = () => {
  const { listCity, cityDatabase } = React.useContext(WeatherContext);

  return (
    <>
      <HeaderView />

      {Boolean(listCity.length) &&
        <ContentCards>
          <div>
            <p>Resultados da Pesquisa:</p>
          </div>
          {listCity.map((city: any) => (
            <CardSearch key={city.id} item={city} />
          ))}
        </ContentCards>
      }

      {!Boolean(cityDatabase.length) && (
        <NoData title="Sem cidades adicionadas, faça a busca adicione a cidade de sua preferência." />
      )}

      <ContentCards>
        {Boolean(cityDatabase.length) && (
          cityDatabase.map((city: any, index: number) => (
            <CardCity key={index} item={city} />
          ))
        )}
      </ContentCards>

    </>
  )
}

export default HomeScreen;