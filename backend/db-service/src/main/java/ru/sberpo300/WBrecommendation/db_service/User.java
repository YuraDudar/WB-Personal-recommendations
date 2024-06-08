package ru.sberpo300.WBrecommendation.db_service;

import jakarta.persistence.*;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.sql.Date;

@Entity
@Table(name = "users")
public class User {
    @Id
    private Long uid;

    @Column(nullable = false)
    private String fullName;

    @Column(nullable = false)
    private String gender;

    @Column(nullable = false)
    private Date birthdate;

    @Column
    private LocalDateTime lastOnline;

    @Column
    private Double averageTime;

    @Column
    private String region;

    @Column
    private String device;

    // Getters and setters

    public Long getUid() {
        return uid;
    }

    public void setUid(Long uid) {
        this.uid = uid;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Date getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(Date birthdate) {
        this.birthdate = birthdate;
    }

    public LocalDateTime getLastOnline() {
        return lastOnline;
    }

    public void setLastOnline(LocalDateTime lastOnline) {
        this.lastOnline = lastOnline;
    }

    public Double getAverageTime() {
        return averageTime;
    }

    public void setAverageTime(Double averageTime) {
        this.averageTime = averageTime;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public String getDevice() {
        return device;
    }

    public void setDevice(String device) {
        this.device = device;
    }
}

