package org.factoriaf5.labcoop;

import org.factoriaf5.labcoop.repository.Project;
import org.factoriaf5.labcoop.repository.ProjectsRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
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

    void setUp() {
        projectsRepository.deleteAll();
    }

    @Test
    void loadsTheProjectsPage() throws Exception {

        mockMvc.perform(get("/projects"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[*]", hasSize(9)))
                .andExpect(jsonPath("$[0].name", equalTo("Emprendoria i Génere 2022")))
                .andExpect(jsonPath("$[0].code", equalTo("21F010")));
    }


    private void addSampleProjects(){

    /*private void addSampleProjects(){

        List<Project> projects = List.of(
                new Project("21F010", "Emprendoria i Génere 2022", "AJ Montornés Del Vallés", "", "Aprobada", "Contrato", "Mitjant", "Dones", "abr22", "nov22"),
                new Project("21F011", "Formació en cures", "Aj Terrassa", "", "Aprovada", "Contracte", "Petit", "cures", "gen22", "març22"),
                new Project("21F008", "Formació Socis", "Som Energía", "", "Aprobada", "Contracte", "petit", "ess", "Set22", "Gen22"),
                new Project("", "Singulars Cooperative Joves", "LabCoop", "", "Aprovada", "Subvensio", "Gran", "joves", "Nov21", "Septembre-22"),
                new Project("", "Empendoria verda", "Espai ambiental", "", "Pendent", "Contracte", "Mini", "ess", "", ""),
                new Project("", "Formació y emprendimiento verde", "Fundación biodiversidad", "", "Pendent", "Contracte", "Gran", "ess", "Sep21", "Des21"),
                new Project("", "Juntes Emprenem amb", "LabCoop", "", "Pendent", "Subvenció", "Mitjant", "dones", "Oct21", "Des21"),
                new Project("", "Escola popular d'economia feminista", "Cooperació", "", "Pendent", "Contracte", "petit", "dones", "", ""));*/ }







    @Disabled
    @Test
    void findProjectsById() throws Exception {
        mockMvc.perform(get("/projects/3"))
                .andExpect(jsonPath("$.name", equalTo("Formació Socis")))
                .andExpect(jsonPath("$.code", equalTo("21F008")));
    }

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
        Project project = projectsRepository.save(new Project("", "Formació y emprendimiento verde","P-Territori", "Fundación biodiversidad", "", "Pendent", "Contracte", "Gran", "ess", "Sep21", "Des21", 1, 1, 1, 1, 1, 1, 1, "", "","",null, null));
        mockMvc.perform(delete("/projects/delete/" + project.getId()))
                .andExpect(status().is(200));

        assertThat(projectsRepository.findById(project.getId()), equalTo(Optional.empty()));
    }
}
