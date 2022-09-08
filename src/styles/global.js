import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  :root {
    --dark-grey: #4d4d4d;
    --light-grey: #d0d0d0;
    --accents: #000;
  }

  * {
    box-sizing: border-box;
    letter-spacing: 1px;
    line-height: 30px;
    font-family: "Montserrat", sans-serif;
  }

  body {
    margin: 0 auto;
    min-width: 400px;
    max-width: 2880px;
    padding: 0;
  }

  .content {
    margin-left: 400px;
    display: flex;
    background: linear-gradient(
      180deg,
      rgba(248, 248, 248, 1) 0%,
      rgba(255, 255, 255, 1) 100%
    );
    padding: 120px;
    height: 100vh;
  }

  section {
    height: 100%;
  }

  h2 {
    background-color: var(--light-grey);
    border-radius: 1px;
    font-size: 12px;
    display: inline;
    font-weight: 600;
    margin-bottom: 15px;
    padding: 10px 10px;
  }

  h3 {
    font-size: 24px;
    font-weight: 800;
    margin-bottom: 75px;
  }

  @media screen and (max-width: 1200px) {
    .content {
      height: 100vh;
      justify-content: center;
      margin-left: 0;
      padding-top: 180px;
      text-align: center;
    }

    @media screen and (max-width: 800px) {
      .content {
        padding: 120px 20px;
      }
    }
  }
`
