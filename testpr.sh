#!/bin/bash
PGB=$(git branch | grep \* | cut -d ' ' -f2)

if ! gh --version >/dev/null 2>&1; then
	echo "GitHub CLI not found. Install from https://cli.github.com/"
else
	if ! gh pr diff $2 | grep -q "_data/semesters/$1"; then
		gh pr comment -b "Your JSON is in the wrong folder, please move it to the $1 folder"
		echo "PR $2 FAILED, JSON in wrong folder."
	else
		gh pr checkout $2

		if npm run test jest >/dev/null 2>&1; then
			gh pr merge -dm $2
			echo "PR $2 PASSED checks"
		else
			gh pr comment -b "Please check your JSON, it doesn't appear to be valid. https://jsonlint.com/" $2
			echo "PR $2 FAILED, invalid JSON"
		fi
	fi
fi

git checkout $PGB

