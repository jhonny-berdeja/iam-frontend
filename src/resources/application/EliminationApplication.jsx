import React, { useState, useEffect } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBBtn
} from 'mdb-react-ui-kit';

function RemoveApplication() {
  const [applications, setApplications] = useState([]); // Lista de aplicaciones
  const [selectedValue, setSelectedValue] = useState(""); // Valor seleccionado

  const handleSelectChange = (e) => {
    setSelectedValue(e.target.value);
  };

  const fetchApplications = async () => {
    const data = {
      "applications": [
        { "id": "1", "name": "Application One" },
        { "id": "2", "name": "Application Two" },
        { "id": "3", "name": "Application Three" }
      ]
    };

    // Actualizamos la lista de aplicaciones con los datos recibidos
    setApplications(data.applications || []);
  };

  const handleSave = () => {
    console.log(`Selected application ID: ${selectedValue}`);
    // Aquí puedes agregar la lógica para eliminar o procesar la aplicación seleccionada.
  };

    // Ejecutar fetchApplications al montar el componente
useEffect(() => {
      fetchApplications();
      console.log("Updated select");
}, []);

  return (
    <>
      <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
        <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
          <h5 className="fw-bold mb-2 text-uppercase">Elimitation application</h5>
          <select
            className="form-select text-dark bg-light"
            style={{
              border: '1px solid #ccc',
              borderRadius: '0.25rem',
              padding: '0.5rem',
              fontWeight: 'bold',
              maxWidth: '100%',
              marginTop: '7%'
            }}
            value={selectedValue}
            onChange={handleSelectChange}
          >
            <option value="" disabled>
              Select application
            </option>

            {/* Opciones dinámicas */}
            {applications.map((app, index) => (
              <option key={index} value={app.id}>
                {app.name}
              </option>
            ))}
          </select>

          {/* Mostrar el botón Save si hay un valor seleccionado */}
          {selectedValue && (
            <div className="d-flex justify-content-end w-100" style={{ marginTop: "10%" }}>
              <MDBBtn
                className="text-dark px-4"
                color="light"
                style={{ fontWeight: "bold" }}
                onClick={handleSave}
              >
                Eliminate
              </MDBBtn>
            </div>
          )}
        </MDBCardBody>
      </MDBCard>
    </>
  );
}

export default RemoveApplication;
