import React, { useState } from 'react';

function Login() {
  const [message, setMessage] = useState('');

  const handleRequest = async () => {
    const url = 'https://iam-backend-85dc.onrender.com/login'; 

    const username = 'user'; 
    const password = 'password'; 
    const auth = 'Basic ' + btoa(username + ':' + password); 

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': auth,
        },
        body: JSON.stringify({}), 
      });

      if (response.ok) {
        console.log('OK: Request exitosa');
        setMessage('Solicitud exitosa');
      } else {
        console.error('Error: Hubo un problema con la solicitud');
        setMessage('Hubo un problema con la solicitud');
      }
    } catch (error) {
      console.error('Error: No se pudo realizar la solicitud', error);
      setMessage('No se pudo realizar la solicitud');
    }
  };

  return (
    <div>
      <h1>Hola JB!</h1>
      <button onClick={handleRequest}>Hacer solicitud POST</button>
      <p>{message}</p>
    </div>
  );
}

export default Login;
