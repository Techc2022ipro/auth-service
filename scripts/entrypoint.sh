#!/bin/bash
echo "Running in NODE_ENV=$NODE_ENV"

echo "initalize environment file"

echo "Running npm install ..."
npm install

echo "Initalizing libraries modules"
npm --prefix /app/src/libraries/ install

echo "Creating database tables"
npx prisma db push

echo "Running npm run ..."
npm run serve
