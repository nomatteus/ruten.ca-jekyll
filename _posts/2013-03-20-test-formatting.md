---
layout: post
title: Test post with all elements
published: true
---

This is a test post for developing the styles for this site. It should
have a sampling of all types of HTML elements, and also code, embedded tweets,
and any other features I want to add.

Some Ruby code to do something:

    class String
      def idify
        self.strip.gsub(/\W/, '_').gsub(/\s|^_*|_*$/, '').squeeze('_')
      end
      
      def slugify
        self.downcase.gsub(/\W|_/, ' ').strip.squeeze(' ').gsub(/\s/, '-')
      end
    end

Some Javascript Code:



A Shell Script:


How about a JS Fiddle?

Or a github gist:

https://gist.github.com/nomatteus/5148606

Here is a list of stuff:

* Something that is cool.
* Something else. 
* Another line that will be long and hopefully wrap to the next line
so we can figure out the formatting of a bullet and stuff.

And an ordered list:

1. Take over the world
2. Something else
3. ???
4. Profit?


