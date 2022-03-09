package org.factoriaf5.labcoop;

import org.factoriaf5.labcoop.repository.ProjectsRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.mock.http.server.reactive.MockServerHttpRequest;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;
import java.util.Optional;


import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import static org.springframework.mock.http.server.reactive.MockServerHttpRequest.put;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
public class ApplicationTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    ProjectsRepository projectsRepository;

    @BeforeEach
    void setUp() {
        projectsRepository.deleteAll();
    }

    @Test
    void loadsTheProjectsPage() throws Exception {

        addSampleProjects();

        mockMvc.perform(get("/projects"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[*]", hasSize(0)))
                .andExpect(jsonPath("$[0].name", equalTo("Emprendoria i Génere 2022")))
                .andExpect(jsonPath("$[0].code", equalTo("21F010")));
    }

    private void addSampleProjects(){
        List>


    }


    @Test
    void findProjectsById() throws Exception {
        mockMvc.perform(get("/projects/1"))
                .andExpect(jsonPath("$.name", equalTo("Emprendoria i Génere 2022")))
                .andExpect(jsonPath("$.code", equalTo("21F010")));
    }


    @Test
    void createANewProject() throws Exception {

        mockMvc.perform(post("/projects")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"name\": \"Emprendoria 2022\"}")
        ).andExpect(status().is(200));

        var projects = projectsRepository.findAll();

        assertThat(projects, contains(hasProperty("name", is("Emprendoria 2022"))


        ));


    }
}
