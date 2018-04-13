-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Апр 10 2018 г., 14:02
-- Версия сервера: 5.7.19
-- Версия PHP: 7.1.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `aquadesignpro`
--

-- --------------------------------------------------------

--
-- Структура таблицы `oc_wholesale`
--

CREATE TABLE `oc_wholesale` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `block_first` text NOT NULL,
  `block_too` text NOT NULL,
  `link_more` varchar(255) NOT NULL,
  `link_yuotub` varchar(255) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `oc_wholesale`
--

INSERT INTO `oc_wholesale` (`id`, `title`, `block_first`, `block_too`, `link_more`, `link_yuotub`, `status`) VALUES
(1, 'About us', '&lt;span style=&quot;color: rgb(52, 73, 94); font-family: Hypatia; font-size: 18px;&quot;&gt;&lt;span&gt;A&lt;/span&gt;qua Design Pro specializes in the design, manufacture, installation and assembly of all types of fresh and salt water aquariums. We also provide our customers with Professional life support systems, custom sized automatic color changing energy efficient LED lit bubble wall panels, aquatic ponds and indoor waterfalls are just a small example of some of the finest products that we can supply to our customers. We offer modern designs, as well as custom shapes and sizes for every style of fresh and saltwater aquariums in our Exclusive customized product line.&lt;/span&gt;', '&lt;span style=&quot;color: rgb(52, 73, 94); font-family: Hypatia; font-size: 18px;&quot;&gt;The main purpose of our Team of Designers, is to create a product that you will adore for many years, and will become a harmonious part of the interior of your home or office. Our Engineers will develop your unique, customized project by taking into account all of the technical data requirements from start to finish. When you hire Aqua Design Pro, you will get a company that has the ability to create your project from start to finish and manufacture everything with the utmost pride and professionalism.&lt;/span&gt;', '/index.php?route=information/information&amp;information_id=4', 'C2qcOf3WbUo', 1);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `oc_wholesale`
--
ALTER TABLE `oc_wholesale`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `oc_wholesale`
--
ALTER TABLE `oc_wholesale`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
