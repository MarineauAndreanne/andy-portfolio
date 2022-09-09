import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'

import { StyledHomepage } from './styles'

const Homepage = () => {
  return (
    <StyledHomepage>
      <section className="homepage">
        <StaticImage
          src="../../images/andreanne-headshot.jpg"
          alt="profile picture"
          style={{
            marginTop: '60px',
            position: 'relative',
            width: '300px',
            overflow: 'hidden',
            borderRadius: '50%'
          }}
          imgStyle={{
            borderRadius: '50%'
          }}
        />
        <div className="infos">
          <h1>
            ANDREANNE <br />
            MARINEAU
          </h1>

          <p>
            Junior Full-Stack Developer based in Montreal.
            <br />
            Available for new opportunities.
          </p>

          <div>
            <a href="https://github.com/MarineauAndreanne?tab=repositories" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.instagram.com/marineau.andreanne/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/in/andreannemarineau/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://twitter.com/AndreanneMarin1" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </section>
    </StyledHomepage>
  )
}

export default Homepage
