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
                    <ListItemText ><Link to="/">HOME</Link></ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemText><Link to="/projects">PROJECTS</Link></ListItemText>
                </MenuItem>

                <MenuItem>
                    <ListItemText><Link to="/horas">HORAS TRABAJADAS</Link></ListItemText>
                </MenuItem>

                <MenuItem>
                    <ListItemText><Link to="/facturas-emitidas">FACTURAS RECIBIDAS</Link></ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemText><Link to="/facturas-recibidas">FACTURAS RECIBIDAS</Link></ListItemText>
                </MenuItem>
            </MenuList>
        </Paper>

    );
}


