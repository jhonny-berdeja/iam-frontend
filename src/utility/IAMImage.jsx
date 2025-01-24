import React from 'react';

const IAMImage = () => {
  return (
    <>
    <div
      style={{
        width: '100%', // Ancho completo del contenedor
        maxWidth: '100%', // Asegura que no exceda el ancho del contenedor padre
        height: 'auto',
        borderRadius: '8px', // Redondeo de las esquinas
        border: '2px solid black', // Borde negro de 2 píxeles
        overflow: 'hidden', // Recorta el contenido que exceda los límites
      }}
    >
      <img
        src="https://jhonny-berdeja.github.io/iam-amages/IAM_concepto.svg"
        alt="Concepto de IAM"
        style={{
          width: '100%', // Asegura que la imagen se expanda al 100% del contenedor
          height: 'auto',
          objectFit: 'cover', // Asegura que la imagen se ajuste correctamente al contenedor
        }}
      />
    </div>
    </>
  );
};

export default IAMImage;
