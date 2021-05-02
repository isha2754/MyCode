var topicId = 12;



var i = 1;
firebase
  .database()
  .ref("questionset/")
  .once("value")
  .then(function (snapshot) {
    document.getElementById("questionlist").innerHTML = "";
    let co = 1;
    snapshot.forEach(function (childSnapshot) {
      console.log(topicId);
      var total = childSnapshot.val().question;
      var questionID= childSnapshot.val().quesid;
      let ques = `<details onclick={clickHandler(${questionID})}>
    <summary >Question ${co} : ${total}</summary>
  </details>`;
      co++;
      var total1 = childSnapshot.val().topicId;
      if (total1 == topicId) {
        $("#questionlist").append(ques);
        i++;
      }
      console.log(total);
    });
  });

function clickHandler(e) {
  //var questionss= document.getElementByClassName("question"+e.id)[0].innerHTML;
  //firebase data retreival

      var url= "Answer.html?questionID=" + e;
      window.location.href= url;
}
