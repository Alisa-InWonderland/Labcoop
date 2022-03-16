package org.factoriaf5.labcoop.controllers;

import org.factoriaf5.labcoop.ProjectNotFoundException;
import org.factoriaf5.labcoop.repository.FacturaEmitida;

import org.factoriaf5.labcoop.repository.FacturasEmitidasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class FacturaEmitidaController {

    private final FacturasEmitidasRepository facturasEmitidasRepository;

    @Autowired
    public FacturaEmitidaController(FacturasEmitidasRepository facturasEmitidasRepository) {
        this.facturasEmitidasRepository = facturasEmitidasRepository;
    }


    @GetMapping("/facturas-emitidas")
    public List<FacturaEmitida> allFacturasEmitidas() {
        return facturasEmitidasRepository.findAll();
    }

//    @GetMapping("/projects/{id}")
//    public Project findProject(@PathVariable Long id) {
//        return projectsRepository.findById(id).orElseThrow(ProjectNotFoundException::new);
//
//    }
//
//    @PostMapping("/projects")
//        public Project createNewProject(@RequestBody Project project) {
//            return projectsRepository.save(project);
//        }
//
//
//
//    @DeleteMapping("/projects/delete/{id}")
//    public Project deleteProjectById(@PathVariable Long id) {
//        Project project = projectsRepository.findById(id).orElseThrow(ProjectNotFoundException::new);
//        projectsRepository.deleteById(id);
//        return project;
//    }

}