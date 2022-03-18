package org.factoriaf5.labcoop.controllers;

import org.factoriaf5.labcoop.repository.Project;
import org.factoriaf5.labcoop.ProjectNotFoundException;
import org.factoriaf5.labcoop.repository.ProjectsRepository;
import org.factoriaf5.labcoop.repository.FacturasRecibidasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class ProjectController {

    private final ProjectsRepository projectsRepository;
    private final FacturasRecibidasRepository facturasRecibidasRepository;

    @Autowired
    public ProjectController(ProjectsRepository projectsRepository, FacturasRecibidasRepository facturasRecibidasRepository) {
        this.projectsRepository = projectsRepository;
        this.facturasRecibidasRepository = facturasRecibidasRepository;
    }

    @GetMapping("/projects")
    public List<Project> allProjects() {
        return projectsRepository.findAll();
    }

    @GetMapping("/facturas-emitidas")
    public List<Project> allProjectFacturasE() {
        return projectsRepository.findAll();
    }

    @GetMapping("/facturas-emitidas/{id}")
 public Project findFacturaE(@PathVariable Long id) {
        return projectsRepository.findById(id).orElseThrow(ProjectNotFoundException::new);

    }

    @GetMapping("/facturas-recibidas")
    public List<Project> allInvoicesProject() {
        return projectsRepository.findAll();
    }

    @GetMapping("/facturas-recibidas/{id}")
    public Project findFacturaR(@PathVariable("id") Long id) {
        return projectsRepository.findById(id).orElseThrow(ProjectNotFoundException::new);
    }

    @GetMapping("/projects/{id}")
    public Project findProject(@PathVariable Long id) {
        return projectsRepository.findById(id).orElseThrow(ProjectNotFoundException::new);
    }


    @PostMapping("/projects")
        public Project createNewProject(@RequestBody Project project) {
            return projectsRepository.save(project);
        }

    @DeleteMapping("/projects/delete/{id}")
    public Project deleteProjectById(@PathVariable Long id) {
        Project project = projectsRepository.findById(id).orElseThrow(ProjectNotFoundException::new);
        projectsRepository.deleteById(id);
        return project;
    }

}