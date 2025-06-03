import { BookOpen } from 'lucide-react';

const items = [
];

const CatalogoCard = ({
  titulo = "CATÁLOGO",
  guia = "GUÍA DE ESTUDIOS 2026",
  
  itemsList = items
}) => (
  <div
    className="d-flex"
    style={{
      borderRadius: 24,
      overflow: "hidden",
      background: "#fff",
      boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
      minHeight: 120,
      minWidth: 340,
      maxWidth: 380,
      aspectRatio: "1 / 1"
    }}
  >

    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{
        background: "#ffff",
        color:'black',
        minWidth: 160,
        padding: 20,
        height: "50%"
      }}
    >
      <div className="fw-bold mb-2" style={{ letterSpacing: 1, fontSize: 18 }}>
        {titulo}
      </div>
      <div
        style={{
          width: 80,
          height: 70,
          background: "#fff",
          borderRadius: 12,
          position: "relative",
          marginBottom: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden"
        }}
      >
        <img
          
          alt="Catálogo"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: 12
          }}
        />
      </div>
    </div>
    {/* Lado derecho */}
    <div className="flex-grow-1 p-3 d-flex flex-column justify-content-center" style={{ background: "#ede7e3", borderRadius: "0 24px 24px 0" }}>
      <div className="d-flex align-items-center justify-content-between mb-2">
        <div className="fw-bold" style={{ fontSize: 16, letterSpacing: 1 }}>{guia}</div>
  
      </div>
      <ul className="list-unstyled mb-0">
        {itemsList.map((item, idx) => (
          <li key={idx} className="d-flex align-items-center mb-2">
            <span
              style={{
                display: "inline-block",
                width: 16,
                height: 16,
                borderRadius: "50%",
                background: item.badge,
                marginRight: 12
              }}
            />
            <div>
              <span className="fw-bold" style={{ color: "#3d2332", fontSize: 15 }}>{item.texto}</span>
              <div style={{ fontSize: 10, color: "#6a003a" }}>curso</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default CatalogoCard;