import type { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/globalStyles'
import { WeatherProvider } from '../src/context/useWeather'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WeatherProvider>
      <ToastContainer />
      <GlobalStyle />
      <Component {...pageProps} />

    </WeatherProvider>
  )
}

export default MyApp
