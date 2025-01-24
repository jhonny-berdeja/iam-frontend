import React from 'react';

const NumberCircle = ({ number }) => {
  return (
    <div
      style={{
        width: '25px', // Ancho del círculo
        height: '25px', // Alto del círculo
        backgroundColor: 'white', // Fondo blanco
        color: 'black', // Color del texto
        borderRadius: '50%', // Hace que el contenedor sea un círculo
        display: 'flex', // Flexbox para centrar contenido
        alignItems: 'center', // Centra el contenido verticalmente
        justifyContent: 'center', // Centra el contenido horizontalmente
        fontWeight: 'bold', // Negrita para el texto
        fontSize: '18px', // Tamaño del texto
        border: '1px solid black', // Opcional: Borde negro para mayor visibilidad
      }}
    >
      {number}
    </div>
  );
};

export default NumberCircle;
