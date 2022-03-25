package org.factoriaf5.labcoop.controllers;

import org.factoriaf5.labcoop.repository.*;
import org.factoriaf5.labcoop.ProjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class ProjectController {

    private final ProjectsRepository projectsRepository;
    private final FacturasRecibidasRepository facturasRecibidasRepository;
    private final FacturasEmitidasRepository facturasEmitidasRepository;
    private final HorasTrabajadorasRepository horasTrabajadorasRepository;


    @Autowired
    public ProjectController(ProjectsRepository projectsRepository, FacturasRecibidasRepository facturasRecibidasRepository, FacturasEmitidasRepository facturasEmitidasRepository, HorasTrabajadorasRepository horasTrabajadorasRepository) {
        this.projectsRepository = projectsRepository;
        this.facturasRecibidasRepository = facturasRecibidasRepository;
        this.facturasEmitidasRepository = facturasEmitidasRepository;
        this.horasTrabajadorasRepository = horasTrabajadorasRepository;
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

    /*@GetMapping("/facturas-recibidas")
    public List<Project> allInvoicesProject() {
        return projectsRepository.findAll();
    }*/

    @GetMapping("/facturas-recibidas/{id}")

    public Project findFacturaR(@PathVariable("id") Long id) {

        return projectsRepository.findById(id).orElseThrow(ProjectNotFoundException::new);
    }

    @GetMapping("/horas/{id}")
    public Project horasTrabajadoras(@PathVariable("id") Long id) {
        return projectsRepository.findById(id).orElseThrow(ProjectNotFoundException::new);
    }

    @GetMapping("/horas")
    public List<Project> horasTrabajadas() {
        return projectsRepository.findAll();
    }

}

//    @PutMapping("/employees/{id}")
//    public ResponseEntity<Employee> updateEmployee(@PathVariable(value = "id") Long employeeId,
//                                                   @Valid @RequestBody Employee employeeDetails) throws ResourceNotFoundException {
//        Employee employee = employeeRepository.findById(employeeId)
//                .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + employeeId));
//
//        employee.setEmailId(employeeDetails.getEmailId());
//        employee.setLastName(employeeDetails.getLastName());
//        employee.setFirstName(employeeDetails.getFirstName());
//        final Employee updatedEmployee = employeeRepository.save(employee);
//        return ResponseEntity.ok(updatedEmployee);
