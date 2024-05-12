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
    private int id;

    @Column(nullable = false, length = 255)
    private String name;

    @Column(nullable = false)
    private boolean status;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal price;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal discount;

    @Column(nullable = false, length = 55)
    private String gender;

    @Column(length = 255)
    private String material;

    @Column(length = 255)
    private String pattern;

    @Column(name = "sleeve_length", length = 255)
    private String sleeveLength;

    @Column(name = "neck_style", length = 255)
    private String neckStyle;

    @Column(length = 255)
    private String fit;

    @Column(length = 255)
    private String description;

    @Column(name = "care_instructions", columnDefinition = "TEXT")
    private String careInstructions;

    @Column(name = "country_of_origin", length = 255)
    private String countryOfOrigin;

    @OneToOne
    @JoinColumn(name = "brand_id")
    private Brand brandId;

    @OneToOne
    @JoinColumn(name = "category_id")
    private Category categoryId;

    @OneToOne
    @JoinColumn(name = "sub_category_id")
    private SubCategory subCategoryId;

    @OneToOne
    @JoinColumn(name = "occasion_id")
    private Occasion occasionId;

    @OneToOne
    @JoinColumn(name = "product_dimensions_id")
    private ProductDimensions productDimensionsId;

    @OneToOne
    @JoinColumn(name = "package_dimensions_id")
    private PackageDimensions packageDimensionsId;

}
