import {
  Container,
  Header,
  Hero,
  Main,
  Sidebar,
  ExtraContent,
  InnerContent,
  MainContent,
  Footer,
  RelatedPosts,
  RelatedImages,
  LowerContent,
  LeftGap,
  RightGap
} from "./app.styles";
import { GlobalStyle } from "./GlobalStyles/GlobalStyle";
function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>Header</Header>
        <InnerContent>
          <MainContent>
            <LeftGap>
              <Hero>HERO</Hero>
              <Sidebar>SIDEBAR</Sidebar>
            </LeftGap>
            <RightGap>
              <Main>MAIN CONTENT</Main>
              <ExtraContent>EXTRA CONTENT</ExtraContent>
            </RightGap>
          </MainContent>
        </InnerContent>
        <LowerContent>
          <RelatedImages>Related Images</RelatedImages>
          <RelatedPosts>Related Posts</RelatedPosts>
        </LowerContent>
        <Footer>Footer</Footer>
      </Container>
    </>
  );
}

export default App;
