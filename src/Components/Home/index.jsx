import { Link } from "react-router-dom";
import LogoTitle from "../../assets/images/logo-v-l.png"
import "./index.scss"
import { Loader } from 'react-loaders'

import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Logo from "../Logo";

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animation');
    const nameArray = ['i','k','r','a','n','t']
    const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r']

    useEffect(() => {
      const timer = setTimeout(() => {
        setLetterClass('text-animation-hover')
      }, 3000)

      return () => {
        clearTimeout(timer)
      }
    }, [])



    return (
      <>
        <div className="container home-page">
          <div className="text-zone">
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i</span>
              <br />
              <span className={`${letterClass} _13`}>I</span>
              <span className={`${letterClass} _14`}>'m</span>
              <img src={LogoTitle} alt="dev"></img>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
              />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={15}
              />
            </h1>
            <h2>Making ideas come alive on the internet</h2>

            <Link to="/contact" className="flat-button">
              Contact Me
            </Link>
          </div>
          <Logo />
        </div>
        <Loader type="pacman" />
      </>
    );
}

export default Home;