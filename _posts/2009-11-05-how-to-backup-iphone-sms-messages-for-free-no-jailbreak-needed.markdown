---
date: 2009-11-05 18:08:16
layout: post
slug: how-to-backup-iphone-sms-messages-for-free-no-jailbreak-needed
title: How to Backup iPhone SMS Messages for Free (No Jailbreak Needed)
wordpress_id: 216
categories:
- blog
- Geek
- How To
- iPhone
---

<!--adsense1-->

Recently, I did a full restore on my iPhone to try and fix some of the many problems I've been having (we'll save that list for another day). While SMS messages are generally temporary in nature, I decided to find out if I could export them somehow. There are a few programs out there that claim to be able to do this for you, such as [MobileSyncBrowser](http://homepage.mac.com/vaughn/msync/) (Mac/PC, free trial/$10/$20),  [iPhone / iPod Touch Backup Extractor](http://supercrazyawesome.com/) (Mac, free), or an online tool like [iphone backup sms extractor](http://insend.de/). I didn't try any of these because I don't want to pay, I am not on a Mac, and I don't want to upload my private messages to some random site. Luckily, I discovered that it's not too hard to do it yourself. Grab your iPhone, put on your techie hat, and follow the 3 easy steps after the break!

<!-- more -->

### Step 0 - Before You Start:

A couple things you need to take care of before diving in to the tutorial:
	
* Make sure to do a sync/backup of your iPhone in iTunes before starting to ensure all messages will be extracted.

* Download [SQLite Database Browser](http://sqlitebrowser.sourceforge.net/) as you will need this to browse/export the database once finding it.


### Step 1 - Find the Backup File:

The SMS messages are stored in an SQLite database file that is located in a backup folder somewhere on your computer. The file is (most likely) named

    3d0d7e5fb2ce288813306e4d4636395e047a3d28.mddata

On Windows, the path to the folder should resemble something like the following: 

    C:\Documents and Settings\[username]\Application Data\Apple Computer\MobileSyncBackup\[some random id]


On a Mac, you should find it at: 


    ~/Library/MobileSync/backup/[some random id]/


Or just search your computer for `3d0d7e5fb2ce288813306e4d4636395e047a3d28`.

Once you find the file, you can verify that it is an SQLite database by opening it in a text editor and making sure the first characters of the file are "SQLite format 3".

Just to be safe and, copy the file to your desktop or another folder and 
rename it something shorter like `sms.sqlite`.


### Step 2 - Browsing the SMS SQLite Database


You will need the [SQLite Database Browser](http://sqlitebrowser.sourceforge.net/) as mentioned above, so go download it now if you haven't already!

Once you have it downloaded, extract the program and run it! Click `File > Open` and navigate to where you saved the copy of the backup file. When you open this file you will see an interface that should be familiar if you've ever used any sort of database management tool.

From the `Table` drop-down menu, choose the `message` table. This is the main table we're interested in and you don't really need to use the other tables at all but go ahead and take a look if you're interested!

There are a few fields that we are interested in:
	
* `address`: This holds the phone number of the person that sent you or you sent the message to.
* `date`: This is a Unix timestamp of when the message was sent.
* `text`: The actual message.
* `flags`: This should be either `2` or `3`. The messages flagged `3` are messages that you sent (outgoing), while the messages flagged `2` are incoming messages.


### Step 3 - Exporting:


Still using SQLite Database Browser program, click `File > Export > Table as CSV File`. Choose the `messages` table and click `Export`. Choose a filename like `sms.csv`, hit `Save`, and you're done!

Now you can open the CSV using Excel (or equivalent) and laugh/cry/look at all the funny/angry/crazy messages you have sent and received over the years/weeks/days!

To convert the datestamp to a human readable format in Excel, use the following formula (from [SpreadsheetPage.com](http://spreadsheetpage.com/index.php/tip/converting_unix_timestamps/)):

> `=(((A1/60)/60)/24)+DATE(1970,1,1)+(-5/24)`

where `A1` is the cell holding the datestamp, and `-5` is your timezone GMT offset.

You can also duplicate (copy/paste) the address column and then do a find and replace of the phone number with the person's actual name (useful at least for the people you text the most with).


### Notes:


This will not export emoticons/emoji/MMS messages. There may be a way to grab these (table `msg_pieces` may give some hints), but I'm not really worried about losing this info.

You will only get the phone numbers of the messages, not the names (though it's easy enough to do a find and replace for your most used phone numbers).

_That's it!_ I hope this will be useful to someone, and if you have any questions or comments, or find any errors in this post just leave a comment!

<!--adsense2-->
