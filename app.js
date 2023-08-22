console.log("This Program is Made by Student of MMC with Love");

// VARIABLE DEFINED OF LOAN TAKEN DATE 
// let takenYear = document.querySelector("#takenYear");
// let takenMonth = document.querySelector("#takenMonth");
// let takenDay = document.querySelector("#takenDay");
/////////
// VARIABLE DEFINEDE OF TODAY 
// let todayYear = document.querySelector("#todayYear");
// let todayMonth = document.querySelector("#todayMonth");
// let todayDay = document.querySelector("#todayDay");
////////

// Variable to total time and Interset 
let totalTime = document.querySelector("#totalTime");

//VARIABLE OF TOTAL PRINCIPLE AND INTEREST
var totalPrinciple = document.getElementById('totalPrinciple');
var tInterest = document.getElementById('tInterest');
var balWithInterest = document.getElementById('balWithInterest');

let container_1 = document.querySelector('.container_1');
      let onlyInterest = document.querySelector("#onlyInterest");

      let iRate =tInterest.value;
      let principal =totalPrinciple.value;
      

//////
var years;
// SUBMIT BUTTON VARIABLE 
let submitButton = document.querySelector("#submitBtn");
///////

// Function to increase the height of main container when clickd on submit 
function incConHeight(){
    container_1.style.animationName = 'conHeight';
    container_1.style.animationDuration = '1s';
 
}



function checkYearCorrectness(){
    if (takenYear.value=="" && todayYear.value=="") {
        console.log("Year cannot be empty:")
      }
      else{
          if (takenYear.value<=todayYear.value) {
            function calculateChakriyaByaj(loanTakenYear, loanTakenMonth, loanTakenDay, todayYear, todayMonth, todayDay) {
              // Get the number of years between the loan taken date and today's date.
               years = todayYear - loanTakenYear;
            
              // Get the number of months between the loan taken date and today's date.
              var months = todayMonth - loanTakenMonth;
            
              // Check if the current month is less than the loan taken month.
              if (months < 0) {
                months += 12;
                years -= 1;
              }
              
              // Get the number of days between the loan taken date and today's date.
              var days = todayDay - loanTakenDay;
              
              // Calculate the chakriya byaj.
              var chakriyaByaj = years + "years " + months + "month " + days + "days";
              return chakriyaByaj;
            
            }
           
            
// FUNCTION TO FIND OUT iNTEREST  |  FUNCTION TO FIND OUT iNTEREST  
let newPrincipalMoreThanOneYear;
let everyYearInterest;
function findOutInterest(){
//
/* here these two variable has changed into numbers. It was in string. 
I dont know why it was in string. */
  let principalIntoNumbers = parseInt(principal);
  let iRateIntoNumbers = parseInt(iRate);
  //
  if(years>1){
    for(let i=1; i<=years;i++){
        // Year Calculated Successfully 
        let yIntoMonth=1*12;
       oneMonthOfYearInterest = principalIntoNumbers*iRateIntoNumbers/100;      //One Month
        oneYearInterest = oneMonthOfYearInterest*yIntoMonth; //MULTIPLYING ONE MONTH INTEREST WITH ACTUL INPUT  
        
        newPrincipalMoreThanOneYear= principalIntoNumbers+oneYearInterest;
     
       principalIntoNumbers =newPrincipalMoreThanOneYear;


          //  everyYearInterest+=oneYearInterest;
         
           onlyInterest.innerText=`Only Interest is ${newPrincipalMoreThanOneYear-principal}`
           balWithInterest.innerText=`Balance with Interest ${newPrincipalMoreThanOneYear}`;
        }
      }  
    
    else{
      if(takenMonth.value>11){
        console.log("Month Not more than 11.");
      }
      else{
        oneMonthOfYearInterest = principalIntoNumbers*iRateIntoNumbers/100; 
        oneYearInterest = oneMonthOfYearInterest*takenMonth.value; 
        console.log(oneYearInterest);
        console.log(takenMonth.value);
        console.log(months);
      }
    }}


            // Test the code.
            var chakriyaByaj = calculateChakriyaByaj(takenYear.value, takenMonth.value, takenDay.value, todayYear.value, todayMonth.value, todayDay.value);
          

            totalTime.innerText=`Total time is ${chakriyaByaj}`;

      findOutInterest();
          }}}
           submitButton.addEventListener('click', function(e){
            checkYearCorrectness();
            if (window.innerWidth <= 730) { // Adjust the breakpoint as needed
              incConHeight();
      
            }
        
          })
  


          // HAMBURGER 
          let hamburger = document.querySelector("#hamburger");
          let submitBtn2 = document.querySelector('.submitBtn2');
          let body=document.body;
          hamburger.addEventListener('click', function(e){
           body.classList.toggle('hmBurger')
           body.classList.toggle('backdropFilter');    //Blurs the whole bg
           container_1.classList.toggle('opZero');
           submitBtn2.classList.toggle('bottom32');
          })
        