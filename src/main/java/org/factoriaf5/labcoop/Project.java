package org.factoriaf5.labcoop;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "projects")
public class Project implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String code;
    private String name;
    private String client;
    private String manager;
    private String status;
    private String type;
    private String size;
    private String target;
    private String startdate;
    private String enddate;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Project() {

    }


    public Project(String code, String name, String client, String manager, String status, String type, String size, String target,  String startdate, String enddate) {

        this.code = code;
        this.name = name;
        this.client = client;
        this.manager = manager;
        this.status = status;
        this.type = type;
        this.size = size;
        this.target = target;
        this.startdate = startdate;
        this.enddate = enddate;

    }


    public String getName() {
        return name;
    }

    public String getArea() {
        return target;
    }

    public void setArea(String area) {
        this.target = target;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getStartdate() {
        return startdate;
    }

    public void setEnddate(int date) {
        this.enddate = enddate;
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

    @Override
    public String toString() {
        return "Project{" +
                ", code='" + code + '\'' +
                ", name='" + name + '\'' +
                ", client='" + client + '\'' +
                ", manager='" + manager + '\'' +
                ", status='" + status + '\'' +
                ", type='" + type + '\'' +
                ", size='" + size + '\'' +
                ", target='" + target + '\'' +
                ", startdate='" + startdate + '\'' +
                ", enddate='" + enddate + '\'' +
                '}';
    }
}