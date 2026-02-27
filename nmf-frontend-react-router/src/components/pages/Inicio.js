import React from 'react';
import Navig from '../Navig';
import 'bootstrap/dist/css/bootstrap.min.css';

const Inicio = () => {
    return (
        <div className="d-flex flex-column" style={{ fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}>
            
            <style>
                {`
                    .btn-glow {
                        background-color: var(--brand-color);
                        color: #ffffff !important;
                        font-weight: 700;
                        border-radius: 50px;
                        padding: 16px 45px;
                        font-size: 1.1rem;
                        text-decoration: none;
                        display: inline-block;
                        transition: all 0.3s ease-in-out;
                        box-shadow: 0 0 15px rgba(16, 185, 129, 0.4);
                        border: 2px solid transparent;
                    }

                    .btn-glow:hover {
                        box-shadow: 0 0 30px rgba(16, 185, 129, 0.8);
                        transform: translateY(-3px);
                        background-color: #059669;
                    }

                    /* La tarjeta ahora usa la variable de color según el modo */
                    .theme-card {
                        background-color: var(--card-bg);
                        border-radius: 20px;
                        padding: 40px 20px;
                        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                        border: 1px solid var(--border-color);
                        cursor: pointer;
                    }

                    .theme-card:hover {
                        transform: translateY(-10px);
                        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
                        border-color: rgba(16, 185, 129, 0.4);
                    }

                    .text-neon {
                        color: var(--brand-color);
                        text-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
                    }
                `}
            </style>

            <Navig />
            
            <div className="container flex-grow-1 d-flex flex-column justify-content-center align-items-center text-center py-5">
    
    <h1 className="display-4 fw-bolder mb-3" style={{ letterSpacing: '-1px', color: 'var(--text-global)' }}>
        PLANTILLA FULL STACK <br />
        <span className="text-neon">MISIÓN TIC 2022</span>
    </h1>
    
    <p className="lead mb-5" style={{ color: 'var(--text-muted)', maxWidth: '800px' }}>
        Este es un proyecto de portafolio académico. Una aplicación CRUD completa desarrollada para consolidar conocimientos en arquitectura de software, integrando un backend robusto con una interfaz moderna.
    </p>

    <a href="/empleado" className="btn-glow mb-5">
        Probar la Aplicación
    </a>

    <div className="row w-100 justify-content-center gap-4 mt-4">
        
        {/* Tarjeta Frontend */}
        <div className="col-md-5 theme-card mx-2">
            <h2 className="h3 fw-bold mb-3 text-neon">Frontend React</h2>
            <p className="mb-0 fw-semibold" style={{ color: 'var(--text-global)', fontSize: '1rem' }}>
                Construido con <strong>React.js</strong>. Utiliza <strong>Axios</strong> para el consumo de la API, React Router DOM para navegación SPA, y diseño completamente customizado partiendo de Bootstrap puro.
            </p>
        </div>

        {/* Tarjeta Backend */}
        <div className="col-md-5 theme-card mx-2">
            <h2 className="h3 fw-bold mb-3 text-neon">Backend Java</h2>
            <p className="mb-0 fw-semibold" style={{ color: 'var(--text-global)', fontSize: '1rem' }}>
                API RESTful desarrollada con <strong>Java y Spring Boot</strong>. Implementa inyección de dependencias y conexión no relacional con <strong>MongoDB</strong> para la persistencia de datos.
            </p>
        </div>

    </div>
</div>

            <footer className="text-center py-4 mt-auto" style={{ borderTop: '1px solid var(--border-color)', color: 'var(--text-muted)' }}>
                <small>&copy; 2026 Portafolio Profesional de David Alejandro De los Reyes Ostos. Todos los derechos reservados.</small>
            </footer>
        </div>
    );
}

export default Inicio;