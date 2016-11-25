#!/bin/bash
WIKI_ROOT=https://github.com/FuseRobotics/Terram/wiki

echo "Checking your npm..."
if ! npm -v; then
  echo "NPM is not set up properly."
  exit 1
fi

echo "Checking your go..."
if ! go version; then
  echo "You need Go installed. Please do so now, preferably 1.7 or greater."
  exit 1
fi

echo "Checking your go workspace..."
if [ -z "$GOPATH" ]; then
  echo "You have no go workspace set up."
  echo " - see $WIKI_ROOT/Creating-a-Go-Workspace"
  exit 1
fi

echo "Checking if you have goterram..."
REPOS_PATH=${GOPATH}/src/github.com/paralin
GOGAME_PATH=${REPOS_PATH}/gogame
GOTERRAM_PATH=${REPOS_PATH}/goterram

if [ ! -d $GOTERRAM_PATH ]; then
  echo "You do not have goterram, attempting to clone it..."
  mkdir -p $REPOS_PATH
  pushd $REPOS_PATH
  if ! git clone git@github.com:FuseRobotics/goterram.git; then
    echo "Unable to clone, you may need to set up your SSH keys."
    exit 1
  fi
  popd
fi

if [ ! -d $GOGAME_PATH ]; then
  echo "You do not have gogame, attempting to clone it..."
  mkdir -p $REPOS_PATH
  pushd $REPOS_PATH
  if ! git clone git@github.com:FuseRobotics/gogame.git; then
    echo "Unable to clone, you may need to set up your SSH keys."
    exit 1
  fi
  popd
fi

echo "Checking if you have glide installed..."
if ! glide -v ; then
  echo "You do not have glide installed, attempting to get it..."
  if ! curl https://glide.sh/get | sh; then
    echo "Unable to get glide, see http://glide.sh"
    exit 1
  fi
fi

echo "Installing dependencies..."
pushd $GOTERRAM_PATH
if [ -n "$USE_GLIDE_FOR_DEPS" ]; then
  if ! glide install; then
    echo "Unable to install dependencies with glide install."
    exit 1
  fi
else
  rm -rf ./vendor || true
  go get ./...
fi
popd

echo "Doing initial goterram js build..."
pushd $GOTERRAM_PATH
if ! ./scripts/build_js.bash; then
  echo "Unable to build js, for some reason."
  exit 1
fi
npm link
popd

echo "Linking in goterram..."
if ! [ -d ./node_modules ]; then
  npm install
fi
rm -rf ./node_modules/@fusebot/goterram || true
npm link @fusebot/goterram

echo "Done, your goterram dependencies are set up."
