import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
} from 'mdb-react-ui-kit';
import HomeGrid from './HomeGrid';
import IAMIcon from '../utility/IAMicon';
import LogOutIcon from '../utility/LogOutIcon';
import EmployeeEntry from '../employee-entry/EmployeeEntry';
import ExitOfEmployee from '../exit-of-employee/ExitOfEmployee';
import AccessManagement from '../access-management/AccessManagement';
import ViewIdentities from '../view-identities/ViewIdentities';

export default function Home() {
  const [activeComponent, setActiveComponent] = useState(null); // Estado para controlar el componente activo

  const renderComponent = () => {
    if (activeComponent === null) return <HomeGrid />;
    switch (activeComponent) {
      case 'employee-entry':
        return <EmployeeEntry />;
      case 'exit-of-employee':
        return <ExitOfEmployee />;
      case 'access-management':
        return <AccessManagement />;
      case 'view-identities':
        return <ViewIdentities />;
      default:
        return null; // Si no hay un componente activo, no mostramos nada
    }
  };

  return (
    <>
      <MDBNavbar expand="lg" dark bgColor="dark">
        <MDBContainer fluid className="d-flex justify-content-between align-items-center">
          {/* Icono del sistema */}
          <div className="d-flex align-items-center">
            <IAMIcon />
          </div>

          {/* Items del menú */}
          <MDBNavbarNav className="d-flex align-items-center">
            <MDBNavbarItem className="mx-2" onClick={() => setActiveComponent('employee-entry')}>
              <MDBNavbarLink aria-current="page">Ingreso de empleado</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className="mx-2" onClick={() => setActiveComponent('exit-of-employee')}>
              <MDBNavbarLink>Baja de empleado</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className="mx-2" onClick={() => setActiveComponent('access-management')}>
              <MDBNavbarLink>Gestión de accesos</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className="mx-2" onClick={() => setActiveComponent('view-identities')}>
              <MDBNavbarLink>Visualizar identidades</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>

          {/* Icono de cierre de sesión */}
          <div className="d-flex align-items-center">
            <LogOutIcon />
          </div>
        </MDBContainer>
      </MDBNavbar>

      {/* Componente activo */}
      <div>{renderComponent()}</div>
    </>
  );
}
