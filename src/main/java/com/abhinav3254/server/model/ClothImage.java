package com.abhinav3254.server.model;


import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "cloth_image")
public class ClothImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Lob
    @Column(nullable = false)
    private byte[] image;

    @ManyToOne
    @JoinColumn(name = "cloth_id", referencedColumnName = "id")
    private Cloth cloth;

}

