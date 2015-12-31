/*
 * The following script interacts with the financial records form.
 */
function getAtbObj(attribute) {
    return Xrm.Page.getAttribute(attribute);
}
function setAtbVal(attribute, value) {
    Xrm.Page.data.entity.attributes.get(attribute).setValue(value);
}
function disableAtb(attribute) {
    Xrm.Page.ui.controls.get(attribute).setDisabled(true);
}
function enableAtb(attribute) {
    Xrm.Page.ui.controls.get(attribute).setDisabled(false);
}
/*
 * This verifies if the status changes to Won or Lost and checks if the Current
 * Won Value is not empty, then disables the Current Won Value field and saves the form.
 */
function crntWonValOnChange() {
    // Check if current won value is in the form
    if (getAtbObj('crm_currentwonvalue')) {
        var crntWonValu = getAtbObj('crm_currentwonvalue').getValue();
        // checks if status is in the form
        if (getAtbObj('crm_status')) {
            var statValu = getAtbObj('crm_status').getValue();
            // checks if status changes to won or lost
            if (statValu == 0 || statValu == 1) {
                // checks that current won value is not empty
                if (crntWonValu != null) {
                    // disables current won value
                    // disableAtb('crm_currentwonvalue');
                    Xrm.Page.ui.clearFormNotification('1');
                    // because disabling the field removes the ability to save the data in the field
                    // submitmode must be changed to always in order to save the current data
                    getAtbObj('crm_currentwonvalue').setSubmitMode('always');
                    Xrm.Page.data.entity.save();
                }
            }
        }
    }
}

/*
 * This function is called in the onChange event of the crm_status attribute
 * in the financialrecords form. As the user clicks on the field the script reads
 * the value selected in the optionset, it also reads the value stored in 
 * crm_currentwonvalue and takes action if it's 0 or empty.
 */
function statusOnChange() {
    // first we check if the status attribute exists in the form
    if (getAtbObj('crm_status')) {
        // gets status value
        var statVal = getAtbObj('crm_status').getValue();
        // then check if the attribute current won value exists in the form
        if (getAtbObj('crm_currentwonvalue')) {
            // gets the current won value value and todays date
            var crntWonVal = getAtbObj('crm_currentwonvalue').getValue(),
                today      = new Date();
            // validate currentwonvalue if empty or 0
            if (crntWonVal == null || crntWonVal == 0) {
                // take action if the value on status is not set to Lost
                if (statVal != 0) {
                    // sets status to Open
                    setAtbVal('crm_status', 500000000);
                    Xrm.Page.getControl('crm_currentwonvalue').clearNotification();
                    Xrm.Page.ui.clearFormNotification('1');
                    // set fields enabled
                    enableAtb('crm_opportunityid');
                    enableAtb('crm_bus');
                    enableAtb('crm_businesssegmentid');
                    enableAtb('crm_platformid');
                    enableAtb('crm_proposalvalue');
                    enableAtb('crm_currentqtrvalue');
                    enableAtb('crm_currentwonvalue');
                    enableAtb('crm_closedate');
                    setAtbVal('crm_closedate', null);
                    Xrm.Page.data.entity.save();
                }
            }
            // validate if status is Open and enables fields
            // if theres notifications it clears them
            if (statVal == 500000000) {
                // set fields enabled
                enableAtb('crm_opportunityid');
                enableAtb('crm_bus');
                enableAtb('crm_businesssegmentid');
                enableAtb('crm_platformid');
                enableAtb('crm_proposalvalue');
                enableAtb('crm_currentqtrvalue');
                enableAtb('crm_currentwonvalue');
                enableAtb('crm_closedate');
                //Xrm.Page.getControl('crm_currentwonvalue').clearNotification();
                Xrm.Page.ui.clearFormNotification('1');
                setAtbVal('crm_closedate', null);
                Xrm.Page.data.entity.save();
            }
            // validates if the status is set to lost
            // disables fields
            // if theres notifications it clears them
            // if lost sets the close date to today (date when it is updated)
            if (statVal == 0) {
                // sets current won value to lost
                setAtbVal('crm_currentwonvalue', 0);
                if (getAtbObj('crm_closedate').getValue() == null) {
                    setAtbVal('crm_closedate', today);
                }
                //Xrm.Page.getControl('crm_currentwonvalue').clearNotification();
                Xrm.Page.ui.clearFormNotification('1');
                // set fields as readonly
                disableAtb('crm_opportunityid');
                disableAtb('crm_bus');
                disableAtb('crm_businesssegmentid');
                disableAtb('crm_platformid');
                disableAtb('crm_proposalvalue');
                disableAtb('crm_currentqtrvalue');
                // disableAtb('crm_currentwonvalue');
                // disableAtb('crm_closedate');
                getAtbObj('crm_opportunityid').setSubmitMode('always');
                getAtbObj('crm_bus').setSubmitMode('always');
                getAtbObj('crm_businesssegmentid').setSubmitMode('always');
                getAtbObj('crm_platformid').setSubmitMode('always');
                getAtbObj('crm_proposalvalue').setSubmitMode('always');
                getAtbObj('crm_currentqtrvalue').setSubmitMode('always');
                getAtbObj('crm_currentwonvalue').setSubmitMode('always');
                getAtbObj('crm_closedate').setSubmitMode('always');
                Xrm.Page.data.entity.save();
            }
            // validates the status as Won and triggers a notification
            // to remind to update the current won value
            // disables fields and sets the close date to today (date when it is updated)
            if (statVal == 1) {
                if (getAtbObj('crm_closedate').getValue() == null) {
                    setAtbVal('crm_closedate', today);
                }
                // display a notification to indicate to update current won value
                Xrm.Page.ui.setFormNotification('The Current Won Value must be updated after changing the status to Won or Lost.', 'INFO', '1');
                //Xrm.Page.getControl('crm_currentwonvalue').setNotification('Must be updated with new value before saving.');
                // set fields as readonly
                disableAtb('crm_opportunityid');
                disableAtb('crm_bus');
                disableAtb('crm_businesssegmentid');
                disableAtb('crm_platformid');
                disableAtb('crm_proposalvalue');
                disableAtb('crm_currentqtrvalue');
                // disableAtb('crm_currentwonvalue');
                // disableAtb('crm_closedate');
                if (crntWonVal == 0 || crntWonVal == null) {
                    enableAtb('crm_currentwonvalue');
                }
                Xrm.Utility.confirmDialog(
                    'Do you want to update the Current Won Value before saving? Press OK to edit or Cancel to leave the current value.',
                    function () {
                        enableAtb('crm_currentwonvalue');
                        Xrm.Page.getControl('crm_currentwonvalue').setFocus();
                    },
                    function () {
                        // disableAtb('crm_currentwonvalue');
                        Xrm.Page.ui.clearFormNotification('1');
                    });
                getAtbObj('crm_opportunityid').setSubmitMode('always');
                getAtbObj('crm_bus').setSubmitMode('always');
                getAtbObj('crm_businesssegmentid').setSubmitMode('always');
                getAtbObj('crm_platformid').setSubmitMode('always');
                getAtbObj('crm_proposalvalue').setSubmitMode('always');
                getAtbObj('crm_currentqtrvalue').setSubmitMode('always');
                getAtbObj('crm_currentwonvalue').setSubmitMode('always');
                getAtbObj('crm_closedate').setSubmitMode('always');
                Xrm.Page.data.entity.save();
            }
        } else { return }
    } else { return }
}
function statusOnLoad() {
    // first we check if the status attribute exists in the form
    if (getAtbObj('crm_status')) {
        // gets status value
        var statVal = getAtbObj('crm_status').getValue();
        // then check if the attribute current won value exists in the form
        if (getAtbObj('crm_currentwonvalue')) {
            // gets the current won value value and todays date
            var crntWonVal = getAtbObj('crm_currentwonvalue').getValue(),
                today      = new Date();
            // validate currentwonvalue if empty or 0
            if (crntWonVal == null || crntWonVal == 0) {
                // take action if the value on status is not set to Lost
                if (statVal != 0) {
                    // sets status to Open
                    setAtbVal('crm_status', 500000000);
                    Xrm.Page.getControl('crm_currentwonvalue').clearNotification();
                    Xrm.Page.ui.clearFormNotification('1');
                    // set fields enabled
                    enableAtb('crm_opportunityid');
                    enableAtb('crm_bus');
                    enableAtb('crm_businesssegmentid');
                    enableAtb('crm_platformid');
                    enableAtb('crm_proposalvalue');
                    enableAtb('crm_currentqtrvalue');
                    enableAtb('crm_currentwonvalue');
                    enableAtb('crm_closedate');
                    setAtbVal('crm_closedate', null);
                    Xrm.Page.data.entity.save();
                }
            }
            // validate if status is Open and enables fields
            if (statVal == 500000000) {
                // set fields enabled
                enableAtb('crm_opportunityid');
                enableAtb('crm_bus');
                enableAtb('crm_businesssegmentid');
                enableAtb('crm_platformid');
                enableAtb('crm_proposalvalue');
                enableAtb('crm_currentqtrvalue');
                enableAtb('crm_currentwonvalue');
                enableAtb('crm_closedate');
                setAtbVal('crm_closedate', null);
                Xrm.Page.data.entity.save();
            }
            // disables fields
            if (statVal == 0) {
                // set fields as readonly
                disableAtb('crm_opportunityid');
                disableAtb('crm_bus');
                disableAtb('crm_businesssegmentid');
                disableAtb('crm_platformid');
                disableAtb('crm_proposalvalue');
                disableAtb('crm_currentqtrvalue');
                // disableAtb('crm_currentwonvalue');
                // disableAtb('crm_closedate');
            }
            // disables fields
            if (statVal == 1) {
                
                // set fields as readonly
                disableAtb('crm_opportunityid');
                disableAtb('crm_bus');
                disableAtb('crm_businesssegmentid');
                disableAtb('crm_platformid');
                disableAtb('crm_proposalvalue');
                disableAtb('crm_currentqtrvalue');
                // disableAtb('crm_currentwonvalue');
                // disableAtb('crm_closedate');
            }
        } else { return }
    } else { return }
}
/*
 * This function calculates the remaining open value of the Financial Record onLoad
 * This function is also called on the onChange event
 */
function remainingOpenValueOnChange() {
    if (getAtbObj('crm_remainingopenvalue')) {
        var remOpenVal = getAtbObj('crm_remainingopenvalue').getValue();
        if (getAtbObj('crm_proposalvalue')) {
            var propVal = getAtbObj('crm_proposalvalue').getValue();
            if (getAtbObj('crm_currentwonvalue')) {
                var crntWonVal    = getAtbObj('crm_currentwonvalue').getValue(),
                    remOpenValSet = propVal - crntWonVal;
                if (remOpenValSet < 0) {
                    remOpenValSet = 0;
                }
                setAtbVal('crm_remainingopenvalue', remOpenValSet);
                getAtbObj('crm_remainingopenvalue').setSubmitMode('always');
                Xrm.Page.data.entity.save();
            }
        }
    }
}
