import React, { useState } from 'react';
import itemsData from '../json-files/exit-of-employee-process.json';
import users from '../json-files/users.json';
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

const ExitOfEmployee = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [userDetails, setUserDetails] = useState(null);
  const [indicator, setIndicator] = useState(false);

  const handleSelectChange = (event) => {
    const selectedUser = event.target.value;
    setSelectedOption(selectedUser);
    setUserDetails(users[selectedUser] || null);
  };

  const handleCreateClick = () => {
    setIndicator(true);
    console.log("Se hizo click en el botón");
  };

  return (
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12' start>
          <MDBCard className='bg-dark text-white my-5 mx-auto align-items-center' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
              <h2 className="fw-bold mb-2 text-uppercase">Baja de empleado</h2>

              {/* Select dropdown */}
              <select
                className="form-select mb-4"
                style={{ width: '100%', padding: '0.5rem', borderRadius: '0.5rem', fontWeight: 'bold' }}
                value={selectedOption}
                onChange={handleSelectChange}
              >
                <option value="" disabled>Seleccione un usuario</option>
                {Object.keys(users).map((email) => (
                  <option key={email} value={email}>
                    {email}
                  </option>
                ))}
              </select>

              {userDetails && (
                <>
                  <MDBInput
                    wrapperClass='mb-4 mx-5 w-100'
                    labelClass='text-white'
                    label='Name'
                    id='formControlLg'
                    type='text'
                    size="lg"
                    value={userDetails.name}
                    style={{ color: 'white' }}
                    className='bg-dark '
                    readOnly
                  />
                  <MDBInput
                    wrapperClass='mb-4 mx-5 w-100'
                    labelClass='text-white'
                    label='Lastname'
                    id='formControlLg'
                    type='text'
                    size="lg"
                    value={userDetails.lastname}
                    style={{ color: 'white' }}
                    className='bg-dark '
                    readOnly
                  />
                  <MDBInput
                    wrapperClass='mb-4 mx-5 w-100'
                    labelClass='text-white'
                    label='Country'
                    id='formControlLg'
                    type='text'
                    size="lg"
                    value={userDetails.country}
                    style={{ color: 'white' }}
                    className='bg-dark '
                    readOnly
                  />
                  <MDBInput
                    wrapperClass='mb-4 mx-5 w-100'
                    labelClass='text-white'
                    label='City'
                    id='formControlLg'
                    type='text'
                    size="lg"
                    value={userDetails.city}
                    style={{ color: 'white' }}
                    className='bg-dark '
                    readOnly
                  />
                  <MDBInput
                    wrapperClass='mb-4 mx-5 w-100'
                    labelClass='text-white'
                    label='Office'
                    id='formControlLg'
                    type='text'
                    size="lg"
                    value={userDetails.office}
                    style={{ color: 'white' }}
                    className='bg-dark '
                    readOnly
                  />
                  <MDBInput
                    wrapperClass='mb-4 mx-5 w-100'
                    labelClass='text-white'
                    label='Position'
                    id='formControlLg'
                    type='text'
                    size="lg"
                    value={userDetails.position}
                    style={{ color: 'white' }}
                    className='bg-dark '
                    readOnly
                  />
                  <MDBInput
                    wrapperClass='mb-4 mx-5 w-100'
                    labelClass='text-white'
                    label='Department'
                    id='formControlLg'
                    type='text'
                    size="lg"
                    value={userDetails.department}
                    style={{ color: 'white' }}
                    className='bg-dark '
                    readOnly
                  />
                  <MDBInput
                    wrapperClass='mb-4 mx-5 w-100'
                    labelClass='text-white'
                    label='Main task'
                    id='formControlLg'
                    type='text'
                    size="lg"
                    value={userDetails.mainTask}
                    style={{ color: 'white' }}
                    className='bg-dark '
                    readOnly
                  />
                  <MDBInput
                    wrapperClass='mb-4 mx-5 w-100'
                    labelClass='text-white'
                    label='Email'
                    id='formControlLg'
                    type='text'
                    size="lg"
                    value={userDetails.email}
                    style={{ color: 'white' }}
                    className='bg-dark '
                    readOnly
                  />
                  <MDBInput
                    wrapperClass='mb-4 mx-5 w-100'
                    labelClass='text-white'
                    label='Red'
                    id='formControlLg'
                    type='text'
                    size="lg"
                    value={userDetails.red}
                    style={{ color: 'white' }}
                    className='bg-dark '
                    readOnly
                  />
                </>
              )}

              <MDBBtn
                outline
                className='mx-2 px-5'
                color='white'
                size='lg'
                onClick={handleCreateClick}
              >
                Eliminar
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

export default ExitOfEmployee;
