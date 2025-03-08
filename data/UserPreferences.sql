CREATE DATABASE dwellr;

USE dwellr;

CREATE TABLE UserPreferences (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    value INT,
    location TEXT,
    no_of_bedrooms INT,
    is_new_home BOOLEAN,
    has_garden BOOLEAN,
    features TEXT
);

CREATE TABLE Users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255),
    password VARCHAR(255),
    email VARCHAR(255),
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO Users (id, username, password, email, first_name, last_name)
    VALUES
        (1, jondoe, jondoepassword, jondoe@dwellr.com, Jon, Doe),
        (2, janedoe, janedoepassword, janedoe@dwellr.com, Jane, Doe),
        (3, harrypotter, harrypotterpassword, harrypotter@dwellr.com, Harry, Potter);
        (4 ,hermionegranger, hermionegrangerpassword, hermionegranger@dwellr.com, Hermione, Granger);

INSERT INTO UserPreferences (id, user_id, value, location, no_of_bedrooms, is_new_home, has_garden, features)
    VALUES
        (1, 1, 500000, 'London', 3, true, true, 'Garage'),
        (2, 2, 300000, 'Manchester', 2, false, false, 'Basement Storage'),
        (3, 3, 1000000, 'London', 4, true, true, 'Solar Panels'),
        (4, 4, 200000, 'Manchester', 1, false, false, 'Garage');
