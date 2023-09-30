import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  max-width: 768px;
  position: relative;
  text-align: center;
  padding: 0px 15px;
  height: calc(100vh - 70px);
  justify-content: space-evenly;

  form {
    padding: 37.5px;
  }

  h1 {
    color: ${(props) => props.theme.color};
    font-weight: 700;
    letter-spacing: 7px;
    text-align: center;
    text-transform: uppercase;
  }

  .email {
    float: right;
    width: 45%;
  }

  input[type="text"],
  [type="email"],
  select,
  textarea {
    background: none;
    border: none;
    border-bottom: solid 1px ${(props) => props.theme.color};
    color: ${(props) => props.theme.color};
    font-size: 1em;
    font-weight: 400;
    letter-spacing: 1px;
    margin: 0em 0 1.875em 0;
    padding: 0 0 0.875em 0;
    width: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    -o-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }

  option {
    color: black;
  }

  input[type="text"]:focus,
  [type="email"]:focus,
  textarea:focus {
    outline: none;
    padding: 0 0 0.875em 0;
  }

  .message {
    float: none;
  }

  p {
    color: ${({ theme }) => theme.colorText};
  }

  .name {
    float: left;
    width: 45%;
  }

  select {
    background: url("https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-down-32.png")
      no-repeat right;
    outline: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }

  select::-ms-expand {
    display: none;
  }

  .subject {
    width: 100%;
  }

  .telephone {
    width: 100%;
  }

  textarea {
    line-height: 150%;
    resize: none;
    width: 100%;
  }

  ::-webkit-input-placeholder {
    color: #${(props) => props.theme.color};
  }

  :-moz-placeholder {
    color: #${(props) => props.theme.color};
    opacity: 1;
  }

  ::-moz-placeholder {
    color: #${(props) => props.theme.color};
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: #${(props) => props.theme.color};
  }

  #form_button {
    background: none;
    border: solid 2px ${(props) => props.theme.color};
    color: ${(props) => props.theme.color};
    cursor: pointer;
    display: inline-block;
    font-family: "Helvetica", Arial, sans-serif;
    font-size: 0.875em;
    font-weight: bold;
    outline: none;
    padding: 20px 35px;
    text-transform: uppercase;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }

  #form_button:hover {
    background: #474544;
    color: #f2f3eb;
  }

  button {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  input,
  select,
  textarea {
    color: ${(props) => props.theme.color};
    font: inherit;
  }

  input {
    line-height: normal;
  }

  textarea {
    overflow: auto;
  }

  @media screen and (max-width: 768px) {
    #container {
      margin: 20px auto;
      width: 95%;
    }
    form {
      padding: 0px;
    }
  }

  @media screen and (max-width: 480px), (max-height: 700px) {
    h1 {
      font-size: 26px;
    }

    .underline {
      width: 68px;
    }

    #form_button {
      padding: 15px 25px;
    }

    form {
      padding: 0px;
    }
  }

  @media screen and (max-width: 420px), (max-height: 700px) {
    h1 {
      font-size: 18px;
    }

    form {
      padding: 0px;
    }

    .icon {
      height: 35px;
      width: 35px;
    }

    .underline {
      width: 53px;
    }

    input[type="text"],
    [type="email"],
    select,
    textarea {
      font-size: 0.875em;
      margin: 0em 0 0.875em 0;
    }
  }
`;
