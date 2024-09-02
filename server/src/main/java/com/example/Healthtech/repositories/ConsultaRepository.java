package com.example.Healthtech.repositories;

import com.example.Healthtech.models.consulta.Consulta;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConsultaRepository extends JpaRepository<Consulta, Long> {

    Page<Consulta> findByActivoTrue(Pageable paginacion);

}
