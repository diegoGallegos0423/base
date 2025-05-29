import React, { useState } from 'react';
import { User, BookOpen, Calendar, FileText, Award, Bell, Search, Menu, Check, Circle } from 'lucide-react';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('inicio');

  const progressData = [
    { label: 'INFORMACIÓN', value: 90, color: 'text-pink-600' },
    { label: 'DOCUMENTACIÓN', value: 80, color: 'text-pink-600' },
    { label: 'PROFESIONALIZACIÓN', value: 50, color: 'text-pink-600' },
    { label: 'EVALUACIÓN', value: 70, color: 'text-pink-600' }
  ];

  const processSteps = [
    { id: 1, name: 'Información', completed: true, active: false },
    { id: 2, name: 'Documentos', completed: true, active: false },
    { id: 3, name: 'Cursos', completed: false, active: true },
    { id: 4, name: 'Multifactoriales', completed: false, active: false },
    { id: 5, name: 'Evaluación', completed: false, active: false },
    { id: 6, name: 'Requisitos', completed: false, active: false },
    { id: 7, name: 'Antigüedad', completed: false, active: false },
    { id: 8, name: 'Carrera', completed: false, active: false },
    { id: 9, name: 'Acta', completed: false, active: false }
  ];

  const CircularProgress = ({ value, size = 80 }) => {
    const radius = (size - 12) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (value / 100) * circumference;

    return (
      <div className="relative inline-flex items-center justify-center">
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#f3f4f6"
            strokeWidth="6"
            fill="none"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#be185d"
            strokeWidth="6"
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-300 ease-in-out"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-lg font-bold text-pink-600">{value}%</span>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-700 via-pink-600 to-pink-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-pink-800 to-pink-700 shadow-lg">
        <div className="w-full px-6">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-4">
                <div className="bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Educación
                </div>
                <span className="text-white font-bold text-lg">A-EMS</span>
              </div>
              <div className="bg-yellow-600 text-white px-4 py-2 rounded font-bold">
                USICAMM
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <span className="text-white">Trámites</span>
              <span className="text-white">Gobierno</span>
              <select className="bg-white/10 text-white rounded-lg px-4 py-2 border border-white/20">
                <option>Inicio</option>
              </select>
              <button className="text-white hover:text-pink-200">
                <Search size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="w-full px-6 py-6">
        <div className="flex gap-6">
          {/* Left Sidebar */}
          <div className="w-64 flex-shrink-0">
            {/* Profile Card */}
            <div className="bg-white rounded-2xl p-4 shadow-xl mb-4">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gray-900 rounded-full mx-auto mb-3"></div>
                <p className="text-xs text-gray-500 font-medium">MAESTRO</p>
                <h3 className="font-bold text-gray-900 text-sm">Gerardo Miranda Ortiz</h3>
                <p className="text-xs text-gray-600">EDUCACIÓN MEDIA SUPERIOR</p>
              </div>
              
              <div className="text-xs text-gray-500 mb-2">MEDALLAS</div>
              <div className="flex justify-center space-x-1 mb-4">
                <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                  <Award size={12} className="text-white" />
                </div>
                <div className="w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center">
                  <Award size={12} className="text-white" />
                </div>
                <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                  <Check size={12} className="text-white" />
                </div>
              </div>
            </div>

            {/* Navigation Menu */}
            <div className="bg-white rounded-2xl p-4 shadow-xl">
              <h4 className="font-bold text-gray-800 text-sm mb-3">Trayectoria</h4>
              <ul className="space-y-1 text-xs text-gray-600 mb-4">
                <li>1. Información básica</li>
                <li>2. Documentos</li>
                <li>3. Cursos</li>
                <li>4. Fecha de Nacimiento</li>
                <li>5. Lugar de Nacimiento</li>
                <li>6. Género</li>
              </ul>

              <h4 className="font-bold text-gray-800 text-sm mb-3">Documentos Personales</h4>
              <ul className="space-y-1 text-xs text-gray-600 mb-4">
                <li>1. Cédula</li>
                <li>2. CURP</li>
                <li>3. Constancia de Estudios</li>
                <li>4. Certificados</li>
              </ul>

              <h4 className="font-bold text-gray-800 text-sm mb-3">Documentación Normativa</h4>
              <ul className="space-y-1 text-xs text-gray-600 mb-4">
                <li>1. Formatos</li>
                <li>2. Convocatorias</li>
              </ul>

              <h4 className="font-bold text-gray-800 text-sm mb-3">Expediente del Sistema</h4>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Top Row Cards */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {/* Application Status */}
              <div className="bg-white rounded-2xl p-4 shadow-xl">
                <div className="mb-3">
                  <h3 className="font-bold text-gray-800 text-sm mb-2">
                    ¡FELICIDADES ERES CANDIDATO VIABLE PARA APLICAR!
                  </h3>
                  <p className="text-xs text-gray-600 mb-2">
                    Convocatoria del Proceso de Admisión en Educación Media Superior, Ciclo Escolar 2025-2026
                  </p>
                  <p className="text-xs text-gray-600 mb-3">
                    Convocatoria para la selección de aspirantes a funciones docentes y técnico docentes en planteles federales como Bachillerato y otros equivalentes.
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                    <span className="text-pink-600 font-bold text-lg">A</span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="text-xs text-gray-500 hover:text-gray-700 underline">DESCARGAR</button>
                    <button className="bg-pink-600 text-white px-4 py-1 rounded-full text-xs font-medium hover:bg-pink-700 transition-colors">
                      APLICAR
                    </button>
                  </div>
                </div>
              </div>

              {/* Catalog */}
              <div className="bg-white rounded-2xl p-4 shadow-xl">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-800 text-sm">CATÁLOGO</h3>
                </div>
                <div className="mb-4">
                  <div className="w-full h-16 bg-gradient-to-r from-pink-200 to-pink-300 rounded-lg flex items-center justify-center">
                    <BookOpen size={24} className="text-pink-600" />
                  </div>
                </div>
                <ul className="space-y-2 text-xs">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                    <span>La Nueva Escuela Mexicana</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    <span>Marco para la excelencia</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span>Exploración de habilidades</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-300 rounded-full"></div>
                    <span>Dominio de tecnologías educativas</span>
                  </li>
                </ul>
              </div>

              
              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-gray-800 text-sm">GUÍA DE ESTUDIOS 2026</h3>
                  </div>
                  <div className="text-xs text-gray-600 space-y-1">
                    <p>La Nueva Escuela Mexicana</p>
                    <p>Marco para la excelencia</p>
                    <p>Exploración de habilidades</p>
                    <p>Dominio de tecnologías educativas</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-pink-600 to-pink-700 rounded-2xl p-4 shadow-xl text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-sm mb-1">FECHAS</h3>
                      <h3 className="font-bold text-sm">IMPORTANTES</h3>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                      <Calendar size={24} className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;