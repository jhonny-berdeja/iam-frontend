import React from 'react';

const TransparentLabel = () => {
  return (
    <div
      style={{
        border: '2px solid black', // Borde negro alrededor
        borderRadius: '8px', // Bordes redondeados
        padding: '16px', // Espaciado interno
        backgroundColor: 'transparent', // Fondo transparente
        display: 'inline-block', // Ajusta el tamaño del cuadro al contenido
        marginBottom: '1%', // Espaciado inferior
      }}
    >
      <h1
        style={{
          color: 'black', // Color del texto
          margin: 0, // Elimina el margen por defecto del encabezado
          textAlign: 'center', // Texto centrado
        }}
      >
        Gráfico conceptual de sistema de gestión de identidades y accesos
      </h1>
    </div>
  );
};

export default TransparentLabel;
