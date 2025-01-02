package com.example.demo.Contact;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Contact {
    @Id
    @GeneratedValue
    private Integer id;

    private String Name;

    private String Jop;

    private String Email;

    private String Location;

    private String Phone;

    private String Status;

    // Default constructor
    public Contact() {
    }

    // Parameterized constructor
    Contact(Integer id, String Name, String Jop, String Email, String Location,
            String Phone, String Status) {
        this.id = id;
        this.Name = Name;
        this.Jop = Jop;
        this.Email = Email;
        this.Location = Location;
        this.Phone = Phone;
        this.Status = Status;
    }

    // Getters and Setters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return Name;
    }

    public void setName(String Name) {
        this.Name = Name;
    }

    public String getJop() {
        return Jop;
    }

    public void setJop(String Jop) {
        this.Jop = Jop;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String Email) {
        this.Email = Email;
    }

    public String getLocation() {
        return Location;
    }

    public void setLocation(String Location) {
        this.Location = Location;
    }

    public String getPhone() {
        return Phone;
    }

    public void setPhone(String Phone) {
        this.Phone = Phone;
    }

    public String getStatus() {
        return Status;
    }

    public void setStatus(String Status) {
        this.Status = Status;
    }
}
