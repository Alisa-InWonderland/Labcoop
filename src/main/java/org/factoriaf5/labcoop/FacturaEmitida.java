package org.factoriaf5.labcoop;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="facturasEmitidas")
public class FacturaEmitida {

    private int numFactura;
    private String fecha;
    private int importe;
    private int iva;
    private int total;
    private boolean cobrado;


    public FacturaEmitida(int numFactura, String fecha, int importe, int iva, int total, boolean cobrado) {
        this.numFactura = numFactura;
        this.fecha = fecha;
        this.importe = importe;
        this.iva = iva;
        this.total = total;
        this.cobrado = cobrado;
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
