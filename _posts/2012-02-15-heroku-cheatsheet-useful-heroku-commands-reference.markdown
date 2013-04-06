---
comments: true
date: 2012-02-15 15:36:48
layout: post
slug: heroku-cheatsheet-useful-heroku-commands-reference
title: Heroku Cheatsheet (Useful Heroku Commands Reference)
wordpress_id: 639
categories:
- blog
- Geek
- How To
---

[![](/images/content/2012/02/heroku_cheatsheet.png)](/images/content/2012/02/heroku_cheatsheet.png)

### Basics
    
**Update Command-line Tool**

    heroku update

**Help**

    heroku help

### Get Started

**Create App**

    heroku create --stack cedar [<appname>]
    
**Deploy App**

    git push heroku master

**Open App in Web Browser**

    heroku open

### Useful Info About Your App
    
**Basic App Info**

    heroku info

**View App Config**

    heroku config
    
**Show State of App**

    heroku ps
    
**Show App Logs**

    heroku logs

### Advanced (Run Tasks/Database/Scaling)

**Run task on Heroku (i.e. Rake tasks)**

    heroku run rake task:name
    
**Pull/Push Database (Use with Caution! Potentially Destructive.)**

    heroku db:pull
    heroku db:push
    
**Scale Web Process**

    heroku ps:scale web=1

**Set timezone for app. (Use TZ time zones from [here](http://en.wikipedia.org/wiki/List_of_tz_database_time_zones).)**

    heroku config:add TZ=America/Vancouver

For more, see here: [http://devcenter.heroku.com/categories/command-line](http://devcenter.heroku.com/categories/command-line)

_Bonus Tip!_

**Avoid Free App (1 Web Dyno) Idling**

Install New Relic Addon (Free): [http://addons.heroku.com/newrelic](http://addons.heroku.com/newrelic)

And Configure: [http://devcenter.heroku.com/articles/newrelic](http://devcenter.heroku.com/articles/newrelic)

And then setup Availability Monitoring in "Menu > Settings > Availability Monitoring"

**[Download PDF Version (heroku_cheatsheet.pdf)](/images/content/2012/02/heroku_cheatsheet.pdf)**

[View on Google Docs](https://docs.google.com/spreadsheet/ccc?key=0An-JXZUc9FFldGhfM2N1MWgtZzFEU3FtaXRxMmtIUkE#gid=0)


