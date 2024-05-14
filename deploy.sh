#!/bin/bash
echo "Starting the server"

echo "Installing server"
cd src/server
yarn

echo "Starting Server"
npm run start

echo "Started server"

# Deploy locally:
# - prereq: rename src/server/dummy.env to .env + add real creds
# - client: src/client -> npm start
# - server: sh deploy.sh
# - server w/ debugger: open project in vsCode from /server -> run the "Server" debugger