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
-- Структура таблицы `oc_cat_prod`
--

CREATE TABLE `oc_cat_prod` (
  `cat_prod_id` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `image_sub` varchar(255) DEFAULT NULL,
  `parent_id` int(11) NOT NULL DEFAULT '0',
  `top` tinyint(1) NOT NULL,
  `column` int(3) NOT NULL,
  `sort_order` int(3) NOT NULL DEFAULT '0',
  `status` tinyint(1) NOT NULL,
  `date_added` datetime NOT NULL,
  `date_modified` datetime NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `oc_cat_prod`
--

INSERT INTO `oc_cat_prod` (`cat_prod_id`, `image`, `image_sub`, `parent_id`, `top`, `column`, `sort_order`, `status`, `date_added`, `date_modified`) VALUES
(59, '', '', 0, 0, 1, 0, 1, '2018-03-22 14:27:49', '2018-03-29 10:25:33'),
(60, 'catalog/cat_prodHomeImage/topcat1.png', '', 59, 1, 1, 0, 1, '2018-03-22 14:29:08', '2018-03-29 15:25:52'),
(61, 'catalog/cat_prodHomeImage/topcat2.png', 'catalog/ProductImage/fish-small1.png', 59, 1, 1, 1, 1, '2018-03-22 14:29:54', '2018-03-29 11:10:33'),
(62, 'catalog/cat_prodHomeImage/topcat3.png', '', 59, 1, 1, 2, 1, '2018-03-22 14:30:47', '2018-03-22 14:57:55'),
(63, 'catalog/cat_prodHomeImage/topcat4.png', '', 59, 1, 1, 3, 1, '2018-03-22 14:31:24', '2018-03-22 14:58:10'),
(64, 'catalog/cat_prodHomeImage/topcat5.png', '', 59, 1, 1, 4, 1, '2018-03-22 14:31:57', '2018-03-22 15:37:17'),
(65, 'catalog/cat_prodHomeImage/topcat6.png', '', 59, 1, 1, 5, 1, '2018-03-22 14:32:29', '2018-03-22 14:58:42');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `oc_cat_prod`
--
ALTER TABLE `oc_cat_prod`
  ADD PRIMARY KEY (`cat_prod_id`),
  ADD KEY `parent_id` (`parent_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `oc_cat_prod`
--
ALTER TABLE `oc_cat_prod`
  MODIFY `cat_prod_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=67;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
