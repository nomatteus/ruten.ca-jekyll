---
layout: post
title: Test post with all elements
published: true
category: blog
---

This is a test post for developing the styles for this site. It should
have a sampling of all types of HTML elements, and also code, embedded tweets,
and any other features I want to add.

Some Ruby code to do something:

{% highlight ruby %}
class String
  CONST = {something: "something"}
  CONST2 = {:something => "something", :other => "something else"}

  def idify(param)
    @something = "hello there"
    self.strip.gsub(/\W/, '_').gsub(/\s|^_*|_*$/, '').squeeze('_')
    return true
  end
  
  def slugify(param={})
    self.downcase.gsub(/\W|_/, ' ').strip.squeeze(' ').gsub(/\s/, '-')
  end
end
{% endhighlight %}

<!-- more -->

Some Javascript Code:

{% highlight javascript %}
function Label(opt_options) {
   // Initialization
   this.setValues(opt_options);

   // Here go the label styles
   var span = this.span_ = document.createElement('span');
   span.style.cssText = 'position: absolute; left: -18px; top: -38px; ' +
                        'white-space: nowrap;color:#000000;' +
                        'padding: 0px 2px 0 3px;font-family: helvetica neue, arial; font-weight: bold;' +
                        'font-size: 8px;background-color: #FFFFFF;border: 1px solid black;' + 
                        'border-radius: 5px 3px 3px 5px;text-shadow: none;line-height:10px;';


   var div = this.div_ = document.createElement('div');
   div.appendChild(span);
   div.style.cssText = 'position: absolute; display: none';
};

Label.prototype = new google.maps.OverlayView;
{% endhighlight %}


A Shell Script:

{% highlight bash %}
#  Shortcuts
alias twg='cd ~/Projects/twg/'
alias twgas='cd ~/Projects/twg/almost_scrum/'
alias twghp='cd ~/Projects/twg/homepage/'
alias fpf='cd ~/Projects/twg/fpf/'
alias omx='cd ~/Projects/twg/omx/'

alias me='cd ~/Projects/personal/'
alias dsf='cd ~/Projects/personal/dinesafe/'
alias dsfi='cd ~/Projects/personal/dinesafe-ios/'
alias dsfa='cd ~/Projects/personal/dinesafe-assets/'

# Apps
alias s='subl'

alias ios="open /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneSimulator.platform/Developer/Applications/iPhone\ Simulator.app"
alias iosd="sh /Users/mruten/.oh-my-zsh/custom/ios-sim-webdebug/ios-sim-webdebug.zsh"

# Quick way to rebuild the Launch Services database and get rid
# of duplicates in the Open With submenu.
alias fixopenwith='/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister -kill -r -domain local -domain system -domain user'

# Git
alias glo="git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"

{% endhighlight %}


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
3. something???
4. Profit!

# This is a Heading 1

And some content.

## This is a Heading 2

And some content.

### This is a Heading 3

And some content.

#### This is a Heading 4

And some content.

##### This is a Heading 5

And some content.

###### This is a Heading 6

And some content.

And now a quote. 

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.
> 
> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
> id sem consectetuer libero luctus adipiscing.

More tests.

> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,
consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.
Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.

> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse
id sem consectetuer libero luctus adipiscing.

And yet another...

> This is the first level of quoting.
>
> > This is nested blockquote.
>
> Back to the first level.

And another example of other elements within a blockquote.

> ## This is a header.
> 
> 1.   This is the first list item.
> 2.   This is the second list item.
> 
> Here's some example code:
> 
>     return shell_exec("echo $input | $markdown_script");

To put a blockquote within a list item, the blockquote’s > delimiters need to be indented:

*   A list item with a blockquote:

    > This is a blockquote
    > inside a list item.

To put a code block within a list item, the code block needs to be indented twice — 8 spaces or two tabs:

*   A list item with a code block:

        <code goes here>

This is [an example](http://example.com/ "Title") inline link.

[This link](http://example.net/) has no title attribute.

See my [About](/about/) page for details.


I get 10 times more traffic from [Google] [1] than from
[Yahoo] [2] or [MSN] [3].


  [1]: http://google.com/        "Google"
  [2]: http://search.yahoo.com/  "Yahoo Search"
  [3]: http://search.msn.com/    "MSN Search"

*single asterisks*

_single underscores_

**double asterisks**

__double underscores__




