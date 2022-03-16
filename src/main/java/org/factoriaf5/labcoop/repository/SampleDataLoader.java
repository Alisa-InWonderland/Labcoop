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

        FacturaEmitida facturaProyecto1 = new FacturaEmitida(33, "feb2022", 3, 3, 3, true);
        FacturaEmitida facturaProyecto2 = new FacturaEmitida(22, "ene22", 2, 2, 2, true);
        // TODO: Builder pattern
        Project project1 = new Project("21F010", "Emprendoria i Génere 2022", "Formació", "AJ Montornés Del Vallés", "", "Aprobada", "Contrato", "Mitjant", "Dones", "abr22", "nov22", "");
        project1.setFacturaEmitida(facturaProyecto1);
        Project project2 = new Project("21F011", "Formació en cures", "Formació", "Aj Terrassa", "", "Aprovada", "Contracte", "Petit", "cures", "gen22", "març22", "");
        project2.setFacturaEmitida(facturaProyecto2);
                projectsRepository.saveAll(
                List.of(
                        project1,
                        project2
//                        new Project("21F008", "Formació Socis", "Formació", "Som Energía", "", "Aprovada", "Contracte", "petit", "ess", "Set22", "Gen22", ""),
//                        new Project("21F012", "Tallers Viertuals", "Formació", "Aracoop", "", "Aprovada", "Subvenció", "Gran", "ess", "des21", "oct22", ""),
//                        new Project("", "Singulars Cooperative Joves", "Formació", "LabCoop", "", "Aprovada", "Subvensio", "Gran", "joves", "Nov21", "Septembre-22", ""),
//                        new Project("", "Empendoria verda", "P-Territori", "Espai ambiental", "", "Pendent", "Contracte", "Mini", "ess", "", "", ""),
//                        new Project("", "Formació y emprendimiento verde", "P-Territori", "Fundación biodiversitat", "", "Pendent", "Contracte", "Gran", "ess", "Sep21", "Des21", ""),
//                        new Project("", "Juntes Emprenem amb", "Formació", "LabCoop", "", "Pendent", "Subvenció", "Mitjant", "dones", "Oct21", "Des21", ""),
//                        new Project("", "Escola popular d'economia feminista", "Formació", "Cooperació", "", "Pendent", "Contracte", "petit", "dones", "", "", ""),
//                        new Project("22F028", "Que salga de una vez", "formación", "SonLux", " ", "Aprobat", "Contracte", "Mitjant", "Dones", "feb21", "maz22", ""))
       ));
    }

}
