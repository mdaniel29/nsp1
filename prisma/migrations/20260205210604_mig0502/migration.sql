-- CreateTable
CREATE TABLE "album" (
    "id" BIGSERIAL NOT NULL,
    "title" VARCHAR(191) NOT NULL,
    "artist" VARCHAR(191) NOT NULL,
    "cover" VARCHAR(191) NOT NULL,

    CONSTRAINT "idx_46381_primary" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "track" (
    "id" BIGSERIAL NOT NULL,
    "title" VARCHAR(191) NOT NULL,
    "duration" BIGINT NOT NULL,
    "albumid" BIGINT NOT NULL,

    CONSTRAINT "idx_46388_primary" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "idx_46388_track_albumid_fkey" ON "track"("albumid");

-- AddForeignKey
ALTER TABLE "track" ADD CONSTRAINT "track_albumid_fkey" FOREIGN KEY ("albumid") REFERENCES "album"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
