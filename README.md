# Terram: A MMO Terraria-esque web game. [![Build Status](https://travis-ci.com/FuseRobotics/Terram.svg?token=pDSxxzeqkTaa5iGGTLb3&branch=master)](https://travis-ci.com/FuseRobotics/Terram)

The Terram web game browser app.

Basic idea:

 - Single instanced world.
 - Infinite X axis, bedrock on `y = 0`, infinite Y axis (space).
 - Server-sided procedural generation of world.
 - Ability to spawn on friends (and teleport to friends?) after friend request / etc.

Developing
==========

To get started:

 - `npm install`
 - `npm run setup:dev`
 - `npm run server:dev:hmr`

The `npm run setup:dev` script will get you up to speed with the Go dependencies. It will also link in your development version of GoTerram.

When editing GoTerram, you can re-build the JavaScript by doing `./scripts/build_js.bash`. There is a shortcut to do this, you can type `npm run build:go` from this repository. Also make sure you have an account with npmjs.com and login from the command line.
