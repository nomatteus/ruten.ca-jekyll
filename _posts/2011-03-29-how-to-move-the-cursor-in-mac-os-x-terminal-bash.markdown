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

> * `ctrl-a`: move to front of line
> * `ctrl-e`: move to end of line
> * `ctrl-w`: delete word before cursor

By default, the shortcuts for moving left and right are `Esc-b` and `Esc-f`. It's much handier to use `Alt/Option-left` and `-right`, so this is how you can configure terminal to do that:

> To configure it to `Alt + left` and `right`:
> 
> * Open Terminal preferences (`command + ,`);
> * At Keyboard tab, select `control cursor left (or right)` and doubleclick it;
> * Left: Select the combo `modifier` to `option` and the `action` to `\033b`
> * Right: Select the combo `modifier` to `option` and the `action` to `\033f`

Sources:

[http://www.infoentropy.com/terminal_window_keyboard_shortcuts_mac_linux](http://www.infoentropy.com/terminal_window_keyboard_shortcuts_mac_linux)

[http://snipplr.com/view/28113/config-terminal-to-move-wordbyword/](http://snipplr.com/view/28113/config-terminal-to-move-wordbyword/)
