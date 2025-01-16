import styled from "styled-components";
import CampoTexto from "../CampoTexto";

const HeaderEstilizado = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  img {
    max-width: 212px;
    margin-left: 40px;
  }
`;

const Cabecera = () => {
  return (
    <HeaderEstilizado>
      <img src="/img/logo.png" alt="Logo Space App" />
      <CampoTexto />
    </HeaderEstilizado>
  );
};

export default Cabecera;
