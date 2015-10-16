/*
 * This script replaces accountInformationCommercialDisableFields.js
 * (accountInformationDisableFields)
 *
 * Includes functions that interact with fields in the account form
 */
function getAttributeObj(attribute) {
    /*
     * This function gets the atribute object determined by the argument
     */
    return Xrm.Page.getAttribute(attribute);
}
function enableField(field) {
    $('#' + field + '_c').parent().show(); //show <tr> field with label/input
    Xrm.Page.ui.controls.get(field).setDisabled(false);
    Xrm.Page.ui.controls.get(field).setRequiredLevel("required"); //this field is a must
}
function disableField(field) {
    $('#' + field + '_c').parent().hide(); //hide public options
    Xrm.Page.ui.controls.get(field).setRequiredLevel("none");
    Xrm.Page.ui.controls.get(field).setDisabled(true);
}
function showHidePublicSchoolCode() {
    /*
     * Shows or hides schoolcode field depending on subtype field
     * if subtype is private hide schoolcode, if subtype is public
     * show schoolcode, the default action is to hide the schoolcode field.
     * On show sets fields as required.
     */
    if (getAttributeObj('new_subtype').getValue() == 100000001) { // Public
        /*
         * if school type is public show school code field and set it as required
         */
        enableField('new_schoolcode');
    } else { //Private||Null  as default value if nothing is selected hide the field
        disableField('new_schoolcode');
    }
}
function showHideAgreementNumberExpiration() {
    /*
     * Shows or hides agreement expiration date and contract id depending on
     * if the client have an agreement or not. Fields shown are set as required.
     * Default action hides the fields.
     */
    if (getAttributeObj('new_agreement').getValue() == 1) {
        /*
         * If there is an agreement, show contract id field
         * and expiration date field also set them as required
         */
        enableField('new_agreementexpirationdate');
        enableField('new_contractid');
    } else {
        /*
         * If agreement field is empty or there is no agreement
         * hide the agreement and contract id fields
         */
        disableField('new_agreementexpirationdate');
        disableField('new_contractid');
    }
}
function showHideReligiousDenomination() {
    if (getAttributeObj('new_affiliation') == 100000000) { // Catholic
        enableField('new_catholicaffiliation');
        enableField('new_consortium');
        disableField('new_protestantaffiliation');
    } else if (getAttributeObj('new_affiliation') == 100000001) { // Protestant
        enableField('new_protestantaffiliation');
        disableField('new_catholicaffiliation');
        disableField('new_consortium');
    } else {
        disableField('new_protestantaffiliation');
        disableField('new_catholicaffiliation');
        disableField('new_consortium');
    }
}
function cityOptions() {
    // var options = Xrm.Page.getAttribute('new_city').getOptions();
    // for (var i in options) {
    //     Xrm.Page.ui.setFormNotification('Value :' + options[i].value, 'INFORMATION');
    //     Xrm.Page.ui.setFormNotification('Text :' + options[i].text, 'INFORMATION');
    //     
    // }
}
