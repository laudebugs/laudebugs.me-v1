#!/bin/sh


if [[ `git status --porcelain` ]]; then
  # Changes
  # Stage the file, commit and push
  git add posts/archive.json
  git commit -m "updated posts archive" --no-verify
  git push origin main
else
  # No changes
  echo "no changes to be commited"
fi

echo "updates done"
