import styled from "styled-components"

export const StyledProjects = styled.section`
  .projects-row {
    display: flex;
    width: 425px;
  }

  .project {
    display: flex;
    flex-wrap: wrap;
    height: 425px;
    justify-content: center;
    margin-right: 65px;
    margin-bottom: 65px;
    width: 425px;
  }

  .image-zoom {
    height: 425px;
    opacity: 0.9;
    overflow: hidden;
    width: 425px;
  }

  .project img {
    border-radius: 1px;
    opacity: 1;
    transition: all 400ms ease-in-out;
    width: 425px;
  }

  .project-infos {
    margin-top: 45px;
    position: absolute;
    text-align: center;
    transition: all 400ms ease-in-out;
    opacity: 0;
    width: 380px;
  }

  h5 {
    background-color: var(--dark-grey);
    border-radius: 1px;
    color: white;
    padding: 8px 16px;
    font-size: 20px;
    text-transform: uppercase;
  }

  .description {
    background-color: var(--light-grey);
    color: var(--accents);
    font-size: 12px;
    font-style: italic;
    padding: 8px 16px;
  }

  .detailed-description {
    color: var(--dark-grey);
  }

  a {
    background-color: transparent;
    color: var(--dark-grey);
    display: inline-block;
    font-size: 30px;
    margin-top: 20px;
    padding: 8px 16px;
    transition: all 200ms ease-in-out;
  }

  a.general-link {
    margin: 0;
    padding: 0;
  }

  .project:hover img {
    opacity: 0.5;
    transform: scale(1.2);
  }

  .project:hover .project-infos {
    opacity: 1;
  }

  .project-infos a:hover {
    color: var(--accents);
  }

  @media screen and (max-width: 1200px) {
    .projects {
    }

    .projects-row {
      flex-wrap: wrap;
      justify-items: center;
      margin: 0 auto;
    }

    .project {
      margin: 40px 0;
    }

    .project img {
      opacity: 0.5;
    }

    .project-infos {
      opacity: 1;
    }
  }

  @media screen and (max-width: 800px) {
    h3 {
      margin-bottom: 40px;
    }
  }
`
