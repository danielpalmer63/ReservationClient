function addUserName()
{
  let addUserNametext = document.querySelector("#addUserNametext").value;
  let request = new XMLHttpRequest();
  request.open("POST", "http://127.0.0.1:3000/postName/"+addUserNametext+"/postStartD/null/postStartT/null", true);
  request.onload = function() {
    if(request.status == 200)
    {
      console.log("Successfully added username!");

    }
    else
    {
      console.log("An error occured" + " " + request.status);
    }
  }
  request.send();
}

function getUserNameInfo()
{
  clearTable();
  let getUserNameInfo = document.querySelector("#getUserNameInfo").value;
  let request = new XMLHttpRequest();
  request.open("GET", "http://127.0.0.1:3000/getName/" + getUserNameInfo, true);
  request.onload = function() {
    let data = JSON.parse(this.response);
    if(request.status == 200)
    {
      let tr = document.createElement("tr");
      document.querySelector("#content").appendChild(tr);

      let tdUserName = document.createElement("td");
      tdUserName.setAttribute("style", "text-align: center");
      let textUserName = document.createTextNode(data.userName);
      tdUserName.appendChild(textUserName);
      document.querySelector("#content").appendChild(tdUserName);

      let tdStartDate = document.createElement("td");
      tdStartDate.setAttribute("style", "text-align: center");
      let textDate = document.createTextNode(data.startDate);
      tdStartDate.appendChild(textDate);
      document.querySelector("#content").appendChild(tdStartDate);

      let tdStartTime = document.createElement("td");
      tdStartTime.setAttribute("style", "text-align: center");
      let textTime = document.createTextNode(data.startTime);
      tdStartTime.appendChild(textTime);
      document.querySelector("#content").appendChild(tdStartTime);
    }
    else
    {
      console.log("An error occured" + " " + request.status);
    }
  }
  request.send();
}

function createReservation()
{
  let createUserNameText = document.querySelector("#createUserNameText").value;
  let createStartDateText = document.querySelector("#createStartDateText").value;
  let createStartTimeText = document.querySelector("#createStartTimeText").value;

  let request = new XMLHttpRequest();
  request.open("POST", "http://127.0.0.1:3000/postName/"+createUserNameText+"/postStartD/"+createStartDateText+"/postStartT/"+createStartTimeText, true);
  request.onload = function() {

    if(request.status == 200)
    {
      console.log("Successfully created reservation!");
    }
    else
    {
      console.log("An error occured" + " " + request.status);
    }
  }
  request.send();
}

function updateReservation()
{
  let updateUserNameText = document.querySelector("#updateUserNameText").value;
  let updateStartDateText = document.querySelector("#updateStartDateText").value;
  let updateStartTimeText = document.querySelector("#updateStartTimeText").value;

  let request = new XMLHttpRequest();
  request.open("PUT", "http://127.0.0.1:3000/putName/"+updateUserNameText+"/putStartD/"+updateStartDateText+"/putStartT/"+updateStartTimeText, true);
  request.onload = function() {

    if(request.status == 200)
    {
      console.log("Successfully updated reservation!");
    }
    else
    {
      console.log("An error occured" + " " + request.status);
    }
  }
  request.send();
}

function deleteReservation()
{
  let deleteUserNameText = document.querySelector("#deleteUserNameText").value;

  let request = new XMLHttpRequest();
  request.open("DELETE", "http://127.0.0.1:3000/deleteName/" + deleteUserNameText, true);
  request.onload = function() {

    if(request.status == 200)
    {
      console.log("Successfully deleted reservation!");
    }
    else
    {
      console.log("An error occured" + " " + request.status);
    }
  }
  request.send();
}

function displayAllRes()
{
  clearTable();
  let request = new XMLHttpRequest();
  request.open("GET", "http://127.0.0.1:3000/getAllRes", true);
  request.onload = function() {
    let data = JSON.parse(this.response);
    if(request.status == 200)
    {
      for (var i = 0; i < data.length; i++)
      {
        let tr = document.createElement("tr");
        document.querySelector("#content").appendChild(tr);

        let tdUserName = document.createElement("td");
        tdUserName.setAttribute("style", "text-align: center");
        let textUserName = document.createTextNode(data[i].userName);
        tdUserName.appendChild(textUserName);
        document.querySelector("#content").appendChild(tdUserName);

        let tdStartDate = document.createElement("td");
        tdStartDate.setAttribute("style", "text-align: center");
        let textDate = document.createTextNode(data[i].startDate);
        tdStartDate.appendChild(textDate);
        document.querySelector("#content").appendChild(tdStartDate);

        let tdStartTime = document.createElement("td");
        tdStartTime.setAttribute("style", "text-align: center");
        let textTime = document.createTextNode(data[i].startTime);
        tdStartTime.appendChild(textTime);
        document.querySelector("#content").appendChild(tdStartTime);
      }
    }
    else
    {
      console.log("An error occured" + " " + request.status);
    }
  }
  request.send();
}

function clearTable()
{
  if (document.getElementById("content").innerHTML != "")
  {
    document.getElementById("content").innerHTML = "";
  }
  document.getElementById("content").innerHTML = "<tr><th>Username</th><th>Start Date</th><th>Start Time</th></tr>";

}
