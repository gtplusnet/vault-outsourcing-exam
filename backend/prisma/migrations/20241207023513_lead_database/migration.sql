-- CreateEnum
CREATE TYPE "ServicesOptions" AS ENUM ('DELIVERY', 'PICKUP', 'PAYMENT');

-- CreateTable
CREATE TABLE "Lead" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "services" "ServicesOptions"[],

    CONSTRAINT "Lead_pkey" PRIMARY KEY ("id")
);
