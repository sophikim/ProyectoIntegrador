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
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id_product` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `picture_product` varchar(255) DEFAULT NULL,
  `cant_comments` int unsigned DEFAULT NULL,
  `id_user` int unsigned NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_product`),
  KEY `id_user` (`id_user`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Shampoo Sólido','Shampoo no líquido. Forma más amigable de lavar tu cabello. Formulado con ingredientes que limpian suavemente y aportan brillo.','\\images\\uploads\\4ae9addb43b634836a559618d6240bb1',10,2,'2022-06-20 20:17:37','2022-06-20 20:17:37'),(2,'Peine de madera','Peine de madera elaborado con madera de paraíso. No generan frizz.','\\images\\uploads\\417f315cd2091c57eae0acec364fdc17',3,2,'2022-06-20 20:18:40','2022-06-20 20:18:40'),(3,'Serum Facial','Combina los aceites más aclamados en el mundo de la cosmética natural. Tiene propiedades nutritivas y regeneradoras.','\\images\\uploads\\e902cc037eecce0de9f05c9020837c2d',4,1,'2022-06-20 20:23:16','2022-06-20 20:23:16'),(4,'Esponja Vegetal desmaquillante','Tiene una vida útil larga sin involucrar procesos que contaminen nuestra querida tierra.','\\images\\uploads\\8f832bccbcc136ac17340860b782aaac',5,1,'2022-06-20 20:24:26','2022-06-20 20:24:26'),(5,'Pasta de dientes','Regula el PH de la boca. No contiene flúor, ni ingredientes tóxicos. Cuida a los pingüinos, mientras cuidas tu dientes.','\\images\\uploads\\a295cf864e01f788e57a7a2ab4469199',6,4,'2022-06-20 20:25:48','2022-06-20 20:25:48'),(6,'Bálsamo Labial','Hidrate sus labios cuidando al medio ambiente.','\\images\\uploads\\d187b33aa70e48ccaa3d93ca8e3b52bc',7,4,'2022-06-20 20:26:37','2022-06-20 20:26:37'),(7,'Protector Solar','Crema bloqueadora que hidrata, nutre y protege de los rayos del sol. Hecha por aceites puros','\\images\\uploads\\4d5c8531f4ae68bbde5feefe7b441304',8,4,'2022-06-20 20:27:58','2022-06-20 20:27:58'),(8,'Aceite de Almendras','Aceite con propiedades rejuvenecedoras','\\images\\uploads\\d24d76c33fd53c0919f749fb9522aa8b',9,6,'2022-06-20 20:29:55','2022-06-20 20:29:55'),(10,'Jabonera','Están hechas con madera de guatambú, palo blanco y protegidas con aceites vegetales. Para que puedas dejar tu shampoo, acondicionador y jabón respirar y secarse bien hasta el próximo uso','\\images\\uploads\\5632d2de16cb7d01bce486c9f3a9d399',5,7,'2022-06-20 20:33:29','2022-06-20 20:33:29'),(11,'Cepillo de dientes de bambú','Un cepillo de bambú','\\images\\uploads\\e6c87e013947b0ab88ac7ef2f5d4b3db',6,7,'2022-06-20 20:39:04','2022-06-20 20:39:04'),(12,'Repelente','Off vegano. Reúne los aromas de varias de las plantas más utilizadas para repeler insectos','\\images\\uploads\\29cba274d8a03bae9e736091c3987bb0',8,7,'2022-06-20 20:39:44','2022-06-20 20:39:44');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
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
