//#region Imported
import { styled } from 'styled-components';
import Titulo from "../Titulo";
import Tags from "../Galeria/Tags";
import Populares from "../Galeria/Populares";
import Imagen from '../Galeria/Imagen';
//#endregion Imported

//#region Styled
const GaleriaContainer = styled.div`
   display: flex;
   /* padding: 2rem 0;
   gap: 2rem; */
`
const SeccionFluida = styled.section`
  flex-grow: 1;
`

const ImagenesContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
`
//#endregion Styled

const Galeria = ({ fotos = [], seleccionarFoto, agregarFavorito }) => {
   return (
      <>
         <Tags />
         <GaleriaContainer>
            <SeccionFluida>
               <Titulo>Navegue por la Galería</Titulo>
               <ImagenesContainer>
                  {fotos.map(foto => <Imagen key={foto.id}
                     solicitarZoom={seleccionarFoto}
                     foto={foto} agregarFavorito={agregarFavorito} />
                  )}
               </ImagenesContainer>
            </SeccionFluida>
            <Populares />
         </GaleriaContainer>
      </>
   )
}

export default Galeria;