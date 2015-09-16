/* Parts of this script are documented in Microsoft Dynamics CRM 2015 SDK:
   {$SDK_Directory}\SampleCode\JS\RESTEndpoint\RESTJQueryContactEditor\
   RESTJQueryContactEditor\Scripts\RESTJQueryContactEditor.js */
function getAccountDetails() { 
    /* This function will get the related account value from the contact form
       and with this value creates a database request to pull a specific value
       from the account entity (in this case if the account is from a 
       public/private/else) then with the requested value from the account
       displays certain fields and sets it's required permission in the current
       contact form */
    var accountObject = Xrm.Page.getAttribute("parentcustomerid").getValue();
    //if account field is not empty make request
    if ((accountObject != null)) {
        var accountObjectId = accountObject[0].id; //get account id
        var clientUrl = Xrm.Page.context.getClientUrl(); //get CRM URL
        var ODATA_ENDPOINT = "/XRMServices/2011/OrganizationData.svc"; //Xrm OData end-point
        var odataSetName = "AccountSet"; //This is found when exporting 
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
                    $('#new_contacttypeprivate_c').parent().show(); //show <tr> field with label/input
                    Xrm.Page.ui.controls.get("new_contacttypeprivate").setDisabled(false);
                    Xrm.Page.ui.controls.get("new_contacttypeprivate").setRequiredLevel("required"); //this field is a must
                    $('#new_contacttypepublic_c').parent().hide(); //hide public options
                    Xrm.Page.ui.controls.get("new_contacttypepublic").setRequiredLevel("none");
                    Xrm.Page.ui.controls.get("new_contacttypepublic").setDisabled(true);
                } else if (obj.new_SubType.Value == 100000001) { // Public if account is a public school
                    $('#new_contacttypepublic_c').parent().show(); //display <tr> field with lable/input
                    Xrm.Page.ui.controls.get("new_contacttypepublic").setDisabled(false);
                    Xrm.Page.ui.controls.get("new_contacttypepublic").setRequiredLevel("required"); //this field is a must
                    $('#new_contacttypeprivate_c').parent().hide(); //hide private type fields
                    Xrm.Page.ui.controls.get("new_contacttypeprivate").setRequiredLevel("none");
                    Xrm.Page.ui.controls.get("new_contacttypeprivate").setDisabled(true);
                } else { //if account type is not defined hide both private and public fields
                    $('#new_contacttypepublic_c').parent().hide();
                    Xrm.Page.ui.controls.get("new_contacttypepublic").setRequiredLevel("none");
                    Xrm.Page.ui.controls.get("new_contacttypepublic").setDisabled(true);
                    $('#new_contacttypeprivate_c').parent().hide();
                    Xrm.Page.ui.controls.get("new_contacttypeprivate").setRequiredLevel("none");
                    Xrm.Page.ui.controls.get("new_contacttypeprivate").setDisabled(true);
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
