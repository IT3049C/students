#!/bin/bash

gh pr list | awk '{print $1}' | xargs -I {} ./testpr.sh $1 {}

