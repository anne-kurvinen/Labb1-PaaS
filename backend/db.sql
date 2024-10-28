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
