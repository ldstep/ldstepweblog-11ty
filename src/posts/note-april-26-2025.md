---
title: Note - April 26, 2025
description:
date: 2025-04-26T15:32:46Z
tags:
   - posts
layout: layouts/post.njk
---

Script to run npm start in the terminal 

-- Change this to your actual project path
set projectPath to "/Users/your-username/Path/To/Your/Eleventy/Site"

```
tell application "Terminal"
	activate
	do script "cd " & quoted form of projectPath & " && npm start"
end tell
```
