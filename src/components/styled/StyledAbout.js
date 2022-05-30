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
  }

  .skills-icon,
  img.skills-icon {
    color: var(--accents);
    font-size: 30px;
    width: 30px;
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

    .text {
      margin: 0;
    }

    .list {
      margin-top: 100px;
    }
  }
`
