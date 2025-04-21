---
title: Another 11ty lightbulb moment
description:
date: 2025-04-20T12:17:45Z
tags:
   - posts
layout: layouts/post.njk
---

April 20, 2025

I’m still learning how to use 11ty, and every now and then something clicks.

Yesterday I [wrote](https://lstep.xyz/posts/text-editors/) about text editors. I’ve now realized that I don’t need to write blog posts in a code editor like VS Code or BBEdit. If I’m just writing a post, a regular text editor works just fine.

All I need to do is save the Markdown file into the posts folder of my local 11ty project. That folder is part of my local Git repository. GitHub Desktop picks up the change automatically, and I can commit and push it from there. Vercel handles the rest, building and publishing the updated site.

The only time I really need a code editor is when I want to make changes to the site itself—layout, styles, config files, that kind of stuff.

Here’s my workflow:

1. Write the post in Markdown with front matter using [Drafts](https://getdrafts.com).
2. Save as file to the Desktop, naming it with the post slug.
3. Drag the file into the appropriate [Dropzone](https://aptonic.com/) folder that moves it into the correct location in the local 11ty project.
4. Use GitHub Desktop to commit and push the changes.