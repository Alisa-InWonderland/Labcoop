package org.factoriaf5.labcoop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;




@Repository
public interface HorasTrabajadorasRepository extends JpaRepository<HorasTrabajadoras, Long> {

}