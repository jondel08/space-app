import styled from "styled-components";
import tags from "./tags.json";

const TagsContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 15px;
   padding: 10px;
`

const TagsEstilizado = styled.button`
   cursor: pointer;
   transition: all 0.1s ease-in-out;
   font-weight: 600;
   border-radius: 10%;
   background-color: gray;
   gap: 40px;
   color: #FFFFFF;
   width: 100px;
   display: flex;
   align-items: center;
   justify-content: center ;
   padding: 5px;
   &:hover {
      color: black;
      background-color: #7B78E5;
      border-color: #C98CF1;
   }
`

const TagTitulo = styled.p`
   color: #FFFFFF;
   font-size: 24px;
   margin: 0;
`

const Tags = () => {
   return (
      <>
         <TagsContainer>
            <TagTitulo>Buscar por tags: </TagTitulo>
            {tags.map(tag => <TagsEstilizado key={tag.id}>{tag.titulo}</TagsEstilizado>)}
         </TagsContainer>
      </>
   )
}

export default Tags;