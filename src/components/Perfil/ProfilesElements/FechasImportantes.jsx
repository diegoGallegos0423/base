import React from 'react';
import { Calendar } from 'lucide-react';

const FechasImportantesCard = ({
  titulo = "FECHAS IMPORTANTES",
  subtitulo = "EMS",
  iconColor = "text-primary",
  eventos = []
}) => (
  <div className="card h-100 shadow-sm d-flex flex-column align-items-center justify-content-center" style={{ borderRadius: 24, background: '#fff' }}>
    <div className="card-body text-center">
      <Calendar size={48} className={`mb-3 ${iconColor}`} />
      <div className="fw-bold mb-2">{titulo}</div>
      <div className="bg-primary text-white rounded-3 py-2 px-3 mb-2" style={{ fontWeight: 600, fontSize: 18 }}>{subtitulo}</div>
      {eventos.length > 0 && (
        <ul className="list-unstyled small mb-0">
          {eventos.map((evento, idx) => (
            <li key={idx} className="mb-1">
              <span className="fw-bold">{evento.fecha}:</span> {evento.descripcion}
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

export default FechasImportantesCard;
