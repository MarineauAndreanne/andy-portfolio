import React from "react"

import { StyledHomepage } from "./styled/StyledHomepage"
import ProfilePicture from "../images/test-profile-pic.jpg"
import ProfilePicture2 from "../images/profile_1.jpg"
import ProfilePicture3 from "../images/profile-5.jpg"

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
          <img src={ProfilePicture2} alt="portait" />
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
