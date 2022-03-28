import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {GeneralForm} from "../GeneralForm/index";
import {FacturaEmitidaForm} from "../FacturaEmitidaForm";
import {FacturasRecibidasView} from "../FacturasRecibidasView/facturasRecibidasView";
import {FacturasEmitidasView} from "../FacturasEmitidasView/FacturasEmitidasView";
import {HorasForm} from "../HorasForm";
import * as PropTypes from "prop-types";

{/*import {FacturasEmitidasView} from "../FacturasEmitidasView/FacturasEmitidasView";*/}




FacturasRecibidasView.propTypes = {value: PropTypes.string};


export function ProjectForm({addProject, deleteProject}) {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


   /* export function HoursList({showTable}) {
        const [value, setValue] = React.useState('1');

        const handleChange = (event, newValue) => {
            setValue(newValue);
        };*/


    // export function HoursList({showTable}) {
    //     const [value, setValue] = React.useState('1');
    //
    //     const handleChange = (event, newValue) => {
    //         setValue(newValue);



        return (
            <Box sx={{width: '100%', typography: 'body1'}}>
                <TabContext value={value}>

                    <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                        <TabList  onChange={handleChange} aria-label="lab API tabs example">
                            <Tab classes={{ label: 'id="mui-tab-list"' }} label="General" value="1"/>
                            <Tab label="Facturas emitidas" value="2"/>
                            <Tab label="Facturas recibidas" value="3"/>
                            <Tab label="Horas" value="4"/>
                        </TabList>
                    </Box>

                    <TabPanel id="mui-tab-list" value="1">
                        <GeneralForm addProject={addProject} deleteProject={deleteProject} value="1"/>
                    </TabPanel>

                    <TabPanel value="2">
                        <FacturasEmitidasView addProject={addProject} deleteProject={deleteProject} value="2"/>
                    </TabPanel>

                    <TabPanel value="3">
                        <FacturasRecibidasView  addProject={addProject} deleteProject={deleteProject} value="3"/>
                    </TabPanel>

                    <TabPanel value="4">
                        <HorasForm path="/horas"  addProject={addProject} deleteProject={deleteProject} value="4" />
                    </TabPanel>

                </TabContext>
            </Box>
        );
}