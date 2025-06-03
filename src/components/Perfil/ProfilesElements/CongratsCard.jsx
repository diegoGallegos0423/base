import React from "react";
import { Download } from "lucide-react";

const FelicitacionCard = ({
  icono = "A",
  iconColor = "#8a1744",
  iconBg = "#fff",
  iconBorder = "#8a1744",
  titulo = "¡FELICIDADES ERES CANDIDATO VIABLE PARA APLICAR!",
  descripcionCorta = "Convocatoria del Proceso de Admisión en Educación Media Superior, Ciclo Escolar 2025-2026.",
  descripcionLarga = "Convocatorias para la selección de aspirantes a funciones docentes y técnico docentes en niveles como bachillerato y otros equivalentes.",
  onDescargar,
  onAplicar,
  aplicarLabel = "APLICAR"
}) => (
  <div
    className="card shadow-sm"
    style={{
      borderRadius: 24,
      background: "#fff",
      border: "none",
      minHeight: 180,
      maxWidth: 400
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
        ¡FELICIDADES ERES CANDIDATO VIABLE PARA{" "}
        <span style={{ fontWeight: 900 }}>APLICAR!</span>
      </span>
    </div>
    
    <div className="px-4 pb-4 pt-2">
      <div className="row align-items-center">
        
        <div className="col-12 col-md-4 d-flex flex-column align-items-center justify-content-center order-1 mb-3 mb-md-0">
          <span
            className="d-flex align-items-center justify-content-center rounded-circle"
            style={{
              width: 70,
              height: 70,
              border: `2px solid ${iconBorder}`,
              color: iconColor,
              fontWeight: "bold",
              fontSize: 38,
              background: iconBg,
              marginBottom: 8
            }}
          >
            {icono}
          </span>
        </div>
       
        <div className="col-12 col-md-8 order-2">
          <div className="fw-bold mb-1" style={{ fontSize: 16 }}>
            Descripción:
          </div>
          <div className="mb-1" style={{ fontWeight: 700, fontSize: 14 }}>
            {descripcionCorta}
          </div>
          <div className="mb-2" style={{ color: "#6a003a", fontSize: 13 }}>
            {descripcionLarga}
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
              onClick={onDescargar}
              title="Descargar"
            >
              <Download size={20} />
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
              onClick={onAplicar}
            >
              {aplicarLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FelicitacionCard;