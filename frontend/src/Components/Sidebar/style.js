import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";



export function Style() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <nav className={sidebar ? "sidebar active" : "sidebar"}>
            <button className="hamburger" type="button" onClick={showSidebar}>
                <div></div>
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

