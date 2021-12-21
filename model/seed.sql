CREATE DATABASE IF NOT EXISTS capstone_messaging;
USE capstone_messaging;

CREATE TABLE IF NOT EXISTS `users` (
  `username` text,
  `password` text
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

