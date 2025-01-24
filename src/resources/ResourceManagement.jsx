import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import CreateApplication from './application/CreateApplication';
import ModifyApplication from './application/ModifyApplication';
import RemoveApplication from './application/EliminationApplication';
import ResourceManagementGrid from './ResourceManagementGrid';
import IAMIcon from '../utility/IAMicon';

export default function ResourceManagement() {
  const [openNavColorSecond, setOpenNavColorSecond] = useState(false);
  const [activeComponent, setActiveComponent] = useState(null); // Estado para controlar el componente activo
  const navigate = useNavigate();

  const renderComponent = () => {
    if (activeComponent === null) return <ResourceManagementGrid />;
    switch (activeComponent) {
      case 'create':
        return <CreateApplication />;
      case 'modify':
        return <ModifyApplication />;
      case 'remove':
        return <RemoveApplication />;
      default:
        return null; // Si no hay un componente activo, no mostramos nada
    }
  };

  return (
    <>
      <MDBNavbar expand='lg' dark bgColor='dark'>
        <MDBContainer fluid>
          <IAMIcon/>
          <MDBNavbarBrand onClick={() => navigate('/home')}>Inicio</MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setOpenNavColorSecond(!openNavColorSecond)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse open={openNavColorSecond} navbar id='navbarColor02'>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink
                  onClick={() => setActiveComponent('create')}
                >
                  Creación de recurso
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  onClick={() => setActiveComponent('modify')}
                >
                  Modificación de recurso
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  onClick={() => setActiveComponent('remove')}
                >
                  Eliminación de recurso
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink
                  /* onClick={() => setActiveComponent('remove')} */
                >
                  Visualización de recursos
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      <div>{renderComponent()}</div>
    </>
  );
}
