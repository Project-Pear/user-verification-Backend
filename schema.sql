CREATE DATABASE tinyhouse;

DROP TABLE IF EXISTS users;

CREATE TABLE users(
  id SERIAL primary key,
  email VARCHAR(200),
  pass VARCHAR(200),
  fullName VARCHAR(200),
  joined VARCHAR(200),
  score int,
  propId VARCHAR(200) REFERENCES stay(propId)
)

CREATE TABLE stay(
  propId VARCHAR(200) primary key,
  title VARCHAR(200),
  urls VARCHAR(2000),
  descrip VARCHAR(2000),
  rules VARCHAR(200),
  revId int REFERENCES stayReviews(revId)
)

CREATE TABLE stayReviews(
  revId int primary key,
  title VARCHAR(200),
  review VARCHAR(500),
  recommend Boolean
)

