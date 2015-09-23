var clientUrl = Xrm.Page.context.getClientUrl();
var odataSetName = "AccountSet";
var ODATA_ENDPOINT = "/XRMServices/2011/OrganizationData.svc";
var accountObjectId = Xrm.Page.getAttribute('parentcustomerid').getValue()[0].id;
function retrieveRecord(successCallback, errorCallback) {
    if (!accountObjectId) {
        alert("record id is required.");
        return;
    } else {
        accountObjectId = encodeURIComponent(accountObjectId);
    }
    if (!odataSetName) {
        alert("odataSetName is required.");
        return;
    } else {
        odataSetName = encodeURIComponent(odataSetName);
    }
    $.ajax({
        type: "GET",
        contentType: "application/json; charset=utf-8",
        datatype: "json",
        url: clientUrl + ODATA_ENDPOINT + "/" + odataSetName + "(guid'" + accountObjectId + "')",
        beforeSend: function (XMLHttpRequest) {
            XMLHttpRequest.setRequestHeader("Accept", "application/json");
        },
        success: function (data, textStatus, XmlHttpRequest) {
            if (successCallback) {
                successCallback(data.d, textStatus, XmlHttpRequest);
            }
        },
        error: function (XmlHttpRequest, textStatus, errorThrown) {
            if (errorCallback)
                errorCallback(XmlHttpRequest, textStatus, errorThrown);
            else
                errorHandler(XmlHttpRequest, textStatus, errorThrown);
        }
    });
}
function getAccountObject() {
    retrieveRecord(console.log(function (data) { return data.d }),
                   function (XmlHttpRequest, textStatus, errorThrown) { alert("error"); });
}