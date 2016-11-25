#!/bin/bash

echo "Checking if you have goterram..."
REPOS_PATH=${GOPATH}/src/github.com/paralin
GOTERRAM_PATH=${REPOS_PATH}/goterram

if [ ! -d $GOTERRAM_PATH ]; then
  echo "You do not have goterram, run the setup script."
  exit 1
fi

pushd $GOTERRAM_PATH
./scripts/build_js.bash
popd
