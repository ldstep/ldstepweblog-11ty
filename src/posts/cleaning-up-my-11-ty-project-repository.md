---
title: Cleaning up my 11ty project repository
description:
date: 2025-04-18T12:34:14Z
tags:
   - posts
layout: layouts/post.njk
---

April 18, 2025

Hey friends, I want to share a lesson I learned today about properly managing my 11ty site repository.

For a while now, I've been noticing something strange whenever I committed changes to GitHub. When I'd make edits with my development server running (`npm start`), my commits would include a bunch of extra files I didn't actually change. Turns out, I was accidentally committing all my build files along with my source code!

Here's what was happening:

-  When running `npm start`, 11ty generates build files in directories like `_site` or `dist`
-  Without a proper `.gitignore` file, Git was tracking ALL these generated files
-  Every time I committed changes, I was pushing both my source code AND these temporary build files

This wasn't just cluttering my repository, it was also confusing when looking at commit histories and potentially causing conflicts.

The fix was surprisingly simple:

1. Created a `.gitignore` file in my project root
2. Added entry for build directory
3. Ran `git rm -r --cached .` to clear Git's tracking cache
4. Re-added my files with `git add .` (which now respects the `.gitignore`)
5. Committed the cleaned-up repository

Since my site deploys to Vercel directly from GitHub, I don't need those build files in my repository anyway. Vercel handles the building process on their servers.

Now my repository is clean, my commits only show the files I've actually changed, and the deployment process works exactly the same.
