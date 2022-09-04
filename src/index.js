
   //nav time

   function Clock(){
    var now = new Date();
    document.getElementById("time").innerHTML = now.toLocaleTimeString();
    document.getElementById("date").innerHTML = now.toLocaleDateString();
}
function bodyload(){
    setInterval(Clock,1000);
    var date = new Date();
    var hrs = date.getHours();
    var status = document.getElementById("status");
    var statusIcon = document.getElementById("statusIcon");

    if (hrs>0 && hrs<12) {
        status.innerHTML = "Good Morning";
       statusIcon.className = "bi bi-sun";
    } else if (hrs>12 && hrs<17) {
        status.innerHTML = "Good Afternoon";
       statusIcon.className = "bi bi-sun";
    } else if (hrs>17 && hrs<24) {
        status.innerHTML = "Good Evening";
        statusIcon.className = "bi bi-sun-fill";
    }
}

