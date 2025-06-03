import React from 'react'
import Navbar from '../navbar/navbar';
import ProfileSidebar from '../Perfil/ProfilesElements/ProfileSidebar';
import FechasImportantesCard from './ProfilesElements/FechasImportantes';
import ProgressStepper from './ProfilesElements/ProgressStepper';
import ProgressSection from './ProfilesElements/ProgressBar';
import Convocatoria from './ProfilesElements/Convocatoria';
import FelicitacionCard from './ProfilesElements/CongratsCard';
import ProcesosAvanceCard from './ProfilesElements/Process';
import CatalogoCard from './ProfilesElements/CatalogoCard';

export default function DashboardPromo() {
  return (
    <>
      <Navbar />
     
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "150vh",
          zIndex: -1,
          background: "linear-gradient(to bottom, #a88b4a 0 50%, #fff 50% 100%)"
        }}
      />
      <div className="container-fluid" style={{ position: "relative", zIndex: 1 }}>
        <div className="row">
          {/* Sidebar a la izquierda */}
          <div className="col-md-2 mb-4">
            <ProfileSidebar
              nombre="Gerardo Miranda Ortiz"
              rol="MAESTRO"
              nivel="EDUCACIÓN MEDIA SUPERIOR"
            />
          </div>
          {/* Todo el contenido a la derecha */}
          <div className="col-md-10">
            {/* ProgressStepper arriba */}
            <div className="row mb-3">
              <div className="col-12">
                <ProgressStepper />
              </div>
            </div>
            {/* ProgressSection y FechasImportantesCard */}
            <div className="row">
              <div className="col-md-8 mb-3">
                <ProgressSection />
              </div>
              <div className="col-md-4 mb-3">
                <FechasImportantesCard />
              </div>
            </div>
            {/* Cuadrícula de 4 tarjetas */}
            <div className="row gy-2 gx-2 mt-2">
              <div className="col-md-6">
                <Convocatoria />
              </div>
              <div className="col-md-6">
                <FelicitacionCard />
              </div>
              <div className="col-md-6">
                <ProcesosAvanceCard />
              </div>
              <div className="col-md-6">
                <CatalogoCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
