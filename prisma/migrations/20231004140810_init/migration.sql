-- CreateTable
CREATE TABLE "Link" (
    "id" SERIAL NOT NULL,
    "webLink" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);
