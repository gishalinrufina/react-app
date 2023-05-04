-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 04, 2023 at 06:12 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pms`
--

-- --------------------------------------------------------

--
-- Table structure for table `menusetting`
--

CREATE TABLE `menusetting` (
  `id` int(12) NOT NULL,
  `menucode` varchar(10) NOT NULL,
  `menuname` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `menusetting`
--

INSERT INTO `menusetting` (`id`, `menucode`, `menuname`) VALUES
(1, '001', 'Resume Management'),
(3, '002', 'Health Management');

-- --------------------------------------------------------

--
-- Table structure for table `prs_coresprofobj`
--

CREATE TABLE `prs_coresprofobj` (
  `id` int(10) NOT NULL,
  `usercode` varchar(256) NOT NULL,
  `correspondence` varchar(256) NOT NULL,
  `profile` varchar(256) NOT NULL,
  `objective` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `prs_coresprofobj`
--

INSERT INTO `prs_coresprofobj` (`id`, `usercode`, `correspondence`, `profile`, `objective`) VALUES
(2, 'tr', 'gfvfv]', 'v v v ', 'dvv ');

-- --------------------------------------------------------

--
-- Table structure for table `prs_education`
--

CREATE TABLE `prs_education` (
  `id` int(10) NOT NULL,
  `usercode` varchar(266) NOT NULL,
  `ug` varchar(266) NOT NULL,
  `pg` varchar(266) NOT NULL,
  `hsc` varchar(266) NOT NULL,
  `sslc` varchar(266) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `prs_education`
--

INSERT INTO `prs_education` (`id`, `usercode`, `ug`, `pg`, `hsc`, `sslc`) VALUES
(1, 'jhgf', '2005', '2007', 'gxff', 'knvgcfdx');

-- --------------------------------------------------------

--
-- Table structure for table `prs_experience`
--

CREATE TABLE `prs_experience` (
  `id` int(10) NOT NULL,
  `usercode` varchar(266) NOT NULL,
  `companyname` varchar(266) NOT NULL,
  `fromdate` varchar(266) NOT NULL,
  `todate` varchar(266) NOT NULL,
  `designation` varchar(266) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `prs_experience`
--

INSERT INTO `prs_experience` (`id`, `usercode`, `companyname`, `fromdate`, `todate`, `designation`) VALUES
(2, '78', 'gbvfc ', 'vc ', 'null', 'vc x');

-- --------------------------------------------------------

--
-- Table structure for table `prs_project`
--

CREATE TABLE `prs_project` (
  `id` int(10) NOT NULL,
  `usercode` varchar(266) NOT NULL,
  `pname` varchar(266) NOT NULL,
  `techused` varchar(266) NOT NULL,
  `description` varchar(266) NOT NULL,
  `responsibility` varchar(266) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `prs_project`
--

INSERT INTO `prs_project` (`id`, `usercode`, `pname`, `techused`, `description`, `responsibility`) VALUES
(1, 'jhgf', 'mjh', 'kmjh', 'dfvbgnm ', 'hgfx');

-- --------------------------------------------------------

--
-- Table structure for table `prs_technical`
--

CREATE TABLE `prs_technical` (
  `id` int(10) NOT NULL,
  `usercode` varchar(266) NOT NULL,
  `type` varchar(266) NOT NULL,
  `description` varchar(266) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `prs_technical`
--

INSERT INTO `prs_technical` (`id`, `usercode`, `type`, `description`) VALUES
(2, 'jhgf', 'dcfvbgnhjm', 'dfvbgnm '),
(3, '7', 'dcfvbgnhjm', 'dfvbgnm '),
(4, '001', 'rrf', 'rftg');

-- --------------------------------------------------------

--
-- Table structure for table `submenusetting`
--

CREATE TABLE `submenusetting` (
  `id` int(12) NOT NULL,
  `menucode` varchar(10) NOT NULL,
  `submenuname` varchar(500) NOT NULL,
  `url` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `submenusetting`
--

INSERT INTO `submenusetting` (`id`, `menucode`, `submenuname`, `url`) VALUES
(2, '001', 'Correspondence Profile ', 'prs_coresprofobj.jsp?option=view&id=0'),
(3, '001', 'Education Setting', 'prs_education.jsp?option=view&id=0'),
(4, '001', 'Experience Setting', 'prs_experience.jsp?option=view&id=0'),
(5, '001', 'Technical Expertise', 'prs_technical.jsp?option=view&id=0'),
(6, '001', 'Project Details', 'prs_project.jsp?option=view&id=0');

-- --------------------------------------------------------

--
-- Table structure for table `usersetting`
--

CREATE TABLE `usersetting` (
  `id` int(12) NOT NULL,
  `username` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `mobileno` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `usersetting`
--

INSERT INTO `usersetting` (`id`, `username`, `password`, `email`, `mobileno`) VALUES
(6, 'GAVASKAR S', 'welcome', 'gavaskar07@gmail.com', '944315724612');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `menusetting`
--
ALTER TABLE `menusetting`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `prs_coresprofobj`
--
ALTER TABLE `prs_coresprofobj`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `prs_education`
--
ALTER TABLE `prs_education`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `prs_experience`
--
ALTER TABLE `prs_experience`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `prs_project`
--
ALTER TABLE `prs_project`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `prs_technical`
--
ALTER TABLE `prs_technical`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `submenusetting`
--
ALTER TABLE `submenusetting`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usersetting`
--
ALTER TABLE `usersetting`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `menusetting`
--
ALTER TABLE `menusetting`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `prs_coresprofobj`
--
ALTER TABLE `prs_coresprofobj`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `prs_education`
--
ALTER TABLE `prs_education`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `prs_experience`
--
ALTER TABLE `prs_experience`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `prs_project`
--
ALTER TABLE `prs_project`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `prs_technical`
--
ALTER TABLE `prs_technical`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `submenusetting`
--
ALTER TABLE `submenusetting`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `usersetting`
--
ALTER TABLE `usersetting`
  MODIFY `id` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
