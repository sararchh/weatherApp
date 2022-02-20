import React from 'react';
import Image from 'next/image';

import { Nav, Input, InputContainer } from './styles';

import { WeatherContext } from '../../context/useWeather';

const HeaderView: React.FC = () => {
  const timeout = React.useRef<any>();
  const [textInput, setTextInput] = React.useState('');
  const { searchCity, clearCity } = React.useContext(WeatherContext);

  function handleInput(value: string) {
    setTextInput(value);
    //debounce usa timeout para detectar quando o usuario para de digitar
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      if(textInput.length >= 2) {
        searchCity(value);
      } else{
        clearCity()
      }
    }, 1200)

  }

  return (
    <Nav>
      <div>
        <Image width={65} height={65} src={'/logo.svg'} />
        <h1>WeatherApp</h1>
      </div>

      <InputContainer>
        <Input
          type="text"
          name="name"
          placeholder="Pesquisar Cidade"
          onChange={(e) => handleInput(e.target.value)}
          value={textInput}
        />
      </InputContainer>
    </Nav>
  )
}

export default HeaderView;