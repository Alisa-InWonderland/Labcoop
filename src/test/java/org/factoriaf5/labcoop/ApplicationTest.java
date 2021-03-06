package org.factoriaf5.labcoop;

import org.factoriaf5.labcoop.repository.Project;
import org.factoriaf5.labcoop.repository.ProjectsRepository;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Optional;


import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
public class ApplicationTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    ProjectsRepository projectsRepository;

    void setUp() {
        projectsRepository.deleteAll();
    }

    @Test
    void loadsTheProjectsPage() throws Exception {

        mockMvc.perform(get("/projects"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[*]", hasSize(10)))
                .andExpect(jsonPath("$[0].name", equalTo("Emprendoria i Génere 2022")))
                .andExpect(jsonPath("$[0].code", equalTo("21F010")));
    }


    @Test
    void findProjectsById() throws Exception {
        mockMvc.perform(get("/projects/3"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name", is("Formació Socis")))
                .andExpect(jsonPath("$.code", is("21F008")));
    }

    @Disabled
    @Test
    void createANewProject() throws Exception {
        setUp();
        mockMvc.perform(post("/projects")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"name\": \"Emprendoria 2022\"}")
        ).andExpect(status().is(200));

        var projects = projectsRepository.findAll();

        assertThat(projects, contains(hasProperty("name", is("Emprendoria 2022"))
        ));

    }

    @Test
    void deleteProject() throws Exception{
        Project project = projectsRepository.save(new Project("", "Formació y emprendimiento verde","P-Territori", "Fundación biodiversidad", "", "Pendent", "Contracte", "Gran", "ess", "Sep21", "Des21", 1, 1, 1, 1, 1, 1, 1, "", "","", 1, 1, 1, 1, 1, 1, 1,null, null, null));
        mockMvc.perform(delete("/projects/delete/" + project.getId()))
                .andExpect(status().is(200));

        assertThat(projectsRepository.findById(project.getId()), equalTo(Optional.empty()));
    }
}
