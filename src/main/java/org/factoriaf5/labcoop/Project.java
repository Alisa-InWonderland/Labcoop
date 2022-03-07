package org.factoriaf5.labcoop;

public class Project {
    private final String name;
    private String target;
    private int code;
    private int date;
    private  String manager;
    private String client;
    private String status;
    private String type;
    private String size;

    public Project(String name, String target, int code, int date, String manager, String client, String status, String type, String size) {
        this.name = name;
        this.target = target;
        this.code = code;
        this.date = date;
        this.manager = manager;
        this.client = client;
        this.status = status;
        this.type = type;
        this.size = size;
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

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public int getDate() {
        return date;
    }

    public void setDate(int date) {
        this.date = date;
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
                "name='" + name + '\'' +
                ", target='" + target + '\'' +
                ", code=" + code +
                ", date=" + date +
                ", manager='" + manager + '\'' +
                ", client='" + client + '\'' +
                ", status='" + status + '\'' +
                ", type='" + type + '\'' +
                ", size='" + size + '\'' +
                '}';
    }
}