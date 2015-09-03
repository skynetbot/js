function schoolTypeStatus() {
    var schoolTextValue = Xrm.Page.data.entity.attributes.get("new_subtype").getText();
    var schoolValue = Xrm.Page.data.entity.attributes.get("new_subtype").getValue();
    var schoolCodeField = Xrm.Page.ui.controls.get("new_schoolcode");
    if (schoolValue == 100000001) { //'Public'
        $('#new_schoolcode_c').parent().show();
        schoolCodeField.setDisabled(false);
        schoolCodeField.setRequiredLevel("required");
    } else { //Private/Null
        $('#new_schoolcode_c').parent().hide();
        schoolCodeField.setRequiredLevel("optional");
        schoolCodeField.setDisabled(true);
    }
}
function agreementStatus() {
    var agreementTextValue = Xrm.Page.data.entity.attributes.get("new_agreement").getText();
    var agreementValue = Xrm.Page.data.entity.attributes.get("new_agreement").getValue();
    var agreementNumberField = Xrm.Page.ui.controls.get("new_contractid");
    var agreementDueDateField = Xrm.Page.ui.controls.get("new_agreementexpirationdate");
    if (agreementValue == 1) { //'Yes'
        $('#new_agreementexpirationdate_c').parent().show();
        $('#new_contractid_c').parent().show();
        agreementNumberField.setDisabled(false);
        agreementDueDateField.setDisabled(false);
        agreementNumberField.setRequiredLevel("required");
        agreementDueDateField.setRequiredLevel("required");
    } else { //'No'
        $('#new_agreementexpirationdate_c').parent().hide();
        $('#new_contractid_c').parent().hide();
        agreementDueDateField.setRequiredLevel("optional");
        agreementNumberField.setRequiredLevel("optional");
        agreementDueDateField.setDisabled(true);
        agreementNumberField.setDisabled(true);
    }
}
function affiliationStatus() {
    var affiliationTextValue = Xrm.Page.data.entity.attributes.get("new_affiliation").getText();
    var affiliationValue = Xrm.Page.data.entity.attributes.get("new_affiliation").getValue();
    var affiliationDioceseField = Xrm.Page.ui.controls.get("new_religiousordersubtype");
    var affiliationProtestantField = Xrm.Page.ui.controls.get("new_protestanttype");
    if (affiliationValue == 100000002) { //'Secular'
        $('#new_protestanttype_c').parent().hide();
        $('#new_religiousordersubtype_c').parent().hide();
        affiliationProtestantField.setRequiredLevel("optional");
        affiliationDioceseField.setRequiredLevel("optional");
        affiliationDioceseField.setDisabled(true);
    } else if (affiliationValue == 100000000) { //'Catholic'
        $('#new_protestanttype_c').parent().hide();
        $('#new_religiousordersubtype_c').parent().show();
        affiliationProtestantField.setRequiredLevel("optional");
        affiliationDioceseField.setDisabled(false);
        affiliationDioceseField.setRequiredLevel("required");
        affiliationProtestantField.setDisabled(true);
    } else if (affiliationValue == 100000001) { //'Protestant'
        $('#new_protestanttype_c').parent().show();
        $('#new_religiousordersubtype_c').parent().hide();
        affiliationProtestantField.setDisabled(false);
        affiliationDioceseField.setRequiredLevel("optional");
        affiliationDioceseField.setDisabled(true);
        affiliationProtestantField.setRequiredLevel("required");
    } else {
        $('#new_protestanttype_c').parent().hide();
        $('#new_religiousordersubtype_c').parent().hide();
        affiliationProtestantField.setRequiredLevel("optional");
        affiliationDioceseField.setRequiredLevel("optional");
        affiliationProtestantField.setDisabled(true);
        affiliationDioceseField.setDisabled(true);
    }
}
