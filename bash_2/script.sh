#!/bin/bash

for file in *; do
    [ -f $file ] && echo "Found file $file in $(pwd)"
done
