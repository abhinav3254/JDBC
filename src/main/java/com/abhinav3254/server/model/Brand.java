package com.abhinav3254.server.model;


import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "brand")
public class Brand {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 255)
    private String name;

    @Lob
    @Column(nullable = false)
    private byte[] logo;

}
