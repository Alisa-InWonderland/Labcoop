package org.factoriaf5.labcoop.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.List;

@Component

public class SampleDataLoaderFacturaEmitida {

    private final FacturasEmitidasRepository facturasEmitidasRepository;

    @Autowired
    public SampleDataLoaderFacturaEmitida(FacturasEmitidasRepository facturasEmitidasRepository) {
        this.facturasEmitidasRepository = facturasEmitidasRepository;
    }

    @PostConstruct
    private void cargarDatosDePrueba2() {
        facturasEmitidasRepository.saveAll(
                List.of(
                        new FacturaEmitida(33, "feb2022", 3, 3, 3, true),
                        new FacturaEmitida(22, "ene22", 2, 2, 2, true))
                );
    }

}
