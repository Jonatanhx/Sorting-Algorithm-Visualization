/*
  Warnings:

  - Added the required column `height` to the `Patients` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Patients" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "weight" INTEGER NOT NULL,
    "height" INTEGER NOT NULL
);
INSERT INTO "new_Patients" ("age", "firstName", "id", "weight") SELECT "age", "firstName", "id", "weight" FROM "Patients";
DROP TABLE "Patients";
ALTER TABLE "new_Patients" RENAME TO "Patients";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
