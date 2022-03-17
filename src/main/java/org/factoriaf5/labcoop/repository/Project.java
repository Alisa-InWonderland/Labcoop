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
    @Lob
    private String comments;


    @OneToOne(cascade = CascadeType.ALL, orphanRemoval = true)
    private FacturaEmitida facturaEmitida;

    @ManyToMany
    private List<FacturaRecibida> facturaRecibida;


    public Project() {

    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public Project(String code, String name, String area, String client, String manager, String status, String type, String size, String target, String startdate, String enddate, String comments) {

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
        this.comments = comments;

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

    public FacturaEmitida getfacturaEmitida() {
        return facturaEmitida;
    }

    public void setFacturaEmitida(FacturaEmitida facturaEmitida) {
        this.facturaEmitida = facturaEmitida;
    }

    public FacturaEmitida getFacturaEmitida() {
        return facturaEmitida;
    }

    public List<FacturaRecibida> getFacturaRecibida() {
        return facturaRecibida;
    }

    public void setFacturaRecibida(List<FacturaRecibida> facturaRecibida) {
        this.facturaRecibida = facturaRecibida;
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
                ", comments='" + comments + '\'' +
                '}';
    }
}
