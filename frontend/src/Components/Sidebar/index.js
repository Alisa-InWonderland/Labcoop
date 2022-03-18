import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";



export function Sidebar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <nav className={sidebar ? "sidebar active" : "sidebar"} id="areaA">
            <button className="hamburger" type="button" onClick={showSidebar}>
            </button>
            <ul onClick={showSidebar}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/facturas-emitidas">Facturas emitidas</Link></li>
                <li><Link to="/facturas-recibidas">Facturas recibidas</Link></li>
                <li><Link to="/horas">Horas</Link></li>

            </ul>
        </nav>
    );
}

