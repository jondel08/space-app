import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Cabecera from "./components/Cabecera";
import BarraLateral from "./components/BarraLateral";
import Banner from "./components/Banner";

const FondoGradiente = styled.div`
  background: linear-gradient(
    175deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1280px;
  max-width: 100%;
  margin: 0 auto;
  /* display: flex;
  gap: 24px; */
  padding: 24px;
`;

const MainContainer = styled.div`
  display: flex;
  gap: 24px;
`;

function App() {
  return (
    <>
      <FondoGradiente>
        <GlobalStyles />
        <AppContainer>
          <Cabecera />
          <MainContainer>
            <BarraLateral />
            <Banner
              texto={"La galería más completa de fotos del espacio"}
              backgroundImage="/src/assets/banner.png" />
          </MainContainer>
        </AppContainer>
      </FondoGradiente>
    </>
  );
}

export default App;
