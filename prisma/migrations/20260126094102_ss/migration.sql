-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Cat" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "poroda" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "weight" REAL NOT NULL,
    "dateOfBirth" DATETIME NOT NULL
);
INSERT INTO "new_Cat" ("color", "dateOfBirth", "id", "poroda", "weight") SELECT "color", "dateOfBirth", "id", "poroda", "weight" FROM "Cat";
DROP TABLE "Cat";
ALTER TABLE "new_Cat" RENAME TO "Cat";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
