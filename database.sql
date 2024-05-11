CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(55) NOT NULL UNIQUE,
    phone VARCHAR(15) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    gender ENUM('male', 'female', 'other') NOT NULL,
    profile_pic BLOB,
    role ENUM('admin', 'user') DEFAULT 'user'
);

CREATE TABLE brand (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    logo BLOB NOT NULL
);

CREATE TABLE cloth_image (
    id INT PRIMARY KEY AUTO_INCREMENT,
    image BLOB NOT NULL,
    cloth_id INT,
    FOREIGN KEY (cloth_id) REFERENCES cloth(id)
);

CREATE TABLE category (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE sub_category (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE occasion (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE product_dimensions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    length VARCHAR(255),
    width VARCHAR(255),
    height VARCHAR(255)
);

CREATE TABLE package_dimensions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    length VARCHAR(255),
    width VARCHAR(255),
    height VARCHAR(255),
    weight VARCHAR(255)
);

CREATE TABLE cloth (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    sizes ENUM('XS', 'S', 'M', 'L', 'XL') DEFAULT NULL,
    status BOOLEAN,
    price DECIMAL(10, 2) NOT NULL,
    discount DECIMAL(10, 2) NOT NULL,
    gender ENUM('male', 'female') NOT NULL,
    material VARCHAR(255),
    pattern VARCHAR(255),
    sleeve_length VARCHAR(255),
    neck_style VARCHAR(255),
    fit VARCHAR(255),
    description TEXT,
    care_instructions TEXT,
    country_of_origin VARCHAR(255)
);


CREATE TABLE review_image (
    id INT PRIMARY KEY AUTO_INCREMENT,
    image BLOB
);

CREATE TABLE review (
    id INT PRIMARY KEY AUTO_INCREMENT,
    rating DECIMAL(2, 1) NOT NULL,
    cloth_id INT,
    user_id INT,
    comments TEXT,
    review_image_id INT,
    FOREIGN KEY (cloth_id) REFERENCES cloth(id),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (review_image_id) REFERENCES review_image(id)
);
