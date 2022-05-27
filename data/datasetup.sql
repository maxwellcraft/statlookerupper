
-- Drop tables if they exists 
DROP TABLE IF EXISTS players; 
DROP TABLE IF EXISTS teams; 

-- players table 
CREATE TABLE players(
	Id int NOT NULL PRIMARY KEY
	,Name VARCHAR (255)
    ,Team VARCHAR(255)
); 

-- insert data 
INSERT INTO players VALUES 
(1 ,'LeBron James','Lakers')
, (2, 'Michael Jordan','Bulls')
, (3, 'Larry Bird', 'Celtics');

-- create teams table
CREATE TABLE teams(
	Id SERIAL NOT NULL 
	,TeamName INT 
	,City VARCHAR(100)
	,FOREIGN KEY (Team) REFERENCES players(Team)
); 

-- insert songs 
INSERT INTO players (TeamName ,City )VALUES 
('Bulls', 'Chicago')
,('Lakers', 'Los Angeles')
,('Celtics', 'Boston');


