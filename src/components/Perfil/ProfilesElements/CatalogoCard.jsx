
import { BookOpen } from 'lucide-react';

const CatalogoCard = ({
  titulo = "CATÁLOGO",
  iconColor = "text-primary",
  items = [
    { texto: "La Nueva Escuela Mexicana", badge: "primary" },
    { texto: "Marco para la excelencia", badge: "success" },
    { texto: "Exploración de habilidades", badge: "warning" },
    { texto: "Dominio de tecnologías educativas", badge: "info" }
  ]
}) => (
  <div className="card h-100 shadow-sm" style={{ borderRadius: 24 }}>
    <div className="card-header bg-light border-0 fw-bold">{titulo}</div>
    <div className="card-body text-center">
      <BookOpen size={40} className={`mb-3 ${iconColor}`} />
      <ul className="list-unstyled small mb-0">
        {items.map((item, idx) => (
          <li className="mb-2" key={idx}>
            <span className={`badge bg-${item.badge} me-2`}>&nbsp;</span>
            {item.texto}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default CatalogoCard;