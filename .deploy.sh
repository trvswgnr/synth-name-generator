#!/usr/bin/env bash
set -e

DEVELOPMENT_PATH="/home/travisaw/travisaw.com/test/dev/synth-patch-name-generator"
PRODUCTION_PATH="/home/travisaw/travisaw.com/test/pro/synth-patch-name-generator"
SSH_USER="travisaw"
SSH_HOST="travisawagner.com"
DEPLOY_IGNORE="./.deployignore"
DEPLOY_PATH=$DEVELOPMENT_PATH
if [ $TRAVIS_BRANCH = "master" ]; then DEPLOY_PATH=$PRODUCTION_PATH; fi
rsync -r --delete-after --quiet $TRAVIS_BUILD_DIR/ --exclude-from=$DEPLOY_IGNORE $SSH_USER@$SSH_HOST:$DEPLOY_PATH
