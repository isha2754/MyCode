var topicId=12;
var i = 1;
firebase
  .database()
  .ref("questionset/")
  .once("value")
  .then(function (snapshot) {
    document.getElementById("questionlist").innerHTML = "";
    let co = 1;
    snapshot.forEach(function (childSnapshot) {
      var total = childSnapshot.val().question;
      var questionID= childSnapshot.val().quesid;
      let ques = `<details onclick={clickHandler(${questionID},${total})}>
     <summary >Question ${co} : ${total}</summary>
  </details>`;
      co++;
      var total1 = childSnapshot.val().topicId;
      if (total1 == topicId) {
        $("#questionlist").append(ques);
        i++;
      }

    });
  });

function clickHandler(e,s) {
  //var questionss= document.getElementByClassName("question"+e.id)[0].innerHTML;
  //firebase data retreival
      console.log(e);
      console.log(s);
      var url= "Answer.html?questionID=" + e +"&questionName=" + s;
      window.location.href= url;
}
