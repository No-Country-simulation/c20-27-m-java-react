import Busqueda from '../Components/Busqueda';
import styled from "styled-components"
import '@fontsource/inter/600.css';
import Navegacion from '../Components/Navegacion';

const Container = styled.section`
  background-color: #f2efef;
  height: 100%;
  `;

const Titulo = styled.h1`
  margin: 30px auto; 
  width: 198px; 
  height: 27px; 
  font-family: 'Inter', sans-serif; 
  font-size: 18px;
  font-weight: 600; 
  line-height: 27px; 
  text-align: center; 
  display: block; 
`;

  const Flecha = styled.img`
  float: left;
  margin-right: 20px;
  height: 15px;
  margin-left: 125%;
  margin-top: -25px;
  width: 24px;
  height: 24px;
  gap: 0px;
  opacity: 0px;
  `;

const Medicos = () => {
  return (
    <Container>
      
      <Titulo>Todos los doctores
      <Flecha src ="/img/flecha.png" />
      </Titulo>
      <Busqueda/>
      <Navegacion/>
    </Container>
  )
}
export default Medicos
