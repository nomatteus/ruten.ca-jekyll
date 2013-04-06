---
comments: true
date: 2012-02-24 13:39:31
layout: post
slug: programming-exercise-conways-game-of-life-in-javascript-and-canvas
title: 'Programming Exercise: Conway''s Game of Life in JavaScript and Canvas'
wordpress_id: 663
categories:
- blog
- Geek
- Projects
---

Demo\: [http://nomatteus.github.com/conway-game-of-life-js/examples/](http://nomatteus.github.com/conway-game-of-life-js/examples/) 

Code: [https://github.com/nomatteus/conway-game-of-life-js](https://github.com/nomatteus/conway-game-of-life-js)


## What is Conway's Game of Life?

Wikipedia has a good [article](http://en.wikipedia.org/wiki/Conway's_Game_of_Life). Excerpt:

> The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. The "game" is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves.
> 
> **Rules**
> 
> The universe of the Game of Life is an infinite two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, alive or dead. Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:
> 
> 1. Any live cell with fewer than two live neighbours dies, as if caused by under-population.  
> 2. Any live cell with two or three live neighbours lives on to the next generation.  
> 3. Any live cell with more than three live neighbours dies, as if by overcrowding.  
> 4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.  


## Coding

I remember playing around with the Game of Life many years ago, and have always thought it would be fun to program it. It's a relatively simple programming exercise--you just need a grid of cells, and then apply the 4 rules of the Game of Life.

After finishing the main coding, I added an option to make the grid "colourful". All this does is use a random color for each cell, instead of making everything black, but I like the results!

Some other things I could add:

* Work on creating a more efficient algorithm, i.e. don't check each cell in areas that you know won't change in the next few generations 
* Make an interface to create/draw grids, and a way to import/share them  
* Similar to the above, create a better way to make grids in code, to avoid having to have huge arrays of 0's  
