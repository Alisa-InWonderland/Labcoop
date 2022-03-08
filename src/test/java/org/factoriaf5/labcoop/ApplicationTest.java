package org.factoriaf5.labcoop;

import org.factoriaf5.labcoop.repository.ProjectsRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
public class ApplicationTest {

    @Autowired
    MockMvc mockMvc;

    @Test
    void loadsTheProjectsPage() throws Exception{
        mockMvc.perform(get("/projects"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[*]", hasSize(9)))
                .andExpect(jsonPath("$[0].name",equalTo("Emprendoria i Génere 2022")))
                .andExpect(jsonPath("$[0].code",equalTo("21F010")));
    }
}
