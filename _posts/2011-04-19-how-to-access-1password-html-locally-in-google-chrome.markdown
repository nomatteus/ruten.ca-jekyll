---
comments: true
date: 2011-04-19 20:47:57
layout: post
slug: how-to-access-1password-html-locally-in-google-chrome
title: How to Access 1Password.html Locally in Google Chrome
wordpress_id: 500
categories:
- blog
- Geek
- How To
---

1Password is a great program, but one thing it doesn't handle well is multiple password databases. I use 1Password at work and at home, and sometimes I want to access my home password database. To view another database, you have to go to "_Preferences_", and "_Choose Another Data File..._", find your file, then repeat to switch back to your main database. Pretty clunky.

Luckily, for read-only access, you can open the _1Password.html_ file and view your passwords in a basic interface using a web browser (if you're using Finder on Mac OS X, right-click your _1Password.agilekeychain_ file and choose "_Show Package Contents_" to see the HTML file).

However, if you're using Google Chrome, you will see this:

[](http://ruten.ca/wp-content/uploads/2011/04/Screen-shot-2011-04-19-at-8.13.38-PM.png)[![](http://ruten.ca/wp-content/uploads/2011/04/Screen-shot-2011-04-19-at-8.13.38-PM.png)](http://ruten.ca/wp-content/uploads/2011/04/Screen-shot-2011-04-19-at-8.13.38-PM.png)

### How to Fix the "Problem loading 1Password data file" Error

A simple solution is on the [1Password web site](http://help.agile.ws/1Password3/1passwordanywhere_troubleshooting.html):

> The easiest way to workaround this is to store your 1Password.agilekeychain file on a web server or service like Dropbox. If you need offline access to 1PasswordAnywhere you will need to use another browser or modify Chrome’s settings by adding the –allow-file-access-from-files command line option.

A more complex solution is below.

The end result is being able to **access your 1Password at http://1p.local** (or domain of your choosing). This is probably only worth doing if you already run a web server locally.

<!-- more -->

1\. **Add a line to your [hosts][whflfs] file** (`/etc/hosts` on Mac OS X/\*nix, `c:\windows\system32\drivers\etc` on Windows) to point the address you choose to your local computer:

[whflfs]: http://en.wikipedia.org/wiki/Hosts_(file)#Location_in_the_file_system

    127.0.0.1    1p.local

The `1p.local` address can be whatever you like. I like this address because Chrome will remember it and I can launch it by pressing `1` then `return`.

2\. **Add a virtual host to your Apache httpd.conf file**:

    <VirtualHost *:80>
        DirectoryIndex 1Password.html
        DocumentRoot /Users/myusername/Dropbox/1Password.agilekeychain/
        ServerName 1p.local # Change this if you like
    </VirtualHost>

Make sure the DocumentRoot is the correct path to your 1Password.agilekeychain.

I also added another few lines (still in the httpd.conf file) to disallow anyone on the same network from accessing the file (even though it's not too likely):

    <Directory "/Users/myusername/Dropbox/1Password.agilekeychain/">
        Options All
        Order deny,allow
        Deny from all
        Allow from 127.0.0.1 # localhost
    </Directory>

3\. **That's it!** Make sure to restart Apache so the changes will take effect.

Now, you should be able to access your 1Password HTML file through any browser (including Chrome!) at `http://1p.local`.
