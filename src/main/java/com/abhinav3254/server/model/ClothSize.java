package com.abhinav3254.server.model;

import lombok.Data;

import javax.persistence.*;

import javax.persistence.*;

@Entity
@Table(name = "cloth_size")
public class ClothSize {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "cloth_id", nullable = false)
    private Cloth cloth;

    @Column(name = "size", length = 1)
    private char size;

}
