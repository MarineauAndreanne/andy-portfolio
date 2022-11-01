import styled from 'styled-components'

export const StyledProjects = styled.section`
  .project-row {
    align-items: center;
    border-bottom: 1px solid #eee;
    display: flex;
    margin-bottom: 55px;
    padding-bottom: 45px;
  }

  .image-column img {
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    margin-right: 40px;
    opacity: 0.8;
    width: 500px;
  }

  .details-column {
    width: 400px;
  }

  .title {
    font-size: 26px;
    margin-top: 0;
    margin-bottom: 0;
  }

  .subtitle {
    margin: 20px 0;
  }

  .detailed-description {
    color: grey;
    font-size: 14px;
    font-style: italic;
    list-style: circle;
    margin: 0;
    margin-bottom: 20px;
  }

  p.detailed-description {
    margin-bottom: 5px;
  }

  .detailed-description li {
    margin-bottom: 5px;
  }
  .links a {
    align-items: center;
    border-radius: 4px;
    color: var(--dark-grey);
    display: flex;
    font-size: 22px;
    text-decoration: none;
    transition: all 200ms ease-in-out;
    width: 100%;
  }

  .links a:hover {
    color: #000;
    font-size: 26px;
  }

  .links p {
    font-size: 12px;
    display: flex;
    margin-left: 15px;
  }

  @media screen and (max-width: 1200px) {
    .image-column img {
      width: 350px;
    }
    .details-column {
      width: 350px;
    }
  }

  @media screen and (max-width: 765px) {
    .project-row {
      flex-wrap: wrap;
      justify-content: center;
      padding-bottom: 30px;
    }
    .image-column img {
      margin: 0px;
      width: 350px;
    }

    .details-column {
      padding: 0 10px;
    }

    .title {
      font-size: 20px;
      margin-top: 20px;
    }

    .subtitle {
      margin: 15px 0;
    }

    .detailed-description {
      color: grey;
      font-style: italic;
      margin: 15px 0;
    }
  }
`
