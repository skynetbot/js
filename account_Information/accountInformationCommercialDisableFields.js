function schoolTypeStatus() { // Function to get school type value off of account entity
    // if the school type is public the form should include a school code field
    var schoolTextValue = Xrm.Page.data.entity.attributes.get("new_subtype").getText();
    var schoolValue = Xrm.Page.data.entity.attributes.get("new_subtype").getValue();
    var schoolCodeField = Xrm.Page.ui.controls.get("new_schoolcode");
    if (schoolValue == 100000001) { //'Public'
        $('#new_schoolcode_c').parent().show(); // Shows the field <tr> which contains label and input
        schoolCodeField.setDisabled(false);
        schoolCodeField.setRequiredLevel("required"); // Set this field as a must
    } else { //Private||Null  as default value if nothing is selected hide the field
        $('#new_schoolcode_c').parent().hide();
        schoolCodeField.setRequiredLevel("none");
        schoolCodeField.setDisabled(true);
    }
}
function agreementStatus() { // Function to display or hide the contract id.
    // if there is an agreement there must be an contract id
    var agreementTextValue = Xrm.Page.data.entity.attributes.get("new_agreement").getText();
    var agreementValue = Xrm.Page.data.entity.attributes.get("new_agreement").getValue();
    var agreementNumberField = Xrm.Page.ui.controls.get("new_contractid");
    var agreementDueDateField = Xrm.Page.ui.controls.get("new_agreementexpirationdate");
    if (agreementValue == 1) { //'Yes'  if there is an agreement, display the due date and contract id
        // for the agreement and set them as required fields
        $('#new_agreementexpirationdate_c').parent().show();
        $('#new_contractid_c').parent().show();
        agreementNumberField.setDisabled(false);
        agreementDueDateField.setDisabled(false);
        agreementNumberField.setRequiredLevel("required");
        agreementDueDateField.setRequiredLevel("required");
    } else { //'No'  if there's no agreement hide the contract id and due date fields
        $('#new_agreementexpirationdate_c').parent().hide();
        $('#new_contractid_c').parent().hide();
        agreementDueDateField.setRequiredLevel("none");
        agreementNumberField.setRequiredLevel("none");
        agreementDueDateField.setDisabled(true);
        agreementNumberField.setDisabled(true);
    }
}
function affiliationStatusOld() { // This function is not used. See affiliationStatus()
    var affiliationTextValue = Xrm.Page.data.entity.attributes.get("new_affiliation").getText();
    var affiliationValue = Xrm.Page.data.entity.attributes.get("new_affiliation").getValue();
    var affiliationDioceseField = Xrm.Page.ui.controls.get("new_religiousordersubtype");
    var affiliationProtestantField = Xrm.Page.ui.controls.get("new_protestanttype");
    if (affiliationValue == 100000002) { //'Secular'
        $('#new_protestanttype_c').parent().hide();
        $('#new_religiousordersubtype_c').parent().hide();
        affiliationProtestantField.setRequiredLevel("none");
        affiliationDioceseField.setRequiredLevel("none");
        affiliationProtestantField.setDisabled(true);
        affiliationDioceseField.setDisabled(true);
    } else if (affiliationValue == 100000000) { //'Catholic'
        $('#new_protestanttype_c').parent().hide();
        $('#new_religiousordersubtype_c').parent().show();
        affiliationProtestantField.setRequiredLevel("none");
        affiliationDioceseField.setDisabled(false);
        affiliationDioceseField.setRequiredLevel("required");
        affiliationProtestantField.setDisabled(true);
    } else if (affiliationValue == 100000001) { //'Protestant'
        $('#new_protestanttype_c').parent().show();
        $('#new_religiousordersubtype_c').parent().hide();
        affiliationProtestantField.setDisabled(false);
        affiliationDioceseField.setRequiredLevel("none");
        affiliationDioceseField.setDisabled(true);
        affiliationProtestantField.setRequiredLevel("required");
    } else {
        $('#new_protestanttype_c').parent().hide();
        $('#new_religiousordersubtype_c').parent().hide();
        affiliationProtestantField.setRequiredLevel("none");
        affiliationDioceseField.setRequiredLevel("none");
        affiliationProtestantField.setDisabled(true);
        affiliationDioceseField.setDisabled(true);
    }
}
function affiliationStatus() { //Shows/Hides fields depending on affiliation status
    var affiliationTextValue = Xrm.Page.data.entity.attributes.get("new_affiliation").getText();
    var affiliationValue = Xrm.Page.data.entity.attributes.get("new_affiliation").getValue();
    var catholicField = Xrm.Page.ui.controls.get("new_catholicaffiliation");
    var protestantField = Xrm.Page.ui.controls.get("new_protestantaffiliation");
    var consortiumField = Xrm.Page.ui.controls.get("new_consortium");
    function hideProtestant() { //function to hide protestant affiliation fields
        protestantField.setRequiredLevel("none");
        protestantField.setDisabled(true);
        $('#new_protestantaffiliation_c').parent().hide();}
    function hideCatholic() { //hides catholic affiliation fields
        catholicField.setRequiredLevel("none");
        consortiumField.setRequiredLevel("none");
        catholicField.setDisabled(true);
        consortiumField.setDisabled(true);
        $('#new_catholicaffiliation_c').parent().hide();
        $('#new_consortium_c').parent().hide();
    }
    function showProtestant() { 
        //displays protestant affiliation fields and sets them as required
        $('#new_protestantaffiliation_c').parent().show();
        protestantField.setDisabled(false);
        protestantField.setRequiredLevel("required");}
    function showCatholic() {
        // Displays catholic affiliation fields
        $('#new_catholicaffiliation_c').parent().show();
        $('#new_consortium_c').parent().show();
        catholicField.setDisabled(false);
        consortiumField.setDisabled(false);
        catholicField.setRequiredLevel("required");
        consortiumField.setRequiredLevel("required");}
    switch (affiliationValue) { // Depending on affiliation field
            // makes funciton calls
        case 100000000: //'Catholic'
            hideProtestant();
            showCatholic();
            break;
        case 100000001: //'Protestant'
            hideCatholic();
            showProtestant();
            break;
        case 100000002: //'Secular'
            hideCatholic();
            hideProtestant();
            break;
        default:
            hideCatholic();
            hideProtestant();
            break;
    }
}