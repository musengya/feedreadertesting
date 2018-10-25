# Feed Reader Testing

# Project Overview

In this project I was given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing and started writing their first test suite! Unfortunately, they decided to move on to start their own company and they left incomplete tests thus Udacity gave me the chance to complete it. I wrote the tests using Jasmine.

The project is published at: (https://musengya.github.io/feedreadertesting/)

## How to run the Application
* Navigate to https://github.com/musengya/feedreadertesting.
* Click Clone or download.
* Copy the URL provided.
* Open your command line or Terminal application and enter the directory where you would like to copy the repository. This can be anywhere in your local file system, like your home directory. For example:
```
cd ~/
```
* Clone the repository by replacing with  clone URL you copied in the previous step.
* The repository will be cloned into a new directory in this location.
 git clone https://github.com/musengya/feedreadertesting.git

 ## How I completed the tests
 The task was to write the folowing tests in different test suites.Some tests required asynchronous function thus I used callbacks and done() together with beforeEach().

 * A test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
 * A test that loops through each fed in the allFeeds object and ensures it has a name defined and that the name is not empty.
 * A test that ensures the menu element is hidden by default
 * A test that ensures the menu changes visibility when the menu icon is clicked.
*  A test that ensures when a new feed is loaded by the loadFeed function that the content actually changes

## License
MIT