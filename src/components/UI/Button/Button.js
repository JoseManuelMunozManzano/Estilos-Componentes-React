// CSS Modules
// https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/
// Es una característica que esta disponible solo en proyectos que están configurados para soportarlos porque
// necesitan una transformación de código que necesita realizarse antes de que el código se ejecute en el navegador.
// Lo bueno es que los proyectos de React creados con create-react-app ya están configurados para admitir Módulos CSS.

// Cambia la forma de importar el CSS. Ahora se importa a un nombre
// Y el nombre del fichero .css también cambia. Antes de la extensión .css hay que añadir .module
// Esto es para que el proceso de compilación subyacente transforme el código para que CSS Modules funcione.
import styles from './Button.module.css';

// Ahora las clases son dinámicas usando el nombre styles, un objeto, y se pueden usar todas las clases
// definidas en el fichero .css como properties.
// Si vamos al inspector de propiedades de Chrome, veremos que crea un nombre de clase único.
//
// Para cada componente el nombre de clase será único con lo que se asegura que el scope de un fichero .css ahora si
// sera el del componente que lo importe.
//
// La clase generada se compone de: Componente_propertie__claveHash
// Por ejemplo: Button_button__2lgkF
const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
