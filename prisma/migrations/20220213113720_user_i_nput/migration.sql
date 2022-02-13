-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "teamName" TEXT NOT NULL,
    "projectName" TEXT NOT NULL,
    "projectLink" TEXT NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_projectName_key" ON "Project"("projectName");

-- CreateIndex
CREATE UNIQUE INDEX "Project_projectLink_key" ON "Project"("projectLink");
