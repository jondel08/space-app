import styled from "styled-components";
import search from "./search.png";

const ContainerEstilizado = styled.div`
  position: relative;
  display: inline-block;
`;

const CampoTextoEstilizado = styled.input`
  height: 56px;
  padding: 12px 16px;
  border-radius: 10px;
  border: 2px solid;
  border-color: #c98cf1;
  background: transparent;
  box-sizing: border-box;
  width: 500px;
  color: #d9d9d9;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
`;

const IconoLupa = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 38px;
  height: 38px;
`;

const CampoTexto = (props) => {
  return (
    <ContainerEstilizado>
      <CampoTextoEstilizado
        type="text"
        placeholder="Busca una foto"
        {...props}
      />
      <IconoLupa src={search} alt="Icono de lupa" />
    </ContainerEstilizado>
  );
};

export default CampoTexto;
