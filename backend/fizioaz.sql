-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 27, 2018 at 12:52 PM
-- Server version: 5.7.14-log
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fizioaz`
--

-- --------------------------------------------------------

--
-- Table structure for table `about`
--

CREATE TABLE `about` (
  `id` int(11) NOT NULL,
  `pageTitle` text COLLATE utf8_bin NOT NULL,
  `quote` text COLLATE utf8_bin NOT NULL,
  `pageLinkURL` text COLLATE utf8_bin NOT NULL,
  `pageLinkTitle` text COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `about`
--

INSERT INTO `about` (`id`, `pageTitle`, `quote`, `pageLinkURL`, `pageLinkTitle`) VALUES
(1, 'Par mums', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `about_text`
--

CREATE TABLE `about_text` (
  `id` int(11) NOT NULL,
  `title` text COLLATE utf8_bin NOT NULL,
  `text` text COLLATE utf8_bin NOT NULL,
  `image` text COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `about_text`
--

INSERT INTO `about_text` (`id`, `title`, `text`, `image`) VALUES
(1, 'Par fizioterapeitiem', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in.', 'https://dl.dropboxusercontent.com/s/j5vkrvs58uikzoe/par-mums.jpg?dl=0'),
(2, 'Par fizioterapeitiem', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in.', 'https://dl.dropboxusercontent.com/s/681lsvu3ak197qf/IMG_9980.jpg?dl=0');

-- --------------------------------------------------------

--
-- Table structure for table `fizioterapija`
--

CREATE TABLE `fizioterapija` (
  `id` int(11) NOT NULL,
  `pageTitle` varchar(140) COLLATE utf8_bin NOT NULL,
  `quote` varchar(400) COLLATE utf8_bin NOT NULL,
  `pageLinkURL` varchar(140) COLLATE utf8_bin NOT NULL,
  `pageLinkTitle` varchar(140) COLLATE utf8_bin NOT NULL,
  `extraImg1` varchar(140) COLLATE utf8_bin NOT NULL,
  `extraImg2` varchar(140) COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `fizioterapija`
--

INSERT INTO `fizioterapija` (`id`, `pageTitle`, `quote`, `pageLinkURL`, `pageLinkTitle`, `extraImg1`, `extraImg2`) VALUES
(1, 'Fizioterapija', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam', '', '', 'https://dl.dropboxusercontent.com/s/xtlpa77eoxxtlyd/9-briva-laucina.jpg?dl=0', 'https://dl.dropboxusercontent.com/s/xtlpa77eoxxtlyd/9-briva-laucina.jpg?dl=0');

-- --------------------------------------------------------

--
-- Table structure for table `fizioterapija_text`
--

CREATE TABLE `fizioterapija_text` (
  `id` int(11) NOT NULL,
  `title` text COLLATE utf8_bin NOT NULL,
  `textTitle` text COLLATE utf8_bin NOT NULL,
  `textText` text COLLATE utf8_bin NOT NULL,
  `textPrice` text COLLATE utf8_bin NOT NULL,
  `image` varchar(140) COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `fizioterapija_text`
--

INSERT INTO `fizioterapija_text` (`id`, `title`, `textTitle`, `textText`, `textPrice`, `image`) VALUES
(1, 'Konsultācijas pieaugušajiem un bērniem', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in', 'konkrēts apraksts par katru piedāvāto pakalpojumu un arī pakalpojumu cenām, vietām, kur pakalpojumu saņemt', 'https://dl.dropboxusercontent.com/s/y625aqdr954lyap/1-konsultacijas.jpg?dl=0'),
(2, 'INDIVIDUĀLĀS VINGROŠANAS NODARBĪBAS', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in', 'konkrēts apraksts par katru piedāvāto pakalpojumu un arī pakalpojumu cenām, vietām, kur pakalpojumu saņemt', 'https://dl.dropboxusercontent.com/s/vhtca0jzybby1qm/2-individualas-nodarbinas.jpg?dl=0'),
(3, 'ZĪDAIŅU VINGROŠANA', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in', 'konkrēts apraksts par katru piedāvāto pakalpojumu un arī pakalpojumu cenām, vietām, kur pakalpojumu saņemt', 'https://dl.dropboxusercontent.com/s/k2un5u21kaex6wd/3-zidainu.jpg?dl=0'),
(4, 'TEIPOŠANA', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in', 'konkrēts apraksts par katru piedāvāto pakalpojumu un arī pakalpojumu cenām, vietām, kur pakalpojumu saņemt', 'https://dl.dropboxusercontent.com/s/4aw0ozo04igzznz/4-teiposana.jpg?dl=0'),
(5, 'MASĀŽA', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in', 'konkrēts apraksts par katru piedāvāto pakalpojumu un arī pakalpojumu cenām, vietām, kur pakalpojumu saņemt', 'https://dl.dropboxusercontent.com/s/a8885vpfz6s2a46/5-masaza.jpg?dl=0'),
(6, 'SLINGA TERAPIJA', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in', 'konkrēts apraksts par katru piedāvāto pakalpojumu un arī pakalpojumu cenām, vietām, kur pakalpojumu saņemt', 'https://dl.dropboxusercontent.com/s/l2oh9t74u15o1lw/6-slinga-terapija.jpg?dl=0'),
(7, 'MĀJAS VIZĪTES', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in', 'konkrēts apraksts par katru piedāvāto pakalpojumu un arī pakalpojumu cenām, vietām, kur pakalpojumu saņemt', 'https://dl.dropboxusercontent.com/s/7s1ura1ppr75w5b/7-majas-vizites.jpg?dl=0'),
(8, 'INDIVIDUĀLAS PROGRAMMAS SASTĀDĪŠANA', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut', 'konkrēts apraksts par katru piedāvāto pakalpojumu un arī pakalpojumu cenām, vietām, kur pakalpojumu saņemt', 'https://dl.dropboxusercontent.com/s/crgo5dk1gvn4fyi/8-individualas-treninu-programmas-sastadisana.jpg?dl=0');

-- --------------------------------------------------------

--
-- Table structure for table `galleries`
--

CREATE TABLE `galleries` (
  `id` int(11) NOT NULL,
  `pageTitle` text COLLATE utf8_bin NOT NULL,
  `quote` text COLLATE utf8_bin NOT NULL,
  `pageLinkURL` text COLLATE utf8_bin NOT NULL,
  `pageLinkTitle` text COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `galleries`
--

INSERT INTO `galleries` (`id`, `pageTitle`, `quote`, `pageLinkURL`, `pageLinkTitle`) VALUES
(1, 'Video un attēli', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `galleries_images`
--

CREATE TABLE `galleries_images` (
  `id` int(11) NOT NULL,
  `title` text COLLATE utf8_bin,
  `text` text COLLATE utf8_bin,
  `type` text COLLATE utf8_bin NOT NULL,
  `corr_id` int(11) NOT NULL,
  `url` text COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `galleries_images`
--

INSERT INTO `galleries_images` (`id`, `title`, `text`, `type`, `corr_id`, `url`) VALUES
(1, 'title', 'Lorem Ipsum', 'image', 1, 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1'),
(2, 'title', 'Lorem Ipsum', 'YouTube', 1, 'https://www.youtube.com/watch?v=MeRmMz0_zJc'),
(3, 'title', 'Lorem Ipsum', 'image', 1, 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1'),
(4, 'title', 'Lorem Ipsum', 'YouTube', 1, 'https://www.youtube.com/watch?v=JcTCq8L6j_s'),
(5, 'title', 'Lorem Ipsum', 'image', 1, 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1'),
(6, 'title', 'Lorem Ipsum', 'image', 1, 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1'),
(7, 'title', 'Lorem Ipsum', 'image', 1, 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1'),
(8, 'title', 'Lorem Ipsum', 'image', 1, 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1'),
(9, 'title', 'Lorem Ipsum', 'image', 1, 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1'),
(10, 'title', 'Lorem Ipsum', 'image', 1, 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1'),
(11, 'title', 'Lorem Ipsum', 'image', 1, 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1'),
(12, 'title', 'Lorem Ipsum', 'image', 1, 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1'),
(13, 'title', 'Lorem Ipsum', 'image', 2, 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1'),
(14, 'title', 'Lorem Ipsum', 'YouTube', 2, 'https://www.youtube.com/watch?v=MeRmMz0_zJc'),
(15, 'title', 'Lorem Ipsum', 'image', 2, 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1'),
(16, 'title', 'Lorem Ipsum', 'YouTube', 2, 'https://www.youtube.com/watch?v=JcTCq8L6j_s'),
(17, 'title', 'Lorem Ipsum', 'image', 2, 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1'),
(18, 'title', 'Lorem Ipsum', 'image', 2, 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1'),
(19, 'title', 'Lorem Ipsum', 'image', 2, 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1'),
(20, 'title', 'Lorem Ipsum', 'image', 2, 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1'),
(21, 'title', 'Lorem Ipsum', 'image', 2, 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1'),
(22, 'title', 'Lorem Ipsum', 'image', 2, 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1'),
(23, 'title', 'Lorem Ipsum', 'image', 2, 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1'),
(24, 'title', 'Lorem Ipsum', 'image', 2, 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1'),
(25, 'title', 'Lorem Ipsum', 'image', 3, 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1'),
(26, 'title', 'Lorem Ipsum', 'YouTube', 3, 'https://www.youtube.com/watch?v=MeRmMz0_zJc'),
(27, 'title', 'Lorem Ipsum', 'image', 3, 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1'),
(28, 'title', 'Lorem Ipsum', 'YouTube', 3, 'https://www.youtube.com/watch?v=JcTCq8L6j_s'),
(29, 'title', 'Lorem Ipsum', 'image', 3, 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1'),
(30, 'title', 'Lorem Ipsum', 'image', 3, 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1'),
(31, 'title', 'Lorem Ipsum', 'image', 3, 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1'),
(32, 'title', 'Lorem Ipsum', 'image', 3, 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1'),
(33, 'title', 'Lorem Ipsum', 'image', 3, 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1'),
(34, 'title', 'Lorem Ipsum', 'image', 3, 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1'),
(35, 'title', 'Lorem Ipsum', 'image', 3, 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1'),
(36, 'title', 'Lorem Ipsum', 'image', 3, 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1'),
(37, 'title', 'Lorem Ipsum', 'image', 4, 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1'),
(38, 'title', 'Lorem Ipsum', 'YouTube', 4, 'https://www.youtube.com/watch?v=MeRmMz0_zJc'),
(39, 'title', 'Lorem Ipsum', 'image', 4, 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1'),
(40, 'title', 'Lorem Ipsum', 'YouTube', 4, 'https://www.youtube.com/watch?v=JcTCq8L6j_s'),
(41, 'title', 'Lorem Ipsum', 'image', 4, 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1'),
(42, 'title', 'Lorem Ipsum', 'image', 4, 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1'),
(43, 'title', 'Lorem Ipsum', 'image', 4, 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1'),
(44, 'title', 'Lorem Ipsum', 'image', 4, 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1'),
(45, 'title', 'Lorem Ipsum', 'image', 4, 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1'),
(46, 'title', 'Lorem Ipsum', 'image', 4, 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1'),
(47, 'title', 'Lorem Ipsum', 'image', 4, 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1'),
(48, 'title', 'Lorem Ipsum', 'image', 4, 'https://dl.dropboxusercontent.com/s/azj2tl1xie77rzx/img.png?dl=1'),
(49, NULL, NULL, 'image', 24, 'uploads/2015_01_02_20_23_04_ProShot0.jpg'),
(50, NULL, NULL, 'YouTube', 26, 'https://www.youtube.com/watch?v=sENgdSF8ppA'),
(51, NULL, NULL, 'YouTube', 27, 'https://www.youtube.com/watch?v=sENgdSF8ppA'),
(52, NULL, NULL, 'YouTube', 28, 'https://www.youtube.com/watch?v=sENgdSF8ppA'),
(53, NULL, NULL, 'image', 29, 'uploads/2015_01_02_20_23_04_ProShot1.jpg'),
(54, NULL, NULL, 'YouTube', 30, 'https://www.youtube.com/watch?v=sENgdSF8ppA'),
(55, NULL, NULL, 'YouTube', 31, 'https://www.youtube.com/watch?v=sENgdSF8ppA'),
(56, NULL, NULL, 'YouTube', 34, 'https://www.youtube.com/watch?v=sENgdSF8ppA'),
(62, NULL, NULL, 'YouTube', 34, 'https://www.youtube.com/watch?v=yKZa3p0YZnk&feature=youtu.be'),
(71, NULL, NULL, 'YouTube', 34, 'https://www.youtube.com/watch?v=yKZa3p0YZnk&feature=youtu.be');

-- --------------------------------------------------------

--
-- Table structure for table `galleries_text`
--

CREATE TABLE `galleries_text` (
  `id` int(11) NOT NULL,
  `title` text COLLATE utf8_bin NOT NULL,
  `image` text COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `galleries_text`
--

INSERT INTO `galleries_text` (`id`, `title`, `image`) VALUES
(1, 'Stretch it out', 'uploads/img-2.png'),
(2, 'Fix your neck', 'https://dl.dropboxusercontent.com/s/a2tafpswvnexh5l/img-1.png?dl=0'),
(3, 'Pasākumi', 'https://dl.dropboxusercontent.com/s/1t0thbkk78r91kg/img-2.png?dl=0'),
(4, 'Plank challange', 'https://dl.dropboxusercontent.com/s/8sz6i51vxsu912k/img-4.png?dl=0');

-- --------------------------------------------------------

--
-- Table structure for table `home`
--

CREATE TABLE `home` (
  `id` int(11) NOT NULL,
  `pageTitle` text COLLATE utf8_bin NOT NULL,
  `pageLink` text COLLATE utf8_bin NOT NULL,
  `quote` text COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `home`
--

INSERT INTO `home` (`id`, `pageTitle`, `pageLink`, `quote`) VALUES
(1, '', '', 'Lorem Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam');

-- --------------------------------------------------------

--
-- Table structure for table `kalendars`
--

CREATE TABLE `kalendars` (
  `id` int(11) NOT NULL,
  `pageTitle` text COLLATE utf8_bin NOT NULL,
  `quote` text COLLATE utf8_bin NOT NULL,
  `pageLinkURL` text COLLATE utf8_bin NOT NULL,
  `pageLinkTitle` text COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `kalendars_text`
--

CREATE TABLE `kalendars_text` (
  `id` int(11) NOT NULL,
  `year` smallint(6) NOT NULL,
  `month` tinyint(4) NOT NULL,
  `day` tinyint(4) NOT NULL,
  `time` tinytext COLLATE utf8_bin NOT NULL,
  `title` text COLLATE utf8_bin NOT NULL,
  `max_count` int(40) NOT NULL,
  `full` int(10) NOT NULL DEFAULT '0'
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `kalendars_text`
--

INSERT INTO `kalendars_text` (`id`, `year`, `month`, `day`, `time`, `title`, `max_count`, `full`) VALUES
(1, 2018, 2, 23, '17:30', 'Power Stretch Training', 22, 1),
(2, 2018, 2, 16, '17:30', 'Power Stretch Training', 20, 1),
(3, 2018, 2, 17, '17:30', 'Power Stretch Training', 20, 0);

-- --------------------------------------------------------

--
-- Table structure for table `kontakti`
--

CREATE TABLE `kontakti` (
  `id` int(11) NOT NULL,
  `pageTitle` text COLLATE utf8_bin NOT NULL,
  `quote` text COLLATE utf8_bin NOT NULL,
  `pageLinkURL` text COLLATE utf8_bin NOT NULL,
  `pageLinkTitle` text COLLATE utf8_bin NOT NULL,
  `siaTitle` text COLLATE utf8_bin NOT NULL,
  `siaEmail` text COLLATE utf8_bin NOT NULL,
  `siaPhone` text COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `kontakti`
--

INSERT INTO `kontakti` (`id`, `pageTitle`, `quote`, `pageLinkURL`, `pageLinkTitle`, `siaTitle`, `siaEmail`, `siaPhone`) VALUES
(1, 'Kontakti', '', '', '', 'FIZIO AZ SIA', '+371 266 55 44', 'info@fizioaz.lv');

-- --------------------------------------------------------

--
-- Table structure for table `kontakti_text`
--

CREATE TABLE `kontakti_text` (
  `id` int(11) NOT NULL,
  `lat` text COLLATE utf8_bin NOT NULL,
  `lng` text COLLATE utf8_bin NOT NULL,
  `street` text COLLATE utf8_bin NOT NULL,
  `streetFull` text COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `kontakti_text`
--

INSERT INTO `kontakti_text` (`id`, `lat`, `lng`, `street`, `streetFull`) VALUES
(1, '56.955454', '24.118983', 'Brīvības iela 1-1', 'Brīvības iela 1 - 1, Rīga, LV -1010<br>1 stāvā');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `login` varchar(45) COLLATE utf8_bin NOT NULL,
  `password` varchar(45) COLLATE utf8_bin NOT NULL,
  `status` varchar(10) COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `login`, `password`, `status`) VALUES
(1, 'fizioaz', '1a1dc91c907325c69271ddf0c944bc72', 'active');

-- --------------------------------------------------------

--
-- Table structure for table `vingrosana`
--

CREATE TABLE `vingrosana` (
  `id` int(11) NOT NULL,
  `pageTitle` text COLLATE utf8_bin NOT NULL,
  `quote` text COLLATE utf8_bin NOT NULL,
  `pageLinkURL` varchar(140) COLLATE utf8_bin NOT NULL,
  `pageLinkTitle` varchar(140) COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `vingrosana`
--

INSERT INTO `vingrosana` (`id`, `pageTitle`, `quote`, `pageLinkURL`, `pageLinkTitle`) VALUES
(1, 'Vingrošana', '', '../kalendars', 'Pieteikties uz nodarbību');

-- --------------------------------------------------------

--
-- Table structure for table `vingrosana_text`
--

CREATE TABLE `vingrosana_text` (
  `id` int(11) NOT NULL,
  `title` text COLLATE utf8_bin NOT NULL,
  `textTitle` text COLLATE utf8_bin NOT NULL,
  `textText` text COLLATE utf8_bin NOT NULL,
  `textPrice` text COLLATE utf8_bin NOT NULL,
  `image` text COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `vingrosana_text`
--

INSERT INTO `vingrosana_text` (`id`, `title`, `textTitle`, `textText`, `textPrice`, `image`) VALUES
(1, 'KONSULTĀCIJAS PIEAUGUŠAJIEM UN BĒRNIEM', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in', 'konkrēts apraksts par katru piedāvāto pakalpojumu un arī pakalpojumu cenām, vietām, kur pakalpojumu saņemt', 'https://dl.dropboxusercontent.com/s/y625aqdr954lyap/1-konsultacijas.jpg?dl=0'),
(2, 'Fix your neck', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in', 'konkrēts apraksts par katru piedāvāto pakalpojumu un arī pakalpojumu cenām, vietām, kur pakalpojumu saņemt', 'https://dl.dropboxusercontent.com/s/a2tafpswvnexh5l/img-1.png?dl=0'),
(3, 'Strength training', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in', 'konkrēts apraksts par katru piedāvāto pakalpojumu un arī pakalpojumu cenām, vietām, kur pakalpojumu saņemt', 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1'),
(4, 'Plank challange', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in', 'konkrēts apraksts par katru piedāvāto pakalpojumu un arī pakalpojumu cenām, vietām, kur pakalpojumu saņemt', 'https://dl.dropboxusercontent.com/s/a2tafpswvnexh5l/img-1.png?dl=0'),
(5, 'Stretch training', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in', 'konkrēts apraksts par katru piedāvāto pakalpojumu un arī pakalpojumu cenām, vietām, kur pakalpojumu saņemt', 'https://dl.dropboxusercontent.com/s/2n8a0ukl478cqbj/img-2.png?dl=1'),
(6, 'Pasākumi', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut', 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in', 'konkrēts apraksts par katru piedāvāto pakalpojumu un arī pakalpojumu cenām, vietām, kur pakalpojumu saņemt', 'https://dl.dropboxusercontent.com/s/a2tafpswvnexh5l/img-1.png?dl=0');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `about`
--
ALTER TABLE `about`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `about_text`
--
ALTER TABLE `about_text`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fizioterapija`
--
ALTER TABLE `fizioterapija`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `fizioterapija_text`
--
ALTER TABLE `fizioterapija_text`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `galleries`
--
ALTER TABLE `galleries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `galleries_images`
--
ALTER TABLE `galleries_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `galleries_text`
--
ALTER TABLE `galleries_text`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `home`
--
ALTER TABLE `home`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kalendars`
--
ALTER TABLE `kalendars`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kalendars_text`
--
ALTER TABLE `kalendars_text`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kontakti`
--
ALTER TABLE `kontakti`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kontakti_text`
--
ALTER TABLE `kontakti_text`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vingrosana`
--
ALTER TABLE `vingrosana`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vingrosana_text`
--
ALTER TABLE `vingrosana_text`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `about`
--
ALTER TABLE `about`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `about_text`
--
ALTER TABLE `about_text`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `fizioterapija`
--
ALTER TABLE `fizioterapija`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `fizioterapija_text`
--
ALTER TABLE `fizioterapija_text`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;
--
-- AUTO_INCREMENT for table `galleries`
--
ALTER TABLE `galleries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `galleries_images`
--
ALTER TABLE `galleries_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;
--
-- AUTO_INCREMENT for table `galleries_text`
--
ALTER TABLE `galleries_text`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
--
-- AUTO_INCREMENT for table `home`
--
ALTER TABLE `home`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `kalendars`
--
ALTER TABLE `kalendars`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `kalendars_text`
--
ALTER TABLE `kalendars_text`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT for table `kontakti`
--
ALTER TABLE `kontakti`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `kontakti_text`
--
ALTER TABLE `kontakti_text`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `vingrosana`
--
ALTER TABLE `vingrosana`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `vingrosana_text`
--
ALTER TABLE `vingrosana_text`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
