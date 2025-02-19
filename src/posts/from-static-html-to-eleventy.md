---
title: From Static HTML to Eleventy
description:
date: 2025-02-19T19:54:52Z
tags:
   - posts
layout: layouts/post.njk
---

Posted on February 19, 2025 by Loren

As the title suggests, this blog is now generated using [Eleventy](https://www.11ty.dev/) also known as 11ty. You might remember that I had planned to rebuild the blog using 11ty, and after a lot of trial and error, I finally made it happen. The process wasn't easy, but I've learned a ton.

The difference between a plain static site and one generated with Eleventy is huge.

When managing a static site manually, everything had to be created and organized by hand HTML, CSS, and all the files. Each page was its own separate HTML file, so if something like the navigation needed updating, every page had to be changed individually. There was no templating, no automation just raw HTML, written line by line.

With Eleventy and Nunjucks, things are much easier. Content can be written in Markdown or Nunjucks templates, and Eleventy takes care of generating the final HTML. Instead of repeating the same structure on every page, layouts can be created and reused. Updates are simple--changing a single template regenerates the entire site. Data from JSON files or APIs can be pulled in to dynamically create pages. It's a much more efficient and flexible way to manage a static site compared to doing everything manually. And, the Eleventy RSS plugin automatically updates and processes an RSS feed whenever a new post is added.
