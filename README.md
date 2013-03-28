Jekyll source code for my blog, <http://ruten.ca>.

&copy; 2009-2013

## YAML Front Matter Conventions

These are required to separate blog posts and project posts.

Blog Posts:

    layout: post
    category: blog

Project Posts:

    layout: project
    category: project

## Code Highlighting

Currently using pygments. 

Use like this:

    {% highlight languagename %}
      ... code here ...
    {% endhighlight %}

See available languages/lexers here: 
<http://pygments.org/docs/lexers/>

A few from that list that I might find useful are:

* `ruby`
* Some combinations: `js+ruby`, `html+ruby`, more...
* `coffeescript`
* `css`
* `html`
* `js`
* `obj-c`
* `haml`
* `sass`, `scss`
* `bash`
* ... lots more ...

