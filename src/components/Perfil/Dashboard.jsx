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
          <div className="col-md-2 mb-4">
            <ProfileSidebar
              nombre="Gerardo Miranda Ortiz"
              rol="MAESTRO"
              nivel="EDUCACIÓN MEDIA SUPERIOR"
            />
          </div>
          {/* Main Content */}
          <div className="col-md-9">
            <div className="row gx-4 gy-3">
              {/* Felicidades Card */}
              <div className="col-lg-5">
                <div
                  className="card shadow-sm"
                  style={{
                    borderRadius: 24,
                    background: "#e6e1db",
                    border: "none",
                    minHeight: 240
                  }}
                >
                  {/* Header */}
                  <div
                    className="fw-bold d-flex align-items-center justify-content-between px-4 pt-3 pb-2"
                    style={{
                      fontSize: 18,
                      letterSpacing: 1,
                      background: "#e6e1db",
                      borderRadius: "24px 24px 0 0"
                    }}
                  >
                    <span>
                      ¡FELICIDADES ERES CANDIDATO VIABLE PARA <span style={{ fontWeight: 900 }}>APLICAR!</span>
                    </span>
                    <span
                      className="d-inline-flex align-items-center justify-content-center"
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        border: "1.5px solid #6a003a",
                        color: "#6a003a",
                        fontWeight: "bold",
                        fontSize: 16
                      }}
                    >i</span>
                  </div>
                  {/* Body */}
                  <div className="px-4 pb-4 pt-2">
                    <div className="row align-items-center">
                      {/* Icono A */}
                      <div className="col-auto d-flex flex-column align-items-center justify-content-center">
                        <span
                          className="d-flex align-items-center justify-content-center rounded-circle"
                          style={{
                            width: 70,
                            height: 70,
                            border: "2px solid #6a003a",
                            color: "#6a003a",
                            fontWeight: "bold",
                            fontSize: 38,
                            background: "#fff"
                          }}
                        >
                          A
                        </span>
                      </div>
                      {/* Descripción */}
                      <div className="col ps-0">
                        <div className="fw-bold mb-1" style={{ fontSize: 16 }}>
                          Descripción:
                        </div>
                        <div className="mb-1" style={{ fontWeight: 700, fontSize: 14 }}>
                          Convocatoria del Proceso de Admisión en Educación Media Superior, Ciclo Escolar 2025-2026.
                        </div>
                        <div className="mb-2" style={{ color: "#6a003a", fontSize: 13 }}>
                          Convocatorias para la selección de aspirantes a funciones docentes y técnico docentes en niveles como bachillerato y otros equivalentes.
                        </div>
                        <div className="d-flex align-items-center gap-2 mt-2">
                          <button
                            className="btn btn-link px-0"
                            style={{
                              color: "#6a003a",
                              fontWeight: 500,
                              fontSize: 13,
                              textDecoration: "none"
                            }}
                          >
                            <i className="fa fa-download me-1" /> DESCARGAR
                          </button>
                          <button
                            className="btn btn-outline-warning"
                            style={{
                              borderColor: "#a88b4a",
                              color: "#3d2332",
                              fontWeight: 700,
                              borderWidth: 2,
                              borderRadius: 20,
                              padding: "4px 24px"
                            }}
                          >
                            APLICAR
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Catálogo y Guía */}
              <div className="col-lg-4 d-flex flex-column gap-1">
                <CatalogoCard
                />
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
            {/* Stepper de avance */}
            <div className="row mt-4">
              <div className="col-12">
                <div className="card shadow-sm" style={{ borderRadius: 24, background: "#ede7e3" }}>
                  <div className="d-flex align-items-center p-3" style={{ minHeight: 120 }}>
                    {/* Avance */}
                    <div className="d-flex flex-column align-items-center justify-content-center" style={{ minWidth: 110 }}>
                      <div className="bg-warning text-white fw-bold text-center py-2 px-3 rounded" style={{ width: 80, borderRadius: 8, background: "#a88b4a" }}>
                        <div style={{ fontSize: 20 }}>20%</div>
                        <div style={{ fontSize: 10 }}>Avance actual</div>
                      </div>
                      <div className="mt-3">
                        <span className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: 48, height: 48, background: "#6a003a", color: "#fff", fontWeight: "bold", fontSize: 28 }}>A</span>
                      </div>
                    </div>
                    {/* Mensaje y pasos */}
                    <div className="ms-4 flex-grow-1">
                      <div className="fw-bold" style={{ fontSize: 18 }}>¡Buen trabajo Gerardo sigue así!</div>
                      <div className="d-flex align-items-center mt-3">
                        {[
                          { label: "Información", checked: true },
                          { label: "Documentos", checked: true },
                          { label: "Cursos", checked: false, active: true },
                          { label: "Multifactoriales" },
                          { label: "Evaluación" },
                          { label: "Requisitos" },
                          { label: "Antigüedad" },
                          { label: "Carrera" },
                          { label: "Acta" }
                        ].map((step, idx, arr) => (
                          <React.Fragment key={step.label}>
                            <div className="d-flex flex-column align-items-center" style={{ minWidth: 70 }}>
                              <div
                                className={
                                  "d-flex align-items-center justify-content-center rounded-circle"
                                  + (step.checked ? " bg-primary" : step.active ? "" : " bg-light")
                                }
                                style={{
                                  width: 36,
                                  height: 36,
                                  border: step.active ? "3px solid #6a003a" : "none",
                                  color: step.checked ? "#fff" : step.active ? "#6a003a" : "#bdbdbd",
                                  fontWeight: "bold",
                                  fontSize: 18,
                                  background: step.active ? "#fff" : undefined
                                }}
                              >
                                {step.checked ? (
                                  <Check size={20} />
                                ) : (
                                  idx + 1
                                )}
                              </div>
                              <div className="small text-center mt-1" style={{ color: "#6a003a", fontSize: 12 }}>{step.label}</div>
                            </div>
                            {idx < arr.length - 1 && (
                              <div style={{ flex: 1, height: 2, background: "#e0ddd9", margin: "0 2px" }} />
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
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