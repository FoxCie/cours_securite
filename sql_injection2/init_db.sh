#!/bin/bash

set -e

PASSWORD=$(sha256sum <(head -c 128 /dev/urandom) | cut -d' ' -f 1)
POSTGRES_DB=${POSTGRES_DB-sqlidb}

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE TABLE users (id int primary key, username VARCHAR(255), password VARCHAR(255));
    INSERT INTO users (id, username, password) VALUES (1, 'user', 'COUCOU'), (2, 'admin', '$PASSWORD');
EOSQL
