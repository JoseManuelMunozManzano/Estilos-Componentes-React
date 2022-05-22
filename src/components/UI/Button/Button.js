import styled from 'styled-components';

// Aunque los ficheros CSS se importan en ciertos componentes, la realidad es que su scope no es ese. Se podrían
// usar en cualquier componente y esto puede dar lugar a errores si en distintos componentes las clases se acaban
// llamando igual.
// Para evitar esto, hay 2 posibilidades.
// La primera es usar un paquete llamado Styled Components (https://styled-components.com/)
// Es un paquete que ayuda a construir componentes con ciertos estilos ligados a ellos y que solo afectan a esos
// componentes
// Para instalarlo:
// npm install --save styled-components

// Esta sintaxis se llama Tagged Template Literal.
// Es propia de JavaScript, no del paquete ni de React.
// Lo que hace es: button es un método "especial" en este styled object. En vez de los paréntesis se usan los backsticks.
// Se ejecuta como un método detrás de escena, y lo que se pase entre los backsticks se pasa al botón de una manera
// especial.
// Este método, y esto es lo interesante, devuelve un nuevo componente botón con un estilo indicado entre los backsticks
// y con clases generadas con nombres que no se van a repetir en ningún componente.
// Al botón que se devuelve se le pueden seguir aplicando los props, etc. que se pasen desde otro componente.
const Button = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;

export default Button;
