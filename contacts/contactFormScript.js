function changeContactNumber() { // Previously Onload() now renamed to changeContactNumber. Copied to maintian backwards compatibility.
    // This function is probably useless since the field described here doesn't have any values
    // in the database.
    var a = Xrm.Page.getAttribute("new_contactnumber").getValue();
    if(a != null) {
        a = a.replace(",", "");
        a = a.replace(",", "");
    }
    Xrm.Page.getAttribute("new_codigocontacto").setValue(a);
}
function oohlalah() {
    alert("on change!");
}
function getAttribute(attribute) {
    return Xrm.Page.getAttribute(attribute);
}
function getSection(tab, section) { return Xrm.Page.ui.tabs.get(tab).sections.get(section); }
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
function sectionShow(show) { show.setVisible(true); }
function sectionsHide() {
    var i;
    for (i = 0; i < arguments.length; i++)
        arguments[i].setVisible(false); }
function privateSchoolContactType() {
    var studentSection = getSection('general', 'student_section'),
        teacherSection = getSection('general', 'teacher_section'),
        coachSection = getSection('general', 'coach_section'),
        hrSection = getSection('general', 'hr_section'),
        typeValue = getAttribute('new_contacttypeprivate').getValue();
    switch (typeValue) {
            case 100000016: // Teacher
                //If a teacher display teacher section, hide not relevant
                sectionsHide(studentSection, coachSection, hrSection);
                sectionShow(teacherSection);
                break;
            case 100000003: // Coach
                // if a coach, show coach section, hide not relevant
                sectionsHide(studentSection, teacherSection, hrSection);
                sectionShow(coachSection);
                break;
            default:
                sectionsHide(studentSection, teacherSection, coachSection, hrSection);
                break;
        }
}
function contactTypeOnChange(attribute, type) {
    // Getting sections in the contact form
    var studentSection = getSection('general', 'student_section'),
        teacherSection = getSection('general', 'teacher_section'),
        coachSection = getSection('general', 'coach_section'),
        typeValue = getAttribute('new_contacttypeprivate').getValue();
    console.log(type);
    console.log(typeValue);
    if (type == 100000000) { // School type private from obj in accountDetails()
        switch (typeValue) {
            case 100000016: // Teacher
                //If a teacher display teacher section, hide not relevant
                sectionsHide(studentSection, coachSection);
                sectionShow(teacherSection);
                break;
            case 100000003: // Coach
                // if a coach, show coach section, hide not relevant
                sectionsHide(studentSection, teacherSection);
                sectionShow(coachSection);
                break;
            default:
                sectionsHide(studentSection, teacherSection, coachSection);
                break;
        }
    }
    if (type == 100000001) {
        switch (typeValue) {
            case 100000000: // Teacher
                //If a teacher display teacher section, hide not relevant
                sectionsHide(studentSection, coachSection);
                sectionShow(teacherSection);
                break;
            case 100000021: //Student
                //If the contact type is a student, display the student section hide not relevant
                sectionsHide(teacherSection, coachSection);
                sectionShow(studentSection);
                break;
            case 100000002: // Coach
                // if a coach, show coach section, hide not relevant
                sectionsHide(studentSection, teacherSection);
                sectionShow(coachSection);
                break;
            default:
                sectionsHide(studentSection, teacherSection, coachSection);
                break;
        }
    }
}
function changedFunctionName() {
    
                        //var typeValue = Xrm.Page.getAttribute('new_contacttypeprivate').getValue();
                        //Xrm.Page.getAttribute('new_contacttypeprivate').addOnChange(alert(typeValue));
                        //    switch (Xrm.Page.getAttribute('new_contacttypeprivate').getValue()) {
                        //        case 100000016: // Teacher
                        //            //If a teacher display teacher section, hide not relevant
                        //            sectionsHide(studentSection, coachSection);
                        //            sectionShow(teacherSection);
                        //            break;
                        //        case 100000003: // Coach
                        //            // if a coach, show coach section, hide not relevant
                        //            sectionsHide(studentSection, teacherSection);
                        //            sectionShow(coachSection);
                        //            break;
                        //        default:
                        //            sectionsHide(studentSection, teacherSection, coachSection);
                        //            break;
                        //    });
                   
                        //// contactTypeOnChange('new_contacttypepublic', schoolType);
                        //// getAttribute('new_contacttypeprivate').addOnChange(oohlalah);
                        //// getAttribute('new_contacttypepublic').addOnChange(alert("on change"));
                        //var typeValue = Xrm.Page.getAttribute('new_contacttypepublic').getValue();
                        //getAttribute('new_contacttypepublic').addOnChange(
                        //    switch (Xrm.Page.getAttribute('new_contacttypepublic').getValue()) {
                        //        case 100000000: // Teacher
                        //            //If a teacher display teacher section, hide not relevant
                        //            sectionsHide(studentSection, coachSection);
                        //            sectionShow(teacherSection);
                        //            break;
                        //        case 100000021: //Student
                        //            //If the contact type is a student, display the student section hide not relevant
                        //            sectionsHide(teacherSection, coachSection);
                        //            sectionShow(studentSection);
                        //            break;
                        //        case 100000002: // Coach
                        //            // if a coach, show coach section, hide not relevant
                        //            sectionsHide(studentSection, teacherSection);
                        //            sectionShow(coachSection);
                        //            break;
                        //        default:
                        //            sectionsHide(studentSection, teacherSection, coachSection);
                        //            break;
                        //    });
                  
} // END OF getAccountDetails
function getAccountDetails() {
    /* Refer to Microsoft Dynamics CRM 2015 SDK:
       {$SDK_Directory}\SampleCode\JS\RESTEndpoint\RESTJQueryContactEditor\
       RESTJQueryContactEditor\Scripts\RESTJQueryContactEditor.js
       
       This function will get the related account value from the contact form
       and with this value creates a database request to pull a specific value
       from the account entity (in this case if the account is from a 
       public/private/else) then with the requested value from the account
       displays certain fields and sets it's required permission in the current
       contact form */
    var accountObject = getAttribute('parentcustomerid').getValue(), // getAttribute From contactFormScript.js
        clientUrl = Xrm.Page.context.getClientUrl(), //get CRM URL
        ODATA_ENDPOINT = "/XRMServices/2011/OrganizationData.svc", //Xrm OData end-point
        odataSetName = "AccountSet", //This is found when exporting 
        studentSection = getSection('general', 'student_section'),
        teacherSection = getSection('general', 'teacher_section'),
        coachSection = getSection('general', 'coach_section'),
        hrSection = getSection('general', 'hr_section');
    if (!accountObject) {
        Xrm.Page.ui.setFormNotification('Developer: Error, could not retrieve the accountObject.', 'ERROR');
        return;
    } else {
        var accountObjectId = accountObject[0].id; //get account id
        accountObjectId = encodeURIComponent(accountObjectId);
    }
    if (!odataSetName) {
        Xrm.Page.ui.setFormNotification('Developer: Error, could not retrieve odataSetName.','ERROR');
        return;
    } else {
        odataSetName = encodeURIComponent(odataSetName);
    }
    // account entity XML
    var odataSelect = clientUrl + ODATA_ENDPOINT + "/" + odataSetName + "(guid'" + accountObjectId + "')";
    // odataSelect would be the select query statement
        $.ajax({
            type: "GET",
            // HTTP GET request
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            url: odataSelect,
            beforeSend: function (XMLHttpRequest) { XMLHttpRequest.setRequestHeader("Accept", "application/json"); },
            success: function (data, textStatus, XmlHttpRequest) {
                // var obj = JSON.parse(XmlHttpRequest.responseText).d;
                var obj = data.d;
                //console.log(obj);
                if (!obj.new_SubType.Value) {
                    Xrm.Page.ui.setFormNotification('La cuenta de este contacto no tiene determinado el tipo de instituci\u00F3n \
como p\u00FAblico o privado.  Favor de editar este campo para mostrar informaci\u00F3n pertinente al contacto. Para editar haga \
clic en ' + obj.Name + ' (abajo).', 'ERROR');
                } else {
                    var schoolType = obj.new_SubType.Value;
                    // on account object account school type value hide or display related fields
                    if (schoolType == 100000000) { // Private if account is a private school
                        enableField('new_contacttypeprivate');
                        disableField('new_contacttypepublic');
                        if (getAttribute('new_contacttypeprivate').getValue() != null) {
                            switch (getAttribute('new_contacttypeprivate').getValue()) {
                                case 100000016: // Teacher
                                    //If a teacher display teacher section, hide not relevant
                                    sectionsHide(studentSection, coachSection, hrSection);
                                    sectionShow(teacherSection);
                                    break;
                                case 100000003: // Coach
                                    // if a coach, show coach section, hide not relevant
                                    sectionsHide(studentSection, teacherSection, hrSection);
                                    sectionShow(coachSection);
                                    break;
                                default:
                                    sectionsHide(studentSection, teacherSection, coachSection, hrSection);
                                    break;
                            }
                        }
                    } else if (schoolType == 100000001) { // Public if account is a public school
                        enableField('new_contacttypepublic');
                        disableField('new_contacttypeprivate');
                        if (getAttribute('new_contacttypepublic').getValue() != null) {
                        }
                    } else {
                        disableField('new_contacttypepublic');
                        disableField('new_contacttypeprivate');
                    }
                } // ELSE BRACKET
            }, // SUCCESS BRACKET
            error: function (XmlHttpRequest, textStatus, errorThrown) { alert('OData Select Failed: ' + odataSelect); }
        }); // END OF AJAX
} // END OF getAccountDetails