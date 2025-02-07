-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : ven. 07 fév. 2025 à 09:56
-- Version du serveur : 9.1.0
-- Version de PHP : 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `apiopenai`
--

-- --------------------------------------------------------

--
-- Structure de la table `conversation`
--

DROP TABLE IF EXISTS `conversation`;
CREATE TABLE IF NOT EXISTS `conversation` (
  `idConversation` int NOT NULL AUTO_INCREMENT,
  `DateConversation` date NOT NULL,
  `Prompt` text NOT NULL,
  `idUser` int NOT NULL,
  `idPersonnage` int NOT NULL,
  PRIMARY KEY (`idConversation`),
  KEY `idUser` (`idUser`),
  KEY `idPersonnage` (`idPersonnage`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `jeu`
--

DROP TABLE IF EXISTS `jeu`;
CREATE TABLE IF NOT EXISTS `jeu` (
  `idJeu` int NOT NULL AUTO_INCREMENT,
  `Nom` varchar(50) NOT NULL,
  `Image` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `Description` text NOT NULL,
  PRIMARY KEY (`idJeu`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `jeu`
--

INSERT INTO `jeu` (`idJeu`, `Nom`, `Image`, `Description`) VALUES
(4, 'jeu1', 'C:\\Users\\tnoel\\Cours\\API\\ProjetAPI\\public\\images\\japancontest-9175030_1280.jpg', 'aze'),
(5, 'fortnite', 'C:\\Users\\tnoel\\Cours\\API\\ProjetAPI\\public\\images\\japancontest-9175030_1280.jpg', 'Fortnite est un jeu en ligne développé par Epic Games sous la forme de différents modes de jeu qui partagent le même gameplay général et le même moteur de jeu. Les deux premiers modes de jeu sont Fortnite : Sauver le monde, un jeu coopératif de tir et de survie conçu pour quatre joueurs au maximum et dont le but est de combattre des zombies et de défendre des objets à l\'aide de fortifications, et Fortnite Battle Royale, un jeu de battle royale en free-to-play où jusqu\'à 100 joueurs se battent entre eux jusqu\'au dernier survivant. Plusieurs autres modes de jeu sont ensuite ajoutés.'),
(6, 'fortnite', 'C:\\Users\\tnoel\\Cours\\API\\ProjetAPI\\public\\images\\japancontest-9175030_1280.jpg', 'Fortnite est un jeu en ligne développé par Epic Games sous la forme de différents modes de jeu qui partagent le même gameplay général et le même moteur de jeu. Les deux premiers modes de jeu sont Fortnite : Sauver le monde, un jeu coopératif de tir et de survie conçu pour quatre joueurs au maximum et dont le but est de combattre des zombies et de défendre des objets à l\'aide de fortifications, et Fortnite Battle Royale, un jeu de battle royale en free-to-play où jusqu\'à 100 joueurs se battent entre eux jusqu\'au dernier survivant. Plusieurs autres modes de jeu sont ensuite ajoutés.'),
(7, 'fortnite', 'C:\\Users\\tnoel\\Cours\\API\\ProjetAPI\\public\\images\\japancontest-9175030_1280.jpg', 'Fortnite est un jeu en ligne développé par Epic Games sous la forme de différents modes de jeu qui partagent le même gameplay général et le même moteur de jeu. Les deux premiers modes de jeu sont Fortnite : Sauver le monde, un jeu coopératif de tir et de survie conçu pour quatre joueurs au maximum et dont le but est de combattre des zombies et de défendre des objets à l\'aide de fortifications, et Fortnite Battle Royale, un jeu de battle royale en free-to-play où jusqu\'à 100 joueurs se battent entre eux jusqu\'au dernier survivant. Plusieurs autres modes de jeu sont ensuite ajoutés.'),
(8, 'fortnite', 'C:\\Users\\tnoel\\Cours\\API\\ProjetAPI\\public\\images\\japancontest-9175030_1280.jpg', 'Fortnite est un jeu en ligne développé par Epic Games sous la forme de différents modes de jeu qui partagent le même gameplay général et le même moteur de jeu. Les deux premiers modes de jeu sont Fortnite : Sauver le monde, un jeu coopératif de tir et de survie conçu pour quatre joueurs au maximum et dont le but est de combattre des zombies et de défendre des objets à l\'aide de fortifications, et Fortnite Battle Royale, un jeu de battle royale en free-to-play où jusqu\'à 100 joueurs se battent entre eux jusqu\'au dernier survivant. Plusieurs autres modes de jeu sont ensuite ajoutés.'),
(9, 'fortnite', 'C:\\Users\\tnoel\\Cours\\API\\ProjetAPI\\public\\images\\japancontest-9175030_1280.jpg', 'Fortnite est un jeu en ligne développé par Epic Games sous la forme de différents modes de jeu qui partagent le même gameplay général et le même moteur de jeu. Les deux premiers modes de jeu sont Fortnite : Sauver le monde, un jeu coopératif de tir et de survie conçu pour quatre joueurs au maximum et dont le but est de combattre des zombies et de défendre des objets à l\'aide de fortifications, et Fortnite Battle Royale, un jeu de battle royale en free-to-play où jusqu\'à 100 joueurs se battent entre eux jusqu\'au dernier survivant. Plusieurs autres modes de jeu sont ensuite ajoutés.'),
(10, 'fortnite', 'C:\\Users\\tnoel\\Cours\\API\\ProjetAPI\\public\\images\\japancontest-9175030_1280.jpg', 'Fortnite est un jeu en ligne développé par Epic Games sous la forme de différents modes de jeu qui partagent le même gameplay général et le même moteur de jeu. Les deux premiers modes de jeu sont Fortnite : Sauver le monde, un jeu coopératif de tir et de survie conçu pour quatre joueurs au maximum et dont le but est de combattre des zombies et de défendre des objets à l\'aide de fortifications, et Fortnite Battle Royale, un jeu de battle royale en free-to-play où jusqu\'à 100 joueurs se battent entre eux jusqu\'au dernier survivant. Plusieurs autres modes de jeu sont ensuite ajoutés.'),
(11, 'fortnite', 'C:\\Users\\tnoel\\Cours\\API\\ProjetAPI\\public\\images\\japancontest-9175030_1280.jpg', 'Fortnite est un jeu en ligne développé par Epic Games sous la forme de différents modes de jeu qui partagent le même gameplay général et le même moteur de jeu. Les deux premiers modes de jeu sont Fortnite : Sauver le monde, un jeu coopératif de tir et de survie conçu pour quatre joueurs au maximum et dont le but est de combattre des zombies et de défendre des objets à l\'aide de fortifications, et Fortnite Battle Royale, un jeu de battle royale en free-to-play où jusqu\'à 100 joueurs se battent entre eux jusqu\'au dernier survivant. Plusieurs autres modes de jeu sont ensuite ajoutés.'),
(12, 'fortnite', '', 'Fortnite est un jeu en ligne développé par Epic Games sous la forme de différents modes de jeu qui partagent le même gameplay général et le même moteur de jeu. Les deux premiers modes de jeu sont Fortnite : Sauver le monde, un jeu coopératif de tir et de survie conçu pour quatre joueurs au maximum et dont le but est de combattre des zombies et de défendre des objets à l\'aide de fortifications, et Fortnite Battle Royale, un jeu de battle royale en free-to-play où jusqu\'à 100 joueurs se battent entre eux jusqu\'au dernier survivant. Plusieurs autres modes de jeu sont ensuite ajoutés.'),
(13, 'fortnite', '', 'Fortnite est un jeu en ligne développé par Epic Games sous la forme de différents modes de jeu qui partagent le même gameplay général et le même moteur de jeu. Les deux premiers modes de jeu sont Fortnite : Sauver le monde, un jeu coopératif de tir et de survie conçu pour quatre joueurs au maximum et dont le but est de combattre des zombies et de défendre des objets à l\'aide de fortifications, et Fortnite Battle Royale, un jeu de battle royale en free-to-play où jusqu\'à 100 joueurs se battent entre eux jusqu\'au dernier survivant. Plusieurs autres modes de jeu sont ensuite ajoutés.'),
(14, 'fortnite', '', 'Fortnite est un jeu en ligne développé par Epic Games sous la forme de différents modes de jeu qui partagent le même gameplay général et le même moteur de jeu. Les deux premiers modes de jeu sont Fortnite : Sauver le monde, un jeu coopératif de tir et de survie conçu pour quatre joueurs au maximum et dont le but est de combattre des zombies et de défendre des objets à l\'aide de fortifications, et Fortnite Battle Royale, un jeu de battle royale en free-to-play où jusqu\'à 100 joueurs se battent entre eux jusqu\'au dernier survivant. Plusieurs autres modes de jeu sont ensuite ajoutés.'),
(15, 'fortnite', '', 'Fortnite est un jeu en ligne développé par Epic Games sous la forme de différents modes de jeu qui partagent le même gameplay général et le même moteur de jeu. Les deux premiers modes de jeu sont Fortnite : Sauver le monde, un jeu coopératif de tir et de survie conçu pour quatre joueurs au maximum et dont le but est de combattre des zombies et de défendre des objets à l\'aide de fortifications, et Fortnite Battle Royale, un jeu de battle royale en free-to-play où jusqu\'à 100 joueurs se battent entre eux jusqu\'au dernier survivant. Plusieurs autres modes de jeu sont ensuite ajoutés.');

-- --------------------------------------------------------

--
-- Structure de la table `message`
--

DROP TABLE IF EXISTS `message`;
CREATE TABLE IF NOT EXISTS `message` (
  `idMessage` int NOT NULL,
  `Contenu` text NOT NULL,
  `Date_Envoi` date NOT NULL,
  `idConversation` int NOT NULL,
  PRIMARY KEY (`idMessage`),
  KEY `idConversation` (`idConversation`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `personnage`
--

DROP TABLE IF EXISTS `personnage`;
CREATE TABLE IF NOT EXISTS `personnage` (
  `idPersonnage` int NOT NULL AUTO_INCREMENT,
  `Nom` varchar(50) NOT NULL,
  `Photo` varchar(200) NOT NULL,
  `idjeu` int NOT NULL,
  PRIMARY KEY (`idPersonnage`),
  KEY `idjeu` (`idjeu`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

DROP TABLE IF EXISTS `utilisateur`;
CREATE TABLE IF NOT EXISTS `utilisateur` (
  `idUser` int NOT NULL AUTO_INCREMENT,
  `Nom` varchar(50) NOT NULL,
  `Prenom` varchar(50) NOT NULL,
  `Username` varchar(50) NOT NULL,
  `Password` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`idUser`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`idUser`, `Nom`, `Prenom`, `Username`, `Password`) VALUES
(12, 'a', 'a', 'a', '$2b$10$p8G22AenRlhuqeU5c9.hZul.LNkcNxRFe5ck2/Up3oW'),
(13, 'b', 'b', 'b', '$2b$10$2K64rrj8wUw4nMZm2xXMVear208DGCxDoKCXp0ZR9s5'),
(14, 'c', 'c', 'c', '$2b$10$ecLXp.4fW70gpnhEYbFL4OypXcUDobkFZlzm2N3H74Pt18xezReYi');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `conversation`
--
ALTER TABLE `conversation`
  ADD CONSTRAINT `conversation_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `utilisateur` (`idUser`),
  ADD CONSTRAINT `conversation_ibfk_2` FOREIGN KEY (`idPersonnage`) REFERENCES `personnage` (`idPersonnage`);

--
-- Contraintes pour la table `message`
--
ALTER TABLE `message`
  ADD CONSTRAINT `message_ibfk_1` FOREIGN KEY (`idConversation`) REFERENCES `conversation` (`idConversation`);

--
-- Contraintes pour la table `personnage`
--
ALTER TABLE `personnage`
  ADD CONSTRAINT `personnage_ibfk_1` FOREIGN KEY (`idjeu`) REFERENCES `jeu` (`idJeu`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
