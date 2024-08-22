#!/usr/bin/env bash
set -e

echo "########################"
echo "# build.sh"
echo "# Branch = ${BRANCH}"
echo "# node version = $(node -v)"
echo "# npm version = $(npm -v)"
echo "########################"

# Typescript Build in ./dist
npm run build

if [ "$BRANCH" != "develop" ] && [ "$BRANCH" != "main" ] && [ "$BRANCH" != "" ]; then
    echo "Skip documentation as branch is not develop and not main (is: ${BRANCH}).";
    exit 0;
fi;


mkdir -p ./docs/
rm -rf ./docs/reference/


# TypeDoc in ./docs/referece
npx typedoc
