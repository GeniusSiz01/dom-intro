// get a reference to the sms or call radio buttons
const radioBtn = document.querySelector(".billItemTypeWithSettings")
// get refences to all the settings fields
const callCostSettingsElement = document.querySelector(".callCostSetting")
//get a reference to the add button
const smsCostSettingsElement = document.querySelector(".smsCostSetting")
//get a reference to the 'Update settings' button
const warningElement = document.querySelector(".warningLevelSetting")
const dangerElement = document.querySelector(".criticalLevelSetting")
const addBtnSet = document.querySelector(".updateSettings")

const updateSettingsBtn = document.querySelector(".updateSettingsBtn")

// create a variables that will keep track of all the settings
var callCostSetting = 0
var smsCostSetting = 0
var warningLevelSetting = 0
var criticalLevelSetting = 0

// create a variables that will keep track of all three totals.
const callTotalElement = document.querySelector(".callTotalSettings")
const smsTotalElement = document.querySelector(".smsTotalSettings")
const totalElementSet = document.querySelector(".totalSettings")

callTotalSettings = 0
smsTotalSettings = 0
totalSettings = 0
//add an event listener for when the 'Update settings' button is pressed
function updateSettings(){

    callCostSetting = Number(callCostSettingsElement.value)
    smsCostSetting = Number(smsCostSettingsElement.value)
    warningLevelSetting = Number(warningElement.value)
    criticalLevelSetting = Number(dangerElement.value)
    
}
updateSettingsBtn.addEventListener('click', addBtns)
addBtnSet.addEventListener('click', updateSettings)
//add an event listener for when the add button is pressed
function addBtns(){
    
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value

    
    if ( billItemType === "call") {
        callTotalSettings += callCostSetting
    }
    else if (billItemType === "sms") {
        smsTotalSettings += smsCostSetting
    }
    callTotalElement.innerHTML = callTotalSettings.toFixed(2);
    smsTotalElement.innerHTML = smsTotalSettings.toFixed(2);
    var totalSettings = callTotalSettings + smsTotalSettings;
    totalElementSet.innerHTML = totalSettings.toFixed(2);
    
    //color the total based on the criteria
    if (totalSettings >= warningLevelSetting){
        // adding the danger class will make the text red
        totalElementSet.classList.add("warning");
    }
    if (totalSettings >= criticalLevelSetting){
        totalElementSet.classList.add("danger");
    }
}
}

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
