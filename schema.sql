DROP TABLE users;
CREATE TABLE users(
  id SERIAL primary key,
  email VARCHAR(200),
  pass VARCHAR(200),
  firstName VARCHAR(200),
  lastName VARCHAR(200),
  joined VARCHAR(200),
  bDay VARCHAR(200),
  score int
);


