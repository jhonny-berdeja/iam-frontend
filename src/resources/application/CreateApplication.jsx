import React, { useState } from 'react';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBInput
} from 'mdb-react-ui-kit';

function CreateApplication() {
  const [roles, setRoles] = useState([]);
  const maxRoles = 30;

  const addRole = () => {
    if (roles.length < maxRoles) {
      setRoles([...roles, { name: '', description: '' }]);
    } else {
      alert('Maximum of 30 roles reached');
    }
  };

  return (
    <>
      <MDBCard className='bg-dark text-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '400px' }}>
        <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
          <h5 className="fw-bold mb-2 text-uppercase">Create application</h5>

          <MDBInput
            wrapperClass='mb-4 mx-5 w-100'
            labelClass='text-white'
            label='Application name'
            id='formControlLg'
            type='text'
            size="lg"
          />
          <MDBInput
            wrapperClass='mb-4 mx-5 w-100'
            labelClass='text-white'
            label='Application description'
            id='formControlLg'
            type='text'
            size="lg"
          />

          {roles.map((role, index) => (
            <React.Fragment key={index}>
              <h6>{`ROLE ${index + 1}`}</h6>
              <MDBInput
                wrapperClass='mb-4 mx-5 w-100'
                labelClass='text-white'
                label={`Role name ${index + 1}`}
                type='text'
                size="lg"
              />
              <MDBInput
                wrapperClass='mb-4 mx-5 w-100'
                labelClass='text-white'
                label={`Role description ${index + 1}`}
                type='text'
                size="lg"
              />
            </React.Fragment>
          ))}

          <div className="d-flex justify-content-between w-100">
            <MDBBtn outline className='px-2' color='white' size='sm' onClick={addRole}>
              + Role
            </MDBBtn>

            <MDBBtn className='text-dark px-4' color='light' style={{ fontWeight: 'bold' }}>
              Create
            </MDBBtn>
          </div>
        </MDBCardBody>
      </MDBCard>
    </>
  );
}

export default CreateApplication;
