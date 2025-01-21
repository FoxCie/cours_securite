#!/bin/bash

set -e

for file in *; do
    [ "$file" = '*' ] && continue
    [ ! -e $file ] 2>/dev/null && echo "$file" && cat /root/flag.txt || echo "File $file exists"
done
