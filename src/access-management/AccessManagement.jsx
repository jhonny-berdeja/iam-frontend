import React, { useState } from 'react';
import itemsData from '../json-files/access-management-process.json';
import users from '../json-files/users.json';
import apps from '../json-files/applications.json';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput
} from 'mdb-react-ui-kit';
import Process from '../utility/Process';

const AccessManagement = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedApp, setSelectedApp] = useState('');
  const [selectedRole, setSelectedRole] = useState('');
  const [userDetails, setUserDetails] = useState({});
  const [roles, setRoles] = useState([]);
  const [selectedRequestType, setSelectedRequestType] = useState('');
  const [indicator, setIndicator] = useState(false);

  const handleSelectChange = (event) => {
    const selectedUser = event.target.value;
    setSelectedOption(selectedUser);
    setUserDetails(users[selectedUser] || {});
  };

  const handleAppChange = (event) => {
    const selectedAppName = event.target.value;
    setSelectedApp(selectedAppName);
    setRoles(apps[selectedAppName] || []); // Actualiza los roles según la aplicación seleccionada
    setSelectedRole(''); // Resetea el rol seleccionado al cambiar la aplicación
  };

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const handleCreateClick = () => {
    setIndicator(true);
    console.log("Se hizo click en el botón");
    console.log("Usuario seleccionado:", selectedOption);
    console.log("Aplicación seleccionada:", selectedApp);
    console.log("Rol seleccionado:", selectedRole);
  };

  return (
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12' start>
          <MDBCard className='bg-dark text-white my-5 mx-auto align-items-center' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
              <h2 className="fw-bold mb-2 text-uppercase">Gestión de accesos</h2>

              {/* Select dropdown de usuarios */}
              <select
                className="form-select mb-4"
                style={{ width: '100%', padding: '0.5rem', borderRadius: '0.5rem', fontWeight: 'bold' }}
                value={selectedOption}
                onChange={handleSelectChange}
                required
              >
                <option value="" disabled>Seleccione un usuario</option>
                {Object.keys(users).map((email) => (
                  <option key={email} value={email}>
                    {email}
                  </option>
                ))}
              </select>

              {/* Inputs siempre visibles */}
              <MDBInput
                wrapperClass='mb-4 mx-5 w-100'
                labelClass='text-white'
                label='Name'
                id='formControlLg'
                type='text'
                size="lg"
                value={userDetails.name || ''}
                style={{ color: 'white' }}
                className='bg-dark'
                readOnly
                required
              />
              <MDBInput
                wrapperClass='mb-4 mx-5 w-100'
                labelClass='text-white'
                label='Lastname'
                id='formControlLg'
                type='text'
                size="lg"
                value={userDetails.lastname || ''}
                style={{ color: 'white' }}
                className='bg-dark'
                readOnly
                required
              />
              <MDBInput
                wrapperClass='mb-4 mx-5 w-100'
                labelClass='text-white'
                label='Email'
                id='formControlLg'
                type='text'
                size="lg"
                value={userDetails.email || ''}
                style={{ color: 'white' }}
                className='bg-dark'
                readOnly
                required
              />
              <MDBInput
                wrapperClass='mb-4 mx-5 w-100'
                labelClass='text-white'
                label='Red'
                id='formControlLg'
                type='text'
                size="lg"
                value={userDetails.red || ''}
                style={{ color: 'white' }}
                className='bg-dark'
                readOnly
                required
              />

              {/* Select dropdown para aplicaciones */}
              <select
                className="form-select mb-4"
                style={{ width: '100%', padding: '0.5rem', borderRadius: '0.5rem', fontWeight: 'bold' }}
                value={selectedApp}
                onChange={handleAppChange}
                required
              >
                <option value="" disabled>Seleccione una aplicación</option>
                {Object.keys(apps).map((app, index) => (
                  <option key={index} value={app}>
                    {app}
                  </option>
                ))}
              </select>

              {/* Select dropdown para tipo de solicitud */}
              <select
                className="form-select mb-4"
                style={{ width: '100%', padding: '0.5rem', borderRadius: '0.5rem', fontWeight: 'bold' }}
                value={selectedRequestType} // Agregado para mantener el valor seleccionado
                onChange={(e) => setSelectedRequestType(e.target.value)}
                required
              >
                <option value="" disabled>
                  Seleccione tipo de solicitud
                </option>
                <option value="Añadir rol">Añadir rol</option>
                <option value="Eliminar rol">Eliminar rol</option>
              </select>

              {/* Select dropdown para roles */}
              <select
                className="form-select mb-4"
                style={{ width: '100%', padding: '0.5rem', borderRadius: '0.5rem', fontWeight: 'bold' }}
                value={selectedRole}
                onChange={handleRoleChange}
                disabled={!roles.length} // Desactiva si no hay roles disponibles
                required
              >
                <option value="" disabled>Seleccione un rol</option>
                {roles.map((role, index) => (
                  <option key={index} value={role}>
                    {role}
                  </option>
                ))}
              </select>

              <MDBBtn
                outline
                className='mx-2 px-5'
                color='white'
                size='lg'
                onClick={handleCreateClick}
              >
                Solicitar
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol col='12' start>
   
          <div class="card my-5 mx-auto">
              <Process itemsData={itemsData} indicateStartProcess={indicator} />
          </div> 

        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default AccessManagement;
