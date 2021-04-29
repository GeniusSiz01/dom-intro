const callTotalOne = document.querySelector(".callTotalOne")

const smsTotalOne = document.querySelector(".smsTotalOne")

const billTypeText = document.querySelector(".billTypeText")

const addToBillBtn = document.querySelector(".addToBillBtn")
// get a reference to the textbox where the bill type is to be entered
// alert("clicked")
const totalCostElement = document.querySelector(".totalOne")



// alert("clicked")
//get a reference to the add button
// var totalBill = 0
var smsTotal = 0
var callsTotal = 0
//create a variable that will keep track of the total bill

function textBilladdBtn() {

    var billTypeEntered = billTypeText.value.trim();
    if (billTypeEntered === "call") {
        callsTotal += 2.75
    }
    else if (billTypeEntered === "sms") {
        smsTotal += 0.75
    }
    callTotalOne.innerHTML = callsTotal.toFixed(2);
    smsTotalOne.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostElement.innerHTML = totalCost.toFixed(2);
    
    //color the total based on the criteria
    if (totalCost >= 50){
        // adding the danger class will make the text red
        totalCostElement.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalCostElement.classList.add("warning");
    }
}
//add an event listener for when the add button is pressed


function textBillTotal(){

    // ... other code here
    
    //update the totals that is displayed on the screen.
   
}
addToBillBtn.addEventListener("click", textBilladdBtn)
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
