package org.factoriaf5.labcoop.repository;

public class HorasTrabajadoras {

    private String cliente;
    private int numHorasAsignadas;
    private int numHorasEjecutadas;
    private int numHorasPendientes;
    private int precioHora;

    public HorasTrabajadoras(String cliente, int numHorasAsignadas, int numHorasEjecutadas, int numHorasPendientes, int precioHora) {
        this.cliente = cliente;
        this.numHorasAsignadas = numHorasAsignadas;
        this.numHorasEjecutadas = numHorasEjecutadas;
        this.numHorasPendientes = numHorasPendientes;
        this.precioHora = precioHora;
    }

    public String getCliente() {
        return cliente;
    }

    public void setCliente(String cliente) {
        this.cliente = cliente;
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

    @Override
    public String toString() {
        return "HorasTrabajadoras{" +
                ", cliente='" + cliente + '\'' +
                ", numHorasAsignadas=" + numHorasAsignadas +
                ", numHorasEjecutadas=" + numHorasEjecutadas +
                ", numHorasPendientes=" + numHorasPendientes +
                ", precioHora=" + precioHora +
                '}';
    }

}
