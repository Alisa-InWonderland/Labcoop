import * as React from 'react';
import "./style.css";
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Check from '@mui/icons-material/Check';
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
                    <ListItemIcon>
                        <Check />
                    </ListItemIcon>
                    Facturas
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemText><Link to="/facturas-emitidas">Facturas emitidas</Link></ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemText><Link to="/facturas-recibidas">Facturas recibidas</Link></ListItemText>
                </MenuItem>
                <Divider />

            </MenuList>
        </Paper>
    );
}


