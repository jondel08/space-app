//#region Imported
import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Cabecera from "./components/Cabecera";
import BarraLateral from "./components/BarraLateral";
import Banner from "./components/Banner";
import Galeria from "./components/Galeria";
import fotos from "./fotos.json";
import { useState } from "react";
import ModalZoom from "./components/ModalZoom";
//#endregion Imported

//#region Styled
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
  padding: 24px;
`;

const MainContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const ContenidoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
//#endregion Styled

function App() {
  const [fotoGaleria, setFotoGaleria] = useState(fotos);
  const [fotoSeleccionada, setFotoSeleccionada] = useState();

  const agregarFavorito = (foto) => {
    
    if (foto.id === fotoSeleccionada?.id) {
      setFotoSeleccionada({
        ...fotoSeleccionada,
        favorita: !fotoSeleccionada.favorita
      });
      
    }

    setFotoGaleria(fotoGaleria.map((fotoDeGaleria) => {
      return {
        ...fotoDeGaleria,
        favorita: fotoDeGaleria.id === foto.id ? !foto.favorita : fotoDeGaleria.favorita
      };
    }));
  };

  return (
    <>
      <FondoGradiente>
        <GlobalStyles />
        <AppContainer>
          <Cabecera />
          <MainContainer>
            <BarraLateral />
            <ContenidoGaleria>
              <Banner
                texto={"La galería más completa de fotos del espacio"}
                backgroundImage="/src/assets/banner.png" />
              <Galeria seleccionarFoto={foto => setFotoSeleccionada(foto)} fotos={fotoGaleria} agregarFavorito={agregarFavorito} />
            </ContenidoGaleria>
          </MainContainer>
        </AppContainer>
        <ModalZoom foto={fotoSeleccionada} cerrarModal={() => setFotoSeleccionada(null)} agregarFavorito={agregarFavorito} />
      </FondoGradiente>
    </>
  );
}//EndApp

export default App;
