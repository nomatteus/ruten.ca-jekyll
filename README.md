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

## Metadata Tags

* [Twitter Cards](https://dev.twitter.com/docs/cards) (Also see [here](http://davidwalsh.name/twitter-cards))
* [Open Graph Protocol (FB)](http://ogp.me/)

## Custom Codes

### Adsense

Use `<!--adsense1-->` or `<!--adsense2-->` in markdown content files.

`adsense1` is a banner-shaped ad, and `adsense2` is a box-shaped ad.

In your post template, you'll need to run the content through the `adsense_replace`
filter, like so:

    {{ content | adsense_replace }}
