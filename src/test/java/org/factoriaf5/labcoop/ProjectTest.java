package org.factoriaf5.labcoop;

import org.factoriaf5.labcoop.repository.FacturaEmitida;
import org.factoriaf5.labcoop.repository.FacturaRecibida;
import org.factoriaf5.labcoop.repository.HorasTrabajadoras;
import org.factoriaf5.labcoop.repository.Project;
import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import org.junit.jupiter.api.Test;



class ProjectTest {

    @Test
    void calculaTotalDeFacturaRecibidaSumandoCostIvaIrpf() {
        FacturaRecibida facturaRProyecto2 = new FacturaRecibida("Externo", "010-2022", "2/2/2022", "Looky", 2000, 420, 0, 0, true);

        assertThat(facturaRProyecto2.getTotal(), equalTo(2420));
    }

    @Test
    void calculaTotalDeFacturaEmitidaSumandoImporteEIva() {
        FacturaEmitida facturaProyecto1 = new FacturaEmitida(1, "1/1/2022", 10000, 2100, 0, true);

        assertThat(facturaProyecto1.getTotal(), equalTo(12100));
    }

    @Test
    void cadaHorasTrabajadorasCalculaSuCoste() {
        HorasTrabajadoras horasTrabajadorasProyecto2 = new HorasTrabajadoras( "Andres", "LabCoop", 200, 160, 40, 35,  0);
        assertThat(horasTrabajadorasProyecto2.getDonePrice(), equalTo(5600));
    }

    @Test
    void calculaElMargenEjecutadoConLaDiferenciaEntrePresupuestoEjecutadoYTodosLosGastos() {
        FacturaRecibida facturaRProyecto2 = new FacturaRecibida("Externo", "010-2022", "2/2/2022", "Looky", 2000, 420, 0, 2420, true);
        FacturaRecibida facturaR1Proyecto2 = new FacturaRecibida("Socia", "2200156", "1/1/2022", "ETCS", 1000, 210, 0, 1210, false);
        FacturaRecibida facturaR2Proyecto2 = new FacturaRecibida("Transport", "2309", "16/1/2022", "LabDos", 50, 5, 10, 65, false);

        HorasTrabajadoras horasTrabajadorasProyecto2 = new HorasTrabajadoras( "Andres", "LabCoop", 200, 160, 40, 35,  5600);
        HorasTrabajadoras horasTrabajadoras2Proyecto2 = new HorasTrabajadoras( "Guernica", "LabCoop", 100, 60, 40, 35,  2100);
        HorasTrabajadoras horasTrabajadoras3proyecto2 = new HorasTrabajadoras( "Nuria", "Apostrof", 250, 40, 40, 35,  1400);

        Project project2 = new Project("21F011", "Formació en cures", "Formació", "Aj Terrassa", "", "Aprovada", "Contracte", "Petit", "cures", "gen22", "març22", 1, 1, 2, 3, 1, 1, 1, "", "", "", 20000, 0, 0, 0, 3000, 0, 0, null, null, null );
        project2.setFacturasRecibidas(List.of(facturaRProyecto2, facturaR1Proyecto2, facturaR2Proyecto2));
        project2.setHorasTrabajadoras(List.of(horasTrabajadorasProyecto2, horasTrabajadoras2Proyecto2, horasTrabajadoras3proyecto2));

        assertThat(project2.getExecutedMargin(), equalTo(4205));
    }

    @Test
    void calculaElMargenPrevistoConLaDiferenciaEntrePresupuestoPrevistoYTodosLosGastosPrevistos() {
        Project project2 = new Project("21F011", "Formació en cures", "Formació", "Aj Terrassa", "", "Aprovada", "Contracte", "Petit", "cures", "gen22", "març22", 12000, 1000, 2000, 3000, 3000, 500, 0, "", "", "", 20000, 0, 0, 0, 3000, 0, 0, null, null, null );

        assertThat(project2.getMargin(), equalTo(2500));
    }

    @Test
    void calculaLosGastosPersonalEjecutadosEnBaseALasHorasTrabajadas() {

        HorasTrabajadoras horasTrabajadorasProyecto2 = new HorasTrabajadoras( "Andres", "LabCoop", 200, 160, 40, 35,  5600);
        HorasTrabajadoras horasTrabajadoras2Proyecto2 = new HorasTrabajadoras( "Guernica", "LabCoop", 100, 60, 40, 35,  2100);
        HorasTrabajadoras horasTrabajadoras3proyecto2 = new HorasTrabajadoras( "Nuria", "Apostrof", 250, 40, 40, 35,  1400);

        Project project2 = new Project("21F011", "Formació en cures", "Formació", "Aj Terrassa", "", "Aprovada", "Contracte", "Petit", "cures", "gen22", "març22", 1, 1, 2, 3, 1, 1, 1, "", "", "", 1, 1, 1, 1, 1, 1, 1, null, null, null );
        project2.setHorasTrabajadoras(List.of(horasTrabajadorasProyecto2, horasTrabajadoras2Proyecto2, horasTrabajadoras3proyecto2));

        assertThat(project2.getExecutedWorkersExpenses(), equalTo(9100));
    }

    @Test
    void calculaLosGastosSociasEjecutadosEnBaseALasFacturasEmitidasConTipoDeGastoSocia() {

        FacturaRecibida facturaRProyecto2 = new FacturaRecibida("Externo", "010-2022", "2/2/2022", "Looky", 2000, 420, 0, 2420, true);
        FacturaRecibida facturaR1Proyecto2 = new FacturaRecibida("Socia", "2200156", "1/1/2022", "ETCS", 1000, 210, 0, 1210, false);
        FacturaRecibida facturaR2Proyecto2 = new FacturaRecibida("Transport", "2309", "16/1/2022", "LabDos", 50, 5, 10, 65, false);

        Project project2 = new Project("21F011", "Formació en cures", "Formació", "Aj Terrassa", "", "Aprovada", "Contracte", "Petit", "cures", "gen22", "març22", 1, 1, 2, 3, 1, 1, 1, "", "", "", 1, 1, 1, 1, 1, 1, 1, null, null, null );
        project2.setFacturasRecibidas(List.of(facturaRProyecto2, facturaR1Proyecto2, facturaR2Proyecto2));

        assertThat(project2.getExecutedCoCost(), equalTo(1210));
    }

    @Test
    void calculaLosGastosExternosEjecutadosEnBaseALasFacturasEmitidasConTipoDeGastoExterno() {

        FacturaRecibida facturaRProyecto2 = new FacturaRecibida("Externo", "010-2022", "2/2/2022", "Looky", 2000, 420, 0, 2420, true);
        FacturaRecibida facturaR1Proyecto2 = new FacturaRecibida("Socia", "2200156", "1/1/2022", "ETCS", 1000, 210, 0, 1210, false);
        FacturaRecibida facturaR2Proyecto2 = new FacturaRecibida("Transport", "2309", "16/1/2022", "LabDos", 50, 5, 10, 65, false);

        Project project2 = new Project("21F011", "Formació en cures", "Formació", "Aj Terrassa", "", "Aprovada", "Contracte", "Petit", "cures", "gen22", "març22", 1, 1, 2, 3, 1, 1, 1, "", "", "", 1, 1, 1, 1, 1, 1, 1, null, null, null );
        project2.setFacturasRecibidas(List.of(facturaRProyecto2, facturaR1Proyecto2, facturaR2Proyecto2));

        assertThat(project2.getExecutedExtExpenses(), equalTo(2420));
    }

    @Test
    void calculaOtrosGastosEjecutadosEnBaseALasFacturasEmitidasConTipoDeGastoTransportYOHoresLab() {

        FacturaRecibida facturaRProyecto2 = new FacturaRecibida("Externo", "010-2022", "2/2/2022", "Looky", 2000, 420, 0, 0, true);
        FacturaRecibida facturaR1Proyecto2 = new FacturaRecibida("Socia", "2200156", "1/1/2022", "ETCS", 1000, 210, 0, 0, false);
        FacturaRecibida facturaR2Proyecto2 = new FacturaRecibida("Transport", "2309", "16/1/2022", "LabDos", 50, 5, 10, 0, false);
        FacturaRecibida facturaR3Proyecto2 = new FacturaRecibida("HoresLab", "2404", "2/DEC", "Laburoo", 350, 70, 40, 0, true);
        FacturaRecibida facturaR4Proyecto2 = new FacturaRecibida( "HoresLab", "2405", "2/FEB", "Laburoo", 350, 70, 40, 0, true);

        Project project2 = new Project("21F011", "Formació en cures", "Formació", "Aj Terrassa", "", "Aprovada", "Contracte", "Petit", "cures", "gen22", "març22", 1, 1, 2, 3, 1, 1, 1, "", "", "", 1, 1, 1, 1, 1, 1, 1, null, null, null );
        project2.setFacturasRecibidas(List.of(facturaRProyecto2, facturaR1Proyecto2, facturaR2Proyecto2, facturaR3Proyecto2, facturaR4Proyecto2));

        assertThat(project2.getExecutedOtherExpenses(), equalTo(985));

    }
}
