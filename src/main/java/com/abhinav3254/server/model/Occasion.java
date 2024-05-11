package com.abhinav3254.server.model;


import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "occasion")
public class Occasion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

}
