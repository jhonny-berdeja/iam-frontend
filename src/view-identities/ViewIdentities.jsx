import React, { useState } from 'react';
import users from '../json-files/users.json';

const ViewIdentities = () => {
  const [openAccordion, setOpenAccordion] = useState(null); // Estado para controlar el acordeón abierto

  const handleAccordionToggle = (email) => {
    setOpenAccordion(openAccordion === email ? null : email); // Cambia el acordeón abierto
  };

  return (
    <div className="accordion m-5 border-0" id="accordionPanelsStayOpenExample">
      {Object.keys(users).map((email, index) => {
        const user = users[email]; // Obtiene la información del usuario

        return (
          <div className="accordion-item border-0" key={email}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className="accordion-button text-light bg-dark border-0"
                type="button"
                onClick={() => handleAccordionToggle(email)}
                aria-expanded={openAccordion === email}
                aria-controls={`panelsStayOpen-collapse${index}`}
              >
                <div className='row w-100'>
                  <div className='col-3'>{user.name} {user.lastname}</div>
                  <div className='col-3'>{user.email}</div>
                </div>
              </button>
            </h2>
            <div
              id={`panelsStayOpen-collapse${index}`}
              className={`accordion-collapse collapse ${openAccordion === email ? 'show' : ''}`}
              aria-labelledby={`heading${index}`}
            >
              <div className="accordion-body">
                <strong>UUID:</strong> {user.UUID} <br />
                <strong>Position:</strong> {user.position} <br />
                <strong>Department:</strong> {user.department} <br />
                <strong>Main Task:</strong> {user.mainTask} <br />
                <strong>Office:</strong> {user.office}, {user.city}, {user.country} <br />
                <strong>Email:</strong> {user.email} <br />
                <strong>Red:</strong> {user.red} <br />
                
                {/* Mostrar aplicaciones y roles */}
                <div>
                  <strong>Accesos:</strong>
                  <ul>
                    {Object.keys(user.apps).map((app) => (
                      <li key={app}>
                        <strong>{app}</strong>: 
                        <ul>
                          {user.apps[app].map((role, idx) => (
                            <li key={idx}>{role}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ViewIdentities;
