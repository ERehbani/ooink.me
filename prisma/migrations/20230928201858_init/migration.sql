/*
  Warnings:

  - You are about to drop the column `name` on the `Link` table. All the data in the column will be lost.
  - Added the required column `userName` to the `Link` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Link" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "socialLink" TEXT NOT NULL,
    "urlProfile" TEXT,
    "userName" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_Link" ("code", "createdAt", "id", "socialLink", "urlProfile") SELECT "code", "createdAt", "id", "socialLink", "urlProfile" FROM "Link";
DROP TABLE "Link";
ALTER TABLE "new_Link" RENAME TO "Link";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
