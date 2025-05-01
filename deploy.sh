#!/bin/bash

REPO_URL='git@github.com:k161196/painthilltemp.git'

cd out
pwd 
if [ -z "$REPO_URL" ]; then
  echo "❌ Error: GitHub repo URL is required."
  echo "Usage: ./setup-git.sh <repo-url>"
  exit 1
fi

echo "✅ Initializing Git repo..."
git init

echo "✅ Adding all files..."
git add .

echo "✅ Making initial commit..."
git commit -m "Initial commit"

echo "✅ Adding remote origin..."
git remote add origin "$REPO_URL"

echo "✅ Renaming branch to main..."
git branch -M main

echo "✅ Pushing to GitHub..."
git push -u origin main -f

echo "🚀 Done! Your project is now pushed to $REPO_URL"
