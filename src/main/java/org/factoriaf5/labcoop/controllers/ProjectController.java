package org.factoriaf5.labcoop.controllers;

import org.factoriaf5.labcoop.Project;
import org.factoriaf5.labcoop.ProjectNotFoundException;
import org.factoriaf5.labcoop.repository.ProjectsRepository;
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

    @GetMapping("/projects/{id}")
    public Project findProject(@PathVariable Long id) {
        return projectsRepository.findById(id).orElseThrow(ProjectNotFoundException::new);

    }
    @PostMapping("/projects")
        public Project createNewProject(@RequestBody Project project) {
            return projectsRepository.save(project);
        }

    // provisional
    @PostConstruct
    private void cargarDatosDePrueba() {
        projectsRepository.saveAll(
                List.of(
                        new Project("21F010", "Emprendoria i Génere 2022", "AJ Montornés Del Vallés", "", "Aprobada", "Contrato", "Mitjant", "Dones", "abr22", "nov22", ""),
                        new Project("21F011", "Formació en cures", "Aj Terrassa", "", "Aprovada", "Contracte", "Petit", "cures", "gen22", "març22", ""),
                        new Project("21F008", "Formació Socis", "Som Energía", "", "Aprobada", "Contracte", "petit", "ess", "Set22", "Gen22", ""),
                        new Project("21F012", "Tallers Viertuals", "Aracoop", "", "Aprovada", "Subvenció", "Gran", "ess", "des21", "oct22", ""),
                        new Project("", "Singulars Cooperative Joves", "LabCoop", "", "Aprovada", "Subvensio", "Gran", "joves", "Nov21", "Septembre-22", ""),
                        new Project("", "Empendoria verda", "Espai ambiental", "", "Pendent", "Contracte", "Mini", "ess", "", "", ""),
                        new Project("", "Formació y emprendimiento verde", "Fundación biodiversitat", "", "Pendent", "Contracte", "Gran", "ess", "Sep21", "Des21", ""),
                        new Project("", "Juntes Emprenem amb", "LabCoop", "", "Pendent", "Subvenció", "Mitjant", "dones", "Oct21", "Des21", ""),
                        new Project("", "Escola popular d'economia feminista", "Cooperació", "", "Pendent", "Contracte", "petit", "dones", "", "", "")
                ));
    }

    @DeleteMapping("/projects/delete/{id}")
    public Project deleteProjectById(@PathVariable Long id) {
        Project project = projectsRepository.findById(id).orElseThrow(ProjectNotFoundException::new);
        projectsRepository.deleteById(id);
        return project;
    }

}