import React, { useRef, useState } from 'react';
import { Award, Check } from 'lucide-react';

const ProfileSidebar = ({
  nombre = "Gerardo Miranda Ortiz",
  rol = "Maestro",
  nivel = "Educacion Media Superior",
  medallas = [
    { icon: <Award size={20} />, color: 'bg-warning' },
    { icon: <Award size={20} />, color: 'bg-danger' },
    { icon: <Check size={20} />, color: 'bg-info' }
  ],
  trayectoria = [
    "Informacion basica",
    "Documentos",
    "CURP",
    "Fecha de Nacimiento",
    "Lugar de Nacimineto"
  ],
  Contacto = [
    "Telefono",
    "Correo",
    "Direccion"
  ],
  DocmentosPersonales = [
    "Titulo",
    "Cedula",
    "Constacia de Estudios",
    "Certificado"
  ],
  DocumentacionNormativa = [
    "Acuerdos",
    "Convocatorias"
  ],
  FuncionesSistema = [
    "Notificaciones",
    "Carga de Documentos para Validacion",
    "Biometricos",
    "Aplicacciones informativas"
  ]
}) => {
  const [foto, setFoto] = useState(null);
  const inputRef = useRef();

  const handleFotoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFoto(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div
      className='card text-center mb-3'
      style={{
        borderRadius: '32PX 0 0 0',
        overflow: 'hidden',
        border: 'none',
        background: '#fff'
      }}
    >
      <div className="card-body p-4 d-flex flex-column align-items-center" style={{ minHeight: 340 }}>
        <div className="mb-3 position-relative">
          <img
            src={foto || "https://ui-avatars.com/api/?name=" + encodeURIComponent(nombre)}
            alt="Foto de perfil"
            style={{
              width: 120,
              height: 120,
              objectFit: 'cover',
              borderRadius: '70%',
              background: '#eee',
              border: '5px solid #6c757d',
              cursor: 'pointer'
            }}
            onClick={() => inputRef.current.click()}
          />
          <input
            type="file"
            accept="image/*"
            ref={inputRef}
            style={{ display: 'none' }}
            onChange={handleFotoChange}
          />
          <div className="small text-muted mt-1" style={{ fontSize: 10 }}>Haz clic para cambiar foto</div>
        </div>
        <div className="fw-bold text-uppercase text-secondary small mb-1">{rol}</div>
        <h5 className="card-title mb-1">{nombre}</h5>
        <div className="text-secondary small mb-2">{nivel}</div>
        <div className="d-flex justify-content-center gap-2 mb-2">
          {medallas.map((m, idx) => (
            <span key={idx} className={`badge ${m.color}`}>{m.icon}</span>
          ))}
        </div>
        <div className="fw-bold small text-secondary">MEDALLAS</div>
      </div>
      <div className="bg-light p-3" style={{ borderTop: '1px solid #eee' }}>
        <div className="fw-bold mb-2">Trayectoria</div>
        <ul className="list-unstyled text-start small mb-0">
          {trayectoria.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <div className='fw-bold mb-2'>Contacto </div>
        <ul className="list-unstyled text-start small mb-0">
          {Contacto.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <div className='fw-bold mb-2'>Documentos Personales </div>
        <ul className="list-unstyled text-start small mb-0">
          {DocmentosPersonales.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <div className='fw-bold mb-2'>Documentacion Normativa </div>
        <ul className="list-unstyled text-start small mb-0">
          {DocumentacionNormativa.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <div className='fw-bold mb-2'>Funciones del Sistema </div>
        <ul className="list-unstyled text-start small mb-0">
          {FuncionesSistema.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileSidebar;


