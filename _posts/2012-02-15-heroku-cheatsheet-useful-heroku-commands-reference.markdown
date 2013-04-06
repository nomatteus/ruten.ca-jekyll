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

### [![](/images/content/2012/02/heroku_cheatsheet.png)](/images/content/2012/02/heroku_cheatsheet.png)




### Basics



    
    <strong>Update Command-line Tool</strong>
     heroku update



    
    <strong>Help</strong>
     heroku help




### Get Started



    
    <strong>Create App</strong>
     heroku create --stack cedar [<appname>]



    
    <strong>Deploy App</strong>
     git push heroku master



    
    <strong>Open App in Web Browser</strong>
     heroku open




### Useful Info About Your App



    
    <strong>Basic App Info</strong>
     heroku info



    
    <strong>View App Config</strong>
     heroku config



    
    <strong>Show State of App</strong>
     heroku ps



    
    <strong>Show App Logs</strong>
     heroku logs




### Advanced (Run Tasks/Database/Scaling)



    
    <strong>Run task on Heroku (i.e. Rake tasks)</strong>
     heroku run rake task:name



    
    <strong>Pull/Push Database (Use with Caution! Potentially Destructive.)</strong>
     heroku db:pull



    
     heroku db:push



    
    <strong>Scale Web Process</strong>
     heroku ps:scale web=1



    
    <strong>Set timezone for app. (Use TZ time zones from <a href="http://en.wikipedia.org/wiki/List_of_tz_database_time_zones" target="_blank">here</a> [wikipedia].)</strong>
     heroku config:add TZ=America/Vancouver


For more, see here: [http://devcenter.heroku.com/categories/command-line](http://devcenter.heroku.com/categories/command-line)

_Bonus Tip!_

**Avoid Free App (1 Web Dyno) Idling**

Install New Relic Addon (Free): [http://addons.heroku.com/newrelic](http://addons.heroku.com/newrelic)
And Configure: [http://devcenter.heroku.com/articles/newrelic](http://devcenter.heroku.com/articles/newrelic)
And then setup Availability Monitoring in "Menu > Settings > Availability Monitoring"

[Download PDF Version (heroku_cheatsheet.pdf)](/images/content/2012/02/heroku_cheatsheet.pdf)

[View on Google Docs](https://docs.google.com/spreadsheet/ccc?key=0An-JXZUc9FFldGhfM2N1MWgtZzFEU3FtaXRxMmtIUkE#gid=0)


