import type { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/globalStyles'
import { WeatherProvider } from '../src/context/useWeather'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WeatherProvider>
      <GlobalStyle />
      <Component {...pageProps} />

    </WeatherProvider>
  )
}

export default MyApp
