function saveAttributeValue(attribute) {
    Xrm.Page.data.entity.attributes.get(attribute).setSubmitMode('always');
}
function setAttributeValue(attribute, value) {
    Xrm.Page.data.entity.attributes.get(attribute).setValue(value);
}
function getAttributeObj(attribute) {
    /*
     * This function gets the atribute object determined by the argument
     */
    return Xrm.Page.getAttribute(attribute);
}
function valuationFormOnLoad() {
    /*
     * Calling the account JSON object on load
     */
    jsonObjectEnrollments(function (data, textStatus, XmlHttpRequest) {
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
        }
    }); // endOf jsonObjectAccount
}
function jsonObjectEnrollments(callback) {
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
        odataSetName = "new_enrollmentadoptionSet"; // Entity in OData Endpoint Settings -> Customization -> Developer
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
