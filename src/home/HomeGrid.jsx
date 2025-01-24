import React from 'react';
import CardDark from '../utility/CardDark';
import IAMImage from '../utility/IAMImage';
import TransparentLabel from '../utility/TransparentLabel';
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
                        <div >IAM</div>
                        <NumberCircle number={1}/>
                    </div>
                </>
            } 
            title="Gestión de Identidades y Accesos" 
            text={
                <>
                    Un sistema IAM (Identity and Access Management), o Gestión de Identidades y Accesos, es un conjunto de políticas, procesos y herramientas que las organizaciones utilizan para gestionar, proteger y controlar las <b><u><i>identidades digitales</i></u></b> de los usuarios, así como los <b><u><i>accesos</i></u></b> a los <b><u><i>recursos</i></u></b> y <b><u><i>sistemas</i></u></b> dentro de la organización. 
                </>
            }
          />
            <CardDark 
                header={
                    <>
                        <div class="d-flex justify-content-between">
                            <div >DI</div>
                            <NumberCircle number={2}/>
                        </div>
                    </>

                }
                title="Identidad digital" 
                text="Una DI (Digital Identity), o identidad digital, es el conjunto de información que identifica y describe a una persona, entidad u objeto dentro de un entorno digital. Es el equivalente virtual de la identidad física de una persona, pero adaptada al mundo online, y puede incluir datos personales, credenciales, permisos y comportamientos asociados a una entidad dentro de un sistema." 
            />
        </div>
        <div className="col">
            <CardDark 
                header={
                    <>
                        <div class="d-flex justify-content-between">
                            <div >R&S</div>
                            <NumberCircle number={3}/>
                        </div>
                    </>
                } 
                title="Recursos y sistemas" 
                text="Los R&S (Resources and systems), o recursos y sistemas, son los elementos dentro de una organización a los que los usuarios necesitan acceder para realizar su trabajo" 
            />
            <CardDark 
                header={
                    <>
                        <div class="d-flex justify-content-between">
                            <div >R&S</div>
                            <NumberCircle number={4}/>
                        </div>
                    </>
                } 
                title="Relación entre recursos y sistemas" 
                text={
                    <>
                        Los recursos son lo que los usuarios quieren o necesitan usar (por ejemplo, un archivo o una aplicación)<br /><br />
                        Los sistemas son los medios que proporcionan acceso y gestionan los recursos (por ejemplo, una aplicación web que da acceso a un archivo almacenado en la nube).<br /><br />
                    </>
                }
            />
        </div>
        <div className="col">
            <CardDark 
                header={
                    <>
                        <div class="d-flex justify-content-between">
                            <div >Rsrc</div>
                            <NumberCircle number={5}/>
                        </div>
                    </>
                } 
                title="Ejemplos de recursos" 
                text={
                    <>
                        Son los activos digitales o físicos que una organización protege y controla mediante políticas de acceso. Algunos ejemplos incluyen:<br /><br />
                        Archivos y datos: Documentos, hojas de cálculo, bases de datos, informes, etc.<br /><br />
                        Aplicaciones: Herramientas empresariales como un CRM, ERP, herramientas de comunicación (Slack, Teams).<br /><br />
                        APIs: Interfaces utilizadas para conectar sistemas y aplicaciones.<br /><br />
                        Infraestructura: Servidores, redes, almacenamiento en la nube.<br /><br />
                        Servicios específicos: Correo electrónico, almacenamiento compartido, entre otros.<br /><br />
                    </>
                }
            />
        </div>
        <div className="col">
            <CardDark 
                header={
                    <>
                        <div class="d-flex justify-content-between">
                            <div >Syst</div>
                            <NumberCircle number={6}/>
                        </div>
                    </>
                } 
                title="Ejemplos de sistemas" 
                text={
                    <>
                        Son las plataformas, aplicaciones, hardware o infraestructuras que gestionan, procesan o permiten el acceso a los recursos. Ejemplos incluyen:<br /><br />
                        Sistemas operativos: Windows, Linux, macOS.<br /><br />
                        Plataformas de aplicaciones: AWS, Google Cloud, Microsoft Azure.<br /><br />
                        Bases de datos: MySQL, PostgreSQL, MongoDB.<br /><br />
                        Redes: Routers, firewalls y VPNs que protegen o habilitan conexiones.<br /><br />
                        Hardware: Dispositivos físicos como computadoras, servidores, impresoras o dispositivos IoT.<br /><br />
                    </>
                }
            />
        </div>
        <div className="col">
            <CardDark 
                header={
                    <>
                        <div class="d-flex justify-content-between">
                            <div >Access</div>
                            <NumberCircle number={6}/>
                        </div>
                    </>
                } 
                title="Accesos" 
                text={
                    <>
                        Los accesos se refieren a la capacidad de un usuario o entidad para interactuar con recursos y sistemas dentro de una organización. En otras palabras, el acceso define qué acciones puede realizar una persona, grupo o servicio en particular dentro de una infraestructura de tecnología
                    </>
                }
            />
            <CardDark 
                header={
                    <>
                        <div class="d-flex justify-content-between">
                            <div >Access</div>
                            <NumberCircle number={7}/>
                        </div>
                    </>
                } 
                title="Ejemplos de accesos" 
                text={
                    <>
                        Acceso a sistemas: Derecho de entrar a sistemas, aplicaciones o plataformas específicas (como un sistema ERP o una red corporativa).<br /><br />
                        Acceso a datos: Permisos para ver, modificar o eliminar datos en bases de datos, archivos o aplicaciones.<br /><br />
                        Acceso a recursos físicos o virtuales: Puede ser el permiso para usar dispositivos, redes, servidores u otros recursos físicos y virtuales dentro de la organización.<br /><br />
                    </>
                }
            />
        </div>
      </div>
      <div className="row">
        <TransparentLabel/>
    </div>

      <div className="row" style={{ justifyContent: 'center', display: 'flex' }}>
        <IAMImage/>
      </div>
    </div>
  );
}

export default HomeGrid;
