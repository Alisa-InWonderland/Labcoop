package org.factoriaf5.labcoop.repository;
import javax.persistence.*;

@Entity
@Table (name="facturasRecibidas")
public class FacturaRecibida {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "id", nullable = false)
        private Long id;
        private String expenseType;
        private String numInvoices;
        private String date;
        private String supplier;
        private int cost;
        private int iva;
        private double irpf;
        private int total;
        private boolean paidOut;

    public FacturaRecibida(String expenseType, String numInvoices, String date, String supplier, int cost, int iva, double irpf, int total, boolean paidOut) {
        this.expenseType = expenseType;
        this.numInvoices = numInvoices;
        this.date = date;
        this.supplier = supplier;
        this.cost = cost;
        this.iva = iva;
        this.irpf = irpf;
        this.total = total;
        this.paidOut = paidOut;
    }

    public FacturaRecibida() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getExpenseType() {
        return expenseType;
    }

    public void setExpenseType(String expenseType) {
        this.expenseType = expenseType;
    }

    public String getNumInvoices() {
        return numInvoices;
    }

    public void setNumInvoices(String numInvoices) {
        this.numInvoices = numInvoices;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getSupplier() {
        return supplier;
    }

    public void setSupplier(String supplier) {
        this.supplier = supplier;
    }

    public int getCost() {
        return cost;
    }

    public void setCost(int cost) {
        this.cost = cost;
    }

    public int getIva() {
        return iva;
    }

    public void setIva(int iva) {
        this.iva = iva;
    }

    public double getIrpf() {
        return irpf;
    }

    public void setIrpf(double irpf) {
        this.irpf = irpf;
    }

    public int getTotal() {
        return total;
    }

    public void setTotal(int total) {
        this.total = total;
    }

    public boolean isPaidOut() {
        return paidOut;
    }

    public void setPaidOut(boolean paidOut) {
        this.paidOut = paidOut;
    }

    @Override
    public String toString() {
        return "FacturaRecibida{" +
                "id=" + id +
                ", expenseType='" + expenseType + '\'' +
                ", numInvoices='" + numInvoices + '\'' +
                ", date='" + date + '\'' +
                ", supplier='" + supplier + '\'' +
                ", cost=" + cost +
                ", iva=" + iva +
                ", irpf=" + irpf +
                ", total=" + total +
                ", paidOut=" + paidOut +
                '}';
    }
}

