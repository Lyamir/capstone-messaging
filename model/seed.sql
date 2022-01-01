CREATE DATABASE IF NOT EXISTS capstone_messaging;
USE capstone_messaging;

CREATE TABLE IF NOT EXISTS `users` (
  `username` VARCHAR(20),
  `password` VARCHAR(20),
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE IF NOT EXISTS `emails` (
  `id` int AUTO_INCREMENT,
  `sender`  VARCHAR(20),
  `receiver` VARCHAR(20),
  `message` LONGTEXT,
  `datetime` DATETIME,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`sender`)
    REFERENCES `users`(`username`)
    ON DELETE CASCADE,
  FOREIGN KEY (`receiver`)
    REFERENCES `users`(`username`)
    ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

