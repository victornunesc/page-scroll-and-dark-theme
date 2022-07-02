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
  height: calc(100vh - 80px);
  justify-content: space-evenly;
`;

export const Title = styled.h2`
  font-family: "Playfair Display", serif;
  font-weight: bold;
  font-size: 1.6em;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: center;
  max-height: 100%;
  margin: 15px;

  div {
    margin: 3px;
    border-right: 1px solid ${(props) => props.theme.color};
    border-left: 1px solid ${(props) => props.theme.color};
  }

  h4 {
  }

  p {
    margin: 0px 10px;
  }

  @media screen and (min-width: 769px) {
    flex-direction: row;
  }
`;

export const IconDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-height: 100%;
`;

export const PortfolioImage = styled.img`
  display: none;
  max-width: 340px;
  max-height: 230px;

  @media screen and (min-width: 769px) and (min-height: 628px),
    (min-height: 628px) {
    display: block;
  }
`;

export const DescriptionImage = styled.span`
  text-align: center;
  padding: 8px;
`;

export const SectionDescription = styled.div`
  max-height: 10em;
  overflow-y: scroll;
  scrollbar-color: #c22e18;
  width: 80%;
  box-shadow: inset rgb(50 50 93 / 25%) -5px -5px 0px 0px,
    rgb(0 0 0 / 30%) 0px 8px 16px -8px;
  border-radius: 25px;
`;

export const Description = styled.p`
  text-align: center;
  padding: 8px;
`;

export const ContainerStack = styled.div`
  max-height: 100%;
  display: flex;
  justify-content: center;

  .mySwiper {
    max-height: 100%;
  }
`;

export const Button = styled.button`
  background-color: ${(props) => (props.blue ? "#3dd1e7" : "#c22e18")};
  border: 0 solid #e5e7eb;
  box-sizing: border-box;
  color: ${(props) => props.theme.color};
  display: flex;
  font-family: ui-sans-serif, system-ui, -apple-system, system-ui, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1.5rem;
  padding: 0.75rem 1.65rem;
  position: relative;
  text-align: center;
  text-decoration: none #000000 solid;
  text-decoration-thickness: auto;
  width: 190px;
  margin: 0px 10px;
  max-width: 460px;
  position: relative;
  cursor: pointer;
  transform: rotate(-2deg);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:focus {
    outline: 0;
  }

  &:after {
    content: "";
    position: absolute;
    border: 1px solid ${(props) => props.theme.color};
    bottom: 4px;
    left: 4px;
    width: calc(100% - 1px);
    height: calc(100% - 1px);
  }

  &:hover:after {
    bottom: 2px;
    left: 2px;
  }

  @media (min-width: 768px) {
    padding: 0.75rem 3rem;
    font-size: 1.25rem;
  }
`;

export const DivButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
