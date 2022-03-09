package org.factoriaf5.labcoop.repository;


import org.factoriaf5.labcoop.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjectsRepository extends JpaRepository<Project, Long> {
    List<Project> findProjectsByCode(String code);
    List<Project> findProjectsById(Long id);
    List<Project> deleteProjectById(Long id);
}
