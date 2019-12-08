const friends = require('../data/friends');

module.exports = app =>{
   app.get('/api/friends', (req, res) => {
       res.json(friends);
    }); 

    app.post('/api/friends', (req, res) => {
        const totalInput = req.body;
        const surveyInput = totalInput.scores;
        
        let friendMatch = {
            name:'',
            photo:'',
            totalScore:12345
        }
        for(let i = 0; i < friends.length; i++){
            let scoreDiff = 0
            for(let j = 0; j < surveyInput.length; j++){
                scoreDiff += Math.abs(parseInt(friends[i].scores[j]) - parseInt(surveyInput[j]));
            }
            if(scoreDiff < friendMatch.totalScore){
                friendMatch.totalScore = scoreDiff;
                friendMatch.name = friends[i].name;
                friendMatch.photo = friends[i].photo
            }
        }
        friends.push(totalInput);
        res.json(friendMatch);
    })
}