import React, { useState } from 'react';
import Navig from '../Navig';
import 'bootstrap/dist/css/bootstrap.min.css';

const Nosotros = () => {
    // Estado para el efecto de zoom en tu foto
    const [isImageHovered, setIsImageHovered] = useState(false);

    // Estilo dinámico para la foto de perfil (mismo efecto de antes)
    const imageStyle = {
        width: '180px',
        height: '180px',
        objectFit: 'cover',
        transition: 'all 0.4s ease-in-out',
        transform: isImageHovered ? 'scale(1.1)' : 'scale(1)',
        cursor: 'pointer',
        border: '3px solid var(--border-color)'
    };

    return (
        <div className="d-flex flex-column min-vh-100" style={{ fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}>
            
            {/* 🪄 Estilos específicos para la sección Nosotros, integrados con el theme global */}
            <style>
                {`
                    /* Título grande estilo Plasticket */
                    .about-header-neon {
                        font-weight: 900;
                        letter-spacing: -2px;
                        color: var(--text-global);
                    }
                    
                    .about-header-neon span {
                        color: var(--brand-color);
                        text-shadow: 0 0 15px rgba(16, 185, 129, 0.3);
                    }

                    /* Tarjeta Glassmorphism para el perfil */
                    .about-card {
                        background-color: var(--card-bg);
                        backdrop-filter: blur(10px);
                        border-radius: 25px;
                        border: 1px solid var(--border-color);
                        transition: all 0.4s ease-in-out;
                        color: var(--text-global);
                    }
                    
                    .about-card:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                        border-color: rgba(16, 185, 129, 0.4);
                    }

                    /* Efecto Glow en la sombra de la imagen */
                    .img-glow {
                        box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
                        transition: box-shadow 0.4s ease;
                    }

                    .img-glow-active {
                        box-shadow: 0 0 30px rgba(16, 185, 129, 0.5);
                    }

                    /* Botones sociales minimalistas */
                    .btn-social {
                        background-color: var(--bg-global);
                        color: var(--text-global) !important;
                        border: 1px solid var(--border-color);
                        border-radius: 50px;
                        font-weight: 600;
                        transition: all 0.3s ease;
                    }
                    
                    .btn-social:hover {
                        background-color: var(--brand-color);
                        color: #ffffff !important;
                        transform: scale(1.05);
                    }
                `}
            </style>

            <Navig />
            
            <div className="container flex-grow-1 d-flex flex-column justify-content-center align-items-center py-5 mt-5">
                
                {/* Título de la sección */}
                <h1 className="display-3 about-header-neon mb-5 text-center">
                    ABOUT <span>THE CODER</span>
                </h1>

                {/* Tarjeta Principal del Desarrollador */}
                <div className="about-card p-5 w-100 shadow-lg" style={{ maxWidth: '800px' }}>
                    <div className="row align-items-center">
                        
                        {/* Columna de la Foto */}
                        <div className="col-md-4 text-center mb-4 mb-md-0">
                            <img 
                                src="/coder.jpg" // Asegúrate de tener tu foto aquí en la carpeta 'public'
                                alt="David Alejandro De los Reyes Ostos"
                                className={`rounded-circle img-glow ${isImageHovered ? 'img-glow-active' : ''}`}
                                style={imageStyle}
                                onMouseEnter={() => setIsImageHovered(true)}
                                onMouseLeave={() => setIsImageHovered(false)}
                            />
                        </div>

                        {/* Columna de Texto */}
                        <div className="col-md-8 pl-md-5">
                            <h2 className="h1 fw-bold mb-1" style={{ color: 'var(--brand-color)' }}>
                                David Alejandro 
                            </h2>
                            <h3 className="h4 mb-3" style={{ color: 'var(--text-global)', letterSpacing: '1px' }}>
                                Full Stack Engineer (Learning React)  
                            </h3>
                            
                            <hr style={{ borderColor: 'var(--border-color)', opacity: 0.3, width: '80%' }} />
                            
                            <p className="lead mb-4" style={{ color: 'var(--text-muted)' }}>
                                Desarrollador de software con experiencia en arquitecturas Java Enterprise, Spring Boot, React y bases de datos NoSQL como MongoDB. Enfocado en construir soluciones escalables, modernas y eficientes, sin perder el toque visual que hace única a una interfaz de usuario.
                            </p>

                            {/* Botones Sociales */}
                            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
                                <a href="https://github.com/Prado500" target="_blank" rel="noreferrer" className="btn btn-social px-4 py-2">
                                    <i className="bi bi-github me-2"></i> GitHub
                                </a>
                                <a href="https://linkedin.com/in/david-alejandro-de-los-reyes-ostos-0b808521a" target="_blank" rel="noreferrer" className="btn btn-social px-4 py-2">
                                    <i className="bi bi-linkedin me-2"></i> LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            
            <footer className="text-center py-4 mt-auto" style={{ borderTop: '1px solid var(--border-color)', color: 'var(--text-muted)' }}>
                <small>&copy; 2026 Sistema de Gestión. Todos los derechos reservados.</small>
            </footer>
        </div>
    );
}

export default Nosotros;