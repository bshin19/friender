# Friend Finder

## App Overview
Friend Finder is an app that utilizes node.js and is made live via a heroku server. \
An array of friends are saved to a js object; these are checked when the user submits new information. \
The app then performs the math to compare responses to similar questions for the user and their potential matches. \
Finally, an alert is sent to display which 'friend' matches the user the most.

Demonstrates basic level rest skills with api-based routing.

There are two pages:

## Landing Page
This is the default page. All routes that aren't declared are rerouted back here. \
![Project Options](https://github.com/bshin19/friender/blob/master/assets/images/home.PNG)

The user only interacts with this page via the link to the survey page or my other repos. It is static.

## Survey Page
![Project Options](https://github.com/bshin19/friender/blob/master/assets/images/survay.PNG)
The user fills out a survey on this page. No validation is performed to verify whether valid inputs are set or not for the name and image. \
This was partially done for speeding up testing purposes.

An event listener waits for the search button to be clicked, when this occurs, math is performed to search for the best match. \
This is performed in JS via:
+ user object scores are placed in an array
+ potential friend object scores are placed in a separate array
+ The code loops through the friends score array, comparing each to the user object.
+ If this friend's score is the closest to the user's thusfar, they are chosen.
+ Once the loop is complete, the chosen friend will be the friend with the most similar score to the one submitted.

Such as... \
![Project Options](https://github.com/bshin19/friender/blob/master/assets/images/response.PNG)