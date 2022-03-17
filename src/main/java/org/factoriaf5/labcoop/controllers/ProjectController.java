package org.factoriaf5.labcoop.controllers;

import org.factoriaf5.labcoop.repository.FacturaEmitida;
import org.factoriaf5.labcoop.repository.Project;
import org.factoriaf5.labcoop.ProjectNotFoundException;
import org.factoriaf5.labcoop.repository.ProjectsRepository;
import org.factoriaf5.labcoop.repository.FacturasEmitidasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.List;

@CrossOrigin
@RestController
public class ProjectController {

    private final ProjectsRepository projectsRepository;

    @Autowired
    public ProjectController(ProjectsRepository projectsRepository) {
        this.projectsRepository = projectsRepository;
    }

    @GetMapping("/projects")
    public List<Project> allProjects() {
        return projectsRepository.findAll();
    }

    @GetMapping("/facturas-emitidas")
    public List<Project> allProjectFacturasE() {
        return projectsRepository.findAll();
    }

    @GetMapping("/facturas-recibidas")
    public List<Project> allInvoicesProject() {
        return projectsRepository.findAll();
    }


    @GetMapping("/projects/{id}")
    public Project findProject(@PathVariable Long id) {
        return projectsRepository.findById(id).orElseThrow(ProjectNotFoundException::new);
    }

    @GetMapping("/facturas-emitidas/{id}")
    public Project findFacturaE(@PathVariable Long id) {
        return projectsRepository.findById(id).orElseThrow(ProjectNotFoundException::new);
    }

    @PostMapping("/projects")
        public Project createNewProject(@RequestBody Project project) {
            return projectsRepository.save(project);
        }



    // provisional
   /* @PostConstruct
    private void cargarDatosDePrueba() {
        projectsRepository.saveAll(
                List.of(
                        new Project("21F010", "Emprendoria i Gènere 2022", "Formació", "AJ Montornès Del Vallès", "", "Aprovada", "Contracte", "Mitjant", "Dones", "Abr22", "Nov22", ""),
                        new Project("21F011", "Formació en cures", "Formació", "Aj Terrassa", "", "Aprovada", "Contracte", "Petit", "Cures", "Gen22", "Març22", ""),
                        new Project("21F008", "Formació Socis","Formació", "Som Energía", "", "Aprovada", "Contracte", "Petit", "Ess", "Set22", "Gen22", ""),
                        new Project("21F012", "Tallers Virtuals","Formació", "Aracoop", "", "Aprovada", "Subvenció", "Gran", "Ess", "Des21", "Oct22", ""),
                        new Project("", "Singulars Cooperative Joves","Formació", "LabCoop", "", "Aprovada", "Subvenció", "Gran", "Joves", "Nov21", "Set-22", ""),
                        new Project("", "Empendoria Verda","P-Territori", "Espai Ambiental", "", "Pendent", "Contracte", "Mini", "Ess", "", "", ""),
                        new Project("", "Formació y Emprendimiento verde","P-Territori", "Fundació biodiversitat", "", "Pendent", "Contracte", "Gran", "Ess", "Sep21", "Des21", ""),
                        new Project("", "Juntes Emprenem amb","Formació", "LabCoop", "", "Pendent", "Subvenció", "Mitjant", "Dones", "Oct21", "Des21", ""),
                        new Project("", "Escola Popular d'Economia Feminista","Formació", "Cooperació", "", "Pendent", "Contracte", "Petit", "Dones", "", "", "")
                ));
    }*/

    @DeleteMapping("/projects/delete/{id}")
    public Project deleteProjectById(@PathVariable Long id) {
        Project project = projectsRepository.findById(id).orElseThrow(ProjectNotFoundException::new);
        projectsRepository.deleteById(id);
        return project;
    }

}