package org.factoriaf5.labcoop;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProjectController {


    @GetMapping("/")
    public List<Project> allProjects() {
        return List.of(
                new Project("Project1"),
                new Project("Project2")
        );
    }
}