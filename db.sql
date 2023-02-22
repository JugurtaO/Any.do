SHOW DATABASES;
DROP DATABASE IF EXISTS TasksList;
CREATE DATABASE TasksList;
USE TasksList;

DROP TABLE IF EXISTS Task ;

CREATE TABLE IF NOT EXISTS Task (
    Task_ID INT PRIMARY KEY AUTO_INCREMENT,
    Task_Body VARCHAR(1024) NOT NULL
  
);
INSERT INTO Task (Task_Body)
 VALUES
 ('Faire ses courses à Lidl'),
 ('Ranger sa chambre');
 
 select * from Task;
 