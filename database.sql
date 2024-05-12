CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(55) NOT NULL UNIQUE,
    phone VARCHAR(15) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    gender varchar(55) NOT NULL,
    profile_pic BLOB,
    role varchar(10) DEFAULT 'user'
)auto_increment = 226571;

CREATE TABLE brand (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    logo BLOB NOT NULL
)auto_increment = 8875;

CREATE TABLE category (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
)auto_increment = 8245;

CREATE TABLE sub_category (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
)auto_increment = 8145;

CREATE TABLE occasion (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL
)auto_increment = 7145;

CREATE TABLE product_dimensions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    length VARCHAR(255),
    width VARCHAR(255),
    height VARCHAR(255)
)auto_increment = 7245;

CREATE TABLE package_dimensions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    length VARCHAR(255),
    width VARCHAR(255),
    height VARCHAR(255),
    weight VARCHAR(255)
)auto_increment = 6545;

CREATE TABLE cloth (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    status BOOLEAN,
    price DECIMAL(10, 2) NOT NULL,
    discount DECIMAL(10, 2) NOT NULL,
    gender varchar(55) NOT NULL,
    material VARCHAR(255),
    pattern VARCHAR(255),
    sleeve_length VARCHAR(255),
    neck_style VARCHAR(255),
    fit VARCHAR(255),
    description TEXT,
    care_instructions TEXT,
    country_of_origin VARCHAR(255),
    brand_id INT ,
    FOREIGN KEY(brand_id) references brand(id),
    category_id int,
    foreign key (category_id) references category(id),
    sub_category_id int,
    foreign key (sub_category_id) references sub_category(id),
    occasion_id int,
    foreign key (occasion_id) references occasion(id),
    product_dimensions_id int,
    foreign key (product_dimensions_id) references product_dimensions(id),
    package_dimensions_id int,
    foreign key (package_dimensions_id) references package_dimensions(id)
)auto_increment = 99167256184;

CREATE TABLE cloth_size (
    id INT PRIMARY KEY AUTO_INCREMENT,
    cloth_id INT,
    size CHAR(1),
    FOREIGN KEY (cloth_id) REFERENCES cloth(id)
)auto_increment = 9875;

CREATE TABLE cloth_image (
    id INT PRIMARY KEY AUTO_INCREMENT,
    image BLOB NOT NULL,
    cloth_id INT,
    FOREIGN KEY (cloth_id) REFERENCES cloth(id)
)auto_increment = 8575;


CREATE TABLE review (
    id INT PRIMARY KEY AUTO_INCREMENT,
    rating DECIMAL(3, 1) NOT NULL,
    cloth_id INT,
    user_id INT,
    comments TEXT,
    posted_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (cloth_id) REFERENCES cloth(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
)auto_increment = 55653;

CREATE TABLE review_image (
    id INT PRIMARY KEY AUTO_INCREMENT,
    image BLOB,
    review_id INT,
    FOREIGN KEY (review_id) REFERENCES review(id)
)auto_increment = 5509123;

select * from users;
