import React from 'react';
import Navig from '../Navig';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contacto = () => {
    return (
        <div className="d-flex flex-column min-vh-100" style={{ fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif" }}>
            
            <style>
                {`
                    .contact-card {
                        background-color: var(--card-bg);
                        backdrop-filter: blur(10px);
                        border-radius: 20px;
                        border: 1px solid var(--border-color);
                        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
                    }
                    
                    /* Estilos para los campos de texto que respetan el modo oscuro/claro */
                    .custom-input {
                        background-color: transparent !important;
                        border: 1px solid var(--border-color);
                        color: var(--text-global) !important;
                        border-radius: 10px;
                        padding: 12px;
                        transition: all 0.3s ease;
                    }

                    .custom-input:focus {
                        border-color: var(--brand-color);
                        box-shadow: 0 0 10px rgba(16, 185, 129, 0.2);
                        outline: none;
                    }

                    .custom-input::placeholder {
                        color: var(--text-muted);
                        opacity: 0.7;
                    }
                `}
            </style>

            <Navig />
            
            <div className="container flex-grow-1 d-flex flex-column justify-content-center align-items-center py-5 mt-5">
                
                {/* Título de la sección */}
                <h1 className="display-4 fw-bolder mb-2 text-center" style={{ color: 'var(--text-global)', letterSpacing: '-1px' }}>
                    Ponte en <span style={{ color: 'var(--brand-color)', textShadow: '0 0 15px rgba(16, 185, 129, 0.3)' }}>Contacto</span>
                </h1>
                
                <p className="text-center mb-5 lead" style={{ color: 'var(--text-muted)' }}>
                    ¿Tienes un proyecto en mente o una oferta laboral? Escríbeme.
                </p>

                {/* Tarjeta del Formulario */}
                <div className="contact-card p-4 p-md-5 w-100" style={{ maxWidth: '600px' }}>
                    
                    {/* Al enviar el formulario, no recarga la página, solo muestra un mensaje */}
                    <form onSubmit={(e) => { 
                        e.preventDefault(); 
                        alert("¡Veo que estas interesado en contactarme! puesdes contactarte conmigo a traves del 3124273214 :)."); 
                    }}>
                        
                        <div className="mb-4">
                            <label className="form-label fw-bold" style={{ color: 'var(--text-global)' }}>Nombre completo</label>
                            <input type="text" className="form-control custom-input" placeholder="Ej. Elon Musk" required />
                        </div>
                        
                        <div className="mb-4">
                            <label className="form-label fw-bold" style={{ color: 'var(--text-global)' }}>Correo electrónico</label>
                            <input type="email" className="form-control custom-input" placeholder="elon@spacex.com" required />
                        </div>
                        
                        <div className="mb-5">
                            <label className="form-label fw-bold" style={{ color: 'var(--text-global)' }}>Mensaje</label>
                            <textarea className="form-control custom-input" rows="4" placeholder="Hola David, revisé tu portafolio y quiero contratarte para..." required></textarea>
                        </div>
                        
                        {/* El botón reutiliza la clase .btn-glow que ya pusimos en index.css */}
                        <button type="submit" className="btn-glow w-100 border-0 text-center" style={{ display: 'block' }}>
                            Enviar Mensaje
                        </button>
                    </form>
                </div>

            </div>
            
            <footer className="text-center py-4 mt-auto" style={{ borderTop: '1px solid var(--border-color)', color: 'var(--text-muted)' }}>
                <small>&copy; 2026 David De Los Reyes. Todos los derechos reservados.</small>
            </footer>
        </div>
    );
}

export default Contacto;