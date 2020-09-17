import React from 'react'
import Head from 'next/head'

import RocketseatLogo from '../assets/rocketseat.svg'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Home Page</title>
      </Head>

      <main>
        <RocketseatLogo />
        <h1>React Structure</h1>
        <p>A ReactJS + Next.js with ESLint, Typescript and Styled components</p>
      </main>
    </Container>
  )
}

export default Home
