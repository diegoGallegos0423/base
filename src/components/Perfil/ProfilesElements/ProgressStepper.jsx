import React, { useEffect, useState } from "react";
import { Check } from "lucide-react";

const defaultSteps = [
  { label: "Información", checked: true },
  { label: "Documentos", checked: true },
  { label: "Cursos", checked: false, active: true },
  { label: "Multifactoriales" },
  { label: "Evaluación" },
  { label: "Requisitos" },
  { label: "Antigüedad" },
  { label: "Carrera" },
  { label: "Acta" }
];

const ProgressStepper = ({
  userName = "Gerardo",
  progress = 20,
  stepsList,
  endpoint // <-- futuro endpoint
}) => {
  const [steps, setSteps] = useState(stepsList || defaultSteps);
  const [avance, setAvance] = useState(progress);

  useEffect(() => {
    if (endpoint) {
      fetch(endpoint)
        .then(res => res.json())
        .then(data => {
          // Cuando exista el endpoint
          if (data) {
            if (typeof data.progress === "number") setAvance(data.progress);
            if (Array.isArray(data.steps)) setSteps(data.steps);
            // Si el endpoint solo manda steps completados
            if (!data.progress && Array.isArray(data.steps)) {
              const completed = data.steps.filter(s => s.checked).length;
              setAvance(Math.round((completed / data.steps.length) * 100));
            }
          }
        })
        .catch(() => {
          setSteps(stepsList || defaultSteps);
          setAvance(progress);
        });
    }
  }, [endpoint, stepsList, progress]);

  return (
    <div className="row mt-4">
      <div className="col-12">
        <div className="card shadow-sm" style={{ borderRadius: 24, background: "#ede7e3" }}>
          <div className="d-flex align-items-center p-3" style={{ minHeight: 120 }}>
            {/* Avance */}
            <div className="d-flex flex-column align-items-center justify-content-center" style={{ minWidth: 110 }}>
              <div className="bg-warning text-white fw-bold text-center py-2 px-3 rounded" style={{ width: 80, borderRadius: 8, background: "#a88b4a" }}>
                <div style={{ fontSize: 20 }}>{avance}%</div>
                <div style={{ fontSize: 10 }}>Avance actual</div>
              </div>
              <div className="mt-3">
                <span className="d-flex align-items-center justify-content-center rounded-circle" style={{ width: 48, height: 48, background: "#6a003a", color: "#fff", fontWeight: "bold", fontSize: 28 }}>A</span>
              </div>
            </div>
            {/* Mensaje y pasos */}
            <div className="ms-4 flex-grow-1">
              <div className="fw-bold" style={{ fontSize: 18 }}>¡Buen trabajo {userName} sigue así!</div>
              <div className="d-flex align-items-center mt-3">
                {steps.map((step, idx, arr) => (
                  <React.Fragment key={step.label}>
                    <div className="d-flex flex-column align-items-center" style={{ minWidth: 70 }}>
                      <div
                        className={
                          "d-flex align-items-center justify-content-center rounded-circle"
                          + (step.checked ? " bg-primary" : step.active ? "" : " bg-light")
                        }
                        style={{
                          width: 36,
                          height: 36,
                          border: step.active ? "3px solid #6a003a" : "none",
                          color: step.checked ? "#fff" : step.active ? "#6a003a" : "#bdbdbd",
                          fontWeight: "bold",
                          fontSize: 18,
                          background: step.active ? "#fff" : undefined
                        }}
                      >
                        {step.checked ? (
                          <Check size={20} />
                        ) : (
                          idx + 1
                        )}
                      </div>
                      <div className="small text-center mt-1" style={{ color: "#6a003a", fontSize: 12 }}>{step.label}</div>
                    </div>
                    {idx < arr.length - 1 && (
                      <div style={{ flex: 1, height: 2, background: "#e0ddd9", margin: "0 2px" }} />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressStepper;