#!/bin/bash

function on_term() {
    exit 0
}

trap on_term SIGTERM

flask --app flaskr init-db
flask --app flaskr run --debug --host 0.0.0.0

