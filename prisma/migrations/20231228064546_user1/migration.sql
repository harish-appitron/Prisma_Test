/*
  Warnings:

  - You are about to alter the column `password` on the `user1` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `user1` MODIFY `password` VARCHAR(191) NOT NULL;
