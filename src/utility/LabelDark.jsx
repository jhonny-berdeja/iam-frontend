import React from 'react';

const LabelDark = ({ text }) => {
  return (
    <div
      className="text-bg-dark"
      style={{
        borderRadius: '8px', // Bordes redondeados
        padding: '16px', // Espaciado interno
        display: 'inline-block', // Ajusta el tamaño del cuadro al contenido
        marginBottom: '1%', // Espaciado inferior
      }}
    >
      <h1
        style={{
          color: 'white', // Color del texto
          margin: 0, // Elimina el margen por defecto del encabezado
          textAlign: 'center', // Texto centrado
        }}
      >
        {text} {/* Usamos el texto pasado como prop */}
      </h1>
    </div>
  );
};

export default LabelDark;
