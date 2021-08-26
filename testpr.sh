#!/bin/bash
gh --version >> /dev/null

if [ $? -ne 0 ]; then
		echo "GitHub CLI not found. Install from https://cli.github.com/"
		exit 1
fi

gh pr checkout $1
npm run test

if [ $? -eq 0 ]; then
		gh pr merge -dm $1
		echo "SUCCESS"
else
		gh pr comment -b "Please check your JSON, it doesn't appear to be valid. https://jsonlint.com/" $1
		echo "FAILED..."
fi

git checkout master

