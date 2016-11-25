# Terram: A MMO Terraria-esque web game. [![Build Status](https://travis-ci.com/paralin/Terram.svg?token=pDSxxzeqkTaa5iGGTLb3&branch=master)](https://travis-ci.com/FuseRobotics/Terram)

The Terram web game browser app.

Basic idea:

 - Single instanced world.
 - Infinite X axis, bedrock on `y = 0`, infinite Y axis (space).
 - Server-sided procedural generation of world.
 - Ability to spawn on friends (and teleport to friends?) after friend request / etc.

Developing
==========

First, make sure you have the following prereqs:

 - Have a [NpmJS](http://npmjs.com) account.
 - Sign into npm with `npm login`
 - Set up your [GitHub SSH keys](https://help.github.com/articles/generating-an-ssh-key/).

To get started:

 - `npm install`
 - `npm run setup:dev`

Then, to run the webserver:

 - `npm run server:dev:hmr`

The `npm run setup:dev` script will get you up to speed with the Go dependencies. It will also link in your development version of GoTerram.

When editing GoTerram, you can re-build the JavaScript by doing `./scripts/build_js.bash`. There is a shortcut to do this, you can type `npm run build:go` from this repository.
