/*
  Warnings:

  - The primary key for the `tb_queue` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `waiting_queue` on the `tb_queue` table. All the data in the column will be lost.
  - Added the required column `id_queue` to the `tb_Queue` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tb_queue` DROP PRIMARY KEY,
    DROP COLUMN `waiting_queue`,
    ADD COLUMN `id_queue` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `phone_number` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id_queue`);

-- CreateTable
CREATE TABLE `tb_Operator` (
    `id_operator` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `limit` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id_operator`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_transaction` (
    `id_transaction` INTEGER NOT NULL AUTO_INCREMENT,
    `id_queue` INTEGER NOT NULL,
    `id_operator` INTEGER NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id_transaction`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
