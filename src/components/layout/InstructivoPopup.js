import React from 'react';

const InstructivoPopup = ({ setPopupOpen }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow-lg w-3/4 max-w-md max-h-96 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Instructivo: Tareas Previas a Llamar a Mantenimiento</h2>
        <p>Antes de contactar al servicio técnico, realiza los siguientes pasos para asegurarte de que el problema no pueda resolverse fácilmente:</p>
        <ol className="list-decimal list-inside">
          <li className="mb-2">
            <strong>Verificar la conexión eléctrica</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Asegúrate de que el equipo esté correctamente enchufado.</li>
              <li>Comprueba que el tomacorriente funciona probando con otro dispositivo.</li>
              <li>Revisa si hay cortes de luz en la zona.</li>
            </ul>
          </li>
          <li className="mb-2">
            <strong>Inspeccionar los controles y ajustes</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Confirma que el equipo esté encendido.</li>
              <li>Verifica que el termostato esté ajustado a la temperatura correcta.</li>
              <li>Aire acondicionado: Asegúrate de que esté en modo frío o calor, según la necesidad.</li>
              <li>Heladera/Freezer: Revisa que la perilla de control de temperatura no esté en la posición mínima o apagada.</li>
            </ul>
          </li>
          <li className="mb-2">
            <strong>Examinar el filtro y la ventilación</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Aire acondicionado: Limpia o reemplaza el filtro si está sucio.</li>
              <li>Asegúrate de que no haya obstrucciones en las rejillas de entrada o salida de aire.</li>
              <li>Heladera/Freezer: Verifica que las rejillas traseras no estén bloqueadas.</li>
              <li>Asegúrate de que las puertas cierren correctamente.</li>
            </ul>
          </li>
          <li className="mb-2">
            <strong>Comprobar la formación de hielo</strong>
            <ul className="list-disc list-inside ml-4">
              <li>En heladeras o freezers, revisa si hay acumulación excesiva de hielo en el freezer. Si es el caso, realiza un descongelamiento siguiendo las indicaciones del fabricante.</li>
            </ul>
          </li>
          <li className="mb-2">
            <strong>Revisar ruidos y funcionamiento</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Escucha si el equipo emite algún ruido anormal o no hace ningún sonido.</li>
              <li>Toma nota de cualquier luz de advertencia o código de error en el equipo.</li>
            </ul>
          </li>
          <li className="mb-2">
            <strong>Consultar el manual del usuario</strong>
            <ul className="list-disc list-inside ml-4">
              <li>Busca en el manual del equipo posibles soluciones o pasos específicos para solucionar problemas comunes.</li>
            </ul>
          </li>
        </ol>
        <p>Si después de completar estas tareas el problema persiste, anota todos los síntomas observados (ruidos, luces, errores) y contacta al servicio técnico indicando lo que revisaste previamente. Esto facilitará el diagnóstico y la reparación.</p>
        <button
          className="bg-blue-500 text-white p-2 rounded mt-4"
          onClick={() => setPopupOpen(false)}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default InstructivoPopup;