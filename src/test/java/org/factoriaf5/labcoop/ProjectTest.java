package org.factoriaf5.labcoop;

import org.factoriaf5.labcoop.repository.FacturaEmitida;
import org.factoriaf5.labcoop.repository.FacturaRecibida;
import org.factoriaf5.labcoop.repository.HorasTrabajadoras;
import org.factoriaf5.labcoop.repository.Project;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;

@SpringBootTest
class ProjectTest {

    @Test
    void calculaElPresupuestoEjecutadoEnBaseALasHorasTrabajadas() {

        FacturaEmitida facturaProyecto2 = new FacturaEmitida( 2, "1/1/2022", 10000, 2100, 12100, false);

        FacturaRecibida facturaRProyecto2 = new FacturaRecibida("Externo", "010-2022", "2/2/2022", "Looky", 2000, 420, 0, 2420, true);
        FacturaRecibida facturaR1Proyecto2 = new FacturaRecibida("Socia", "2200156", "1/1/2022", "ETCS", 1000, 210, 0, 1210, false);
        FacturaRecibida facturaR2Proyecto2 = new FacturaRecibida("Transport", "2309", "16/1/2022", "LabDos", 50, 5, 10, 65, false);

        HorasTrabajadoras horasTrabajadorasProyecto2 = new HorasTrabajadoras( "Andres", "LabCoop", 200, 160, 40, 35,  5600);
        HorasTrabajadoras horasTrabajadoras2Proyecto2 = new HorasTrabajadoras( "Guernica", "LabCoop", 100, 60, 40, 35,  2100);
        HorasTrabajadoras horasTrabajadoras3proyecto2 = new HorasTrabajadoras( "Nuria", "Apostrof", 250, 40, 40, 35,  1400);

        Project project2 = new Project("21F011", "Formació en cures", "Formació", "Aj Terrassa", "", "Aprovada", "Contracte", "Petit", "cures", "gen22", "març22", 1, 1, 2, 3, 1, 1, 1, "", "", "", 1, 1, 1, 1, 1, 1, 1, null, null, null );
        project2.setFacturaEmitida(facturaProyecto2);
        project2.setHorasTrabajadoras(List.of(horasTrabajadorasProyecto2, horasTrabajadoras2Proyecto2, horasTrabajadoras3proyecto2));
        project2.setFacturasRecibidas(List.of(facturaRProyecto2, facturaR1Proyecto2, facturaR2Proyecto2));

        assertThat(project2.getExecutedWorkersExpenses(), equalTo(9100));

    }

    @Test
    void cadaHorasTrabajadorasCalculaSuCoste() {
        HorasTrabajadoras horasTrabajadorasProyecto2 = new HorasTrabajadoras( "Andres", "LabCoop", 200, 160, 40, 35,  0);

        assertThat(horasTrabajadorasProyecto2.getDonePrice(), equalTo(5600));
    }


}
