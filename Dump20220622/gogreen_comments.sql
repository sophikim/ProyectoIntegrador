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
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `id_comment` int unsigned NOT NULL AUTO_INCREMENT,
  `content` text NOT NULL,
  `id_user` int unsigned NOT NULL,
  `id_product` int unsigned NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_comment`),
  KEY `id_user` (`id_user`),
  KEY `comments_ibfk_2` (`id_product`),
  CONSTRAINT `comments_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`),
  CONSTRAINT `comments_ibfk_2` FOREIGN KEY (`id_product`) REFERENCES `products` (`id_product`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,'Viva la pachamama y esta increible pagina sustentable',7,6,'2022-06-20 20:46:06','2022-06-20 20:46:06'),(2,'Me lo regalo mi novio un día antes de cortarme. Pero el producto es tan bueno que los sigo usando',7,3,'2022-06-20 20:46:36','2022-06-20 20:46:36'),(3,'Tengo ganas de llorar de lo malo que es',7,7,'2022-06-20 20:47:07','2022-06-20 20:47:07'),(4,'Me produce endorfinas. Soy feliz cuando lo uso',7,11,'2022-06-20 20:47:49','2022-06-20 20:47:49'),(5,'A Greta Thunberg le gustaría esto',7,8,'2022-06-20 20:48:20','2022-06-20 20:48:20'),(7,'Estoy esperando cobrar el sueldo para comprarme más',7,10,'2022-06-20 20:49:13','2022-06-20 20:49:13'),(8,'No me gusto',5,8,'2022-06-20 20:50:05','2022-06-20 20:50:05'),(9,'Se lo recomendaría a todos mis amigos pero no tengo',5,2,'2022-06-20 20:50:32','2022-06-20 20:50:32'),(10,'Que buen producto',5,4,'2022-06-20 20:50:59','2022-06-20 20:50:59'),(11,'Que buenos productos naturales',5,7,'2022-06-20 20:51:29','2022-06-20 20:51:29'),(13,'Este producto me causó depresión',2,12,'2022-06-20 20:53:34','2022-06-20 20:53:34'),(14,'Alto producto',2,6,'2022-06-20 20:53:56','2022-06-20 20:53:56'),(15,'Tengo ganas de poder volver el tiempo atrás y nunca haber comprado esto',2,7,'2022-06-20 20:55:44','2022-06-20 20:55:44'),(16,'Buena relación calidad precio',2,3,'2022-06-20 20:56:11','2022-06-20 20:56:11'),(17,'Mis amigos me lo recomendaron, ya no son más mis amigos. Se hacen pasar de ambientalistas pero después compran estos productos berretas',2,10,'2022-06-20 20:56:34','2022-06-20 20:56:34'),(18,'Me encanta, todo re natural',2,11,'2022-06-20 20:56:58','2022-06-20 20:56:58'),(19,'Soy feliz cuando lo uso',4,12,'2022-06-20 20:57:44','2022-06-20 20:57:44'),(20,'Fue un regalo de mi amiga, ya no somos amigas. Así de malo es el producto',4,7,'2022-06-20 20:58:10','2022-06-20 20:58:10'),(21,'safa',4,8,'2022-06-20 20:59:05','2022-06-20 20:59:05'),(22,'Muy buen producto',4,6,'2022-06-20 21:01:15','2022-06-20 21:01:15'),(23,'Me deja las piernas muy suaves',1,8,'2022-06-20 21:01:53','2022-06-20 21:01:53'),(24,'Fue un regalo de mi amiga, ya no somos amigas. Así de malo es el producto',1,2,'2022-06-20 21:02:19','2022-06-20 21:02:19'),(25,'Tengo ganas de llorar de lo malo que es',1,12,'2022-06-20 21:03:32','2022-06-20 21:03:32'),(26,'Me encanta, todo re natural',1,5,'2022-06-20 21:03:59','2022-06-20 21:03:59'),(27,'safa',1,10,'2022-06-20 21:04:37','2022-06-20 21:04:37'),(28,'Me quede pelado por este producto',1,1,'2022-06-20 21:05:06','2022-06-20 21:05:06'),(29,'Me dan pena los pelados que no pueden probar semejante producto. Es muy bueno',6,2,'2022-06-20 21:06:27','2022-06-20 21:06:27');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
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
