#!/bin/bash
git init
touch README.md
mkdir test
touch test/tests.js
touch index.js
touch config.js
touch config.js.example
wget https://raw.githubusercontent.com/github/gitignore/master/Node.gitignore -O .gitignore
echo "config.js" >> .gitignore
npm init
exit 0
