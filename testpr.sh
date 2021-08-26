#!/bin/bash
hub --version >> /dev/null

if [ $? -ne 0 ]; then
		echo "Hub not found. Install from https://cli.github.com/"
		exit 1
fi

hub pr checkout $1
npm run test

if [ $? -eq 0 ]; then
		hub pr merge $1
		echo "SUCCESS"
else
		echo "FAILED..."
fi
