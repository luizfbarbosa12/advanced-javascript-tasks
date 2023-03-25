import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const LeftGap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const RightGap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
export const InnerContent = styled.div`
  display: flex;
  gap: 0.5rem;
`;
export const MainContent = styled.div`
  display: flex;
  gap: 0.5rem;

  @media screen and (max-width: 51.875rem) {
    display: block;
  }
`;
export const Header = styled.header`
  height: 4rem;
  width: 51.3rem;
  background-color: #54d5eb;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;

  @media screen and (max-width: 51.875rem) {
    width: 30.625rem;
  }
`;

export const Hero = styled.article`
  height: 17.125rem;
  width: 20.25rem;
  background-color: #d6c9e4;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;

  @media screen and (max-width: 51.875rem) {
    width: 100%;
  }
`;

export const Main = styled.main`
  width: 30.625rem;
  height: 27.5rem;
  background-color: #f5c631;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;

export const Sidebar = styled.aside`
  height: 22.8rem;
  width: 20.25rem;
  background-color: #9fc363;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  @media screen and (max-width: 51.875rem) {
    width: 100%;
    margin-bottom: 0.5rem;
  }
`;
export const ExtraContent = styled.aside`
  height: 12.375rem;
  width: 30.625rem;
  background-color: #898989;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;

export const RelatedImages = styled.div`
  background-color: #2bb673;
  width: 35.875rem;
  height: 9.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;

  @media screen and (max-width: 51.875rem) {
    width: 30.625rem;
  }
`;

export const RelatedPosts = styled.div`
  background-color: #f3ccde;
  width: 15rem;
  height: 9.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;

  @media screen and (max-width: 51.875rem) {
    width: 30.625rem;
  }
`;

export const LowerContent = styled.div`
  display: flex;
  gap: 0.5rem;

  @media screen and (max-width: 51.875rem) {
    display: flex;
    max-width: 30.625rem;
    flex-direction: column;
  }
`;
export const Footer = styled.footer`
  background-color: #ffa500;
  width: 51.375rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;

  @media screen and (max-width: 51.875rem) {
    width: 30.625rem;
  }
`;
