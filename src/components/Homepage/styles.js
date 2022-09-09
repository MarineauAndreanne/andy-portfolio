import styled from 'styled-components'

export const StyledHomepage = styled.section`
  section {
    align-items: center;
    display: flex;
  }

  .img {
    border-radius: 50%;
    margin-top: 60px;
    position: relative;
    width: 300px;
  }

  div.infos {
    margin-left: 80px;
  }

  h1 {
    font-size: 55px;
    font-weight: 800;
    line-height: 66px;
    margin-bottom: 25px;
  }

  p {
    color: var(--dark-grey);
    font-size: 15px;
    font-style: italic;
    margin-bottom: 30px;
  }

  a {
    color: var(--accents);
    font-size: 18px;
    margin-right: 25px;
    transition: all 200ms ease-in-out;
  }

  a:hover {
    color: var(--dark-grey);
    opacity: 0.8;
  }

  @media screen and (max-width: 1200px) {
    .homepage {
      flex-wrap: wrap;
      justify-content: center;
    }

    div.infos {
      margin: 0;
    }
  }
`
