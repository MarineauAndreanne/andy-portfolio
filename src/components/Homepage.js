import React from "react"

import { StyledHomepage } from "./styled/StyledHomepage"
import ProfilePicture from "../images/test-profile-pic.jpg"

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
          <img src={ProfilePicture} alt="portait" />
        </div>
        <div className="infos">
          <h1>
            ANDREANNE <br />
            MARINEAU
          </h1>

          <p>
            Creative Photographer based in New York and happy to travel all over
            Europe to capture photos.
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
              href="https://www.instagram.com/marineau.andreanne/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://www.instagram.com/marineau.andreanne/"
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
