#!/bin/bash
gh --version >> /dev/null

if [ $? -ne 0 ]; then
		echo "GitHub CLI not found. Install from https://cli.github.com/"
		exit 1
fi

gh pr checkout $1
npm run test

if [ $? -eq 0 ]; then
		gh pr merge $1
		echo "SUCCESS"
else
		echo "FAILED..."
fi

