import React from 'react';
import CardCity from '../../components/CardCity';
import CardSearch from '../../components/CardSearch';
import HeaderView from '../../components/Header';
import NoData from '../../components/NoData';
import { WeatherContext } from '../../context/useWeather';

import { ContentCards, ContentTitle } from './styles';

type Props = {

}

const HomeScreen: React.FC<Props> = () => {
  const { listCity, cityDatabase, searchMode } = React.useContext(WeatherContext);

  return (
    <>
      <HeaderView />
      {searchMode &&
        <>
          {Boolean(listCity.length) &&
            <ContentCards>

              <ContentTitle>
                <p>Resultados da Pesquisa:</p>
              </ContentTitle>

              {listCity.map((city: any) => (
                <CardSearch key={city.id} item={city} />
              ))}

            </ContentCards>
          }
          {/* {!Boolean(listCity.length) && (
        <NoData title="Cidade não encontrada. Tente novamente" />
      )} */}
        </>
      }

      {!searchMode &&
        <>
          {!Boolean(cityDatabase.length) && (
            <NoData title="Sem cidades adicionadas, faça a busca adicione a cidade de sua preferência." />
          )}

          <ContentCards>
            {Boolean(cityDatabase.length) && (
              cityDatabase.sort((a:any, b:any) => b.favorite - a.favorite).map((city: any, index: number) => (
                <CardCity key={index} item={city} />
              ))
            )}
          </ContentCards>
        </>
      }
    </>
  )
}

export default HomeScreen;