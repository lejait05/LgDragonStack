#!/bin/bash

echo "Configuring dragonstackdb"

dropdb -U dragon_ruler dragonstackdb

createdb -U dragon_ruler dragonstackdb


 psql -U dragon_ruler dragonstackdb < ./sql/account.sql
 psql -U dragon_ruler dragonstackdb < ./sql/generation.sql
 psql -U dragon_ruler dragonstackdb < ./sql/dragon.sql
psql -U dragon_ruler dragonstackdb < ./sql/trait.sql
psql -U dragon_ruler dragonstackdb < ./sql/dragonTrait.sql
 psql -U dragon_ruler dragonstackdb < ./sql/accountDragon.sql

node ./insertTraits.js

echo "dragonstackdb configured"
