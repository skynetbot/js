function returnArrayTest() {
    jsonObjectAccount(function (data, textStatus, XmlHttpRequest) { console.log(data.d.new_SubType.Value); });
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
        odataSetName = "AccountSet"; //This is found when exporting
        // Object Array for the JSON Call
        // objArray = new Array(),
        // jsonObj;
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
    // console.log(typeof jsonObj);
    $.ajax({
        type: "GET",
        // HTTP GET request
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        url: odataSelect,
        beforeSend: function (XMLHttpRequest) { XMLHttpRequest.setRequestHeader("Accept", "application/json"); },
        success: callback,
            // jsonObj = data.d;
            // objArray.push(data.d);
            // console.log(data.d);
            // console.log(objArray);
            // console.log(objArray[0]);
            // console.log(objArray[0].new_SubType.Value);
            // var obj = JSON.parse(XmlHttpRequest.responseText).d;
        // }, // SUCCESS BRACKET
        error: function (XmlHttpRequest, textStatus, errorThrown) { alert('OData Select Failed: ' + odataSelect); }
    }); // END OF AJAX
    // do {
    //     if (jsonObj != 'null') {
    //         console.log(jsonObj);
    //         break;
    //     }
    // } while (jsonObj === 'object');
    // console.log(typeof jsonObj);
    // console.log(jsonObj.responseText);
    // setTimeout(console.log(jsonObj),3000);
    // setTimeout(console.log(objArray),3000);
    // console.log(objArray.new_SubType.Value);
    // console.log(objArray[0].new_SubType.Value);
} // END OF jsonObjectAccount