function RegClick(){
    document.getElementById("lblName").innerHTML=
    document.getElementById("txtName").value;
    document.getElementById("lblDate").innerHTML=
    document.getElementById("txtDate").value;
    document.getElementById("lblDays").innerHTML=
    document.getElementById("txtDays").value;
    document.getElementById("lblPerson").innerHTML=
    document.getElementById("txtPerson").value;
    document.getElementById("lblAdvanceAmount").innerHTML=
    document.getElementById("txtAmount").value;
    
    


    var totalDays = document.getElementById("txtDays").value;
    var totalPersons = document.getElementById("txtPerson").value;   
    var advanceAmount = document.getElementById("txtAmount").value;
    var roomtype="";
    var roomprice=0;
    var amenitiesprice=0;
    var amenitiestype="";
    var advanceamount=0;
    var days=0;
    var person=0;
    var total=0;
    var balance=0;

    //Radios
    var optDelux=document.getElementById("optDelux");
    var optSuite=document.getElementById("optSuite");
    var optOther=document.getElementById("optOther");

    if(optDelux.checked){
        roomtype=optDelux.value;
        roomprice=2500;
    }
    if(optSuite.checked){
        roomtype=optSuite.value;
        roomprice=4000;
    }if(optOther.checked){
        roomtype=optOther.value;
        roomprice=1500;
       
    }
   


    //Checkboxs

    var optAc=document.getElementById("optAc");
    var optLocker=document.getElementById("optLocker");

    if(optAc.checked){
        amenitiestype+=optAc.value + "<br>";
        amenitiesprice=1000;
        roomprice+=amenitiesprice;
        person+=days;
    }
    if(optLocker.checked){
        amenitiestype+=optLocker.value + "<br>";
        amenitiesprice=500;
        roomprice+=amenitiesprice;
        person+=days
    }
    total=(roomprice);

    //Extra Person


    if(parseInt(totalPersons) > 2){
        var extraPersons = parseInt(totalPersons) - 2;
        var totalOfExtrapersons = extraPersons*1000;
        roomprice+= totalOfExtrapersons;
    }
    total = roomprice;   // per day cost

    total = parseFloat(roomprice) * parseInt(totalDays); 
    
    balance = total -  parseFloat(advanceAmount);
   

    //Adva Amount

    
  
    document.getElementById("lblTypeRoom").innerHTML=roomtype;
    document.getElementById("lblAmenities").innerHTML=amenitiestype;
    document.getElementById("lblAdvanceAmount").innerHTML= "&#8377;" + advanceAmount;
    document.getElementById("lblBalance").innerHTML= "&#8377;" + balance;
    document.getElementById("lblTotal").innerHTML="&#8377;" + total;
    
   
    

  

   } 



   //Verify 1000

   function VerifyAmount(){
    var advamount=parseFloat(document.getElementById("txtAmount").value);
    if(advamount>100){
        document.getElementById("register").disabled=false;
    }else{
        document.getElementById("register").disabled=true;
    }
   }

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