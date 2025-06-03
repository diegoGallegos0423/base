import React from "react";

const procesosDefault = [
  {
    nombre: "ADMISIÓN",
    color: "#8a1744",
    dias: 90,
    progreso: 60 
  },
  {
    nombre: "PROMOCIÓN",
    color: "#a88b4a",
    dias: 60,
    progreso: 40
  },
  {
    nombre: "RECONOCIMIENTO",
    color: "#e7d28d",
    dias: 26,
    progreso: 50
  }
];

const meses = ["NOV", "DIC", "ENE", "FEB", "MAR", "ABR"];

const ProcesosAvanceCard = ({ procesos = procesosDefault }) => (
  <div
    className="card shadow-sm mb-4"
    style={{
      borderRadius: 20,
      background: "#ede7e3",
      border: "none",
      minWidth: 260,
      maxWidth: 400
    }}
  >
    <div className="d-flex align-items-center justify-content-between px-3 pt-3 pb-1">
      <div className="fw-bold" style={{ fontSize: 18, letterSpacing: 1 }}>
        AVANCE DE LOS PROCESOS
      </div>

    </div>
    <div className="px-3 pb-3 pt-2">
      <div className="d-flex justify-content-between mb-1" style={{ fontSize: 13, fontWeight: 600 }}>
        <span>INICIO</span>
        <span>CIERRE</span>
        <span style={{ color: "#3d2332" }}>FALTAN</span>
      </div>
      {procesos.map((proceso, idx) => (
        <div key={proceso.nombre} className="mb-2">
          <div className="fw-bold" style={{ color: proceso.color, fontSize: 14 }}>
            {proceso.nombre}
          </div>
          <div className="d-flex align-items-center">
            {/* Meses */}
            <div className="d-flex flex-row align-items-center flex-grow-1" style={{ minWidth: 0 }}>
              {meses.map((mes, i) => (
                <span
                  key={mes}
                  style={{
                    fontSize: 11,
                    color: "#bdbdbd",
                    minWidth: 28,
                    textAlign: "center"
                  }}
                >
                  {mes}
                </span>
              ))}
            </div>
            
            <div className="ms-2" style={{ minWidth: 40, textAlign: "right" }}>
              <span className="fw-bold" style={{ fontSize: 20, color: "#3d2332" }}>{proceso.dias}</span>
              <span style={{ fontSize: 11, color: "#bdbdbd", display: "block", lineHeight: 1 }}>días</span>
            </div>
          </div>
          
          <div className="position-relative" style={{ height: 8, background: "#e0ddd9", borderRadius: 4, marginTop: 2, marginBottom: 8 }}>
            <div
              style={{
                width: `${proceso.progreso}%`,
                height: 8,
                background: proceso.color,
                borderRadius: 4,
                position: "absolute",
                left: 0,
                top: 0,
                transition: "width 0.5s"
              }}
            />
            {/* Puntero circular */}
            <div
              style={{
                position: "absolute",
                left: `calc(${proceso.progreso}% - 8px)`,
                top: -4,
                width: 16,
                height: 16,
                background: proceso.color,
                borderRadius: "50%",
                border: "2px solid #fff",
                boxShadow: "0 1px 4px rgba(0,0,0,0.08)"
              }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ProcesosAvanceCard;