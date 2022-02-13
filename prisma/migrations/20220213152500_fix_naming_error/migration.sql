/*
  Warnings:

  - You are about to drop the `Project` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Project";

-- CreateTable
CREATE TABLE "ProjectEntry" (
    "id" TEXT NOT NULL,
    "teamName" TEXT NOT NULL,
    "projectName" TEXT NOT NULL,
    "projectLink" TEXT NOT NULL,

    CONSTRAINT "ProjectEntry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProjectEntry_projectName_key" ON "ProjectEntry"("projectName");

-- CreateIndex
CREATE UNIQUE INDEX "ProjectEntry_projectLink_key" ON "ProjectEntry"("projectLink");
