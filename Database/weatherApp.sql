CREATE DATABASE weatherApp;
USE weatherApp;

CREATE TABLE CONSUMER(
	ID INT PRIMARY KEY AUTO_INCREMENT,
    NAME VARCHAR(40) NOT NULL,
    PASSWORD VARCHAR(40) NOT NULL,
    LOCATION VARCHAR(40)
);

INSERT INTO CONSUMER (NAME, PASSWORD, LOCATION) VALUES
('Alice', 'password123', 'New York'),
('Bob', 'securepass', 'Los Angeles'),
('Charlie', 'qwerty123', 'Chicago'),
('David', 'letmein', 'Houston'),
('Eve', 'hunter2', 'Miami');
