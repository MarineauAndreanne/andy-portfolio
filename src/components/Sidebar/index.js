import React from 'react'
import { Link } from 'gatsby'
import { StyledSidebar } from './styles'
import { toast } from 'react-hot-toast'

import logo from 'images/andy-logo-2.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faSuitcase, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText('marineau.andreanne@gmail.com')
    toast('copied', { duration: 2000, position: 'bottom-center' })
  }
  return (
    <StyledSidebar>
      <div className="sidebar-container">
        <ul>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <li>
            <Link
              to="/"
              style={{ textDecoration: 'none', color: 'var(--lightgrey)' }}
              activeStyle={{
                color: '#000',
                fontWeight: 600
              }}
            >
              <FontAwesomeIcon icon={faHouse} className="link-icon home" />
              <span className="link-title">Home</span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={{ textDecoration: 'none', color: 'var(--lightgrey)' }}
              activeStyle={{
                color: '#000',
                fontWeight: 600
              }}
            >
              <FontAwesomeIcon icon={faUser} className="link-icon" />
              <span className="link-title">About</span>
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              style={{ textDecoration: 'none', color: 'var(--lightgrey)' }}
              activeStyle={{
                color: '#000',
                fontWeight: 600
              }}
            >
              <FontAwesomeIcon icon={faSuitcase} className="link-icon" />
              <span className="link-title">Portfolio</span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={{ textDecoration: 'none', color: 'var(--lightgrey)' }}
              activeStyle={{
                color: '#000',
                fontWeight: 600
              }}
            >
              <FontAwesomeIcon icon={faEnvelope} className="link-icon" />
              <span className="link-title">Contact</span>
            </Link>
          </li>
          <p className="email-details">
            Get in Touch:
            <button id="email-link" onClick={copyToClipboard}>
              marineau.andreanne@gmail.com
            </button>
          </p>
        </ul>
      </div>
    </StyledSidebar>
  )
}

export default Sidebar
