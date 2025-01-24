import React from 'react';
import LabelDark from '../utility/LabelDark';
import CardDark from '../utility/CardDark';
import NumberCircle from '../utility/NumberCilcle';

function ResourceManagementGrid() {
  return (
    <>
<div style={{ margin: '2%' }}>
  <div className="row">
    <LabelDark text={'Sistema de gestión de recursos'}/>
  </div>
  <div className="row">
    <div className="col">
      <CardDark 
        header={
          <>
              <div class="d-flex justify-content-between">
                  <div >INTRODUCCION</div>
                  <NumberCircle number={1}/>
              </div>
          </>
      } 
        title="Gestión de recursos" 
        text={
          <>
              Dentro de nuestro sistema IAM, contamos con un módulo especializado en la gestión de accesos a los recursos y sistemas de la organización. Para gestionar los accesos de manera efectiva, es fundamental que el sistema IAM tenga conocimiento de los recursos y sistemas con los que interactúan los usuarios dentro de la organización. Este módulo permite al sistema IAM identificar, administrar y controlar estos <b><u><i>recursos</i></u></b>.<br /><br />
              Inicialmente, nos enfocaremos en la gestión de accesos a los <b><u><i>recursos</i></u></b> de <b><u><i>tipo aplicación</i></u></b>. A través de este módulo, se podrán realizar diversas acciones, como la <b><u><i>creación</i></u></b>, <b><u><i>modificación</i></u></b>, <b><u><i>eliminación</i></u></b> y <b><u><i>visualización</i></u></b> de <b><u><i>aplicaciones</i></u></b>, asignando <b><u><i>roles</i></u></b> de acceso específicos a cada una.
          </>
      }
      />
    </div>
    <div className="col">
      <CardDark 
        header={
          <>
              <div class="d-flex justify-content-between">
                  <div >CREACIÓN DE RECURSO</div>
                  <NumberCircle number={2}/>
              </div>
          </>
      } 
        title="Añadir recurso" 
        text={
          <>
              Al añadir un nuevo recurso, estamos indicando al sistema IAM que será posible gestionar los <b><u><i>accesos</i></u></b> asociados a dicho <b><u><i>recurso</i></u></b>. <br /><br />
              Como se mencionó en la introducción, inicialmente nos enfocaremos en la gestión de <b><u><i>recursos</i></u></b> de <b><u><i>tipo aplicación</i></u></b> <br /><br />
              En este contexto, el apartado "Creación" nos permitirá registrar una nueva aplicación dentro del sistema para gestionar sus accesos.
          </>
      }
      />
    </div>
    <div className="col">
      <CardDark 
        header={
          <>
              <div class="d-flex justify-content-between">
                  <div >MODIFICACIÓN DE RECURSO</div>
                  <NumberCircle number={3}/>
              </div>
          </>
      } 
        title="Modificar recurso" 
        text={
          <>
             En este apartado se podrá <b><u><i>modificar</i></u></b> un <b><u><i>recurso</i></u></b> previamente creado. <br /><br />
             Inicialmente, nos enfocaremos exclusivamente en la gestión de <b><u><i>recursos</i></u></b> de <b><u><i>tipo aplicación</i></u></b>, permitiendo ajustar su configuración según las necesidades de la organización. 
          </>
      }
      />
    </div>
    <div className="col">
      <CardDark 
        header={
          <>
              <div class="d-flex justify-content-between">
                  <div >ELIMINACIÓN DE RECURSO</div>
                  <NumberCircle number={4}/>
              </div>
          </>
      } 
        title="Eliminar recurso" 
        text={
          <>
             En este apartado se podrá <b><u><i>eliminar</i></u></b> un <b><u><i>recurso</i></u></b> previamente creado. <br /><br />
             Inicialmente, nos enfocaremos exclusivamente en la eliminación de <b><u><i>recursos</i></u></b> de <b><u><i>tipo aplicación</i></u></b> o de <b><u><i>roles</i></u></b> de la misma. 
          </>
      }
      />
    </div>
    <div className="col">
      <CardDark 
        header={
          <>
              <div class="d-flex justify-content-between">
                  <div >VISUALIZACIÓN DE RECURSOS</div>
                  <NumberCircle number={5}/>
              </div>
          </>
      } 
        title="Visualizar recurso" 
        text={
          <>
             En este apartado se podrá visualizar la lista de recurso previamente creados. <br /><br />
             Inicialmente, nos enfocaremos exclusivamente en la visualización de recursos de tipo aplicación con sus roles asociados. 
          </>
      }
      />
    </div>
  </div>
</div>
    </>
  );
}

export default ResourceManagementGrid;
