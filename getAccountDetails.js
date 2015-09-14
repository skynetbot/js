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
                var resultContact = data.d;
                console.log(data.d);
                alert(Xrm.Page.context.getQueryStringParameters()[0]);
                alert("Milton Reyes this: " + data.d.new_SubType.Value);
                //alert(resultContact[0]);
                //alert(ownerid);
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
