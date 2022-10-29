import styled from 'styled-components'

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
    font-size: 15px;
    margin-right: 40px;
    margin-bottom: 20px;
    max-width: 800px;
  }

  .skills {
    padding-right: 40px;
    max-width: 700px;
    margin: 80px auto;
  }

  .row {
    align-items: center;
    display: flex;
    justify-content: space-evenly;
  }

  .skills-icon-secondary {
    margin-top: 15px;
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

  .list {
    flex-shrink: 0;
  }

  .about ul {
    border-left: 2px solid #eee;
    font-size: 12px;
    list-style: none;
    padding: 5px 0 5px 20px;
  }

  .list-title {
    color: var(--accents);
    font-weight: 600;
  }

  @media screen and (max-width: 1200px) {
    .about {
      flex-wrap: wrap;

      /* justify-content: center; */
    }
    .about p {
      margin: 0;
      padding: 0;
    }

    .about ul {
      border-left: 0;
      border-top: 2px solid #eee;
      padding-top: 40px;
      padding-left: 0;
      margin-top: 30px;
      margin-bottom: 30px;
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
      width: 100%;
    }
  }

  @media screen and (max-width: 800px) {
    h3 {
      margin-bottom: 60px;
    }

    .skills {
      margin: 60px auto;
    }

    span.skills-icon-secondary {
      display: none;
    }

    .list {
      margin-top: 5px;
    }
  }
`
