-- CreateTable
CREATE TABLE "Monstro" (
    "id" TEXT NOT NULL,
    "monster_id" INTEGER NOT NULL,
    "monster_info" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "race" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "element_power" INTEGER NOT NULL,
    "gif" TEXT NOT NULL,
    "main_atb" JSONB NOT NULL,
    "main_stats" JSONB NOT NULL,
    "elementalDamage" JSONB NOT NULL,
    "skills" JSONB NOT NULL,
    "drops" JSONB[],
    "maps" JSONB[],

    CONSTRAINT "Monstro_pkey" PRIMARY KEY ("id")
);
