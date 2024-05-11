package com.abhinav3254.server.model;


import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;


@Data
@Entity
@Table(name = "cloth")
public class Cloth {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", length = 255)
    private String name;

    @Column(name = "status")
    private boolean status;

    @Column(name = "price", precision = 10, scale = 2, nullable = false)
    private BigDecimal price;

    @Column(name = "discount", precision = 10, scale = 2, nullable = false)
    private BigDecimal discount;

    @Column(name = "gender", length = 6, nullable = false)
    private String gender;

    @Column(name = "material", length = 255)
    private String material;

    @Column(name = "pattern", length = 255)
    private String pattern;

    @Column(name = "sleeve_length", length = 255)
    private String sleeveLength;

    @Column(name = "neck_style", length = 255)
    private String neckStyle;

    @Column(name = "fit", length = 255)
    private String fit;

    @Column(name = "description", columnDefinition = "TEXT")
    private String description;

    @Column(name = "care_instructions", columnDefinition = "TEXT")
    private String careInstructions;

    @Column(name = "country_of_origin", length = 255)
    private String countryOfOrigin;

}
