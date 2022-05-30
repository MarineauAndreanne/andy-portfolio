// add propper links to social media

import * as React from "react"
import Layout from "../components/Layout"

import ProfilePicture from "../images/test-profile-pic.jpg"
import "../styles/index.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faInstagram,
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"

const IndexPage = () => {
  return (
    <Layout>
      <section className="homepage">
        <div className="portrait">
          <img src={ProfilePicture} alt="portait" />
        </div>
        <div className="infos">
          <div className="name">
            <h1>
              ANDREANNE <br />
              MARINEAU
            </h1>
          </div>
          <div className="homepage-description">
            <p>
              Creative Photographer based in New York and happy to travel all
              over Europe to capture photos.
            </p>
          </div>
          <div className="social-media-links">
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
    </Layout>
  )
}

export default IndexPage
