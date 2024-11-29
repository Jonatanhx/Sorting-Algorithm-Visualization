-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Countries" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "populationSize" INTEGER NOT NULL,
    "landArea" INTEGER NOT NULL
);
INSERT INTO "new_Countries" ("id", "landArea", "name", "populationSize") SELECT "id", "landArea", "name", "populationSize" FROM "Countries";
DROP TABLE "Countries";
ALTER TABLE "new_Countries" RENAME TO "Countries";
CREATE UNIQUE INDEX "Countries_name_key" ON "Countries"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
