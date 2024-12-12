import React, { useState } from "react";
import "../../App.css";

function App() {
    const [pedidos, setPedidos] = useState([]);
    const [accordionOpen, setAccordionOpen] = useState(false);
    const [newPedido, setNewPedido] = useState({
        pedido: "",
        descripcion: "",
        prioridad: "",
    });
    const [formErrors, setFormErrors] = useState({
        pedido: "",
        descripcion: "",
        prioridad: "",
    });
    const [popupOpen, setPopupOpen] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPedido({ ...newPedido, [name]: value });
        setFormErrors({
            ...formErrors,
            [name]: value ? "" : "Este campo es obligatorio",
        });
    };

    const handleAddPedido = () => {
        const { pedido, descripcion, prioridad } = newPedido;
        if (!pedido || !descripcion || !prioridad) {
            setFormErrors({
                pedido: !pedido ? "Este campo es obligatorio" : "",
                descripcion: !descripcion ? "Este campo es obligatorio" : "",
                prioridad: !prioridad ? "Este campo es obligatorio" : "",
            });
            return;
        }
        const fecha = new Date().toLocaleDateString();
        setPedidos([{ ...newPedido, fecha, pendiente: true }, ...pedidos]);
        setNewPedido({ pedido: "", descripcion: "", prioridad: "" });
        setAccordionOpen(false);
    };

    return (
        <div className="App p-4">
            <nav className="flex justify-between items-center p-4 bg-blue-500 text-white">
                <div className="text-lg font-bold">Nombre de la Empresa</div>
                <a href="#" className="text-sm">
                    Cerrar Sesión
                </a>
            </nav>

            <h1 className="text-2xl font-bold mb-4">Gestión de Pedidos</h1>

            <div className="border rounded p-4 mb-4">
                <button
                    className="w-full text-left font-bold flex items-center justify-between"
                    onClick={() => setAccordionOpen(!accordionOpen)}
                >
                    {accordionOpen ? "Cerrar Formulario" : "Agregar Nuevo Pedido"}
                    <span className="bg-blue-200 text-blue-700 rounded-full p-2 ml-2">
                        +
                    </span>
                </button>
                {accordionOpen && (
                    <div className="mt-4">
                        <p>
                            Si el problema es en una heladera, freezer o aire acondicionado,
                            lee el siguiente instructivo:
                        </p>
                        <button
                            className="bg-blue-500 text-white p-2 rounded mt-2"
                            onClick={() => setPopupOpen(true)}
                        >
                            Leer
                        </button>
                        <input
                            type="text"
                            name="pedido"
                            value={newPedido.pedido}
                            onChange={handleInputChange}
                            placeholder="Pedido"
                            className="w-full p-2 mb-2 border rounded mt-4"
                        />
                        {formErrors.pedido && (
                            <p className="text-red-500 text-sm">{formErrors.pedido}</p>
                        )}
                        <textarea
                            name="descripcion"
                            value={newPedido.descripcion}
                            onChange={handleInputChange}
                            placeholder="Descripción"
                            className="w-full p-2 mb-2 border rounded"
                        />
                        {formErrors.descripcion && (
                            <p className="text-red-500 text-sm">{formErrors.descripcion}</p>
                        )}
                        <select
                            name="prioridad"
                            value={newPedido.prioridad}
                            onChange={handleInputChange}
                            className="w-full p-2 mb-2 border rounded"
                        >
                            <option value="" disabled>
                                Elije la prioridad
                            </option>
                            <option value="baja">Baja</option>
                            <option value="media">Media</option>
                            <option value="alta">Alta</option>
                        </select>
                        {formErrors.prioridad && (
                            <p className="text-red-500 text-sm">{formErrors.prioridad}</p>
                        )}
                        <button
                            className="bg-blue-500 text-white p-2 rounded mt-2"
                            onClick={handleAddPedido}
                        >
                            Agregar
                        </button>
                    </div>
                )}
            </div>

            <div className="overflow-y-scroll max-h-96">
                {pedidos.map((pedido, index) => (
                    <div key={index} className="shadow-lg p-4 mb-4 bg-white rounded">
                        <p>
                            <strong>Fecha:</strong> {pedido.fecha}
                        </p>
                        <p>
                            <strong>Pedido:</strong> {pedido.pedido}
                        </p>
                        <p>
                            <strong>Descripción:</strong> {pedido.descripcion}
                        </p>
                        <p>
                            <strong>Prioridad:</strong> {pedido.prioridad}
                        </p>
                        <label>
                            <input
                                type="checkbox"
                                checked={!pedido.pendiente}
                                onChange={() => {
                                    const updatedPedidos = [...pedidos];
                                    updatedPedidos[index].pendiente =
                                        !updatedPedidos[index].pendiente;
                                    setPedidos(updatedPedidos);
                                }}
                            />
                            {pedido.pendiente ? " Pendiente" : " Terminado"}
                        </label>
                    </div>
                ))}
            </div>

            {popupOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-lg shadow-lg w-3/4 max-w-md max-h-96 overflow-y-auto">
                        <h2 className="text-xl font-bold mb-4">
                            Instructivo: Tareas Previas a Llamar a Mantenimiento
                        </h2>
                        <p>
                            Antes de contactar al servicio técnico, realiza los siguientes
                            pasos para asegurarte de que el problema no pueda resolverse
                            fácilmente:
                        </p>
                        <ol className="list-decimal list-inside">
                            <li className="mb-2">
                                <strong>Verificar la conexión eléctrica</strong>
                                <ul className="list-disc list-inside ml-4">
                                    <li>
                                        Asegúrate de que el equipo esté correctamente enchufado.
                                    </li>
                                    <li>
                                        Comprueba que el tomacorriente funciona probando con otro
                                        dispositivo.
                                    </li>
                                    <li>Revisa si hay cortes de luz en la zona.</li>
                                </ul>
                            </li>
                            <li className="mb-2">
                                <strong>Inspeccionar los controles y ajustes</strong>
                                <ul className="list-disc list-inside ml-4">
                                    <li>Confirma que el equipo esté encendido.</li>
                                    <li>
                                        Verifica que el termostato esté ajustado a la temperatura
                                        correcta.
                                    </li>
                                    <li>
                                        Aire acondicionado: Asegúrate de que esté en modo frío o
                                        calor, según la necesidad.
                                    </li>
                                    <li>
                                        Heladera/Freezer: Revisa que la perilla de control de
                                        temperatura no esté en la posición mínima o apagada.
                                    </li>
                                </ul>
                            </li>
                            <li className="mb-2">
                                <strong>Examinar el filtro y la ventilación</strong>
                                <ul className="list-disc list-inside ml-4">
                                    <li>
                                        Aire acondicionado: Limpia o reemplaza el filtro si está
                                        sucio.
                                    </li>
                                    <li>
                                        Asegúrate de que no haya obstrucciones en las rejillas de
                                        entrada o salida de aire.
                                    </li>
                                    <li>
                                        Heladera/Freezer: Verifica que las rejillas traseras no
                                        estén bloqueadas.
                                    </li>
                                    <li>Asegúrate de que las puertas cierren correctamente.</li>
                                </ul>
                            </li>
                            <li className="mb-2">
                                <strong>Comprobar la formación de hielo</strong>
                                <ul className="list-disc list-inside ml-4">
                                    <li>
                                        En heladeras o freezers, revisa si hay acumulación excesiva
                                        de hielo en el freezer. Si es el caso, realiza un
                                        descongelamiento siguiendo las indicaciones del fabricante.
                                    </li>
                                </ul>
                            </li>
                            <li className="mb-2">
                                <strong>Revisar ruidos y funcionamiento</strong>
                                <ul className="list-disc list-inside ml-4">
                                    <li>
                                        Escucha si el equipo emite algún ruido anormal o no hace
                                        ningún sonido.
                                    </li>
                                    <li>
                                        Toma nota de cualquier luz de advertencia o código de error
                                        en el equipo.
                                    </li>
                                </ul>
                            </li>
                            <li className="mb-2">
                                <strong>Consultar el manual del usuario</strong>
                                <ul className="list-disc list-inside ml-4">
                                    <li>
                                        Busca en el manual del equipo posibles soluciones o pasos
                                        específicos para solucionar problemas comunes.
                                    </li>
                                </ul>
                            </li>
                        </ol>
                        <p>
                            Si después de completar estas tareas el problema persiste, anota
                            todos los síntomas observados (ruidos, luces, errores) y contacta
                            al servicio técnico indicando lo que revisaste previamente. Esto
                            facilitará el diagnóstico y la reparación.
                        </p>
                        <button
                            className="bg-blue-500 text-white p-2 rounded mt-4"
                            onClick={() => setPopupOpen(false)}
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
