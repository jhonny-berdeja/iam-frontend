import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput
}
from 'mdb-react-ui-kit';
 import Process from './Process'; 

const EmployeeEntry= () => {
  const [onCreate, setOnCreate] = useState(false);

  const handleCreateClick = () => {
    setOnCreate(true);
  };

  return (
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12' start>
          <MDBCard className='bg-dark text-white my-5 mx-auto align-items-center' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
              <h2 className="fw-bold mb-2 text-uppercase">Ingreso de empleado</h2>

              <MDBInput
                wrapperClass='mb-4 mx-5 w-100'
                labelClass='text-white'
                label='Name'
                id='formControlLg'
                type='text'
                size="lg"
                defaultValue="Jhonny"
                style={{ color: 'white' }}
              />

              <MDBInput
                wrapperClass='mb-4 mx-5 w-100'
                labelClass='text-white'
                label='Lastname'
                id='formControlLg'
                type='text'
                size="lg"
                defaultValue="Berdeja"
                style={{ color: 'white' }}
              />
              <MDBInput
                wrapperClass='mb-4 mx-5 w-100'
                labelClass='text-white'
                label='Position'
                id='formControlLg'
                type='text'
                size="lg"
                defaultValue="Developer"
                style={{ color: 'white' }}
              />
              <MDBInput
                wrapperClass='mb-4 mx-5 w-100'
                labelClass='text-white'
                label='Department'
                id='formControlLg'
                type='text'
                size="lg"
                defaultValue="Computer security"
                style={{ color: 'white' }}
              />

              <MDBInput
                wrapperClass='mb-4 mx-5 w-100'
                labelClass='text-white'
                label='Main task'
                id='formControlLg'
                type='text'
                size="lg"
                defaultValue="Automation of repetitive processes"
                style={{ color: 'white' }}
              />
              <MDBBtn
                outline
                className='mx-2 px-5'
                color='white'
                size='lg'
                onClick={handleCreateClick}
              >
                Create
              </MDBBtn>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>
        <MDBCol col='12' start>
   
             <div class="card my-5 mx-auto">
                <Process onCreate={onCreate} />
            </div> 
         
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default EmployeeEntry;
