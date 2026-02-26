import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navig = () => {
    // Memoria para el Modo Oscuro/Claro
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setIsDark(savedTheme === 'dark');
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = isDark ? 'light' : 'dark';
        setIsDark(!isDark);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <>
            <style>
                {`
                    .custom-navbar {
                        background-color: var(--nav-bg);
                        backdrop-filter: blur(12px);
                        border-bottom: 1px solid var(--border-color);
                        transition: background-color 0.4s ease, border-color 0.4s ease;
                    }
                    
                    .nav-link-neon {
                        color: var(--text-global) !important;
                        font-weight: 500;
                        transition: all 0.3s ease;
                        letter-spacing: 0.5px;
                    }
                    
                    .nav-link-neon:hover {
                        color: var(--brand-color) !important;
                        transform: translateY(-2px);
                    }

                    .navbar-brand-neon {
                        color: var(--text-global) !important;
                        font-weight: 900;
                        font-size: 1.5rem;
                        letter-spacing: 1px;
                    }
                    
                    .navbar-brand-neon span {
                        color: var(--brand-color);
                    }
                `}
            </style>

            <nav className="navbar navbar-expand-lg custom-navbar fixed-top py-3">
                <div className="container">

                    <Link className="navbar-brand navbar-brand-neon" to="/">
                        Nómina<span> Manager Template</span>
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto gap-2 align-items-center">
                            <li className="nav-item">
                                <Link className="nav-link nav-link-neon px-3" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="nav-link nav-link-neon px-3"
                                    to="/empleado"
                                    onClick={(e) => {
                                        if (window.location.pathname.includes('/empleado')) {
                                            e.preventDefault(); // se fuerza a que vuelva y cargue la vista Nóminas aún si ya se está en ella para poder limpiar busquedas con filtro
                                            window.location.href = '/empleado'; // se fuerza al navegador a recargar limpio
                                        }
                                    }}
                                >
                                    Nóminas
                                </Link>
                            </li>
                            <li className="nav-item">
                                {/* Ojo aqui !!!! Nueva Nómina como boton apunta a la vista New Client y usa la ruta que corresponde */}
                                <Link className="nav-link nav-link-neon px-3" to="/nuevaNomina">Crear Nómina</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-link-neon px-3" to="/nosotros">Nosotros</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link nav-link-neon px-3" to="/contacto">Contacto</Link>
                            </li>

                            {/* Botón de Modo Día / Noche */}
                            <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
                                <button
                                    onClick={toggleTheme}
                                    className="btn btn-sm px-3 rounded-pill fw-bold"
                                    style={{
                                        backgroundColor: isDark ? '#1e293b' : '#f1f5f9',
                                        color: isDark ? '#f8fafc' : '#334155',
                                        border: '1px solid var(--border-color)',
                                        transition: 'all 0.4s ease'
                                    }}
                                >
                                    {isDark ? '☀️ Claro' : '🌙 Oscuro'}
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navig;