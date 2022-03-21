import * as React from 'react';
import "./style.css";
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <Paper sx={{ width: 220 }}>
            <MenuList dense>
                <MenuItem>
                    <ListItemText inset><Link to="/">Home</Link></ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemText inset><Link to="/projects">Projects</Link></ListItemText>
                </MenuItem>

                <MenuItem>
                    <ListItemText inset><Link to="/horas">Horas trabajadas</Link></ListItemText>
                </MenuItem>

                <MenuItem>
                    <ListItemText><Link to="/facturas-emitidas">Facturas emitidas</Link></ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemText><Link to="/facturas-recibidas">Facturas recibidas</Link></ListItemText>
                </MenuItem>


            </MenuList>
        </Paper>
    );
}


