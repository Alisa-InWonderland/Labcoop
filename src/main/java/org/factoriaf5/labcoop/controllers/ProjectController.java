package org.factoriaf5.labcoop.controllers;

import org.factoriaf5.labcoop.repository.Project;
import org.factoriaf5.labcoop.repository.FacturaEmitida;
import org.factoriaf5.labcoop.ProjectNotFoundException;
import org.factoriaf5.labcoop.repository.ProjectsRepository;
import org.factoriaf5.labcoop.repository.FacturasRecibidasRepository;
import org.factoriaf5.labcoop.repository.FacturasEmitidasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class ProjectController {

    private final ProjectsRepository projectsRepository;
    private final FacturasRecibidasRepository facturasRecibidasRepository;
    private final FacturasEmitidasRepository facturasEmitidasRepository;


    @Autowired
    public ProjectController(ProjectsRepository projectsRepository, FacturasRecibidasRepository facturasRecibidasRepository, FacturasEmitidasRepository facturasEmitidasRepository) {
        this.projectsRepository = projectsRepository;
        this.facturasRecibidasRepository = facturasRecibidasRepository;
        this.facturasEmitidasRepository = facturasEmitidasRepository;
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


    @DeleteMapping("/projects/delete/{id}")
    public Project deleteProjectById(@PathVariable Long id) {
        Project project = projectsRepository.findById(id).orElseThrow(ProjectNotFoundException::new);
        projectsRepository.deleteById(id);
        return project;
    }


    @GetMapping("/facturas-emitidas")
    public List<Project> allProjectFacturasE() {
        return projectsRepository.findAll();
    }


    @GetMapping("/facturas-recibidas")
    public List<Project> allProjectsFacturasRecibidas() {
        return projectsRepository.findAll();
    }

    @GetMapping("/facturas-emitidas/{id}")
    public Project findFacturaE(@PathVariable Long id) {
        return projectsRepository.findById(id).orElseThrow(ProjectNotFoundException::new);
    }

    @PostMapping("/facturas-emitidas")
    public FacturaEmitida createNewFacturaE(@RequestBody FacturaEmitida facturaEmitida) {
        return facturasEmitidasRepository.save(facturaEmitida);
    }


    @GetMapping("/facturas-recibidas")
    public List<Project> allInvoicesProject() {
        return projectsRepository.findAll();
    }

    @GetMapping("/facturas-recibidas/{id}")

    public Project findFacturaR(@PathVariable("id") Long id) {

        return projectsRepository.findById(id).orElseThrow(ProjectNotFoundException::new);
    }


}