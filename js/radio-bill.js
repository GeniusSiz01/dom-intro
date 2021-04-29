const billItemType = document.querySelector(".billItemTypeRadio")

const radioBillAddBtn = document.querySelector(".radioBillAddBtn")

const callTotalTwo = document.querySelector(".callTotalTwo")

const smsTotalTwo = document.querySelector(".smsTotalTwo")

const totalCostElemen = document.querySelector(".totalTwo")




var callsTotal = 0
var smsTotal = 0
function selectBilladdBtn() {

    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value
    // billItemType will be 'call' or 'sms'
}

    if ( billItemType === "call") {
        callsTotal += 2.75
    }
    else if (billItemType === "sms") {
        smsTotal += 0.75
    }
    callTotalTwo.innerHTML = callsTotal.toFixed(2);
    smsTotalTwo.innerHTML = smsTotal.toFixed(2);
    var totalBill = callsTotal + smsTotal;
    totalCostElemen.innerHTML = totalBill.toFixed(2);
    
    //color the total based on the criteria
    if (totalBill >= 50){
        // adding the danger class will make the text red
        totalCostElemen.classList.add("danger");
    }
    else if (totalBill >= 30){
        totalCostElemen.classList.add("warning");
    }
}


radioBillAddBtn.addEventListener("click", selectBilladdBtn)
// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
