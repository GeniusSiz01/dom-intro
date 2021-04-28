const calculateBtn = document.querySelector(".calculateBtn")
//get a reference to the calculate button

const billTotal = document.querySelector(".billTotal")
alert(billTotal.classList)
//get a reference to the billTotal element


const billString = document.querySelector(".billString")
//get a reference to the billTotal element
const totalElement = document.querySelector(".total")
// totalElement.style.color = "red"


calculateBtn.addEventListener("click", calculateBill)
function calculateBill() {

  var callsMade = billString.value
  var total = 0;
  var bill = callsMade.split(",");
  for (var i = 0; i < bill.length; i++) {
    var lists = bill[i];

    if (lists.includes("l")) {
      total += 2.75;
    }
    if (lists.includes("m")) {
      total += 0.75;
    }
  }
  redCheck(total)
  console.log(total)
  billTotal.innerHTML = total.toFixed(2)
}

function redCheck(total) {
  if (total > 4) {
    billTotal.classList.remove("warning")
    billTotal.classList.add("danger")

  }

  else if (total < 4 && total > 2) {
    billTotal.classList.remove("danger")
    billTotal.classList.add("warning")
  }
  else {
    billTotal.classList.remove("warning")
  }
}


//get a reference to the billTotal element

//get a reference to the billString

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

//link the function to a click event on the calculate button
