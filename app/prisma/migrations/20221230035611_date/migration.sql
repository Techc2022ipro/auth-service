-- CreateTable
CREATE TABLE "Profile" (
    "profid" SERIAL NOT NULL,
    "uid" INTEGER NOT NULL,
    "firstName" VARCHAR(64) NOT NULL,
    "lastName" VARCHAR(64) NOT NULL,
    "profilePic" VARCHAR(256) NOT NULL,
    "address" VARCHAR(256) NOT NULL,
    "phoneNo" VARCHAR(60) NOT NULL,
    "tags" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("profid")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_uid_key" ON "Profile"("uid");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_uid_fkey" FOREIGN KEY ("uid") REFERENCES "User"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;
