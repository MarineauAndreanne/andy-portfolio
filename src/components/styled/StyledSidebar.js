import styled from "styled-components"

export const StyledSidebar = styled.span`
  .sidebar-container {
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    overflow: auto;
    position: fixed;
    width: 400px;
  }

  img {
    margin-top: 20px;
    margin-left: -40px;
    z-index: -1;
    width: 200px;
    border-radius: 0;
    position: relative;
  }

  ul {
    font-size: 15px;
    list-style: none;
    margin: 0;
    padding: 40px 0;
  }

  li {
    color: var(--dark-grey);
    text-decoration: none;
    margin-bottom: 12px;
    transition: all 200ms ease-in-out;
  }

  li:hover {
    color: var(--accents);
  }

  .link-icon {
    margin-right: 10px;
  }

  #copyrights {
    color: var(--light-grey);
    font-size: 12px;
    font-style: italic;
    line-height: 25px;
    margin-top: 50px;
  }

  @media screen and (max-width: 1200px) {
    .sidebar-container {
      background-color: white;
      display: flex;
      height: 80px;
      justify-content: end;
      line-height: 20px;
      overflow: auto;
      padding: 10px 30px;
      position: fixed;
      width: 100%;
    }

    img {
      margin-bottom: 0;
      position: fixed;
      left: 35px;
      width: 100px;
      margin: 0;
    }

    ul {
      display: flex;
      padding: 0;
    }

    .link-title {
      display: none;
    }
    .link-icon {
      margin-left: 45px;
      font-size: large;
    }

    #copyrights {
      display: none;
    }
  }

  @media screen and (max-width: 1200px) {
    section {
      margin: 0;
      padding: 0;
      width: 100vh;
    }
  }

  @media screen and (max-width: 430px) {
    img {
      left: 20px;
      width: 75px;
    }

    .home {
      display: none;
    }
  }
`
