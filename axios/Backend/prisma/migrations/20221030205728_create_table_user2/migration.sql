/*
  Warnings:

  - You are about to drop the column `create_at` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `update_at` on the `users` table. All the data in the column will be lost.
  - Added the required column `nomeUser` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `perfilUser` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senha` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "create_at",
DROP COLUMN "email",
DROP COLUMN "name",
DROP COLUMN "password",
DROP COLUMN "update_at",
ADD COLUMN     "alteracao" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "criacao" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "nomeUser" TEXT NOT NULL,
ADD COLUMN     "perfilUser" TEXT NOT NULL,
ADD COLUMN     "senha" TEXT NOT NULL;
