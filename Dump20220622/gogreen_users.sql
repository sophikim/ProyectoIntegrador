-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: gogreen
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id_user` int unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `birthdate` date NOT NULL,
  `dni` int unsigned NOT NULL,
  `profile_photo` varchar(255) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  `cant_seguidores` int unsigned DEFAULT NULL,
  `cant_comments` int unsigned DEFAULT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'messipelado@gmail.com','$2a$10$ERgDoHgScLBDEwKC6.7H8.e6b5mycVj8LdIxgOwu4Eyialyj6CA0K','2022-06-08',43084762,'\\images\\uploads\\39b73ef469b71f7de05d76877967daa9','2022-06-20 20:08:12','2022-06-20 20:08:12',3000,3),(2,'therock@gmail.com','$2a$10$c6YGIq0QThT9lQ58hgZ2Vekvc.LurX78W6isw/jVq/52wvdi1Yosy','2022-06-06',12345678,'\\images\\uploads\\e5e9e6ed4a0d0c61b292ea60a5982edf','2022-06-20 20:09:24','2022-06-20 20:09:24',200,2),(3,'chrisrock@gmail.com','$2a$10$PjOaBDXGN5p7..oyNMT7eOtNfnhMb8jfXLqqMNQHP8fVTi/nW16JO','2022-05-31',43098852,'\\images\\uploads\\4157c33fe3b4730e4043d2084646fb8d','2022-06-20 20:10:23','2022-06-20 20:10:23',100,1),(4,'aldanalescano@gmail.com','$2a$10$QAhYOM2X9Fr4HSB/1xaGH.rhPU5hYZjQGKEDwCihCBeQxOmPckXhq','2022-06-07',43085852,'\\images\\uploads\\e6be64c71a41d61908f584cebae6cb51','2022-06-20 20:11:10','2022-06-20 20:11:10',100,4),(5,'lagreta@gmail.com','$2a$10$nytte/.zda9mPMQTs/qcFOPLqeNMp8AoCt9PK6A0NxKztXh46g2fa','2022-06-08',41084872,'\\images\\uploads\\be1d2d024ecaf3284f99573914e2880a','2022-06-20 20:12:01','2022-06-20 20:12:01',50,5),(6,'latormenta@gmail.com','$2a$10$0ID7qI8jX69J6hPQ4bvE5efI5IZcha1qqls0u8bgevuGKA4vz7MMW','2022-06-02',10084852,'\\images\\uploads\\d6cb4a096bf3d4a04638ae2b12920bb3','2022-06-20 20:13:20','2022-06-20 20:13:20',6,6),(7,'martita@gmail.com','$2a$10$AIRYDK/50DolLYJw/MCWq.E3AU0C8YFIXB8KOa7U18UdSmd2hlipW','2022-06-14',45086853,'\\images\\uploads\\87697fd44530a8c0ff482576108270dc','2022-06-20 20:14:06','2022-06-20 20:14:06',7,7);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-22 20:47:45
