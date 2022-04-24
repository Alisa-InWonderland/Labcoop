import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { ProjectForm } from "../ProjectForm";
import { FacturasRecibidasView } from "../../Views/FacturasRecibidasView";
import { FacturasEmitidasView } from "../../Views/FacturasEmitidasView";
import * as PropTypes from "prop-types";
import { HorasTrabajadorasView } from "../../Views/HorasTrabajadorasView";

// FacturasRecibidasView.propTypes = {value: PropTypes.string};
// FacturasEmitidasView.propTypes = {value: PropTypes.string};

export function FormTabs({ addProject, deleteProject }) {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab
              classes={{ label: 'id="mui-tab-list"' }}
              label="General"
              value="1"
            />
            <Tab label="Facturas emitidas" value="2" />
            <Tab label="Facturas recibidas" value="3" />
            <Tab label="Horas" value="4" />
          </TabList>
        </Box>

        <TabPanel id="mui-tab-list" value="1">
          <ProjectForm
            addProject={addProject}
            deleteProject={deleteProject}
            value="1"
          />
        </TabPanel>

        <TabPanel value="2">
          <FacturasEmitidasView
            addProject={addProject}
            deleteProject={deleteProject}
            value="2"
          />
        </TabPanel>

        <TabPanel value="3">
          <FacturasRecibidasView
            addProject={addProject}
            deleteProject={deleteProject}
            value="3"
          />
        </TabPanel>

        <TabPanel value="4">
          <HorasTrabajadorasView
            addProject={addProject}
            deleteProject={deleteProject}
            value="4"
          />
        </TabPanel>
      </TabContext>
    </Box>
  );
}
