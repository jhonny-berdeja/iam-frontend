import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogOutIcon = () => {
    const navigate = useNavigate();
  return (
    <div
      style={{
        display: 'inline-flex', // Ajusta el tamaño al contenido
        alignItems: 'center', // Centra el contenido verticalmente
        justifyContent: 'center', // Centra el contenido horizontalmente
        border: '1px solid white', // Borde blanco
        borderRadius: '8px', // Puntas redondeadas
        backgroundColor: 'transparent', // Fondo transparente
        padding: '8px', // Espaciado interno
      }}
      onClick={() => navigate('/login')}
    >
      <i
        className="fas fa-power-off"
        style={{
          color: 'white', // Color del ícono
          fontSize: '18px', // Tamaño del ícono
          cursor: 'pointer', // Cambia el cursor al pasar por encima
        }}
      ></i>
    </div>
  );
};

export default LogOutIcon;
