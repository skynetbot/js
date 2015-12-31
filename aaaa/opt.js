/*
 * The following script interacts with the opportunity form, specifically with
 * the Financial Records Subgrid
 */
function getAtbObj(attribute) {
    return Xrm.Page.getAttribute(attribute);
}
function setAtbVal(attribute, value) {
    Xrm.Page.data.entity.attributes.get(attribute).setValue(value);
}
function hideCreateButton() {
    var hideBtn = 'no',
        i    = 0,
        n    = 0;
    var userRoleId = Xrm.Page.context.getUserRoles();
    // "99999999-9999-9999-9999-999999999999" admin roleid
    // "00000000-0000-0000-0000-000000000000" bu roleid
    // "11111111-1111-1111-1111-111111111111" bu Government roleid
    // "22222222-2222-2222-2222-222222222222" bu SBU roleid
    // "33333333-3333-3333-3333-333333333333" bu Strategic/Planning roleid
    var roleIds = [
        "00000000-0000-0000-0000-000000000000",
        "11111111-1111-1111-1111-111111111111",
        "22222222-2222-2222-2222-222222222222",
        "33333333-3333-3333-3333-333333333333"
    ];
    console.log(roleIds);
    for (i = 0; i < userRoleId.length; i++) {
        for (n = 0; n < roleIds.length; n++) {
            if (userRoleId[i] == roleIds[n]) {
                console.log(userRoleId[i]);
                hideBtn = 'yes';
            }
        }
    }
    console.log(userRoleId[0]);
    console.log(userRoleId);
    console.log(hideBtn);
    if (hideBtn == 'yes') {
        Xrm.Page.ui.setFormNotification('To create an Opportunity use the "Create OE Opportunity" button in the Platform Family form.', 'INFO', '9');
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = '/WebResources/crm_opportunity.css';
        link.media = 'all';
        head.appendChild(link);
    }
}
/*
 * This function is called at the onLoad event in the Opportunity entity.
 * It executes after the financialrecords subgrid records have loaded
 * then calculates it's values and updates the values totals at the proposal value section
 */
function getTotalProposal() {
    // The financialrecords is a call of another entity into the opportunity form
    // and asynchronous callback is made to load data into the subgrid
    // settimeout recalls this function in the event that the financialrecords have not loaded yet
    var loopAgain = setTimeout(function () { getTotalProposal(); }, 5000);
    var recordsGrid = Xrm.Page.getControl('FinancialRecords');
    // if there is no subgrid yet, reload
    if (!recordsGrid) {
        loopAgain;
        //console.log('exit 1');
        return;
    }
    var subGrid = document.getElementById('FinancialRecords').control;
    var recordAmount = subGrid.GetRecordsFromInnerGrid().length;
    // if the amount of records is 0 then there is no data so reload the script again
    if (recordAmount == 0) {
        loopAgain;
        //console.log('exit 2');
        return;
    }
    // Initialize variables
    var totalProposalSum          = 0,
        totalCurrentWonValueSum   = 0,
        totalQtrSum               = 0,
        totalRemainingWonValueSum = 0,
        totalOpenStatusRecords    = 0,
        proposalCellValue,
        qtrCellValue,
        currentWonCellValue,
        remainingCellValue,
        recordStatusCellValue,
        proposalNumber,
        qtrNumber,
        currentWonNumber,
        remainingOpenNumber;
    // Respective column index number in Financial SubGrid
    // WARNING This value is dependant on the order of the columns in the FinancialRecords sub grid
    // for example if you would like to know what is the index number of the Proposal Value column
    // in the FinancialRecords sub grid you count the # of columns from left to right, the position
    // of the column should be the index number in the following values.
    var proposalValueIndex      = 5;
    var qtrValueIndex           = 6;
    var currentWonValueIndex    = 7;
    var remainingOpenValueIndex = 8;
    var recordStatusValueIndex  = 9;
    //console.log(recordAmount);
    // This loop runs through every record in the financialrecords subgrid and finds the value of
    // the respective fields, converts it to a numeric value and then adds it to a total.
    for (var rowNo = 0; rowNo < recordAmount; rowNo++) {
        // text values from the respective columns
        proposalCellValue         = subGrid.GetRecordsFromInnerGrid()[rowNo][3].cells[proposalValueIndex].outerText;
        qtrCellValue              = subGrid.GetRecordsFromInnerGrid()[rowNo][3].cells[qtrValueIndex].outerText;
        currentWonCellValue       = subGrid.GetRecordsFromInnerGrid()[rowNo][3].cells[currentWonValueIndex].outerText;
        remainingCellValue        = subGrid.GetRecordsFromInnerGrid()[rowNo][3].cells[remainingOpenValueIndex].outerText;
        recordStatusCellValue     = subGrid.GetRecordsFromInnerGrid()[rowNo][3].cells[recordStatusValueIndex].outerText;
        // number conversion of the text values
        proposalNumber            = Number(proposalCellValue.replace(/[^0-9\.]+/g, ""));
        qtrNumber                 = Number(qtrCellValue.replace(/[^0-9\.]+/g, ""));
        currentWonNumber          = Number(currentWonCellValue.replace(/[^0-9\.]+/g, ""));
        remainingOpenNumber       = Number(remainingCellValue.replace(/[^0-9\.]+/g, ""));
        // variables containing the total amounts
        totalProposalSum          += proposalNumber;
        totalQtrSum               += qtrNumber;
        totalCurrentWonValueSum   += currentWonNumber;
        totalRemainingWonValueSum += remainingOpenNumber;
        // count the amount of open financial records
        if (recordStatusCellValue == 'Open') {
            ++totalOpenStatusRecords;
        }
    }
    // console.log(totalOpenStatusRecords);
    // if there are financial records open display a notification
    if (totalOpenStatusRecords != 0) {
        if (getAtbObj('statecode').getValue() != 0) {
            Xrm.Page.ui.clearFormNotification('1');
            if (totalOpenStatusRecords == 1) {
                Xrm.Page.ui.setFormNotification('There is ' + totalOpenStatusRecords + ' financial record with Open status. Please click on the "Reopen Opportunity" button.', 'ERROR', '1');
            }
            Xrm.Page.ui.setFormNotification('There are ' + totalOpenStatusRecords + ' financial records with Open status. Please click on the "Reopen Opportunity" button.', 'ERROR', '1');
            Xrm.Utility.alertDialog('This opportunity was closed with open financial records. Please click on the "Reopen Opportunity" button.');
            // setAtbVal('statecode', 0);
            getAtbObj('statecode').setSubmitMode('always');
            // Xrm.Page.data.save();
            // Xrm.Page.data.refresh();
        } else {
            Xrm.Page.ui.clearFormNotification('1');
            if (totalOpenStatusRecords == 1) {
                Xrm.Page.ui.setFormNotification('There is ' + totalOpenStatusRecords + ' financial record with Open status. Please click on the "Reopen Opportunity" button.', 'WARNING', '1');
            }
            Xrm.Page.ui.setFormNotification('There are ' + totalOpenStatusRecords + ' financial records with Open status.', 'WARNING', '1');
            var head   = document.getElementsByTagName('head')[0];
            var link   = document.createElement('link');
            link.rel   = 'stylesheet';
            link.type  = 'text/css';
            link.href  = '/WebResources/crm_opportunity.css';
            link.media = 'all';
            head.appendChild(link);
            console.log(head);
            console.log(link);
            console.log(head.appendChild(link));
            console.log(document.getElementsByTagName('head'));
        }
    }
    if (totalOpenStatusRecords == 0) {
        Xrm.Page.ui.clearFormNotification('1');
    }
    // console.log(getAtbObj('statecode').getValue());
    // sets the values to the respective attributes
    setAtbVal('crm_totalproposalvalue', totalProposalSum);
    setAtbVal('crm_currentqtrvalue', totalQtrSum);
    setAtbVal('crm_contractvalue', totalCurrentWonValueSum);
    setAtbVal('crm_remainingopenvalue', totalRemainingWonValueSum);
    // change submit mode of read only fields to allow the data to save
    getAtbObj('crm_totalproposalvalue').setSubmitMode('always');
    getAtbObj('crm_currentqtrvalue').setSubmitMode('always');
    getAtbObj('crm_contractvalue').setSubmitMode('always');
    getAtbObj('crm_remainingopenvalue').setSubmitMode('always');
    Xrm.Page.data.entity.save();
    //console.log('saved the form');
    //console.log('exit last');
    clearTimeout(loopAgain);
    loopAgain = 0;
}
/*
var crm = crm || {};
crm.HideCreateOEOpportunityButton = function () {
    var head = document.getElementsByTagName('head')[0]; 
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = '/WebResources/crm_opportunity.css';
    link.media = 'all';
    head.appendChild(link);
    console.log(link);
    console.log(head);
}
*/
    /********************************************************************************************
     ********************************************************************************************
     * FROM HERE: THIS WAS THE PREVIOUS CODE NOW AS COMMENT
     ********************************************************************************************
     ********************************************************************************************
    //if (!document.getElementById('FinancialRecords')) {
    //    loopAgain;
    //    console.log('exit 1');
    //    return;
    //}
    //if (document.getElementById('FinancialRecords') == null) {
    //    loopAgain;
    //    console.log('exit 2');
    //    return;
    //}
    //if (document.getElementById('FinancialRecords').readyState != 'complete') {
    //    loopAgain;
    //    console.log('exit 3');
    //    return;
    //}
    //if (!document.getElementById("FinancialRecords").control) {
    //    loopAgain;
    //    console.log('exit 4');
    //    return;
    //}
    //if (document.getElementById('FinancialRecords')) {
    //    var grid = document.getElementById("FinancialRecords").control;
    //    console.log(grid);
    //    var recordAmount = grid.GetRecordsFromInnerGrid().length;
    //    console.log(recordAmount);
    //    console.log('before loop');
    //    console.log(recordAmount);
    //    if (recordAmount > 0) {
    //        console.log(recordAmount + 'amount probe > 0')
    //        var totalQtrSum = 0;
    //        var totalProposalSum = 0;
    //        var totalRemainingWonValueSum = 0;
    //        var totalCurrentWonValueSum = 0;
    //        var proposalCellValue;
    //        var qtrCellValue;
    //        var contractValue,
    //            remainingOpenValue;
    //        // Counting left to right, add the index names of the row values to the variables
    //        var proposalValueIndex = 4;
    //        var qtrValueIndex = 5;
    //        var currentWonValueIndex = 6;
    //        var remainingOpenValueIndex = 7;
    //        // loop through grid rows
    //        for (var rowNo = 0; rowNo < recordAmount; rowNo++) {
    //            // get value from each row of the proposal value cells and add it to counter (if empty they are == 0)
    //            var proposalCellValue = grid.GetRecordsFromInnerGrid()[rowNo][3].cells[proposalValueIndex].outerText;
    //            var proposalNumber = Number(proposalCellValue.replace(/[^0-9\.]+/g, ""));
    //            totalProposalSum += proposalNumber;
    //            // get value from each row of the qtr value cells and add it to counter (if empty they are == 0)
    //            var qtrCellValue = grid.GetRecordsFromInnerGrid()[rowNo][3].cells[qtrValueIndex].outerText;
    //            var qtrNumber = Number(qtrCellValue.replace(/[^0-9\.]+/g, ""));
    //            totalQtrSum += qtrNumber;
    //            // get value from each row of the remaining open value grid and add it to counter
    //            var remainingCellValue = grid.GetRecordsFromInnerGrid()[rowNo][3].cells[remainingOpenValueIndex].outerText;
    //            var remainingOpenNumber = Number(remainingCellValue.replace(/[^0-9\.]+/g, ""));
    //            totalRemainingWonValueSum += remainingOpenNumber;
    //            // get value from each row of the current won value grid and add it to counter
    //            var currentWonCellValue = grid.GetRecordsFromInnerGrid()[rowNo][3].cells[currentWonValueIndex].outerText;
    //            var currentWonNumber = Number(currentWonCellValue.replace(/[^0-9\.]+/g, ""));
    //            totalCurrentWonValueSum += currentWonNumber;
    //        }
    //        clearTimeout(loopAgain);
    //        console.log('after loop');
    //        // add values to Total Textboxes
    //        setAtbVal('crm_totalproposalvalue', totalProposalSum);
    //        setAtbVal('crm_currentqtrvalue', totalQtrSum);
    //        setAtbVal('crm_contractvalue', totalCurrentWonValueSum);
    //        setAtbVal('crm_remainingopenvalue', totalRemainingWonValueSum);
    //        console.log('set values');
    //    }
    //    // change submit mode
    //    getAtbObj('crm_totalproposalvalue').setSubmitMode('always');
    //    getAtbObj('crm_currentqtrvalue').setSubmitMode('always');
    //    getAtbObj('crm_contractvalue').setSubmitMode('always');
    //    getAtbObj('crm_remainingopenvalue').setSubmitMode('always');
    //    console.log('changed submit mode');
    //    Xrm.Page.data.entity.save();
    //    console.log('exit 5');
    //    return;
    //}
    //function hideBtn() {
        //document.getElementById("ALL_Open_Opportunities_PlatformFamily_addImageButtonImage").style.display='none';
    //}
     ********************************************************************************************
     ********************************************************************************************
     * END OF PREVIOUS CODE
     ********************************************************************************************
     ********************************************************************************************/
    /********************************************************************************************
     ********************************************************************************************
     * FROM HERE: ORIGINAL CODE
     ********************************************************************************************
     ********************************************************************************************
     // This method calculate 2 values from the Financial Records sub grid and put the values in their respective textboxes.
function getTotalProposal() {  

    if (document.getElementById("FinancialRecords")) {
        var grid = document.getElementById("FinancialRecords").control;
        var totalQtrSum = 0;
        var totalProposalSum = 0;
        var proposalCellValue;
        var qtrCellValue;

        // Counting left to right, add the index names of the row values to the variables
        var proposalValueIndex = 4;
        var qtrValueIndex = 5;
        
        // loop through grid rows
        for (var rowNo = 0; rowNo < grid.GetRecordsFromInnerGrid().length; rowNo++) {

            // get value from each row of the proposal value cells and add it to counter (if empty they are == 0)
            var proposalCellValue = grid.GetRecordsFromInnerGrid()[rowNo][3].cells[proposalValueIndex].outerText;
            var proposalNumber = Number(proposalCellValue.replace(/[^0-9\.]+/g, ""));
            totalProposalSum = totalProposalSum + proposalNumber;

            // get value from each row of the qtr value cells and add it to counter (if empty they are == 0)
            var qtrCellValue = grid.GetRecordsFromInnerGrid()[rowNo][3].cells[qtrValueIndex].outerText;
            var qtrNumber = Number(qtrCellValue.replace(/[^0-9\.]+/g, ""));
            totalQtrSum = totalQtrSum + qtrNumber;
        }

        // add values to Total Textboxes    
        Xrm.Page.getAttribute("crm_totalproposalvalue").setValue(totalProposalSum);
        Xrm.Page.getAttribute("crm_currentqtrvalue").setValue(totalQtrSum);
    }
    else {
        // calls method every 3 secs (to allow the grid to load in the screen when the calculation happens)
        setTimeout("getTotalProposal();", 3000);
    }
}
     ********************************************************************************************
     ********************************************************************************************
     * END OF ORIGINAL CODE
     ********************************************************************************************
     ********************************************************************************************/
