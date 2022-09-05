import styled from "styled-components"

export const StyledAbout = styled.section`
  .nurse {
    color: var(--light-grey);
    text-decoration: line-through;
    font-style: italic;
  }

  .about {
    display: flex;
    color: var(--dark-grey);
  }

  .about p {
    font-size: 14px;
    text-align: justify;
    margin-right: 40px;
  }

  .skills {
    align-content: center;
    display: flex;
    justify-content: space-evenly;
    margin-top: 100px;
    padding-right: 40px;
    flex-wrap: wrap;
  }

  .skills-icon,
  img.skills-icon {
    color: var(--accents);
    font-size: 30px;
    margin-top: 10px;
    width: 30px;
  }

  img.skills-icon.exception {
    margin-right: 0;
  }

  .skills-icon-secondary {
    display: flex;
  }
  .skills-icon-secondary > .skills-icon,
  img.skills-icon {
    margin-right: 20px;
    margin-top: 15px;
  }

  .list {
    flex-shrink: 0;
  }

  .about ul {
    font-size: 12px;
    list-style: none;
    padding: 0;
  }

  .list-title {
    color: var(--accents);
    font-weight: 600;
  }

  @media screen and (max-width: 1200px) {
    .about {
      flex-wrap: wrap;
      justify-content: center;
    }
    .about p {
      margin: 0;
      padding: 0;
    }

    .skills {
      margin-top: 50px;
      padding: 0;
    }

    .skills-icon,
    img.skills-icon {
      margin: 10px 10px;
    }

    .text {
      margin: 0;
    }

    .list {
      margin-top: 50px;
    }
  }

  @media screen and (max-width: 800px) {
    h3 {
      margin-bottom: 60px;
    }

    .skills {
      margin-top: 20px;
    }

    span.skills-icon-secondary {
      display: none;
    }

    .list {
      margin-top: 5px;
    }
  }
`
