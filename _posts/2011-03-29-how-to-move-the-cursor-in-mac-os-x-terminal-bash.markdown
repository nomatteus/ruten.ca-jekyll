---
comments: true
date: 2011-03-29 22:30:37
layout: post
slug: how-to-move-the-cursor-in-mac-os-x-terminal-bash
title: How to Move the Cursor in Mac OS X Terminal (Bash)
wordpress_id: 450
categories:
- blog
- Geek
- How To
---

Moving around the terminal one character at a time is slow and gets annoying, so here's how to move around word by word:


> 

>     
>     <strong>ctrl-a</strong>: move to front of line
>     <strong>ctrl-e</strong>: move to end of line
>     <strong>ctrl-w</strong>: delete word before cursor
> 
> 





By default, the shortcuts for moving left and right are Esc-b and Esc-f. It's much handier to use Alt/Option-left and -right, so this is how you can configure terminal to do that:


> 

>     
>     To configure it to <strong>Alt + left</strong> and <strong>right</strong>:
> 
> 

>     
>      - Open Terminal preferences (<strong>command + ,</strong>);
> 
> 

>     
>      - At Keyboard tab, select "<strong>control cursor left (or right)</strong>" and doubleclick it;
> 
> 

>     
>           - Left: Select the combo "<strong>modifier</strong>" to "<strong>option</strong>" and the <strong>action</strong> to <strong>\033b</strong>
> 
> 

>     
>           - Right: Select the combo "<strong>modifier</strong>" to "<strong>option</strong>" and the <strong>action</strong> to <strong>\033f</strong>
> 
> 





Sources:

[http://www.infoentropy.com/terminal_window_keyboard_shortcuts_mac_linux](http://www.infoentropy.com/terminal_window_keyboard_shortcuts_mac_linux)

[http://snipplr.com/view/28113/config-terminal-to-move-wordbyword/](http://snipplr.com/view/28113/config-terminal-to-move-wordbyword/)
