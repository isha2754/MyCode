//Adding data to database
var database = firebase.database()
var p;
firebase.database().ref('questionset/').once('value').then(function(snapshot){
        if(snapshot.exists()){
          snapshot.forEach(function(childSnapshot){
            p=childSnapshot.val().quesid;
        });
          }
          else{
              p=0;
          }
  })

function save() {
  var quesid = p+1;
  var question = document.getElementById('question').value;
  var topicId = 12;


  database.ref('questionset/' + quesid).set({
    quesid : quesid,
    question : question,
    topicId : topicId

  })

  alert('Saved')
}
