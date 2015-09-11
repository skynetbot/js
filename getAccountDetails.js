function getAccountDetails() {
    var lookUpObjectValue = Xrm.Page.getAttribute("parentcustomerid").getValue();
    if ((lookUpObjectValue != null)) {
        var lookUpTextValue = lookUpObjectValue[0].name;
        var lookUpId = lookUpObjectValue[0].id;
        //alert(lookUpId);
        //var serverUrl = Xrm.Page.context.getServerUrl();
        var ODATA_ENDPOINT = "/XRMServices/2011/OrganizationData.svc/"; //Xrm OData end-point
        var odataSetName = "AccountSet";
        var odataSelect = "https://crmsantillanapr.crm.dynamics.com" + ODATA_ENDPOINT + odataSetName + "(guid'" + lookUpId + "')";
        //alert(odataSelect);
        
        $.ajax({
            type: "GET",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            url: odataSelect,
            beforeSend: function (XMLHttpRequest) { XMLHttpRequest.setRequestHeader("Accept", "application/json"); },
            success: function (data, textStatus, XmlHttpRequest) {
                var resultContact = data.d;
                //alert(resultContact.AccountNumber);
                //var mcCity1 = resultContact.Address1_City;
                //replace the fields with the fields on your entity
                //Xrm.Page.getAttribute("").setValue(mcCity1);
                //Xrm.Page.getAttribute("").setValue(resultContact.new_subtype);
                //Xrm.Page.getAttribute("").setValue(result_contact.Address1_Telephone1);
                alert(resultContact.new_subtype);
            },
            error: function (XmlHttpRequest, textStatus, errorThrown) { alert('OData Select Failed: ' + odataSelect); }
        });
    }
}
