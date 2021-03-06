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
    /*
     * Just a tesging function for onchange events
     */
    alert("on change!");
}
function getAttributeObj(attribute) {
    /*
     * This function gets the atribute object determined by the argument
     */
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
function setAttributeValue(attribute, value) {
    Xrm.Page.data.entity.attributes.get(attribute).setValue(value);
}
function saveAttributeValue(attribute) {
    Xrm.Page.data.entity.attributes.get(attribute).setSubmitMode('always');
}
function getAttributeSubmitMode(attribute) {
    Xrm.Page.data.entity.attributes.get(attribute).getSubmitMode();
}
function subjectsTaught() {
    var subjectsNumber = getAttributeObj('new_subjectstaught').getText() - 1,
        subjectsValue = getAttributeObj('new_subjectstaught').getValue(),
        i;
    if (subjectsValue != null) {
        for (i = 0; i <= 7; i++) {
            if (i <= subjectsNumber) {
                enableField('new_subject'+i);
                //Xrm.Page.ui.setFormNotification('Milton: enabled subject'+ i, 'INFO');
            } else {
                getAttributeObj('new_subject'+i).setValue(null);
                disableField('new_subject'+i);
                //Xrm.Page.ui.setFormNotification('Milton: disabled subject'+ i, 'INFO');
            }
        }
    } else {
        for (i = 0; i <= 7; i++) {
            getAttributeObj('new_subject'+i).setValue(null);
            disableField('new_subject'+i);
        }
    }
}
function schoolContactType(schooltype, contactTypeValue) {
    /*
     * Form sections
     */
    var studentSection  = getSection('student_tab', 'student_section'),
        studentSection2 = getSection('student_tab', 'student_section2'),
        studentSection3 = getSection('student_tab2', 'student_section3'),
        teacherSection  = getSection('teacher_tab', 'teacher_section'),
        teacherSection2 = getSection('teacher_tab', 'teacher_section2'),
        coachSection    = getSection('coach_tab', 'coach_section'),
        coachSection2   = getSection('coach_tab', 'coach_section2'),
        hrSection       = getSection('hr_tab', 'hr_section'),
        hrSection2      = getSection('hr_tab', 'hr_section2');
    if (schooltype == 'private') {
        switch (contactTypeValue) {
            case 100000016: // Teacher
                //If a teacher display teacher section, hide not relevant
                sectionsHide(studentSection, studentSection2, studentSection3, coachSection, coachSection2, hrSection, hrSection2);
                sectionShow(teacherSection);
                sectionShow(teacherSection2);
                enableField('new_subjectstaught');
                subjectsTaught();
                break;
            case 100000003: // Coach
                // if a coach, show coach section, hide not relevant
                sectionsHide(studentSection, studentSection2, studentSection3, teacherSection, teacherSection2, hrSection, hrSection2);
                sectionShow(coachSection);
                sectionShow(coachSection2);
                break;
            default:
                sectionsHide(studentSection, studentSection2, studentSection3, teacherSection, teacherSection2, coachSection, coachSection2, hrSection, hrSection2);
                break;
        }
    } else if (schooltype == 'public') {
        switch (contactTypeValue) {
            case 100000026: // Teacher
                //If a teacher display teacher section, hide not relevant
                sectionsHide(studentSection, studentSection2, studentSection3, coachSection, coachSection2, hrSection, hrSection2);
                sectionShow(teacherSection);
                sectionShow(teacherSection2);
                enableField('new_subjectstaught');
                subjectsTaught();
                break;
            case 100000022: //Student
                //If the contact type is a student, display the student section hide not relevant
                sectionsHide(teacherSection, teacherSection2, coachSection, coachSection2, hrSection, hrSection2);
                sectionShow(studentSection);
                sectionShow(studentSection2);
                sectionShow(studentSection3);
                break;
            case 100000004: // Coach
                // if a coach, show coach section, hide not relevant
                sectionsHide(studentSection, studentSection2, studentSection3, teacherSection, teacherSection2, hrSection, hrSection2);
                sectionShow(coachSection);
                sectionShow(coachSection2);
                break;
            default:
                sectionsHide(studentSection, studentSection2, studentSection3, teacherSection, teacherSection2, coachSection, coachSection2, hrSection, hrSection2);
                break;
        }
    } else {
        
    }
}
function privateSchoolContactType() {
    var studentSection = getSection('student_tab', 'student_section'),
        studentSection2 = getSection('student_tab', 'student_section2'),
        studentSection3 = getSection('student_tab2', 'student_section3'),
        teacherSection = getSection('teacher_tab', 'teacher_section'),
        teacherSection2 = getSection('teacher_tab', 'teacher_section2'),
        coachSection = getSection('coach_tab', 'coach_section'),
        coachSection2 = getSection('coach_tab', 'coach_section2'),
        hrSection = getSection('hr_tab', 'hr_section'),
        hrSection2 = getSection('hr_tab', 'hr_section2'),
        privateTypeValue = getAttributeObj('new_contacttypeprivate').getValue();
    switch (privateTypeValue) {
        case 100000016: // Teacher
            //If a teacher display teacher section, hide not relevant
            sectionsHide(studentSection, studentSection2, studentSection3, coachSection, coachSection2, hrSection, hrSection2);
            sectionShow(teacherSection);
            sectionShow(teacherSection2);
            enableField('new_subjectstaught');
            break;
        case 100000003: // Coach
            // if a coach, show coach section, hide not relevant
            sectionsHide(studentSection, studentSection2, studentSection3, teacherSection, teacherSection2, hrSection, hrSection2);
            sectionShow(coachSection);
            sectionShow(coachSection2);
            break;
        default:
            sectionsHide(studentSection, studentSection2, studentSection3, teacherSection, teacherSection2, coachSection, coachSection2, hrSection, hrSection2);
            break;
        }
}
function publicSchoolContactType() {
    var studentSection = getSection('student_tab', 'student_section'),
        studentSection2 = getSection('student_tab', 'student_section2'),
        studentSection3 = getSection('student_tab2', 'student_section3'),
        teacherSection = getSection('teacher_tab', 'teacher_section'),
        teacherSection2 = getSection('teacher_tab', 'teacher_section2'),
        coachSection = getSection('coach_tab', 'coach_section'),
        coachSection2 = getSection('coach_tab', 'coach_section2'),
        hrSection = getSection('hr_tab', 'hr_section'),
        hrSection2 = getSection('hr_tab', 'hr_section2'),
        publicTypeValue = getAttributeObj('new_contacttypepublic').getValue();
    switch (publicTypeValue) {
        case 100000026: // Teacher
            //If a teacher display teacher section, hide not relevant
            sectionsHide(studentSection, studentSection2, studentSection3, coachSection, coachSection2, hrSection, hrSection2);
            sectionShow(teacherSection);
            sectionShow(teacherSection2);
            enableField('new_subjectstaught');
            break;
        case 100000022: //Student
            //If the contact type is a student, display the student section hide not relevant
            sectionsHide(teacherSection, teacherSection2, coachSection, coachSection2, hrSection, hrSection2);
            sectionShow(studentSection);
            sectionShow(studentSection2);
            sectionShow(studentSection3);
            break;
        case 100000004: // Coach
            // if a coach, show coach section, hide not relevant
            sectionsHide(studentSection, studentSection2, studentSection3, teacherSection, teacherSection2, hrSection, hrSection2);
            sectionShow(coachSection);
            sectionShow(coachSection2);
            break;
        default:
            sectionsHide(studentSection, studentSection2, studentSection3, teacherSection, teacherSection2, coachSection, coachSection2, hrSection, hrSection2);
            break;
    }
}
function contactFormOnLoad() {
    /*
     * Calling the account JSON object on load
     */
    jsonObjectAccount(function (data, textStatus, XmlHttpRequest) {
        var account = data.d;
        /*
         * Looks for the account type if its a (private|public) school
         * If there is no value display a message
         * otherwise gets the account type and depending on it's value shows|hides specific areas and fields
         * pertinent to the record type.
         */
        if (!account.new_SubType.Value) {
            Xrm.Page.ui.setFormNotification('La cuenta de este contacto no tiene determinado el tipo de instituci\u00F3n \
como p\u00FAblico o privado.  Favor de editar este campo para mostrar informaci\u00F3n pertinente al contacto. Para editar haga \
clic en ' + account.Name + ' (abajo).', 'ERROR');
        } else {
            var accountTypeValue = account.new_SubType.Value,
                contactAccountTypeValue;
            /*
             * Tests the account type and assigns the object value to a variable
             */
            if (accountTypeValue == 100000000) { // Private if account is a private school
                contactAccountTypeValue = 315890000; // Private
            } else if (accountTypeValue == 100000001) { // Public
                contactAccountTypeValue = 315890001; // Public
            }
            /*
             * If there is no value for the contact type field assigns the value to it from the account type field
             */
            if (!getAttributeObj('new_contactparentaccounttype').getValue()) {
                //Xrm.Page.ui.controls.get('new_contactparentaccounttype').setDisabled(false);
                setAttributeValue('new_contactparentaccounttype', contactAccountTypeValue); // set new_contactparentaccounttype value
                /*
                 * to test the submit mode (should be dirty)
                 * console.log(Xrm.Page.data.entity.attributes.get('new_contactparentaccounttype').getSubmitMode());
                 */
                // Force submit of a field
                saveAttributeValue('new_contactparentaccounttype');
                /*
                 * To save the page
                 * Xrm.Page.data.entity.save();
                 */
            }
            /*
             * Tests the previously assigned value to contact type then enables and disables it's related|unrelated fields|sections
             */
            if (getAttributeObj('new_contactparentaccounttype').getValue() == 315890000) { // Private if account is a private school
                enableField('new_contacttypeprivate');
                disableField('new_contacttypepublic');
                saveAttributeValue('new_contactparentaccounttype');
                var contacttypeprivate = getAttributeObj('new_contacttypeprivate').getValue();
                schoolContactType('private', contacttypeprivate);
            } else if (getAttributeObj('new_contactparentaccounttype').getValue() == 315890001) { // Public if account is a public school
                enableField('new_contacttypepublic');
                disableField('new_contacttypeprivate');
                saveAttributeValue('new_contactparentaccounttype');
                var contacttypepublic = getAttributeObj('new_contacttypepublic').getValue();
                schoolContactType('public', contacttypepublic);
            } else {
                disableField('new_contacttypepublic');
                disableField('new_contacttypeprivate');
            }
            //    if (getAttributeObj('new_contacttypeprivate').getValue() != null) {
            //    }
        }
    }); // endOf jsonObjectAccount
}
function jsonObjectAccount(callback) {
    /* 
     * Refer to Microsoft Dynamics CRM 2015 SDK:
     * {$SDK_Directory}\SampleCode\JS\RESTEndpoint\RESTJQueryContactEditor\
     * RESTJQueryContactEditor\Scripts\RESTJQueryContactEditor.js
     *
     * This function returns an array consisting on the contact's parent
     * account. For this an Ajax request needs to be called to return the
     * JSON object.
     *
     * To call this function, for example, the success callback you would do it like this:
     * jsonObjectAccount(function (data, textStatus, XmlHttpRequest) { console.log(data.d); });
     */
    var accountObject = getAttributeObj('parentcustomerid').getValue(), // getAttributeObj From contactFormScript.js
        clientUrl = Xrm.Page.context.getClientUrl(), //get CRM URL
        ODATA_ENDPOINT = "/XRMServices/2011/OrganizationData.svc", //Xrm OData end-point
        odataSetName = "AccountSet"; // Entity in OData Endpoint Settings -> Customization -> Developer
    if (!accountObject) {
        Xrm.Page.ui.setFormNotification('Este contacto no tiene cuenta asignada. Este mensaje desaparecera al refrescar la p\u00E1gina despu\u00E9s de incluir y salvar toda la informaci\u00F3n requerida.', 'ERROR');
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
        success: callback,
        error: function (XmlHttpRequest, textStatus, errorThrown) { alert('OData Select Failed: ' + odataSelect); }
    }); // END OF AJAX
} // END OF jsonObjectAccount
/*
 * To call an asynchronous AJAX
 * This is the method used to call the JSON object
 * The nature of AJAX is always async *setting it as syncrhronous will cause the website to freeze*
 * function returnArrayTest() {
 *     jsonObjectAccount(function (data, textStatus, XmlHttpRequest) { console.log(data.d); });
 * }
 */
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
    var accountObject = getAttributeObj('parentcustomerid').getValue(), // getAttributeObj From contactFormScript.js
        clientUrl = Xrm.Page.context.getClientUrl(), //get CRM URL
        ODATA_ENDPOINT = "/XRMServices/2011/OrganizationData.svc", //Xrm OData end-point
        odataSetName = "AccountSet", //This is found when exporting
        // Form Tabs/Sections
        studentSection = getSection('student_tab', 'student_section'),
        studentSection2 = getSection('student_tab', 'student_section2'),
        studentSection3 = getSection('student_tab2', 'student_section3'),
        teacherSection = getSection('teacher_tab', 'teacher_section'),
        teacherSection2 = getSection('teacher_tab', 'teacher_section2'),
        coachSection = getSection('coach_tab', 'coach_section'),
        coachSection2 = getSection('coach_tab', 'coach_section2'),
        hrSection = getSection('hr_tab', 'hr_section'),
        hrSection2 = getSection('hr_tab', 'hr_section2');
    if (!accountObject) {
        Xrm.Page.ui.setFormNotification('Este contacto no tiene cuenta asignada. Este mensaje desaparecera al refrescar la p\u00E1gina despu\u00E9s de incluir y salvar toda la informaci\u00F3n requerida.', 'ERROR');
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
                    console.log(getAttributeObj('new_contacttypepublic').getValue());
                    // console.log(getAccountObject[0]);
                    var schoolType = obj.new_SubType.Value;
                    // on account object account school type value hide or display related fields
                    switch (schoolType) {
                        case 100000000: // Private if account is a private school
                            enableField('new_contacttypeprivate');
                            disableField('new_contacttypepublic');
                            if (getAttributeObj('new_contacttypeprivate').getValue() != null) {
                                switch (getAttributeObj('new_contacttypeprivate').getValue()) {
                                    case 100000016: // Teacher
                                        //If a teacher display teacher section, hide not relevant
                                        sectionsHide(studentSection, studentSection2, studentSection3, coachSection, coachSection2, hrSection, hrSection2);
                                        sectionShow(teacherSection);
                                        sectionShow(teacherSection2);
                                        enableField('new_subjectstaught');
                                        subjectsTaught();
                                        break;
                                    case 100000003: // Coach
                                        // if a coach, show coach section, hide not relevant
                                        sectionsHide(studentSection, studentSection2, studentSection3, teacherSection, teacherSection2, hrSection, hrSection2);
                                        sectionShow(coachSection);
                                        sectionShow(coachSection2);
                                        break;
                                    default:
                                        sectionsHide(studentSection, studentSection2, studentSection3, teacherSection, teacherSection2, coachSection, coachSection2, hrSection, hrSection2);
                                        break;
                                }
                            }
                            break;
                        case 100000001: // Public if account is a public school
                            enableField('new_contacttypepublic');
                            disableField('new_contacttypeprivate');
                            if (getAttributeObj('new_contacttypepublic').getValue() != null) {
                                switch (getAttributeObj('new_contacttypepublic').getValue()) {
                                    case 100000026: //Teacher
                                        //If a teacher display teacher section, hide not relevant
                                        sectionsHide(studentSection, studentSection2, studentSection3, coachSection, coachSection2, hrSection, hrSection2);
                                        sectionShow(teacherSection);
                                        sectionShow(teacherSection2);
                                        enableField('new_subjectstaught');
                                        subjectsTaught();
                                        break;
                                    case 100000022: //Student
                                        //If the contact type is a student, display the student section hide not relevant
                                        sectionsHide(teacherSection, teacherSection2, coachSection, coachSection2, hrSection, hrSection2);
                                        sectionShow(studentSection);
                                        sectionShow(studentSection2);
                                        sectionShow(studentSection3);
                                        break;
                                    case 100000004: // Coach
                                        // if a coach, show coach section, hide not relevant
                                        sectionsHide(studentSection, studentSection2, studentSection3, teacherSection, teacherSection2, hrSection, hrSection2);
                                        sectionShow(coachSection);
                                        sectionShow(coachSection2);
                                        break;
                                    default:
                                        sectionsHide(studentSection, studentSection2, studentSection3, teacherSection, teacherSection2, coachSection, coachSection2, hrSection, hrSection2);
                                        break;
                                }
                            }
                            break;
                        default:
                            disableField('new_contacttypepublic');
                            disableField('new_contacttypeprivate');
                            break;
                    } // Switch schoolType BRACKET
                } // ELSE BRACKET
            }, // SUCCESS BRACKET
            error: function (XmlHttpRequest, textStatus, errorThrown) { alert('OData Select Failed: ' + odataSelect); }
        }); // END OF AJAX
} // END OF getAccountDetails
