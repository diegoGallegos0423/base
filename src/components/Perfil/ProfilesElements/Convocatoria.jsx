import React from "react";



const Convocatoria = ({
  year = "2025-2026",
 
}) => (
  <div
    className="card shadow-sm"
    style={{
      borderRadius: 20,
      background: "#ede7e3",
      border: "none",
      minHeight: 170,
      minWidth: 260,
      maxWidth: 340
    }}
  >
    <div className="d-flex align-items-center justify-content-between px-3 pt-3 pb-1">
      <div>
        <div className="fw-bold" style={{ fontSize: 18, letterSpacing: 1 }}>
          CONVOCATORIAS
        </div>
        <div style={{ fontSize: 13, fontWeight: 500 }}>
          PARA EDUCACIÓN MEDIA SUPERIOR
        </div>
      </div>
      <div className="d-flex align-items-center gap-2">
        <span style={{ fontWeight: 600, fontSize: 15 }}>{year}</span>
  
      </div>
    </div>
    
  </div>
);

export default Convocatoria;