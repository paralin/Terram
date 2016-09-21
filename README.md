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

The `npm run setup:dev` script will get you up to speed with the Go dependencies.
