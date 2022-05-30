import React, { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import "./Projects.css"

import Synergia from "../images/projects-images/synergia.jpg"
import WeatherApp from "../images/projects-images/weather-app.jpg"
import Dictionary from "../images/projects-images/dictionary.jpg"
import SpaceNews from "../images/projects-images/space-news.jpg"
import TravelAdvisor from "../images/projects-images/travel-advisor.jpg"
import Anahata from "../images/projects-images/anahata.jpg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"

const Projects = (props) => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <section className="portfolio">
      <span className="page-title">PORTFOLIO</span>
      <h2>Web Development Projects</h2>

      <div className="projects-row">
        <div className="project">
          <div className="image-zoom">
            <img src={Synergia} alt="Synergia ECommerce Project" />
          </div>
          <div className="project-infos">
            <h5>{props.projects[0].name}</h5>
            <div className="description">
              <p>{props.projects[0].description}</p>
              <p className="details">{props.projects[0].details}</p>
            </div>
            <a
              href={props.projects[0].githubLink}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href={props.projects[0].netlifyLink}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
        </div>

        <div className="project">
          <div className="image-zoom">
            <img src={WeatherApp} alt="Synergia ECommerce Project" />
          </div>
          <div className="project-infos">
            <h5>{props.projects[1].name}</h5>
            <div className="description">
              <p>{props.projects[1].description}</p>
              <p className="details">{props.projects[1].details}</p>
            </div>
            <a
              href={props.projects[1].githubLink}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href={props.projects[1].netlifyLink}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
        </div>
      </div>
      <div className="projects-row" data-aos="fade-right">
        <div className="project">
          <div className="image-zoom">
            <img src={Dictionary} alt="Synergia ECommerce Project" />
          </div>
          <div className="project-infos">
            <h5>{props.projects[2].name}</h5>
            <div className="description">
              <p>{props.projects[2].description}</p>
              <p className="details">{props.projects[2].details}</p>
            </div>
            <a
              href={props.projects[2].githubLink}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href={props.projects[2].netlifyLink}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
        </div>

        <div className="project">
          <div className="image-zoom">
            <img src={SpaceNews} alt="Synergia ECommerce Project" />
          </div>
          <div className="project-infos">
            <h5>{props.projects[3].name}</h5>
            <div className="description">
              <p>{props.projects[3].description}</p>
              <p className="details">{props.projects[3].details}</p>
            </div>
            <a
              href={props.projects[3].githubLink}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href={props.projects[3].netlifyLink}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
        </div>
      </div>
      <div className="projects-row" data-aos="fade-right">
        <div className="project">
          <div className="image-zoom">
            <img src={TravelAdvisor} alt="Synergia ECommerce Project" />
          </div>
          <div className="project-infos">
            <h5>{props.projects[4].name}</h5>
            <div className="description">
              <p>{props.projects[4].description}</p>
              <p className="details">{props.projects[4].details}</p>
            </div>
            <a
              href={props.projects[4].githubLink}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href={props.projects[4].netlifyLink}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
        </div>
        <div className="project">
          <div className="image-zoom">
            <img src={Anahata} alt="Synergia ECommerce Project" />
          </div>
          <div className="project-infos">
            <h5>{props.projects[5].name}</h5>
            <div className="description">
              <p>{props.projects[5].description}</p>
              <p className="details">{props.projects[5].details}</p>
            </div>
            <a
              href={props.projects[5].githubLink}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href={props.projects[5].netlifyLink}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
