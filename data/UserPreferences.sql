CREATE DATABASE dwellr;

USE dwellr;

CREATE TABLE UserPreferences (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    preferences TEXT[]
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

INSERT INTO UserPreferences (id, user_id, preferences)
    VALUES
        (1, 1, )
