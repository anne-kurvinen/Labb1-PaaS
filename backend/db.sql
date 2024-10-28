CREATE TABLE movies (
  id serial PRIMARY KEY,
  title text UNIQUE NOT NULL,
  productionYear INTEGER NOT NULL
);

INSERT INTO movies (title, productionYear)
  VALUES ('Seven', 1995);

INSERT INTO movies (title, productionYear)
  VALUES ('Grease', 1978);

INSERT INTO movies (title, productionYear)
  VALUES ('Beck', 2023);

SELECT * FROM movies;

INSERT INTO movies (title, productionYear)
  VALUES ('Pulp Fiction', 1994);




CREATE TABLE actors (
  id serial PRIMARY KEY,
  name TEXT NOT NULL,
  movies INTEGER,
  FOREIGN KEY(movie) REFERENCES movies(id)
);

INSERT INTO actors (name, movie) 
 VALUES ('Brad Pitt', 1);

 INSERT INTO actors (name, movie) 
 VALUES ('John Travolta', 2);

INSERT INTO actors (name, movie) 
 VALUES ('Peter Haber', 3);



SELECT * FROM actors;



INSERT INTO actors (name, movie) 
 VALUES ('Morgan Freeman', 1);

 INSERT INTO actors (name, movie) 
  VALUES ('Olivia Newton-John', 2);

  INSERT INTO actos (name, movie)  
  VALUES ('Mikael Persbrandt', 3);

  INSERT INTO actors (name, movie)      
  VALUES ('Samuel L. Jackson', 4);