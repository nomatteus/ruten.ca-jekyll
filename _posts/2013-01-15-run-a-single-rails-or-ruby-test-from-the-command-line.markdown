---
comments: true
date: 2013-01-15 18:48:31
layout: post
slug: run-a-single-rails-or-ruby-test-from-the-command-line
title: 'Run a Single Rails or Ruby Test from the Command Line '
wordpress_id: 1031
categories:
- blog
- Geek
- How To
---

Sometimes when focusing on a specific area/method in a project, you may not want to run the full test suite every time you make a change. This is especially true in Rails projects, since tests can take a while to run.

Here's how to run a single method of a test:

    ruby -I test test/path/to/the_test.rb -n test_method_name

You can also run all tests in a single file with:

    ruby -I test test/path/to/the_test.rb

The above works for Rails tests, since the test helper loads the Rails environment, but this is an alternative way to run tests in a single file in the context of Rails:
    
    rake test TEST=test/path/to_file.rb

And as a general Rails testing note, if there are database issues, run `db:test:prepare` before running tests, (runs all database migrations).

For Sublime Text 2 users, the RubyTest package is worth a mention. It can run a single test or all tests from within Sublime: [https://github.com/maltize/sublime-text-2-ruby-tests](https://github.com/maltize/sublime-text-2-ruby-tests)
