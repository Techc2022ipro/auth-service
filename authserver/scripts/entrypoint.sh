#!/bin/bash
echo "Running in NODE_ENV=$NODE_ENV"

echo "initalize environment file"

echo "Running npm install ..."
npm install --prefer-offline --no-audit

echo "Initalizing libraries modules"
npm --prefix /app/src/libraries/ install

echo "Running npm run ..."
npm start