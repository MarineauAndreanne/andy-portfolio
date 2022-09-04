import styled from "styled-components"

export const StyledEmail = styled.section`
  form {
    margin: 0 auto;
  }

  input,
  textarea {
    background-color: transparent;
    border: 1px solid var(--light-grey);
    border-radius: 1px;
    font-family: "poppins";
    font-size: 13px;
    line-height: 18px;
    margin-bottom: 30px;
    min-width: 100%;
    outline: none;
    padding: 10px 15px;
  }

  textarea {
    height: 180px;
    resize: none;
  }

  button {
    background-color: var(--accents);
    border: none;
    border-radius: 1px;
    color: white;
    font-size: 15px;
    margin: 10px 0 25px 0;
    padding: 15px 30px;
    transition: all 200ms ease-in-out;
  }

  button:hover {
    cursor: pointer;
    opacity: 0.75;
  }
`
