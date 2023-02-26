CREATE TABLE userAccountDragon(
    "userAccountId" INTEGER REFERENCES  useraccount(id),
    "dragonId" INTEGER REFERENCES  dragon(id),
    PRIMARY KEY ("userAccountId", "dragonId")
);
