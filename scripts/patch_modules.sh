#!/bin/bash
set -e

echo "Patching angular2-logger typing issue..."
echo " -> https://github.com/code-chunks/angular2-logger/issues/39"
sed -i \
  -e 's/=> localStorage.getItem/=> +localStorage.getItem/' \
  ./node_modules/angular2-logger/app/core/logger.ts
