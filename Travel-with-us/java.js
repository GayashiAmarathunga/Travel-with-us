function viewQuery() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var queryDetails = document.getElementById("query-details").value;
  
    if (name === "" || email === "" || subject === "" || queryDetails === "") {
      alert("Please fill in all the required fields.");
    } else {
      document.getElementById("name-summary").innerHTML = "Name: " + name;
      document.getElementById("email-summary").innerHTML = "Email: " + email;
      document.getElementById("subject-summary").innerHTML = "Subject: " + subject;
      document.getElementById("query-details-summary").innerHTML = "Details: " + queryDetails;
  
      document.getElementById("form-container").style.display = "none";
      document.getElementById("query-summary").style.display = "block";
    }
  }
  
  function editQuery() {
    document.getElementById("form-container").style.display = "block";
    document.getElementById("query-summary").style.display = "none";
  }
  
  function sendQuery() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var queryDetails = document.getElementById("query-details").value;
  }