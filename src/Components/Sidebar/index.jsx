import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-v-l.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faUser,
  faSuitcase
} from '@fortawesome/free-solid-svg-icons'

import {
  faLinkedinIn,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

export const Sidebar = () => {
  return (
    <>
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={LogoS} />
        </Link>
        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon className="fa-cog" icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="about-link"
            to="/about"
          >
            <FontAwesomeIcon className="fa-cog" icon={faUser} color="#4d4d4e" />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="portfolio-link"
            to="/portfolio"
          >
            <FontAwesomeIcon
              className="fa-cog"
              icon={faSuitcase}
              color="#4d4d4e"
            />
          </NavLink>
          <NavLink
            exact="true"
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon
              className="fa-cog"
              icon={faEnvelope}
              color="#4d4d4e"
            />
          </NavLink>
        </nav>
        <ul>
          <li>
            <a
              target="_blank"
              rel="norefferer"
              href="https://www.linkedin.com/in/vikrant-c/"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="norefferer"
              href="https://github.com/vikii99"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
