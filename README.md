## FriendFinder

Heroku Deployed Link: https://friendfinder12345.herokuapp.com/  

## Instructions

The survey have 10 questions.
Each answer should be on a scale of 1 to 5 based on answer the modal.
User will be able to updload his/hers pic.

Once survey its submitted the page will reload and display the name and picture if the closer match.


## Example

Each user data is set as an array object

name: "Mat Man",
       photo: "https://www.orange.k12.nj.us/cms/lib/NJ01000601/Centricity/Domain/548/mat-man.jpg",
       scores: ["5", "1", "4","4", "5", "1", "2", "5", "4", "1"]


To determine the user's most compatible friend:

Each user's results will convert into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]). , It compares the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.

## Example:

User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]

User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]

Total Difference: 2 + 1 + 2 = 5

The app should calculate both 5-3 and 3-5 as 2, and so on. The closest match will be the user with the least amount of difference.

## NPM I requirements:
express and path.
express and path.

## Roles

server.js file should require the basic npm packages we've used in class: express and path.

htmlRoutes.js file should include two routes:

A GET Route to /survey which should display the survey page. A default, catch-all route that leads to home.html which displays the home page.

A GET route with the url /api/friends. This will be used to display a JSON of all possible friends. A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

