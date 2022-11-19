import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Mixin, useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Header from './Header'
import Main from './Main'
import AboutMe from './AboutMe'
import HireMe from './Hireme'

const Home: NextPage = () => {

  const [actualPage, setActualPage] = useState({
    actual: "Knowledge"
  })

  

  return (
    <div className={styles.container}>
      <Head>
        <meta name="description" content="Benjamin Martin's Curriculum Vitae" />
        <link rel="icon" href="/favicon.ico" />
        <title>Benjamin Martin</title>
        <link rel="stylesheet" href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' />
      </Head>

      <Header actualPage={actualPage} setActualPage={setActualPage}></Header>

      {actualPage.actual === "Knowledge"? <Main></Main> : null}
      {actualPage.actual === "AboutMe"? <AboutMe></AboutMe> : null}
      {actualPage.actual === "HireMe"? <HireMe></HireMe> : null}
      
    </div>
  )
}

export default Home
