package org.factoriaf5.labcoop.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.List;

@Component

public class SampleDataLoader {

    private final ProjectsRepository projectsRepository;

    @Autowired
    public SampleDataLoader(ProjectsRepository projectsRepository) {
        this.projectsRepository = projectsRepository;
    }

    @PostConstruct
    private void cargarDatosDePrueba() {



        FacturaEmitida facturaProyecto1 = new FacturaEmitida(1, "1/1/2022", 10000, 2100, 12100, true);
        FacturaEmitida facturaProyecto2 = new FacturaEmitida( 2, "1/1/2022", 10000, 2100, 12100, false);
        FacturaEmitida facturaProyecto3 = new FacturaEmitida(5544, "ene22", 100, 2, 1000, true);

        FacturaRecibida facturaRProyecto2 = new FacturaRecibida("Externo", "010-2022", "2/2/2022", "Looky", 2000, 420, 0, 2420, true);
        FacturaRecibida facturaR1Proyecto2 = new FacturaRecibida("Socia", "2200156", "1/1/2022", "ETCS", 1000, 210, 0, 1210, false);
        FacturaRecibida facturaR2Proyecto2 = new FacturaRecibida("Transport", "2309", "16/1/2022", "LabDos", 50, 5, 10, 65, false);
        FacturaRecibida facturaRProyecto4 = new FacturaRecibida("HoresLab", "2404", "2/DEC", "Laburoo", 350, 70, 40, 420, true);
        FacturaRecibida facturaR1Proyecto4 = new FacturaRecibida( "HoresLab", "2405", "2/FEB", "Laburoo", 350, 70, 40, 420, true);

        HorasTrabajadoras horasTrabajadorasProyecto2 = new HorasTrabajadoras( "Andres", "LabCoop", 200, 160, 40, 35,  0);
        HorasTrabajadoras horasTrabajadoras2Proyecto2 = new HorasTrabajadoras( "Guernica", "LabCoop", 100, 60, 40, 35,  0);
        HorasTrabajadoras horasTrabajadoras3proyecto2 = new HorasTrabajadoras( "Nuria", "Apostrof", 250, 40, 40, 35,  0);


        // TODO: Builder pattern
        Project project1 = new Project("21F010", "Emprendoria i Génere 2022", "Formació", "AJ Montornés Del Vallés", "", "Aprobada", "Contrato", "Mitjant", "Dones", "abr22", "nov22", 1, 1, 1, 1, 1, 1, 0, "", "", "", 1, 1, 1, 1, 1, 1, 0,null,null, null);
        project1.setFacturaEmitida(facturaProyecto1);
        Project project2 = new Project("21F011", "Formació en cures", "Formació", "Aj Terrassa", "", "Aprovada", "Contracte", "Petit", "cures", "gen22", "març22", 20000, 2000, 1000, 1000, 3000, 500, 0, "", "", "",  26000, 2000, 4000, 0, 3000, 1000, 0, null, null, null );
        project2.setFacturaEmitida(facturaProyecto2);
        project2.setHorasTrabajadoras(List.of(horasTrabajadorasProyecto2, horasTrabajadoras2Proyecto2, horasTrabajadoras3proyecto2));
        project2.setFacturasRecibidas(List.of(facturaRProyecto2, facturaR1Proyecto2, facturaR2Proyecto2));
        Project project3 = new Project("21F008", "Formació Socis", "Formació", "Som Energía", "", "Aprovada", "Contracte", "petit", "ess", "Set22", "Gen22", 1, 1, 1, 2, 3, 4, 0, "", "", "", 1, 1, 1, 0, 1, 1, 0, null, null, null);
        project3.setFacturaEmitida(facturaProyecto3);
        Project project4 = new Project("21F012", "Tallers Viertuals", "Formació", "Aracoop", "", "Aprovada", "Subvenció", "Gran", "ess", "des21", "oct22", 1, 1, 1, 1, 3, 4, 0, "", "","", 1, 1, 1, 0, 3, 4, 0, null, null, null );
        project4.setFacturasRecibidas(List.of(facturaRProyecto4, facturaR1Proyecto4));

        projectsRepository.saveAll(
                List.of(
                        project1,
                        project2,
                        project3,
                        project4,
                        new Project("", "Singulars Cooperative Joves", "Formació", "LabCoop", "", "Aprovada", "Subvensio", "Gran", "joves", "Nov21", "Septembre-22", 1, 1, 1, 2, 3, 4, 1,"", "", "",  1, 1, 1, 0, 3, 4, 3, null, null, null),
                        new Project("", "Empendoria verda", "P-Territori", "Espai ambiental", "", "Pendent", "Contracte", "Mini", "ess", "", "", 1, 1, 1, 1, 1, 1, 0, "", "", "",  1, 1, 1, 1, 3, 4, 0, null, null, null),
                        new Project("", "Formació y emprendimiento verde", "P-Territori", "Fundación biodiversitat", "", "Pendent", "Contracte", "Gran", "ess", "Sep21", "Des21", 1, 1, 1, 1, 1, 1, 0, "", "", "",  1, 1, 1, 0, 3, 4, 0, null, null, null),
                        new Project("", "Juntes Emprenem amb", "Formació", "LabCoop", "", "Pendent", "Subvenció", "Mitjant", "dones", "Oct21", "Des21", 1, 1, 1, 1, 2, 1, 0, "", "", "",  1, 1, 1, 1, 3, 4, 0, null, null, null),
                        new Project("", "Escola popular d'economia feminista", "Formació", "Cooperació", "", "Pendent", "Contracte", "petit", "dones", "", "", 1, 1, 1, 1, 1, 1, 1, "", "", "",  1, 1, 1, 0, 3, 4, 3, null, null, null),
                        new Project("22F028", "Que salga de una vez", "formación", "SonLux", " ", "Aprobat", "Contracte", "Mitjant", "Dones", "feb21", "maz22", 1, 1, 1, 1, 1, 1, 0, "", "", "",  1, 1, 1, 0, 3, 4, 0, null, null, null))
        );

    }

}









