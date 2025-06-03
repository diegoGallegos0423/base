import React, { useEffect, useState } from 'react';
import { Calendar, Info, Handshake } from 'lucide-react';

const FechasImportantesCard = ({
  titulo = "FECHAS IMPORTANTES",
  subtitulo = "EMS",
  eventos: eventosProp = [],
  endpoint // futuro endpoint
}) => {
  const [eventos, setEventos] = useState(eventosProp);

  useEffect(() => {
    if (endpoint) {
      fetch(endpoint)
        .then(res => res.json())
        .then(data => {
          if (Array.isArray(data)) setEventos(data);
        })
        .catch(() => setEventos([]));
    }
  }, [endpoint]);

  return (
    <div
      className="card shadow-sm d-flex flex-column justify-content-between"
      style={{
        borderRadius: 24,
        background: "transparent",
        minHeight: 370,
        maxWidth: 260,
        overflow: "hidden"
      }}
    >
    
      <div
        style={{
          background: "#8a1744",
          borderRadius: "24px 24px 0 0",
          padding: "18px 18px 10px 18px",
          color: "#fff",
          position: "relative"
        }}
      >
        <div className="fw-bold" style={{ fontSize: 17, letterSpacing: 1 }}>
          {titulo}
        </div>
        <Info size={18} style={{ position: "absolute", top: 18, right: 18, color: "#fff" }} />
      </div>
      
      <div style={{ background: "#fff", padding: "18px 10px 18px 10px", minHeight: 200 }}>
        <ul className="list-unstyled mb-0" style={{ position: "relative", marginLeft: 24 }}>
          
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 10,
              bottom: 10,
              width: 3,
              background: "#8a1744",
              borderRadius: 2,
              zIndex: 0
            }}
          />
          {eventos.map((evento, idx) => (
            <li key={idx} className="mb-4 d-flex align-items-start position-relative" style={{ zIndex: 1 }}>
              
              <span
                style={{
                  display: "inline-block",
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  background: "#8a1744",
                  marginRight: 16,
                  marginTop: 2,
                  flexShrink: 0
                }}
              />
              <div>
                <div className="fw-bold" style={{ fontSize: 13, color: "#222" }}>
                  {evento.fecha}
                </div>
                <div style={{ fontSize: 13, color: "#222" }}>
                  {evento.descripcion}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* Footer */}
      <div className="d-flex align-items-center" style={{ background: "#ede7e3", borderRadius: "0 0 24px 24px", minHeight: 48 }}>
        <div className="fw-bold flex-grow-1 text-center" style={{ background: "#8a1744", color: "#fff", borderRadius: "0 0 0 24px", fontSize: 18, padding: "10px 0" }}>
          {subtitulo}
        </div>
        <div className="d-flex align-items-center justify-content-center" style={{ flex: 1 }}>
          <Handshake size={32} color="#8a1744" />
        </div>
      </div>
    </div>
  );
};

export default FechasImportantesCard;
