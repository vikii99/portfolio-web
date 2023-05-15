import React from 'react'
import './index.scss'
import { Loader } from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react'
import portfolioData from '../../data/portfolio.json'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../firebase'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animation')
  const [portfolioo, setPortfolioo] = useState([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animation-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    getPortfolio()
  }, [])

  const getPortfolio = async () => {
    const querySnapshot = await getDocs(collection(db, 'projects'))
    console.log(querySnapshot)
    setPortfolioo(querySnapshot.docs.map((doc) => doc.data()))
  }



  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img
                src={port.cover}
                alt="portfolio"
                className="portfolio-image"
              />
              <div className="content">
                <p className="title">{port.title}</p>
                <h4 className="description">{port.description}</h4>
                <button className="btn" onClick={() => window.open(port.url)}>
                  View
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="container portfolio-page">
      <div className="port1">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Projects'.split('')}
            idx={15}
          />
        </h1>
        <div>{renderPortfolio(portfolioo)}</div>
      </div>
      <Loader type="pacman" />
    </div>
  )
}

export default Portfolio
