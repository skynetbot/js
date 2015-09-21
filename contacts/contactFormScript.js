/* Refer to Microsoft Dynamics CRM 2015 SDK:
   {$SDK_Directory}\SampleCode\JS\RESTEndpoint\RESTJQueryContactEditor\
   RESTJQueryContactEditor\Scripts\RESTJQueryContactEditor.js */
function getAccountDetails() { 
    /* This function will get the related account value from the contact form
       and with this value creates a database request to pull a specific value
       from the account entity (in this case if the account is from a 
       public/private/else) then with the requested value from the account
       displays certain fields and sets it's required permission in the current
       contact form */
    var accountObject = getAttributeObject('parentcustomerid').getValue(); //replaced accountObject with getAttributeValue()
    //console.log(accountObject);
    //if account field is not empty make request
    if ((accountObject != null)) {
        var accountObjectId = accountObject[0].id, //get account id
            clientUrl = Xrm.Page.context.getClientUrl(), //get CRM URL
            ODATA_ENDPOINT = "/XRMServices/2011/OrganizationData.svc", //Xrm OData end-point
            odataSetName = "AccountSet"; //This is found when exporting 
        //account entity XML
        odataSetName = encodeURIComponent(odataSetName); //prevent sql injection
        accountObjectId = encodeURIComponent(accountObjectId); //prevent sql injection
        var odataSelect = clientUrl + ODATA_ENDPOINT + "/" + odataSetName + "(guid'" + accountObjectId + "')";
        // odataSelect would be the select query statement
        $.ajax({
            type: "GET",
            //HTTP GET request
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            url: odataSelect,
            beforeSend: function (XMLHttpRequest) { XMLHttpRequest.setRequestHeader("Accept", "application/json"); },
            success: function (data, textStatus, XmlHttpRequest) {
                //when request success, get the account object
                var obj = JSON.parse(XmlHttpRequest.responseText).d;
                //on account object account school type value hide or display related fields
                if (obj.new_SubType.Value == 100000000) { // Private if account is a private school
                    enableField('new_contacttypeprivate');
                    disableField('new_contacttypepublic');
                    // console.log(getAttributeValue('new_contacttypeprivate'));
                    // var testing = .fireOnChange();
                    // alert(testing);
                } else if (obj.new_SubType.Value == 100000001) { // Public if account is a public school
                    enableField('new_contacttypepublic');
                    disableField('new_contacttypeprivate');
                    getAttributeObject('new_contacttypepublic').addOnChange(ohlalah);
                    //console.log(getAttributeValue('new_contacttypepublic'));
                } else { //if account type is not defined hide both private and public fields
                    disableField('new_contacttypepublic');
                    disableField('new_contacttypeprivate');
                }
                
                
                
                
                //console.log(Xrm.Page.context.getQueryStringParameters());
                //alert(resultContact.new_SubType.Value);
                //alert("Milton Reyes this: " + data.d.new_SubType.Value);
                //var mcCity1 = resultContact.Address1_City;
                //replace the fields with the fields on your entity
                //Xrm.Page.getAttribute("").setValue(mcCity1);
                //Xrm.Page.getAttribute("").setValue(resultContact.new_subtype);
                //Xrm.Page.getAttribute("").setValue(resultContact.Address1_Telephone1);
            },
            error: function (XmlHttpRequest, textStatus, errorThrown) { alert('OData Select Failed: ' + odataSelect); }
        });
    }
}
function ohlalah() {
    alert("on change!");
}
function contactTypeOnChange(attribute) {
    switch (getAttributeObject(attribute).getValue()) {
        case 100000000:
            alert("on change!");
            break;
        default:
            sectionHide(getSection('general', 'teacher_section'));
            break;
    }
}
function getAttributeObject(attribute) { 
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
function sectionHide() {
    for (var i = 0; i < arguments.length; i++)
        arguments[i].setVisible(false);}
function changeContactNumber() { // Previously Onload() now renamed to changeContactNumber. Copied to maintian backwards compatibility.
    // This function is probably useless since the field described here doesn't have any values
    // in the database.
    var a=Xrm.Page.getAttribute("new_contactnumber").getValue();
    if(a!=null) {
        a=a.replace(",","");
        a=a.replace(",","");
    }
    Xrm.Page.getAttribute("new_codigocontacto").setValue(a);
}

