import React from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';
import HomeGrid from './HomeGrid';
import IAMIcon from '../utility/IAMicon';
import LogOutIcon from '../utility/LogOutIcon';

export default function Home() {
  const navigate = useNavigate();


  return (
    <>
      <MDBNavbar expand='lg' dark bgColor='dark'>
        <MDBContainer fluid>
          <IAMIcon/>
          <MDBNavbarBrand onClick={() => navigate('/home')}>Inicio</MDBNavbarBrand>
          <MDBCollapse navbar id='navbarColor02'>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem className='active'>
                <MDBNavbarLink aria-current='page' href='#'>
                  Gestión de identidades
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem className='active'>
                <MDBNavbarLink aria-current='page' href='#'>
                  Gestión de accesos
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem className='active'>
                <MDBNavbarLink
                  onClick={() => navigate('/access')}
                >
                  Gestión de recursos
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem className='active'>
                <MDBNavbarLink
                  /* onClick={() => navigate('/access')} */
                >
                  Gestión de sistemas
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
          <LogOutIcon/>
        </MDBContainer>
      </MDBNavbar>
      <div>
        <HomeGrid/>
      </div>
    </>
  );
}
