CREATE TABLE userAccount
(
    id          SERIAL PRIMARY KEY ,
--     email       VARCHAR(255),
--     "firstName" VARCHAR(255),
--     "lastName"  VARCHAR(255),
    "usernameHash"    VARCHAR(64),
    "passwordHash"    VARCHAR(64)
);
