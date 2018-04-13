-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Апр 06 2018 г., 17:11
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
-- Структура таблицы `oc_prodcat_to_category`
--

CREATE TABLE `oc_prodcat_to_category` (
  `prodcat_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `oc_prodcat_to_category`
--

INSERT INTO `oc_prodcat_to_category` (`prodcat_id`, `category_id`) VALUES
(69, 61),
(70, 61),
(71, 61),
(72, 61),
(73, 61),
(74, 61),
(75, 61),
(76, 61),
(77, 61);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `oc_prodcat_to_category`
--
ALTER TABLE `oc_prodcat_to_category`
  ADD PRIMARY KEY (`prodcat_id`,`category_id`),
  ADD KEY `category_id` (`category_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
