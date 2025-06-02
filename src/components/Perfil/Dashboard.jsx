import React, { useState } from 'react';
import { User, BookOpen, Calendar, Award, Check } from 'lucide-react';
import { Navbar } from '../navbar';
import ProfileSidebar from './ProfilesElements/ProfileSidebar';
import FechasImportantesCard from './ProfilesElements/FechasImportantes';
import CatalogoCard from './ProfilesElements/CatalogoCard';
import ProgressSection from './ProfilesElements/ProgressBar';


const progressData = [
  { label: 'INFORMACIÓN', value: 90, color: '#d72660', desc: 'Verificada' },
  { label: 'DOCUMENTACIÓN', value: 80, color: '#f46036', desc: 'Validada' },
  { label: 'PROFESIONALIZACIÓN', value: 50, color: '#2e294e', desc: 'Completada' },
  { label: 'EVALUACIÓN', value: 70, color: '#1b998b', desc: 'Acreditada' }
];

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div
        className="container-fluid py-4"
        style={{
          background: '#6a003a',
          minHeight: '100vh',
          borderRadius: '32px 0 0 0'
        }}
      >
        <div className="row gx-4">
          {/* Sidebar */}
          <div className="col-md-3 mb-4">
            <ProfileSidebar
              nombre="Gerardo Miranda Ortiz"
              rol="MAESTRO"
              nivel="EDUCACIÓN MEDIA SUPERIOR"
              // Puedes personalizar medallas y trayectoria aquí si lo necesitas
            />
          </div>
          {/* Main Content */}
          <div className="col-md-9">
            <div className="row gx-4 gy-3">
              {/* Felicidades Card */}
              <div className="col-lg-5">
                <div className="card h-100 shadow-sm" style={{ borderRadius: 24 }}>
                  <div className="card-body">
                    <div className="fw-bold text-secondary mb-2" style={{ letterSpacing: 1 }}>¡FELICIDADES! ERES CANDIDATO VIABLE PARA APLICAR</div>
                    <div className="mb-2">
                      <span className="fw-bold">Descripción:</span>
                      <div className="small text-muted">
                        Convocatoria del Proceso de Admisión en Educación Media Superior, Ciclo Escolar 2025-2026.<br />
                        Convocatoria para la selección de aspirantes a funciones docentes y técnico docentes en planteles federales como Bachillerato y otros equivalentes.
                      </div>
                    </div>
                    <div className="d-flex align-items-center mt-3">
                      <span className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: 40, height: 40, fontWeight: 'bold', fontSize: 22 }}>A</span>
                      <div>
                        <button className="btn btn-outline-secondary btn-sm me-2">DESCARGAR</button>
                        <button className="btn btn-primary btn-sm">APLICAR</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Catálogo y Guía */}
              <div className="col-lg-4 d-flex flex-column gap-3">
                <CatalogoCard
                  titulo="CATÁLOGO"
                  items={[
                    { texto: "La Nueva Escuela Mexicana", badge: "primary" },
                    { texto: "Marco para la excelencia", badge: "success" },
                    { texto: "Exploración de habilidades", badge: "warning" },
                    { texto: "Dominio de tecnologías educativas", badge: "info" }
                  ]}
                />
                <div className="card h-100 shadow-sm" style={{ borderRadius: 24 }}>
                  <div className="card-header bg-light border-0 fw-bold">GUÍA DE ESTUDIOS 2026</div>
                  <div className="card-body">
                    <ul className="list-unstyled mb-0 small">
                      <li>La Nueva Escuela Mexicana</li>
                      <li>Marco para la excelencia</li>
                      <li>Exploración de habilidades</li>
                      <li>Dominio de tecnologías educativas</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Fechas Importantes */}
              <div className="col-lg-3">
                
                  <div className="card-body text-center">
                    <FechasImportantesCard
                      titulo="FECHAS IMPORTANTES"
                      subtitulo="EMS"
                      eventos={[
                        { fecha: "10/06/2025", descripcion: "Inicio de registro" },
                        { fecha: "20/06/2025", descripcion: "Cierre de registro" }
                      ]}
                    />
                  </div>
              
              </div>
            </div>
            {/* Progreso */}
            <div className="row mt-4">
              <div className="col-12">
                <div className="card shadow-sm" style={{ borderRadius: 24, background: '#ede7e3' }}>
                  <div className="card-body">
                    <ProgressSection
                      title="DATOS PERSONALES Y PROFESIONALES"
                      subtitle='Acompañe la información de los documentos y actualice su hoja "Perfil Actualizado"'
                      data={progressData}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;