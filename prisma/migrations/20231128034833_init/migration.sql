/*
  Warnings:

  - The primary key for the `Villain` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `partnerships` on the `Villain` table. All the data in the column will be lost.
  - You are about to drop the `Company` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Department` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Employee` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `image` to the `Villain` table without a default value. This is not possible if the table is not empty.
  - The required column `villainID` was added to the `Villain` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "Department" DROP CONSTRAINT "Department_companyId_fkey";

-- DropForeignKey
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_departmentId_fkey";

-- AlterTable
ALTER TABLE "Villain" DROP CONSTRAINT "Villain_pkey",
DROP COLUMN "partnerships",
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "villainID" TEXT NOT NULL,
ADD CONSTRAINT "Villain_pkey" PRIMARY KEY ("villainID");

-- DropTable
DROP TABLE "Company";

-- DropTable
DROP TABLE "Department";

-- DropTable
DROP TABLE "Employee";
