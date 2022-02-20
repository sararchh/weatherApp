import React from 'react';
import type { NextPage } from 'next';
import HomeScreen from '../src/screens/Home';
import Head from 'next/head';
import {mapBoxApi} from '../src/services/mapBoxApi';

const Home: NextPage = () => {

  return (
    <>
      <Head>
        {/* Head = informacoes da pagina do html */}
        <title>WeatherApp | Home</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <link rel="icon" href="favicon.png" sizes="32x32" type="image/png" />


        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Poppins:wght@400;600&display=swap" rel="stylesheet" />

      </Head>
      <HomeScreen 
  
      />
    </>
  )
}

export default Home
