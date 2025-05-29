import React from 'react'

export default function dashboar() {
  return (
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

    );
}
