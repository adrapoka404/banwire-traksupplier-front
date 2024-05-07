import React, { useEffect, useState } from 'react';
import '../assets/css/components/homenavbar.css';
import logo from "../assets/img/logo-dark.png";

export const HomeNavbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }

            const sections = document.querySelectorAll('[id]');
            sections.forEach((section) => {
                const top = section.offsetTop - 100;
                const bottom = top + section.offsetHeight;
                if (offset >= top && offset < bottom) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
            <div className="containerNav">
                <a href="/" className="logo"><img style={{ width: 300 }} src={logo} alt="logo" /></a>
                <ul className="nav-menu">
                    <li className={`nav-item ${activeSection === 'rs-header' ? 'active' : ''}`}><a className="nav-link" href="#rs-header">Inicio</a></li>
                    <li className={`nav-item ${activeSection === 'rs-about' ? 'active' : ''}`}><a className="nav-link" href="#rs-about">Nosotros</a></li>
                    <li className={`nav-item ${activeSection === 'rs-services' ? 'active' : ''}`}><a className="nav-link" href="#rs-services">Servicios</a></li>
                    <li className={`nav-item ${activeSection === 'rs-blog' ? 'active' : ''}`}><a className="nav-link" href="#rs-blog">¿Cómo Funciona?</a></li>
                    <li className={`nav-item ${activeSection === 'rs-beneficios' ? 'active' : ''}`}><a className="nav-link" href="#rs-beneficios">Beneficios</a></li>
                    <li className={`nav-item ${activeSection === 'rs-contact' ? 'active' : ''}`}><a className="nav-link" href="#rs-contact">Contacto</a></li>
                </ul>
                <div className='nav-client'>
                    <ul className="nav-menu">
                        <li className={`nav-item ${activeSection === 'rs-header' ? 'active' : ''}`}>
                            <a className="nav-link" href="/auth">Inicia sesion</a>
                        </li>
                        <li className="separator"></li>
                        <li className={`nav-item ${activeSection === 'rs-about' ? 'active' : ''}`}>
                            <a className="nav-link" href="/auth/register">Registrate</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
