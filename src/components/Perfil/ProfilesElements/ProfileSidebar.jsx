import React, { useEffect, useRef, useState } from 'react';
import { Edit2 } from 'lucide-react';

const ProfileSidebar = ({
  endpoint,
  nombre: nombreProp = "Gerardo Miranda Ortiz",
  puesto: puestoProp = "Servidor Público",
  porcentaje: porcentajeProp = 70,
  foto: fotoProp = "",
  datosPersonales: datosPersonalesProp = [
    { label: "Nombre", value: "Gerardo Miranda Ortiz" },
    { label: "CURP", value: "MIRG850213HDFNRD04" },
    { label: "Teléfono", value: "5512345678" },
    { label: "Correo", value: "gerardo@email.com" },
    { label: "Fecha de nacimiento", value: "13/02/1985" },
    { label: "Entidad", value: "CDMX" }
  ],
  nivelEducativo: nivelEducativoProp = [
    { label: "Dirección o Inspección", value: "Dirección Académica" },
    { label: "Licenciatura", value: "LIDEC" },
    { label: "Grado", value: "Maestría" }
  ],
  experiencia: experienciaProp = [
    { puesto: "Jefe de Docencia", centro: "CBTIS 123", periodo: "2018-2022" },
    { puesto: "Docente", centro: "CBTIS 123", periodo: "2012-2018" }
  ]
}) => {
  const [foto, setFoto] = useState(fotoProp);
  const [nombre, setNombre] = useState(nombreProp);
  const [puesto, setPuesto] = useState(puestoProp);
  const [porcentaje, setPorcentaje] = useState(porcentajeProp);
  const [datosPersonales, setDatosPersonales] = useState(datosPersonalesProp);
  const [nivelEducativo, setNivelEducativo] = useState(nivelEducativoProp);
  const [experiencia, setExperiencia] = useState(experienciaProp);

  const inputRef = useRef();

  useEffect(() => {
    if (endpoint) {
      fetch(endpoint)
        .then(res => res.json())
        .then(data => {
          if (data.foto) setFoto(data.foto);
          if (data.nombre) setNombre(data.nombre);
          if (data.puesto) setPuesto(data.puesto);
          if (typeof data.porcentaje === "number") setPorcentaje(data.porcentaje);
          if (Array.isArray(data.datosPersonales)) setDatosPersonales(data.datosPersonales);
          if (Array.isArray(data.nivelEducativo)) setNivelEducativo(data.nivelEducativo);
          if (Array.isArray(data.experiencia)) setExperiencia(data.experiencia);
        });
    }
  }, [endpoint]);

  const handleFotoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFoto(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div
      className="card p-0 mb-3"
      style={{
        borderRadius: '32px',
        overflow: 'visible', 
        border: 'none',
        background: '#fff',
        minWidth: 220,
        maxWidth: 340,
        position: 'relative',
        zIndex: 2, 
        boxShadow: '0 2px 12px rgba(0,0,0,0.07)'
      }}
    >
      {/* Header */}
      <div
        style={{
          background: "#8a1744",
          padding: "32px 0 16px 0",
          borderRadius: "32px 32px 0 0",
          position: "relative",
          textAlign: "center"
        }}
      >
        <div style={{ position: "absolute", top: 18, right: 24, color: "#fff", fontWeight: 700, fontSize: 16 }}>M01</div>
        <div className="d-flex flex-column align-items-center">
          <div className="position-relative mb-2">
            <img
              src={foto || "https://ui-avatars.com/api/?name=" + encodeURIComponent(nombre)}
              alt="Foto de perfil"
              style={{
                width: 110,
                height: 110,
                objectFit: 'cover',
                borderRadius: '50%',
                border: '5px solid #fff',
                background: '#eee',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
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
          </div>
          <div className="fw-bold text-white" style={{ fontSize: 14, marginBottom: 0 }}>{puesto}</div>
          <div className="fw-bold text-white" style={{ fontSize: 20 }}>{nombre}</div>
        </div>
        {/* Perfil y porcentaje */}
        <div className="d-flex align-items-center justify-content-center gap-2 mt-2">
          <span className="text-white" style={{ fontWeight: 500 }}>Perfil</span>
          <div className="progress" style={{ width: 70, height: 10, background: "#fff3", borderRadius: 8 }}>
            <div
              className="progress-bar"
              role="progressbar"
              style={{
                width: `${porcentaje}%`,
                background: "#fff",
                borderRadius: 8
              }}
              aria-valuenow={porcentaje}
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
          <span className="text-white" style={{ fontWeight: 700, fontSize: 13 }}>{porcentaje}%</span>
          <Edit2 size={16} color="#fff" style={{ marginLeft: 8, cursor: "pointer" }} />
        </div>
      </div>

      {/* Datos Personales */}
      <div className="p-3">
        <div className="card mb-3" style={{ borderRadius: 18, border: "none", background: "#f7f7f7" }}>
          <div className="fw-bold px-3 pt-3 pb-2" style={{ fontSize: 15 }}>
            Datos Personales
          </div>
          <div className="row px-3 pb-3">
            {datosPersonales.map((item, idx) => (
              <div key={idx} className="col-6 mb-2">
                <div className="text-muted" style={{ fontSize: 12 }}>{item.label}</div>
                <div style={{ fontWeight: 600, fontSize: 13 }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Nivel Educativo */}
        <div className="card mb-3" style={{ borderRadius: 18, border: "none", background: "#f7f7f7" }}>
          <div className="fw-bold px-3 pt-3 pb-2" style={{ fontSize: 15 }}>
            Nivel Educativo
          </div>
          <div className="row px-3 pb-3">
            {nivelEducativo.map((item, idx) => (
              <div key={idx} className="col-6 mb-2">
                <div className="text-muted" style={{ fontSize: 12 }}>{item.label}</div>
                <div style={{ fontWeight: 600, fontSize: 13 }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Experiencia Profesional */}
        <div className="card mb-2" style={{ borderRadius: 18, border: "none", background: "#f7f7f7" }}>
          <div className="fw-bold px-3 pt-3 pb-2" style={{ fontSize: 15 }}>
            Experiencia Profesional
          </div>
          <div className="row px-3 pb-3">
            {experiencia.map((item, idx) => (
              <div key={idx} className="col-12 mb-2">
                <div style={{ fontWeight: 600, fontSize: 13 }}>{item.puesto}</div>
                <div className="text-muted" style={{ fontSize: 12 }}>
                  {item.centro} &nbsp;|&nbsp; {item.periodo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;


