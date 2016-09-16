#!/bin/bash
set -e

if [ -z "$CACHE_CONTEXT" ]; then
  echo "Set CACHE_CONTEXT and try again."
  exit 1
fi

if [ ! -f ./cache_hashes.txt ]; then
  echo "No cache hashes, cannot finalize."
  exit 1
fi

CHANGED_COUNT=$(compare-cache ./node_modules | wc -l)
echo "Detected $CHANGED_COUNT changed files."
if (( $CHANGED_COUNT == 0 )); then
  echo "No changes, I'm done."
  exit 0
fi

echo "Re-packaging cache..."
if [ -f build-cache.tar.gz ]; then
  rm build-cache.tar.gz
fi
tar -czvf build-cache.tar.gz ./node_modules

echo "Uploading cache..."
upload-cache $CACHE_CONTEXT
