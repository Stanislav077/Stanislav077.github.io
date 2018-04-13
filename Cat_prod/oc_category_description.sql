-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Апр 06 2018 г., 12:54
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
-- Структура таблицы `oc_cat_prod_description`
--

CREATE TABLE `oc_cat_prod_description` (
  `cat_prod_id` int(11) NOT NULL,
  `language_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `meta_title` varchar(255) NOT NULL,
  `meta_description` varchar(255) NOT NULL,
  `meta_keyword` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `oc_cat_prod_description`
--

INSERT INTO `oc_cat_prod_description` (`cat_prod_id`, `language_id`, `name`, `description`, `meta_title`, `meta_description`, `meta_keyword`) VALUES
(59, 2, 'E-Store', '&lt;p&gt;&lt;span style=&quot;color: rgb(52, 73, 94); font-family: Hypatia; font-size: 18px;&quot;&gt;I use this for a 2-2.5 gallon tank with one betta fish. It keeps the temp in the &quot;good&quot; range and I like that it has a light feature of when the heater is actually heating (red) vs. off because it reached temp (green). It is large - esp. if you have a smaller tank like me but the other heater I had that you could put under the stones just couldn\'t keep the temperature warm enough. I\'m happy with this, just wish I could put it on the bottom&lt;/span&gt;&lt;br&gt;&lt;/p&gt;', 'E-Store', '', ''),
(60, 2, 'Saltwater Fish', '&lt;p&gt;&lt;span style=&quot;color: rgb(52, 73, 94); font-family: Hypatia; font-size: 18px;&quot;&gt;No one offers a better selection of healthy marine fish for the saltwater aquarium . From angels, to clownfish, gobies, tangs, wrasse and more... The finest specimens in the world are just a click away.&lt;/span&gt;&lt;br&gt;&lt;/p&gt;', 'Saltwater Fish', '', ''),
(61, 2, 'Artificial Corals', '', 'Artificial Corals', '', ''),
(62, 2, 'Freshwater Fish', '', 'Freshwater Fish', '', ''),
(63, 2, 'Chillers', '', 'Chillers', '', ''),
(64, 2, 'Artificial Reef', '', 'Artificial Reef', '', ''),
(65, 2, 'Fish Food', '', 'Fish Food', '', '');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `oc_cat_prod_description`
--
ALTER TABLE `oc_cat_prod_description`
  ADD PRIMARY KEY (`cat_prod_id`,`language_id`),
  ADD KEY `name` (`name`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
