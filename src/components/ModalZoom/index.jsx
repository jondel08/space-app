import { styled } from 'styled-components';
import Imagen from "../Galeria/Imagen";

const Overlay = styled.div`
   background-color: rgba(0, 0, 0, 0.7);
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
`;

const DialogStyled = styled.dialog`
   position: absolute;
   top: 294px;
   background: transparent;
   padding: 0;
   border: 0;
   width: 1156px;
   form {
      button {
         position: absolute;
         top: 1px;
         right: 110px;
         padding: 10px 20px;
         border: none;
         background-color: transparent;
         border-radius: 5px;
         cursor: pointer;
         color: white;
         font-weight: 600;
      }
   }
`


const ModalZoom = ({ foto, cerrarModal, agregarFavorito }) => {
   if (!foto) return null
   return (
      <>
         <Overlay />
         <DialogStyled open>
            <Imagen foto={foto} expandida={true} agregarFavorito={agregarFavorito} />
            <form method="dialog">
               <button onClick={cerrarModal}>X</button>
            </form>
         </DialogStyled>
      </>
   )
}

export default ModalZoom;