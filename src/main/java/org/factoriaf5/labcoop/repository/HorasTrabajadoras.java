package org.factoriaf5.labcoop.repository;

import javax.persistence.*;

@Entity
@Table (name="horasTrabajadoras")
public class HorasTrabajadoras {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;
    private String cliente;
    private String trabajador;
    private String socias;
    private int numHorasAsignadas;
    private int numHorasEjecutadas;
    private int numHorasPendientes;
    private int precioHora;
    private int donePrice;

    public HorasTrabajadoras(Long id, String cliente, String trabajador, String socias, int numHorasAsignadas, int numHorasEjecutadas, int numHorasPendientes, int precioHora, int donePrice) {
        this.id = id;
        this.cliente = cliente;
        this.trabajador = trabajador;
        this.socias = socias;
        this.numHorasAsignadas = numHorasAsignadas;
        this.numHorasEjecutadas = numHorasEjecutadas;
        this.numHorasPendientes = numHorasPendientes;
        this.precioHora = precioHora;
        this.donePrice = donePrice;
    }

    public HorasTrabajadoras() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCliente() {
        return cliente;
    }

    public void setCliente(String cliente) {
        this.cliente = cliente;
    }

    public String getTrabajador() {
        return trabajador;
    }

    public void setTrabajador(String trabajador) {
        this.trabajador = trabajador;
    }
    public String getSocias() {
        return socias;
    }

    public void setSocias(String socias) {
        this.socias = socias;
    }

    public int getNumHorasAsignadas() {
        return numHorasAsignadas;
    }

    public void setNumHorasAsignadas(int numHorasAsignadas) {
        this.numHorasAsignadas = numHorasAsignadas;
    }

    public int getNumHorasEjecutadas() {
        return numHorasEjecutadas;
    }

    public void setNumHorasEjecutadas(int numHorasEjecutadas) {
        this.numHorasEjecutadas = numHorasEjecutadas;
    }

    public int getNumHorasPendientes() {
        return numHorasPendientes;
    }

    public void setNumHorasPendientes(int numHorasPendientes) {
        this.numHorasPendientes = numHorasPendientes;
    }

    public int getPrecioHora() {
        return precioHora;
    }

    public void setPrecioHora(int precioHora) {
        this.precioHora = precioHora;
    }

    public int getDonePrice() {
        return donePrice;
    }

    public void setDonePrice(int donePrice) {
        this.donePrice = donePrice;
    }

    @Override
    public String toString() {
        return "HorasTrabajadoras{" +
                "cliente='" + cliente + '\'' +
                ", trabajador='" + trabajador + '\'' +
                ", socias='" + socias + '\'' +
                ", numHorasAsignadas=" + numHorasAsignadas +
                ", numHorasEjecutadas=" + numHorasEjecutadas +
                ", numHorasPendientes=" + numHorasPendientes +
                ", precioHora=" + precioHora +
                ", donePrice=" + donePrice +
                '}';
    }
}
