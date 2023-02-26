#!/bin/bash

echo "Configuring dragonstackdb"

dropdb -U dragon_ruler dragonstackdb

createdb -U dragon_ruler dragonstackdb


 psql -U dragon_ruler dragonstackdb < ./bin/sql/account.sql
 psql -U dragon_ruler dragonstackdb < ./bin/sql/generation.sql
 psql -U dragon_ruler dragonstackdb < ./bin/sql/dragon.sql
psql -U dragon_ruler dragonstackdb < ./bin/sql/trait.sql
psql -U dragon_ruler dragonstackdb < ./bin/sql/dragonTrait.sql
 psql -U dragon_ruler dragonstackdb < ./bin/sql/accountDragon.sql

node ./bin/insertTraits.js

echo "dragonstackdb configured"
