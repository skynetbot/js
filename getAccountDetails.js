function getAccountDetails() {
    var accountObject = Xrm.Page.getAttribute("parentcustomerid").getValue();
    if ((accountObject != null)) {
        var accountObjectId = accountObject[0].id;
        var clientUrl = Xrm.Page.context.getClientUrl();
        var ODATA_ENDPOINT = "/XRMServices/2011/OrganizationData.svc"; //Xrm OData end-point
        var odataSetName = "AccountSet";
        odataSetName = encodeURIComponent(odataSetName);
        accountObjectId = encodeURIComponent(accountObjectId);
        var odataSelect = clientUrl + ODATA_ENDPOINT + "/" + odataSetName + "(guid'" + accountObjectId + "')";
        
        $.ajax({
            type: "GET",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            url: odataSelect,
            beforeSend: function (XMLHttpRequest) { XMLHttpRequest.setRequestHeader("Accept", "application/json"); },
            success: function (data, textStatus, XmlHttpRequest) {
                var obj = JSON.parse(XmlHttpRequest.responseText).d;
                if (obj.new_SubType.Value == 100000000) { // Private
                    $('#new_contacttypeprivate_c').parent().show();
                    Xrm.Page.ui.controls.get("new_contacttypeprivate").setDisabled(false);
                    Xrm.Page.ui.controls.get("new_contacttypeprivate").setRequiredLevel("required");
                    $('#new_contacttypepublic_c').parent().hide();
                    Xrm.Page.ui.controls.get("new_contacttypepublic").setRequiredLevel("none");
                    Xrm.Page.ui.controls.get("new_contacttypepublic").setDisabled(true);
                } else if (obj.new_SubType.Value == 100000001) { // Public
                    $('#new_contacttypepublic_c').parent().show();
                    Xrm.Page.ui.controls.get("new_contacttypepublic").setDisabled(false);
                    Xrm.Page.ui.controls.get("new_contacttypepublic").setRequiredLevel("required");
                    $('#new_contacttypeprivate_c').parent().hide();
                    Xrm.Page.ui.controls.get("new_contacttypeprivate").setRequiredLevel("none");
                    Xrm.Page.ui.controls.get("new_contacttypeprivate").setDisabled(true);
                } else {
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
