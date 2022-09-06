import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { StyledHomepage } from "./styled/StyledHomepage"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagram,
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"

const Homepage = () => {
  return (
    <StyledHomepage>
      <section className="homepage">
        <div>
          <StaticImage
            src="../images/test-profile-pic-min.jpg"
            alt="profile picture"
            className="img"
            critical={true}
          />
        </div>
        <div className="infos">
          <h1>
            ANDREANNE <br />
            MARINEAU
          </h1>

          <p>
            Junior Full-Stack Developer based in Montreal.
            <br />
            Available for New Opportunities
          </p>

          <div>
            <a
              href="https://github.com/MarineauAndreanne?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://www.instagram.com/marineau.andreanne/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.linkedin.com/in/andreannemarineau/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://twitter.com/AndreanneMarin1"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </section>
    </StyledHomepage>
  )
}

export default Homepage
