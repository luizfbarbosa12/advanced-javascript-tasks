import { Container, Header, Hero, MainContent, Sidebar, ExtraContent } from "./app.styles";
function App() {
  return (
    <Container>
      <Header>Header</Header>
      <div>
        <div>
          <Hero>HERO</Hero>
          <Sidebar>SIDEBAR</Sidebar>
          <MainContent>MAIN CONTENT</MainContent>
          <ExtraContent>EXTRA CONTENT</ExtraContent>
        </div>
        <div></div>
        <div></div>
      </div>
      <footer></footer>
    </Container>
  );
}

export default App;
