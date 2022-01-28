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

INSERT INTO `users` (username, password)
SELECT * FROM (SELECT 'user1', 'password') AS tmp
WHERE NOT EXISTS (SELECT username FROM `users` WHERE username='user1')
LIMIT 1;


INSERT INTO `users` (username, password)
SELECT * FROM (SELECT 'user2', 'password') AS tmp
WHERE NOT EXISTS (SELECT username FROM `users` WHERE username='user2')
LIMIT 1;

INSERT INTO `emails` (id, sender, receiver, message, datetime)
SELECT * FROM (SELECT 1, 'user1', 'user2', 'I am sending you a message', '2021-12-25 10:00:00') AS tmp
WHERE NOT EXISTS (SELECT id FROM `emails` WHERE id=1)
LIMIT 1;

INSERT INTO `emails` (id, sender, receiver, message, datetime)
SELECT * FROM (SELECT 2, 'user2', 'user1', 'I too am sending you a message', '2021-12-25 11:00:00') AS tmp
WHERE NOT EXISTS (SELECT id FROM `emails` WHERE id=2)
LIMIT 1;

