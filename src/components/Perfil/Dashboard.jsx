import { Navbar } from '../navbar';
import ProfileSidebar from './ProfilesElements/ProfileSidebar';
import FechasImportantesCard from './ProfilesElements/FechasImportantes';
import CatalogoCard from './ProfilesElements/CatalogoCard';
import ProgressSection from './ProfilesElements/ProgressBar';
import ProgressStepper from './ProfilesElements/ProgressStepper';
import FelicitacionCard from './ProfilesElements/CongratsCard';




const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="row mb-4" style={{ position: "relative", zIndex: 1 }}>
        {/* Sidebar */}

        <div className="col-md-2 mb-4">
          <ProfileSidebar/>
        </div>
       
        <div className="col-md-10 mb-4">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <FelicitacionCard />
                </div>
                <div className="col-md-6 mb-3">
                  <CatalogoCard />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <ProgressSection />
                </div>
              </div>
            </div>
            <div className="col-lg-4 d-flex align-items-start">
              <FechasImportantesCard />
            </div>
          </div>
          <div>
            <ProgressStepper />
          </div>
        </div>
      </div>
    </>   
  ); 
};

export default Dashboard;