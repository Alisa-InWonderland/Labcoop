package org.factoriaf5.labcoop.repository;

import org.factoriaf5.labcoop.repository.Project;

import javax.persistence.*;

@Entity
@Table(name="facturasEmitidas")
public class FacturaEmitida {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private int numFactura;
    private String fecha;
    private int importe;
    private int iva;
    private int total;
    private boolean cobrado;

    @OneToMany(orphanRemoval = true)
    @JoinTable(name = "project",
            joinColumns = @JoinColumn(name = "factura_emitida_id"),
            inverseJoinColumns = @JoinColumn(name = "project_id"))
    private Project project;

    public Project getProject() {
        return project;
    }

    public void setProject(Project project) {
        this.project = project;
    }


    public FacturaEmitida(int numFactura, String fecha, int importe, int iva, int total, boolean cobrado) {
        this.numFactura = numFactura;
        this.fecha = fecha;
        this.importe = importe;
        this.iva = iva;
        this.total = total;
        this.cobrado = cobrado;
    }

    public FacturaEmitida() {

    }

    public int getNumFactura() {
        return numFactura;
    }

    public void setNumFactura(int numFactura) {
        this.numFactura = numFactura;
    }

    public String getFecha() {
        return fecha;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }


    public int getImporte() {
        return importe;
    }

    public void setImporte(int importe) {
        this.importe = importe;
    }

    public int getIva() {
        return iva;
    }

    public void setIva(int iva) {
        this.iva = iva;
    }

    public int getTotal() {
        return total;
    }

    public void setTotal(int total) {
        this.total = total;
    }

    public boolean isCobrado() {
        return cobrado;
    }

    public void setCobrado(boolean cobrado) {
        this.cobrado = cobrado;
    }

    @Override
    public String toString() {
        return "FacturaEmitida{" +
                "numFactura=" + numFactura +
                ", fecha='" + fecha + '\'' +
                ", cliente='" + '\'' +
                ", importe=" + importe +
                ", iva=" + iva +
                ", total=" + total +
                ", cobrado=" + cobrado +
                '}';
    }
}
