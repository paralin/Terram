const child_process = require('child_process');
module.exports = function resolveGoPaths(dirs) {
  var goRoot;
  var goPath;
  try {
    goRoot = child_process.execSync("go env GOROOT", {encoding: 'utf8', env: process.env}).trim();
    dirs.push(goRoot + "/src");
  } catch (e) {
    console.log("Error determining goroot: " + e);
    console.log("Your source maps may not show up properly.")
    return;
  }
  try {
    goPath = child_process.execSync("go env GOPATH", {encoding: 'utf8', env: process.env}).trim();
    dirs.push(goPath + "/src");
  } catch (e) {
    console.log("Error determining gopath: " + e);
    console.log("Your source maps may not show up properly.")
    return;
  }
};
