-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 13, 2023 at 02:01 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `queue-db`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_operator`
--

CREATE TABLE `tb_operator` (
  `id_operator` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `limit` int(11) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tb_queue`
--

CREATE TABLE `tb_queue` (
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_number` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `id_queue` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tb_queue`
--

INSERT INTO `tb_queue` (`name`, `phone_number`, `createdAt`, `id_queue`) VALUES
('Nama 1', '0878856789', '2023-01-12 19:47:42.789', 1),
('Nama 2', '0000000000', '2023-01-12 19:48:32.503', 2),
('Nama 3', '0812222222', '2023-01-12 22:46:54.269', 3),
('Nama 3', '0812222222', '2023-01-12 22:46:54.841', 4),
('Nama 3', '0812222222', '2023-01-12 22:46:56.023', 5),
('Nama 3', '0812222222', '2023-01-12 22:47:28.452', 6),
('Nama 3', '0812222222', '2023-01-12 22:47:28.764', 7),
('', '', '2023-01-12 22:47:30.355', 8),
('', '', '2023-01-12 22:47:31.021', 9),
('sss', '1233', '2023-01-12 22:47:34.927', 10),
('sss', '1233', '2023-01-12 22:47:35.404', 11),
('sss', '1233', '2023-01-12 22:47:35.605', 12),
('acak', '12345', '2023-01-12 22:51:50.044', 13),
('acak333', '66666', '2023-01-12 22:53:19.319', 14),
('acak333', '66666', '2023-01-12 22:53:51.701', 15),
('www', '12345', '2023-01-12 22:54:00.069', 16),
('pendaftar', '12345', '2023-01-12 22:57:08.672', 17),
('pendaftar 2', '12345', '2023-01-12 22:57:26.994', 18),
('Pendaftar 3', '12345', '2023-01-12 22:58:37.381', 19),
('Pendaftar 4', '12345', '2023-01-12 22:59:15.469', 20);

-- --------------------------------------------------------

--
-- Table structure for table `tb_transaction`
--

CREATE TABLE `tb_transaction` (
  `id_transaction` int(11) NOT NULL,
  `id_queue` int(11) NOT NULL,
  `id_operator` int(11) NOT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('0542615d-18c9-47dd-b266-c2cccd94bd87', 'd3796260d494cb6fab48ac68013ba3e2aac145332d6f12857396e5a2d2ab3ed6', '2023-01-12 19:46:58.893', '20230112093403_1', NULL, NULL, '2023-01-12 19:46:58.875', 1),
('212beb3a-a40a-4750-9c6f-e589fb2e1f6e', '6655b42ab3a5b94e616a7c142c55dbaeee3a1cb7a0534d3c20ae32e61cae8779', '2023-01-12 19:46:58.965', '20230112194053_2', NULL, NULL, '2023-01-12 19:46:58.895', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_operator`
--
ALTER TABLE `tb_operator`
  ADD PRIMARY KEY (`id_operator`);

--
-- Indexes for table `tb_queue`
--
ALTER TABLE `tb_queue`
  ADD PRIMARY KEY (`id_queue`);

--
-- Indexes for table `tb_transaction`
--
ALTER TABLE `tb_transaction`
  ADD PRIMARY KEY (`id_transaction`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tb_operator`
--
ALTER TABLE `tb_operator`
  MODIFY `id_operator` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tb_queue`
--
ALTER TABLE `tb_queue`
  MODIFY `id_queue` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `tb_transaction`
--
ALTER TABLE `tb_transaction`
  MODIFY `id_transaction` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
