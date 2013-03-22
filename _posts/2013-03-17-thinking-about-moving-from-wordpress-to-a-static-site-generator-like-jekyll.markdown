---
comments: true
date: 2013-03-17 00:28:12
layout: post
slug: thinking-about-moving-from-wordpress-to-a-static-site-generator-like-jekyll
title: Thinking About Moving from WordPress to a Static Site Generator Like Jekyll
wordpress_id: 1098
categories:
- blog
- Geek
---

I'm thinking about moving `ruten.ca` off WordPress, and instead use a static site generator like [jekyll](http://jekyllrb.com/).





Why?







  * **Markdown!** I already have a Markdown plugin for WordPress, which is great. But I still have to type it in the WordPress admin. Which means if I write a post on my phone or tablet, there's always an extra step of copy/pasting to get it into WordPress. Then if I make an edit, I have to either make it in two places and/or copy-paste again. Sounds trivial, but these small things add up and add friction to the process.


  * **WordPress is overkill**, I think. I hardly use any of the built-in features, and don't use many plugins. 


  * **Text files.** If i store the Jekyll repo in a Dropbox folder locally, then I can add/edit posts from any app or device that syncs with Dropbox.


  * **Speed.** Static sites are fast, and even though you can setup caching on WordPress, it's too much trouble for little benefit. A static site is more resilient to sudden traffic spikes. 


  * Dynamic features can be added with Javascript. I already use a Wufoo form on the site, and Disqus for comments, so there's not any dynamic content on the site, other than posts and pages. 


  * **Git!** I love the idea of using Git to version control my site content. 


  * **New design.** I could update the design and still use WordPress, but if I'm going to change the design, might as well change the framework too. I like the "Projects" section of my website, but I am not happy with the styling of the Blog section. I'd like to make it easier to read, with better formatting, and make it easy to add code samples with nice highlighting. Static site generators are generally used by the geekier crowd, so support for code samples is a given.


  * The general idea is to make it easier to blog. The easier it is, the more likely I am to do it.





So that's that. In a way, the above list is just a way for me to justify a decision I've basically already made. I'm kinda excited to be able to add features to my blog in Ruby, without having to use PHP in WordPress templates.





Next steps:







  * Try setting up a Jekyll blog and import my posts.


  * Look for a static theme on ThemeForest.net or somewhere to use as a base for my site.


  * Decide whether to use [Octopress](http://octopress.org/docs/)


  * Setup 301's for all current links to preserve SEO, and make sure Jekyll can do sitemap.xml and similar SEO stuff.





(I'm hoping that I won't miss WordPress after using Jekyll. It would be a pity to have to switch back!)





## Relevant Links







  * List of Static Site Generators (Ruby and more): [http://nanoc.ws/about/#similar-projects](http://nanoc.ws/about/#similar-projects)


  * Brett Terpstra's posts on Jekyll: [http://brettterpstra.com/topic/jekyll/](http://brettterpstra.com/topic/jekyll/)


  * Marked is a great app for previewing markdown (I use it all the time): [http://markedapp.com/](http://markedapp.com/)



