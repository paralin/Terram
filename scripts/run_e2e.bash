#!/bin/bash
set -e

echo "=== E2E ==="
echo "DISPLAY: $DISPLAY"
echo "Starting server..."
npm run server:dev:hmr &
SERVER_PID=$!
function finish {
  kill $SERVER_PID
}
trap finish EXIT

echo "Waiting for startup (1 second)..."
sleep 1
echo "Running e2e..."
npm run e2e
