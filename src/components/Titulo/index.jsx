import styled from "styled-components";

const Titulo = styled.h2`
    font-size: 32px;
    color: #7B78E5;
    text-align: ${props => props.$align ? props.$align : 'left'};
    font-weight: 700;
    line-height: 40px;
`

export default Titulo;