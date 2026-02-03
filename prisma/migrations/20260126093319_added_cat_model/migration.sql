-- CreateTable
CREATE TABLE "Cat" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "poroda" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "weight" REAL NOT NULL,
    "dateOfBirth" DATETIME NOT NULL
);
