import axios from 'axios';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Navig from '../Navig';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';

const NewClient = () => {
    
    // 1. Estado inicial completo (sin campos huérfanos)
    const [data, setData] = useState({
        id: "", 
        nombre: "",
        apellido: "", 
        identificacion: "", 
        telefono: "", 
        ventas: "",
        prestaciones: "",
        salario: "",
        fRegistro: new Date().toISOString()
    });

    const handleChange = ({ target }) => {
        setData({
            ...data,
            [target.name]: target.value
        });
    };

    const URL = "http://localhost:8080/empleado/";
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(URL, data);

            if(response.status === 200 || response.status === 201) {
                Swal.fire({
                    title: "¡Registro Exitoso!",
                    text: `Empleado ${data.nombre} guardado correctamente.`,
                    icon: "success"
                });
                history.push("/empleado");
            }
        } catch (error) {
            // Extraemos el mensaje específico enviado por el backend
            // Si no existe (ej. servidor apagado), usamos uno por defecto
            const errorMessage = error.response?.data?.message || "Error de conexión: El servidor no responde.";

            Swal.fire({
                title: "Error de Validación",
                text: errorMessage, // Aquí se mostrará "ERROR: El salario base no puede ser..."
                icon: "error",
                confirmButtonColor: "#ef4444"
            });
            console.error("Detalle del error:", error.response?.data);
        }
    };
   
    return (
        <div className="d-flex flex-column min-vh-100">
            {/* 🪄 Estilos inyectados específicos para el formulario Glassmorphism */}
            <style>
                {`
                    .form-glass-card {
                        background-color: var(--card-bg);
                        backdrop-filter: blur(10px);
                        border-radius: 20px;
                        border: 1px solid var(--border-color);
                        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    }
                    .custom-input {
                        background-color: transparent !important;
                        border: 1px solid var(--border-color);
                        color: var(--text-global) !important;
                        border-radius: 10px;
                        padding: 10px 15px;
                        transition: all 0.3s ease;
                    }
                    .custom-input:focus {
                        border-color: var(--brand-color);
                        box-shadow: 0 0 10px rgba(16, 185, 129, 0.2);
                        outline: none;
                    }
                    .custom-input::placeholder {
                        color: var(--text-muted);
                        opacity: 0.6;
                    }
                    .form-label {
                        color: var(--text-global);
                        font-weight: 600;
                        margin-bottom: 0.5rem;
                    }
                `}
            </style>

            <Navig />
            
            <div className="container flex-grow-1 d-flex justify-content-center align-items-center py-5 mt-5">
                <div className="form-glass-card p-4 p-md-5 w-100" style={{ maxWidth: '800px' }}>
                    
                    <h2 className="text-center mb-5 fw-bold" style={{ color: 'var(--text-global)' }}>
                        Nueva <span style={{ color: 'var(--brand-color)', textShadow: '0 0 15px rgba(16, 185, 129, 0.3)' }}>Nómina</span>
                    </h2>

                    <Form onSubmit={handleSubmit}>
                        
                        {/* Fila 1 */}
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="mb-3">
                                    <Form.Label>ID de Registro</Form.Label>
                                    <Form.Control className="custom-input" type="text" name="id" placeholder="Ej. EMP-001" value={data.id} required onChange={handleChange} />
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group className="mb-3">
                                    <Form.Label>Fecha de Registro</Form.Label>
                                    {/* Lo ponemos como readOnly para que el usuario no modifique el ISO string a mano */}
                                    <Form.Control className="custom-input" type="text" name="fRegistro" value={data.fRegistro} readOnly style={{ opacity: 0.7 }} />
                                </Form.Group>
                            </div>
                        </div>

                        {/* Fila 2 */}
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="mb-3">
                                    <Form.Label>Nombres</Form.Label>
                                    <Form.Control className="custom-input" type="text" name="nombre" placeholder="Nombres del empleado" value={data.nombre} required onChange={handleChange} />
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group className="mb-3">
                                    <Form.Label>Apellidos</Form.Label>
                                    <Form.Control className="custom-input" type="text" name="apellido" placeholder="Apellidos del empleado" value={data.apellido} required onChange={handleChange} />
                                </Form.Group>
                            </div>
                        </div>

                        {/* Fila 3 */}
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group className="mb-3">
                                    <Form.Label>Identificación (C.C.)</Form.Label>
                                    <Form.Control className="custom-input" type="number" name="identificacion" placeholder="Número de documento" value={data.identificacion} required onChange={handleChange} />
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group className="mb-3">
                                    <Form.Label>Celular de Contacto</Form.Label>
                                    <Form.Control className="custom-input" type="number" name="telefono" placeholder="Ej. 3001234567" value={data.telefono} required onChange={handleChange} />
                                </Form.Group>
                            </div>
                        </div>

                        {/* Fila 4 (Métricas financieras) */}
                        <div className="row mt-3">
                            <div className="col-md-4">
                                <Form.Group className="mb-4">
                                    <Form.Label>Ventas del Mes ($)</Form.Label>
                                    <Form.Control className="custom-input" type="number" name="ventas" placeholder="0" value={data.ventas} required onChange={handleChange} />
                                </Form.Group>
                            </div>
                            <div className="col-md-4">
                                <Form.Group className="mb-4">
                                    <Form.Label>Prestaciones ($)</Form.Label>
                                    <Form.Control className="custom-input" type="number" name="prestaciones" placeholder="0" value={data.prestaciones} required onChange={handleChange} />
                                </Form.Group>
                            </div>
                            <div className="col-md-4">
                                <Form.Group className="mb-4">
                                    <Form.Label>Sueldo Base ($)</Form.Label>
                                    <Form.Control className="custom-input" type="number" name="salario" placeholder="0" value={data.salario} required onChange={handleChange} />
                                </Form.Group>
                            </div>
                        </div>

                        <hr style={{ borderColor: 'var(--border-color)', opacity: 0.5 }} className="mb-4"/>

                        {/* Botones de acción usando nuestras clases de index.css */}
                        <div className="d-flex gap-3 justify-content-end">
                            <button type="button" className="btn-neon-red px-4" onClick={() => history.push('/empleado')}>
                                Cancelar
                            </button>
                            <button type="submit" className="btn-neon-green px-4">
                                Guardar Registro
                            </button>
                        </div>

                    </Form>
                </div>
            </div>
        </div>
    );
}

export default NewClient;