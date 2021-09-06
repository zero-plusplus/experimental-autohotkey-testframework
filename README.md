# Introduction
This project is an incomplete project that is open to the public for the purpose of sharing my suggestions.

This project is an experiment, so the specifications will vary greatly. Also, the finished product will be available in a another repository.

The latest source code can be found in the [develop](https://github.com/zero-plusplus/experimental-autohotkey-testframework/tree/develop) branch.

# Overview
This testing framework for AutoHotkey is intended to be used by a VSCode extension that will be created in the distant future (probably in a few years).
This extension will list tests through the Test API and allow you to execute selected tests and perform other operations from within Gui.

I haven't looked into the Test API in detail yet, but it probably requires the following two things to work
* Setting up and running tests from command line arguments
* A full AutoHotkey parser (under construction). This is needed to detect test items

First, I will complete the test framework part, and then I will complete the final interface considering the Test API.
