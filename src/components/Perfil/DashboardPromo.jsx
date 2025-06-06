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
     

      <div className="container-fluid" style={{ position: "relative", zIndex: 1 }}>
        <div className="row">
           <div
    className="col-md-3 col-lg-3 col-xl-2 mb-4"
    style={{
      minWidth: 200,
      maxWidth: 340,
      paddingLeft: 0,
      marginLeft: 0,
    }}
  >
          <div className="col-md-2 mb-4">
            <ProfileSidebar
            />
          </div>
      </div>
          <div className="col-md-10">
           
            <div className="row mb-3">
              <div className="col-12">
                <ProgressStepper />
              </div>
            </div>
            
            <div className="row">
              <div className="col-md-8 mb-3">
                <ProgressSection />
              </div>
              <div className="col-md-4 mb-3">
                <FechasImportantesCard />
              </div>
            </div>
            
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
