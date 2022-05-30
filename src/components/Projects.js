import React, { useEffect } from "react"
import { StyledProjects } from "./styled/StyledProjects"

import Aos from "aos"
import "aos/dist/aos.css"

import Synergia from "../images/projects-images/synergia.jpg"
import WeatherApp from "../images/projects-images/weather-app.jpg"
import Dictionary from "../images/projects-images/dictionary.jpg"
import SpaceNews from "../images/projects-images/space-news.jpg"
import TravelAdvisor from "../images/projects-images/travel-advisor.jpg"
import Anahata from "../images/projects-images/anahata.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"

const Projects = ({ title, description, projects }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])

  return (
    <StyledProjects>
      <div className="projects">
        <h2>{title}</h2>
        <h3>{description}</h3>

        <div className="projects-row">
          <div className="project">
            <div className="image-zoom">
              <img src={Synergia} alt={projects[0].name} />
            </div>
            <div className="project-infos">
              <h5>{projects[0].name}</h5>
              <div className="description">
                <h4>{projects[0].description}</h4>
                <p>{projects[0].details}</p>
              </div>
              <a href={projects[0].githubLink} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href={projects[0].netlifyLink}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </div>
          </div>

          <div className="project">
            <div className="image-zoom">
              <img src={WeatherApp} alt={projects[1].name} />
            </div>
            <div className="project-infos">
              <h5>{projects[1].name}</h5>
              <div className="description">
                <p>{projects[1].description}</p>
                <p className="details">{projects[1].details}</p>
              </div>
              <a href={projects[1].githubLink} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href={projects[1].netlifyLink}
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
              <img src={Dictionary} alt={projects[2].name} />
            </div>
            <div className="project-infos">
              <h5>{projects[2].name}</h5>
              <div className="description">
                <p>{projects[2].description}</p>
                <p className="details">{projects[2].details}</p>
              </div>
              <a href={projects[2].githubLink} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href={projects[2].netlifyLink}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </div>
          </div>

          <div className="project">
            <div className="image-zoom">
              <img src={SpaceNews} alt={projects[3].name} />
            </div>
            <div className="project-infos">
              <h5>{projects[3].name}</h5>
              <div className="description">
                <p>{projects[3].description}</p>
                <p className="details">{projects[3].details}</p>
              </div>
              <a href={projects[3].githubLink} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href={projects[3].netlifyLink}
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
              <img src={TravelAdvisor} alt={projects[4].name} />
            </div>
            <div className="project-infos">
              <h5>{projects[4].name}</h5>
              <div className="description">
                <p>{projects[4].description}</p>
                <p className="details">{projects[4].details}</p>
              </div>
              <a href={projects[4].githubLink} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href={projects[4].netlifyLink}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </div>
          </div>
          <div className="project">
            <div className="image-zoom">
              <img src={Anahata} alt={projects[5].name} />
            </div>
            <div className="project-infos">
              <h5>{projects[5].name}</h5>
              <div className="description">
                <p>{projects[5].description}</p>
                <p className="details">{projects[5].details}</p>
              </div>
              <a href={projects[5].githubLink} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href={projects[5].netlifyLink}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </StyledProjects>
  )
}

export default Projects
