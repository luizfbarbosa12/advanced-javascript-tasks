import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  & > * {
    border: 1px solid red;
  }
`;

export const Header = styled.header`
  height: 5vh;
  width: 100%;
`;

export const Hero = styled.article`
  height: 18rem;
  width: 18rem;
  background-color: violet;
`;

export const MainContent = styled.main`
  width: 18rem;
  height: 18rem;
  background-color: goldenrod;
`;

export const Sidebar = styled.aside`
  height: 18rem;
  width: 18rem;
  background-color: greenyellow;
`;
export const ExtraContent = styled.aside`
  height: 18rem;
  width: 18rem;
  background-color: lightgrey;
`;
