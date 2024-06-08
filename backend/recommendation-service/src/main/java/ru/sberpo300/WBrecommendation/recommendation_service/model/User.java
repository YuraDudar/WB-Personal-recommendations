package ru.sberpo300.WBrecommendation.recommendation_service.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;
import java.sql.Date;

@Entity
@Table(name = "users")
@Data
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

}