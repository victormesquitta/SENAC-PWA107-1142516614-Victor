/*
  Warnings:

  - You are about to drop the column `alteracao` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `criacao` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "alteracao",
DROP COLUMN "criacao",
ADD COLUMN     "alteracao_dt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "criacao_dt" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;
