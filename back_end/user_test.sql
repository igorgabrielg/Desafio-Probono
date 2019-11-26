-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 26-Nov-2019 às 03:57
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

--
-- Extraindo dados da tabela `tbl_sessions`
--

INSERT INTO `tbl_sessions` (`session_id`, `expires`, `data`) VALUES
('FOVMu3Tc5Gr5WOcsIV1xtX-t4OTZwKO5', 1574722758, '{\"cookie\":{\"originalMaxAge\":600000,\"expires\":\"2019-11-25T22:50:07.812Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{\"user\":18}}'),
('eMfZQ8zTieJzU5T5hKSalWWFw3PlnO7K', 1574737037, '{\"cookie\":{\"originalMaxAge\":600000,\"expires\":\"2019-11-26T02:48:45.454Z\",\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"passport\":{\"user\":18}}');

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `cpf` varchar(255) NOT NULL,
  `salt` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`, `name`, `cpf`, `salt`) VALUES
(18, 'admin', '5f91a6fa2cfda9e7c9a42b5239247c548ddc37369efe44880a14dbc93e26eb02a6aa4a7c61fca62e9e94624f3861105a5146cfa20aea25091e284bc9c9ae5ad3', 'admin@admin.com', 'admin', '000.000.000-55', 'd906e1f1e0fba9bd'),
(19, 'admin2', 'c8e73173af67f8cbb2a7e89ebd01af814ff0fb5a8569885e6a415c3e5fa946871a4a8975f21f098e1606744590e1b94764d047792f2c818d891df132c4497d92', 'Igor.gabrielg@gmail.com', 'admin2', '008.263.381-94', 'ea3a645d3d872550'),
(20, 'gfdgfd', 'a9eb49e637ca7b351a4d4938c1fde8a6a2b2eace7984f35fba146e87a6cbcacf59d9d335e59e40d18b557f0d2bd15b3dd66207cd3ff90d6815f82660ad8c6c61', 'Igor.gabrielg@gmail.com', 'igorasdsad', '000.000.000-59', 'a4ff127da9cebb8d');

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
  ADD PRIMARY KEY (`id`),
  ADD KEY `salt` (`email`),
  ADD KEY `salt_2` (`email`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
