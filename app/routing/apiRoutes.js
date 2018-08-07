//Holds array information on friends
var friendData = require('../data/friends')

//Two routes:
module.exports = function (app) {

    //Route 1: GET
    // /api/friends : displays a JSON of all possible friends
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    // Route 2: POST
    // /api/friends : handles incoming survey results + compatability logic
    app.post("/api/friends", function (req, res) {

        // req.body is available through body-parser

        // Places all scores on a per person basis in an array.
        // where scoresList[i] represents the users
        //and scoresList[i].scores[q] represents the question value per user.
        var scoresList = [];
        var diffTot = 100;
        var chosenOne;

        for (var i = 0; i < friendData.length; i++) {
            var indScore = [];
            for (var q = 0; q < friendData[i].scores.length; q++) {
                indScore.push(parseInt(friendData[i].scores[q]));
            };
            scoresList.push(indScore);
        };

        for (var i = 0; i < scoresList.length; i++) {
            var tempDif = 0;
            for (var q = 0; q < scoresList[i].length; q++) {
                tempDif += Math.abs(req.body.scores[q] - scoresList[i][q]); //tbcASDJFKSJDFKLADSJF
            };
            if (tempDif < diffTot) {
                diffTot = tempDif;
                chosenOne = friendData[i];
                console.log(chosenOne)
            };
        };
        
        friendData.push(req.body);
        res.json(chosenOne);
    });

    //Compatibility Guide:
    /* Convert user results array into an array of only their numbers
    Compare the differences between each matching number and total them up. *Use Absolute Val*
    The closest match is the user with the least amount of difference
    */

    /* Once the user's most compatible friend is figured out, 
    display the result as a modal popup.
    The modal will display the name and picture of the closest match*/
};