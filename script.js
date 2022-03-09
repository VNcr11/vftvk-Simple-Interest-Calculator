function compute()
{
  var principal = document.getElementById("principal").value;
  var rate = document.getElementById("rate").value;
  var years=document.getElementById("years").value;

 /* this condition allow validate the ingress amount*/ 
 if(principal<1){
     alert("Ammount has to be a positive number")
     document.getElementById("principal").focus();
     return
 }

 /* Here is calculate the interest */
  var interest = principal * years * rate /100;
  var year = new Date().getFullYear()+parseInt(years);
  /*Here is calculated the total amount*/
  var amount = interest+ parseInt(principal);
  console.log(amount);
  result = document.getElementById("result")
  result.innerHTML = "<p>If you deposit  <mark>"  + principal +"$ </mark>"  + ",<br>with an interest rate of <mark>" + rate + "%</mark> .<br>You will receive an amount of <mark> : " + interest + "$ </mark>"+",<br>in the year <mark>" + year + "</mark>"+"<br> and the total quantity will be <mark>"+amount+"$</mark></p>";
      
}
/*this function permits show the a dynamic way the rate selectionate in the range*/ 
function updateRate()
{
    var rateval =document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + "%";
}
        