import React from 'react';

const IAMIcon = () => {
  return (
    <div
      style={{
        display: 'inline-flex', // Para ajustar el tamaño al contenido
        alignItems: 'center', // Centra el contenido verticalmente
        justifyContent: 'center', // Centra el contenido horizontalmente
        border: '1px solid white', // Borde blanco
        borderRadius: '8px', // Puntas redondeadas
        backgroundColor: 'transparent', // Fondo transparente
        padding: '8px', // Espaciado interno
        marginRight: '1%',
      }}
      onClick={() => window.location.reload()}
    >
      <i
        className="fab fa-500px"
        style={{
          marginRight: '8px', // Margen a la derecha del ícono
          color: 'white', // Color del ícono
        }}
      ></i>
      <i
        className='fas'
        style={{
          color: 'white', // Color del texto
          fontSize: '16px', // Tamaño del texto
        }}
      >
        IAM
      </i>
    </div>
  );
};

export default IAMIcon;
