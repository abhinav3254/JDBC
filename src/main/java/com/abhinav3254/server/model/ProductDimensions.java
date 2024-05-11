package com.abhinav3254.server.model;


import lombok.Data;

import javax.persistence.*;


@Data
@Entity
@Table(name = "product_dimensions")
public class ProductDimensions {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String length;

    @Column
    private String width;

    @Column
    private String height;

}
