import React from 'react';

// Componente para un solo círculo de progreso
const ProgressCircle = ({ value, color, label, desc }) => {
  const radius = 34;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="text-center flex-fill" style={{ minWidth: 120 }}>
      <div className="mb-2 fw-bold" style={{ color }}>{label}<br /><span className="small">{desc}</span></div>
      <div className="position-relative d-inline-block mb-2">
        <svg width="80" height="80">
          <circle
            cx="40"
            cy="40"
            r={radius}
            stroke="#e9ecef"
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="40"
            cy="40"
            r={radius}
            stroke={color}
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        <span className="position-absolute top-50 start-50 translate-middle fw-bold" style={{ color }}>{value}%</span>
      </div>
    </div>
  );
};
//Barra de progreso
const ProgressSection = ({
  title = "DATOS PERSONALES Y PROFESIONALES",
  subtitle = 'Acompañe la información de los documentos y actualice su hoja "Perfil Actualizado"',
  data = []
}) => (
  <div className="row mt-4">
    <div className="col-12">
      <div className="card shadow-sm" style={{ borderRadius: 24, background: '#ede7e3' }}>
        <div className="card-body">
          <div className="fw-bold mb-3" style={{ color: '#6a003a' }}>{title}</div>
          <div className="mb-3 text-secondary small">{subtitle}</div>
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-4">
            {data.map((item, idx) => (
              <ProgressCircle
                key={idx}
                value={item.value}
                color={item.color}
                label={item.label}
                desc={item.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProgressSection;
