import React, { useEffect } from "react"
import { StyledProjects } from "./styled/StyledProjects"

import Aos from "aos"
import "aos/dist/aos.css"

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
          <a
            href={projects[0].netlifyLink}
            target="_blank"
            rel="noreferrer"
            className="general-link"
          >
            <div className="project">
              <div className="image-zoom">
                <img src={projects[0].image} alt={projects[0].name} />
              </div>
              <div className="project-infos">
                <h5>{projects[0].name}</h5>
                <div className="description">
                  <p>{projects[0].description}</p>
                  <p className="detailed-description">{projects[0].details}</p>
                </div>
                <a
                  href={projects[0].githubLink}
                  target="_blank"
                  rel="noreferrer"
                >
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
          </a>

          <a
            href={projects[1].netlifyLink}
            target="_blank"
            rel="noreferrer"
            className="general-link"
          >
            <div className="project">
              <div className="image-zoom">
                <img src={projects[1].image} alt={projects[1].name} />
              </div>
              <div className="project-infos">
                <h5>{projects[1].name}</h5>
                <div className="description">
                  <p>{projects[1].description}</p>
                  <p className="detailed-description">{projects[1].details}</p>
                </div>
                <a
                  href={projects[1].githubLink}
                  target="_blank"
                  rel="noreferrer"
                >
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
          </a>
        </div>
        <div className="projects-row" data-aos="fade-right">
          <a
            href={projects[2].netlifyLink}
            target="_blank"
            rel="noreferrer"
            className="general-link"
          >
            <div className="project">
              <div className="image-zoom">
                <img src={projects[2].image} alt={projects[2].name} />
              </div>
              <div className="project-infos">
                <h5>{projects[2].name}</h5>
                <div className="description">
                  <p>{projects[2].description}</p>
                  <p className="detailed-description">{projects[2].details}</p>
                </div>
                <a
                  href={projects[2].githubLink}
                  target="_blank"
                  rel="noreferrer"
                >
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
          </a>

          <a
            href={projects[3].netlifyLink}
            target="_blank"
            rel="noreferrer"
            className="general-link"
          >
            <div className="project">
              <div className="image-zoom">
                <img src={projects[3].image} alt={projects[3].name} />
              </div>
              <div className="project-infos">
                <h5>{projects[3].name}</h5>
                <div className="description">
                  <p>{projects[3].description}</p>
                  <p className="detailed-description">{projects[3].details}</p>
                </div>
                <a
                  href={projects[3].githubLink}
                  target="_blank"
                  rel="noreferrer"
                >
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
          </a>
        </div>
        <div className="projects-row" data-aos="fade-right">
          <a
            href={projects[4].netlifyLink}
            target="_blank"
            rel="noreferrer"
            className="general-link"
          >
            <div className="project">
              <div className="image-zoom">
                <img src={projects[4].image} alt={projects[4].name} />
              </div>
              <div className="project-infos">
                <h5>{projects[4].name}</h5>
                <div className="description">
                  <p>{projects[4].description}</p>
                  <p className="detailed-description">{projects[4].details}</p>
                </div>
                <a
                  href={projects[4].githubLink}
                  target="_blank"
                  rel="noreferrer"
                >
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
          </a>
          <a
            href={projects[5].netlifyLink}
            target="_blank"
            rel="noreferrer"
            className="general-link"
          >
            <div className="project">
              <div className="image-zoom">
                <img src={projects[5].image} alt={projects[5].name} />
              </div>
              <div className="project-infos">
                <h5>{projects[5].name}</h5>
                <div className="description">
                  <p>{projects[5].description}</p>
                  <p className="detailed-description">{projects[5].details}</p>
                </div>
                <a
                  href={projects[5].githubLink}
                  target="_blank"
                  rel="noreferrer"
                >
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
          </a>
        </div>
        <div className="projects-row" data-aos="fade-right">
          <a
            href={projects[6].netlifyLink}
            target="_blank"
            rel="noreferrer"
            className="general-link"
          >
            <div className="project">
              <div className="image-zoom">
                <img src={projects[6].image} alt={projects[6].name} />
              </div>
              <div className="project-infos">
                <h5>{projects[6].name}</h5>
                <div className="description">
                  <p>{projects[6].description}</p>
                  <p className="detailed-description">{projects[6].details}</p>
                </div>
                <a
                  href={projects[6].githubLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href={projects[6].netlifyLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div>
            </div>
          </a>
          <a
            href={projects[7].netlifyLink}
            target="_blank"
            rel="noreferrer"
            className="general-link"
          >
            <div className="project">
              <div className="image-zoom">
                <img src={projects[7].image} alt={projects[7].name} />
              </div>
              <div className="project-infos">
                <h5>{projects[7].name}</h5>
                <div className="description">
                  <p>{projects[7].description}</p>
                  <p className="detailed-description">{projects[7].details}</p>
                </div>
                <a
                  href={projects[7].githubLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href={projects[7].netlifyLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div>
            </div>
          </a>
        </div>
        <div className="projects-row" data-aos="fade-right">
          <a
            href={projects[8].netlifyLink}
            target="_blank"
            rel="noreferrer"
            className="general-link"
          >
            <div className="project">
              <div className="image-zoom">
                <img src={projects[8].image} alt={projects[8].name} />
              </div>
              <div className="project-infos">
                <h5>{projects[8].name}</h5>
                <div className="description">
                  <p>{projects[8].description}</p>
                  <p className="detailed-description">{projects[8].details}</p>
                </div>
                <a
                  href={projects[8].githubLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href={projects[8].netlifyLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div>
            </div>
          </a>
          <a
            href={projects[9].netlifyLink}
            target="_blank"
            rel="noreferrer"
            className="general-link"
          >
            <div className="project">
              <div className="image-zoom">
                <img src={projects[9].image} alt={projects[9].name} />
              </div>
              <div className="project-infos">
                <h5>{projects[9].name}</h5>
                <div className="description">
                  <p>{projects[9].description}</p>
                  <p className="detailed-description">{projects[9].details}</p>
                </div>
                <a
                  href={projects[9].githubLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                  href={projects[9].netlifyLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
              </div>
            </div>
          </a>
        </div>
      </div>
    </StyledProjects>
  )
}

export default Projects
