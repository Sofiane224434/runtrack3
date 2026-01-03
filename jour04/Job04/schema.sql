CREATE DATABASE IF NOT EXISTS utilisateurs;
USE utilisateurs;
CREATE TABLE IF NOT EXISTS utilisateurs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50) NOT NULL,
    prenom VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);
INSERT INTO utilisateurs (nom, prenom, email) VALUES
('Dupont', 'Jean', 'jean.dupont@example.com');
('Martin', 'Marie', 'marie.martin@example.com');
('Durand', 'Paul', 'paul.durand@example.com');
('Lefevre', 'Sophie', 'sophie.lefevre@example.com');
('Moreau', 'Luc', 'luc.moreau@example.com');
('Bernard', 'Claire', 'claire.bernard@example.com');
('Petit', 'Julien', 'julien.petit@example.com');