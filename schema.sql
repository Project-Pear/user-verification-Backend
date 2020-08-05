DROP TABLE users;
CREATE TABLE users(
  id SERIAL primary key,
  email VARCHAR(200) UNIQUE,
  pass VARCHAR(200),
  firstName VARCHAR(200),
  lastName VARCHAR(200),
  joined VARCHAR(200),
  bDay VARCHAR(200),
  lives VARCHAR(200),
  score int
);

CREATE INDEX ON users(id);


