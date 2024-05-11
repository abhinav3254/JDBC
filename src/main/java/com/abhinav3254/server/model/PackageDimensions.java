package com.abhinav3254.server.model;


import lombok.Data;

import javax.persistence.*;


@Data
@Entity
@Table(name = "package_dimensions")
public class PackageDimensions {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String length;

    @Column
    private String width;

    @Column
    private String height;

    @Column
    private String weight;

}

