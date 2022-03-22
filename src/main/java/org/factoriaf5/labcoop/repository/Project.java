package org.factoriaf5.labcoop.repository;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;


@Entity
@Table(name = "projects")
public class Project implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;
    private String code;
    private String name;
    private String area;
    private String client;
    private String manager;
    private String status;
    private String type;
    private String size;
    private String target;
    private String startdate;
    private String enddate;
    private int previousBudget;
    private int previousCoCost;
    private int previousExtExpenses;
    private int workersExpenses;
    private int managePercent;
    private int otherExpenses;
    private int margin;

    @Lob
    private String comments;
    @Lob
    private String observationsA;
    @Lob
    private String observationsC;



    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    private FacturaEmitida facturaEmitida;


    @OneToMany(cascade = CascadeType.ALL)
    private List<FacturaRecibida> facturasRecibidas;


    public Project() {

    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }



    public Project(String code, String name, String area, String client, String manager, String status, String type, String size, String target, String startdate, String enddate, int previousBudget, int previousCoCost, int previousExtExpenses, int workersExpenses, int managePercent, int otherExpenses, int margin, String comments, String observationsA, String observationsC, FacturaEmitida facturaEmitida, List<FacturaRecibida> facturasRecibidas) {
        this.code = code;
        this.name = name;
        this.area = area;
        this.client = client;
        this.manager = manager;
        this.status = status;
        this.type = type;
        this.size = size;
        this.target = target;
        this.startdate = startdate;
        this.enddate = enddate;
        this.previousBudget = previousBudget;
        this.previousCoCost = previousCoCost;
        this.previousExtExpenses = previousExtExpenses;
        this.workersExpenses = workersExpenses;
        this.managePercent = managePercent;
        this.otherExpenses = otherExpenses;
        this.margin = margin;
        this.comments = comments;
        this.observationsA = observationsA;
        this.observationsC = observationsC;
        this.facturaEmitida = facturaEmitida;
        this.facturasRecibidas = facturasRecibidas;
    }

    public String getName() {
        return name;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getManager() {
        return manager;
    }

    public void setManager(String manager) {
        this.manager = manager;
    }

    public String getClient() {
        return client;
    }

    public void setClient(String client) {
        this.client = client;
    }

    public String getTarget() {
        return target;
    }

    public void setTarget(String target) {
        this.target = target;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStartdate() {
        return startdate;
    }

    public void setStartdate(String startdate) {
        this.startdate = startdate;
    }

    public String getEnddate() {
        return enddate;
    }

    public void setEnddate(String enddate) {
        this.enddate = enddate;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }



    public int getPreviousBudget() {
        return previousBudget;
    }

    public void setPreviousBudget(int previousBudget) {
        this.previousBudget = previousBudget;
    }

    public int getPreviousCoCost() {
        return previousCoCost;
    }

    public void setPreviousCoCost(int previousCoCost) {
        this.previousCoCost = previousCoCost;
    }

    public int getPreviousExtExpenses() {
        return previousExtExpenses;
    }

    public void setPreviousExtExpenses(int previousExtExpenses) {
        this.previousExtExpenses = previousExtExpenses;
    }

    public int getWorkersExpenses() {
        return workersExpenses;
    }

    public void setWorkersExpenses(int workersExpenses) {
        this.workersExpenses = workersExpenses;
    }

    public int getManagePercent() {
        return managePercent;
    }

    public void setManagePercent(int managePercent) {
        this.managePercent = managePercent;
    }

    public int getOtherExpenses() {
        return otherExpenses;
    }

    public void setOtherExpenses(int otherExpenses) {
        this.otherExpenses = otherExpenses;
    }

    public int getMargin() {
        margin = previousBudget - previousCoCost - previousExtExpenses - workersExpenses - managePercent - otherExpenses;
        return margin;
    }

    public void setMargin(int margin) {
        this.margin = margin;
    }

    public String getObservationsA() {
        return observationsA;
    }

    public void setObservationsA(String observationsA) {
        this.observationsA = observationsA;
    }

    public String getObservationsC() {
        return observationsC;
    }

    public void setObservationsC(String observationsC) {
        this.observationsC = observationsC;
    }

    public void setFacturaEmitida(FacturaEmitida facturaEmitida) {
        this.facturaEmitida = facturaEmitida;
    }

    public FacturaEmitida getFacturaEmitida() {
        return facturaEmitida;
    }

    public List<FacturaRecibida> getFacturasRecibidas() {
        return facturasRecibidas;
    }

    public void setFacturasRecibidas(List<FacturaRecibida> facturasRecibidas) {
        this.facturasRecibidas = facturasRecibidas;
    }

    @Override
    public String toString() {
        return "Project{" +
                "id=" + id +
                ", code='" + code + '\'' +
                ", name='" + name + '\'' +
                ", area='" + area + '\'' +
                ", client='" + client + '\'' +
                ", manager='" + manager + '\'' +
                ", status='" + status + '\'' +
                ", type='" + type + '\'' +
                ", size='" + size + '\'' +
                ", target='" + target + '\'' +
                ", startdate='" + startdate + '\'' +
                ", enddate='" + enddate + '\'' +
                ", previousBudget=" + previousBudget +
                ", previousCoCost=" + previousCoCost +
                ", previousExtExpenses=" + previousExtExpenses +
                ", workersExpenses=" + workersExpenses +
                ", managePercent=" + managePercent +
                ", otherExpenses=" + otherExpenses +
                ", margin=" + margin +
                ", comments='" + comments + '\'' +
                ", observationsA='" + observationsA + '\'' +
                ", observationsC='" + observationsC + '\'' +
                ", facturaEmitida=" + facturaEmitida +
                ", facturasRecibidas=" + facturasRecibidas +
                '}';
    }
}
