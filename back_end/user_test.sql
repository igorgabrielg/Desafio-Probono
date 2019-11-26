-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 24-Nov-2019 às 08:41
-- Versão do servidor: 10.4.8-MariaDB
-- versão do PHP: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `user_test`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbl_sessions`
--

CREATE TABLE `tbl_sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `salt` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `salt`) VALUES
(1, 'admin', '44fbd516263fad9624dba8b355dd54ca31cebaff1a6153a24f4945ba01724460da5592e4141e0b20211d86b8d6fb46b48f3d53962af797052f264a23058f53e9', '5ad4d580621a0f11'),
(3, 'admin', '67a7184504e347fe3b72b04c4b29c96d234d87674c99cb543dcaf769abecdd878c8e208ca6be8e5504de2f53ab83dcf6807fd0ae7496490771a999520e4d90bb', '6e5ca69156e5efdd'),
(4, 'admin', '820828d0c505c26d57d50d184a079ca562a555612ae8df753acfcffdda7838d6f67823e5576efa394e6124e23820a05b6f01fbc25bcaded3f6da018be60828ab', '0eb4de4328b106ee'),
(5, 'admin', '27a5412744a034171c75d37003b5f49cb3a16b45d7ba9ba706cc51e12ba0f79a7ad7c96a76e9bcafa599144fea74792c86a55d250f9154f8f4f86dce0dfa2d2c', '6ed3826da3537bce');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `tbl_sessions`
--
ALTER TABLE `tbl_sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Índices para tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
