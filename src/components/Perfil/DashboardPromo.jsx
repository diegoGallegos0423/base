import React from 'react'
import Navbar from '../navbar/navbar';
import ProfileSidebar from '../Perfil/ProfilesElements/ProfileSidebar';

export default function DashboardPromo() {
  return (
    <>
     <Navbar />

        <div className="col-md-2 mb-4">
            <ProfileSidebar
              nombre="Gerardo Miranda Ortiz"
              rol="MAESTRO"
              nivel="EDUCACIÓN MEDIA SUPERIOR"
            />
        </div>

    </>
  )
}
