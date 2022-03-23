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
import { ImageListItem } from '@mui/material'

export default function Sidebar() {
    return (

        <Paper  elevation={5} sx={{ width: 200 }}  >
            <ImageListItem className="image">
                <img
                    src="/logo.png"
                    alt="logo"

                />

            </ImageListItem>
            <MenuList className="sidebar" dense>
                <MenuItem className="text" >
                    <ListItemText ><Link to="/">Home</Link></ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemText><Link to="/projects">Projects</Link></ListItemText>
                </MenuItem>

                <MenuItem>
                    <ListItemText><Link to="/horas">Horas trabajadas</Link></ListItemText>
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


