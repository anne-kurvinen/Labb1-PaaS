CREATE TABLE films (
  id serial PRIMARY KEY,
  title text UNIQUE NOT NULL,
  production INTEGER NOT NULL
);

INSERT INTO films (title, production)
  VALUES ('Seven', 1995);

INSERT INTO films (title, production)
  VALUES ('Grease', 1978);

INSERT INTO films (title, production)
  VALUES ('Beck', 2023);


CREATE TABLE actor (
  id serial PRIMARY KEY,
  name TEXT NOT NULL,
  film INTEGER,
  FOREIGN KEY(film) REFERENCES films(id)
);

INSERT INTO actor (name, film) 
 VALUES ('Brad Pitt', 1);

 INSERT INTO actor (name, film) 
 VALUES ('John Travolta', 2);

INSERT INTO actor (name, film) 
 VALUES ('Peter Haber', 3);

CREATE TABLE films (
  id serial PRIMARY KEY,
  title text UNIQUE NOT NULL,
  productionYear INTEGER NOT NULL
);

INSERT INTO films (title, productionYear)
  VALUES ('Seven', 1995);

INSERT INTO films (title, productionYear)
  VALUES ('Grease', 1978);

INSERT INTO films (title, productionYear)
  VALUES ('Beck', 2023);


CREATE TABLE actors (
  id serial PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  film INTEGER,
  FOREIGN KEY(film) REFERENCES films(id)
);

INSERT INTO actors (name, film) 
 VALUES ('Brad Pitt', 1);

 INSERT INTO actors (name, film) 
 VALUES ('John Travolta', 2);

INSERT INTO actors (name, film) 
 VALUES ('Peter Haber', 3);