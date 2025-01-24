import React from 'react';
import CardDark from '../utility/CardDark';
import LabelDark from '../utility/LabelDark';
import NumberCircle from '../utility/NumberCilcle';

function HomeGrid() {
  return (
    <div style={{ margin: '2%' }}>
        <div className='row'>
        <LabelDark text="Sistema de gestión de identidades y accesos" />

        </div>
      <div className="row">
        <div className="col">
          <CardDark 
            header={
                <>
                    <div class="d-flex justify-content-between">
                        <div >Ingreso de empleado</div>
                        <NumberCircle number={1}/>
                    </div>
                </>
            } 
            title="Gestión de ingreso de empleado" 
            text={
                <>
                    En este apartado se presenta el formulario mediante el cual se cargan los datos iniciales del empleado, con el fin de solicitar la creación de los accesos necesarios para que pueda acceder a los recursos y sistemas principales y así comenzar a realizar su labor. 
                </>
            }
          />
        </div>
        <div className="col">
            <CardDark 
                header={
                    <>
                        <div class="d-flex justify-content-between">
                            <div >Baja de empleado</div>
                            <NumberCircle number={2}/>
                        </div>
                    </>
                } 
                title="Gestión de baja de empleado" 
                text={
                    <>
                        En este apartado se presenta el formulario mediante el cual se solicita la gestión de baja del empleado, que consiste en eliminar todos los accesos a los recursos y sistemas que tenga, dado que dejará de formar parte de la organización.
                    </>
                }
            />
        </div>
        <div className="col">
            <CardDark 
                header={
                    <>
                        <div class="d-flex justify-content-between">
                            <div >Gestión de accesos</div>
                            <NumberCircle number={3}/>
                        </div>
                    </>
                } 
                title="Gestion de accesos a los recursos y sistemas de la organización" 
                text={
                    <>
                        En este apartado se presenta el formulario mediante el cual se solicita la gestión de accesos a los recursos y/o sistemas. Las solicitudes que se pueden realizar incluyen la creación, modificación y baja de los recursos y/o sistemas a los que el empleado tiene o tendrá acceso para llevar a cabo su labor.
                    </>
                }
            />
        </div>
        <div className="col">
            <CardDark 
                header={
                    <>
                        <div class="d-flex justify-content-between">
                            <div >Visualizar identidades</div>
                            <NumberCircle number={4}/>
                        </div>
                    </>
                } 
                title="Visualizar las identidad de los empleados" 
                text={
                    <>
                        En este apartado se podrá visualizar la identidad de los empleados, la cual es una identidad digital que contiene información relacionada con el empleado. Esta incluye los datos iniciales que se cargaron en el formulario de 'Ingreso de empleado', los accesos actuales a los recursos y sistemas que tiene el empleado, y cualquier otra información relevante asociada a él.
                    </>
                }
            />
        </div>
      </div>
    </div>
  );
}

export default HomeGrid;
