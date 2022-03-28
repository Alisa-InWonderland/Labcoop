import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {GeneralForm} from "../GeneralForm/index";
import {FacturaEmitidaForm} from "../FacturaEmitidaForm";
import {FacturasRecibidasView} from "../FacturasRecibidasView/facturasRecibidasView";
import {HorasForm} from "../HorasForm";
import * as PropTypes from "prop-types";
{/*import {FacturasEmitidasView} from "../FacturasEmitidasView/FacturasEmitidasView";*/}



FacturasRecibidasView.propTypes = {value: PropTypes.string};
{/*FacturasEmitidasView.propTypes = {value: PropTypes.string};*/}


export function ProjectForm({addProject}) {
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
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="General" value="1"/>
                            <Tab label="Facturas emitidas" value="2"/>
                            <Tab label="Facturas recibidas" value="3"/>
                            <Tab label="Horas" value="4"/>
                        </TabList>
                    </Box>

                    <TabPanel value="1">
                        <GeneralForm addProject={addProject} value="1"/>
                    </TabPanel>

                    <TabPanel value="2">
                        <FacturaEmitidaForm addProject={addProject} value="2"/>
                    </TabPanel>

                    <TabPanel value="3">
                        <FacturasRecibidasView  addProject={addProject} value="3"/>
                    </TabPanel>

                    <TabPanel value="4">
                        <HorasForm path="/horas"  addProject={addProject} value="4" />
                    </TabPanel>

                </TabContext>
            </Box>
        );
}