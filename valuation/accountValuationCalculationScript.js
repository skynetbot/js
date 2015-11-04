/*
 * Previous function used in valuation form.
 * I'm keeping it here for copy/paste of some elements until
 * it is no longer needed.
 */
function valuationtotals() {
    var costoporlicencia = 68.75;
    var periodo = Xrm.Page.getAttribute("new_cambioperiodo").getValue();
    var accountId = Xrm.Page.data.entity.getId();
    var fetchXml = "<fetch mapping='logical'>" + "<entity name='new_enrollmentadoptions'>" +
        "<all-attributes/>" + "<filter>" + "<condition attribute='new_accountname' operator='eq' value='" +
        accountId + "' />" + "<condition attribute='new_project' operator='eq' value='" + periodo +
        "' />" + "</filter>" + "</entity>" + "</fetch>";
    var retrievedAccount = XrmServiceToolkit.Soap.Fetch(fetchXml);
    Xrm.Page.getAttribute("new_new_totalstdesp").setValue(0);
    var TotalEsp = 0;
    var TotalMat = 0;
    var TotalCie = 0;
    var TotalSoc = 0;
    var TotalIng = 0;
    var TotalMatIng = 0;
    var TotalCieIng = 0;
    var TotalSocIng = 0;
    var TotalStudentsLicense = 0;
    var TotalSantillanaValuation = 0;
    var TotalPotentialValuation = 0;
    var TotalObjectiveValuation = 0;
    var TotalMetaValuation = 0;
    var estudiantes = 0;
    var TotalChangeAmount = 0;
    var TotalMantenianceAmount = 0;
    var TotalNotOfferedAmount = 0;
    var TotalMas3Amount = 0;
    var TotalMenos3Amount = 0;
    var EdSantillana = 0;
    var EdNorma = 0;
    var EdPanamericana = 0;
    var EdSM = 0;
    var EdGlencoe = 0;
    var EdHarBrace = 0;
    var EdHarMifflin = 0;
    var EdMcgrawHill = 0;
    var EdOther = 0;
    var EdPearson = 0;
    var EdPlazaMayor = 0;
    var EdPubEducativas = 0;
    for (var i in retrievedAccount) {
        if (retrievedAccount[i].attributes.new_esp) { TotalEsp = TotalEsp + retrievedAccount[i].attributes.new_esp.value; }
        if (retrievedAccount[i].attributes.new_mat) { TotalMat = TotalMat + retrievedAccount[i].attributes.new_mat.value; }
        if (retrievedAccount[i].attributes.new_cie) { TotalCie = TotalCie + retrievedAccount[i].attributes.new_cie.value; }
        if (retrievedAccount[i].attributes.new_soc) { TotalSoc = TotalSoc + retrievedAccount[i].attributes.new_soc.value; }
        if (retrievedAccount[i].attributes.new_eng) { TotalIng = TotalIng + retrievedAccount[i].attributes.new_eng.value; }
        if (retrievedAccount[i].attributes.new_mating) { TotalMatIng = TotalMatIng + retrievedAccount[i].attributes.new_mating.value; }
        if (retrievedAccount[i].attributes.new_scie) { TotalCieIng = TotalCieIng + retrievedAccount[i].attributes.new_scie.value; }
        if (retrievedAccount[i].attributes.new_socing) { TotalSocIng = TotalSocIng + retrievedAccount[i].attributes.new_socing.value; }
        if (retrievedAccount[i].attributes.new_totalstudents) { TotalStudentsLicense = TotalStudentsLicense + retrievedAccount[i].attributes.new_totalstudents.value; }
        if (retrievedAccount[i].attributes.new_valuations) { TotalSantillanaValuation = TotalSantillanaValuation + retrievedAccount[i].attributes.new_valuations.value; }
        if (retrievedAccount[i].attributes.new_valuationp) { TotalPotentialValuation = TotalPotentialValuation + retrievedAccount[i].attributes.new_valuationp.value; }
        if (retrievedAccount[i].attributes.new_valuationo) { TotalObjectiveValuation = TotalObjectiveValuation + retrievedAccount[i].attributes.new_valuationo.value; }
        if (retrievedAccount[i].attributes.new_valuationm) { TotalMetaValuation = TotalMetaValuation + retrievedAccount[i].attributes.new_valuationm.value; }
        if (retrievedAccount[i].attributes.new_students) { estudiantes = estudiantes + retrievedAccount[i].attributes.new_students.value; }
        if (retrievedAccount[i].attributes.new_espanolclassification) {
            if (retrievedAccount[i].attributes.new_espanolclassification.value == 100000001) { TotalMas3Amount++; }
            if (retrievedAccount[i].attributes.new_espanolclassification.value == 100000002) { TotalMenos3Amount++; }
            if (retrievedAccount[i].attributes.new_espanolclassification.value == 100000003) { TotalNotOfferedAmount++; }
            if (retrievedAccount[i].attributes.new_espanolclassification.value == 100000004) { TotalChangeAmount++; }
            if (retrievedAccount[i].attributes.new_espanolclassification.value == 100000005) { TotalMantenianceAmount++; }
        }
        if (retrievedAccount[i].attributes.new_matematicasclassification) {
            if (retrievedAccount[i].attributes.new_matematicasclassification.value == 100000001) { TotalMas3Amount++; }
            if (retrievedAccount[i].attributes.new_matematicasclassification.value == 100000002) { TotalMenos3Amount++; }
            if (retrievedAccount[i].attributes.new_matematicasclassification.value == 100000003) { TotalNotOfferedAmount++; }
            if (retrievedAccount[i].attributes.new_matematicasclassification.value == 100000004) { TotalChangeAmount++; }
            if (retrievedAccount[i].attributes.new_matematicasclassification.value == 100000005) { TotalMantenianceAmount++; }
        }
        if (retrievedAccount[i].attributes.new_mathemathicsclassification) {
            if (retrievedAccount[i].attributes.new_mathemathicsclassification.value == 100000001) { TotalMas3Amount++; }
            if (retrievedAccount[i].attributes.new_mathemathicsclassification.value == 100000002) { TotalMenos3Amount++; }
            if (retrievedAccount[i].attributes.new_mathemathicsclassification.value == 100000003) { TotalNotOfferedAmount++; }
            if (retrievedAccount[i].attributes.new_mathemathicsclassification.value == 100000004) { TotalChangeAmount++; }
            if (retrievedAccount[i].attributes.new_mathemathicsclassification.value == 100000005) { TotalMantenianceAmount++; }
        }
        if (retrievedAccount[i].attributes.new_cienciasclassification) {
            if (retrievedAccount[i].attributes.new_cienciasclassification.value == 100000001) { TotalMas3Amount++; }
            if (retrievedAccount[i].attributes.new_cienciasclassification.value == 100000002) { TotalMenos3Amount++; }
            if (retrievedAccount[i].attributes.new_cienciasclassification.value == 100000003) { TotalNotOfferedAmount++; }
            if (retrievedAccount[i].attributes.new_cienciasclassification.value == 100000004) { TotalChangeAmount++; }
            if (retrievedAccount[i].attributes.new_cienciasclassification.value == 100000005) { TotalMantenianceAmount++; }
        }
        if (retrievedAccount[i].attributes.new_scienciesclassification) {
            if (retrievedAccount[i].attributes.new_scienciesclassification.value == 100000001) { TotalMas3Amount++; }
            if (retrievedAccount[i].attributes.new_scienciesclassification.value == 100000002) { TotalMenos3Amount++; }
            if (retrievedAccount[i].attributes.new_scienciesclassification.value == 100000003) { TotalNotOfferedAmount++; }
            if (retrievedAccount[i].attributes.new_scienciesclassification.value == 100000004) { TotalChangeAmount++; }
            if (retrievedAccount[i].attributes.new_scienciesclassification.value == 100000005) { TotalMantenianceAmount++; }
        }
        if (retrievedAccount[i].attributes.new_socialesclassification) {
            if (retrievedAccount[i].attributes.new_socialesclassification.value == 100000001) { TotalMas3Amount++; }
            if (retrievedAccount[i].attributes.new_socialesclassification.value == 100000002) { TotalMenos3Amount++; }
            if (retrievedAccount[i].attributes.new_socialesclassification.value == 100000003) { TotalNotOfferedAmount++; }
            if (retrievedAccount[i].attributes.new_socialesclassification.value == 100000004) { TotalChangeAmount++; }
            if (retrievedAccount[i].attributes.new_socialesclassification.value == 100000005) { TotalMantenianceAmount++; }
        }
        if (retrievedAccount[i].attributes.new_socialstudiesclassification) {
            if (retrievedAccount[i].attributes.new_socialstudiesclassification.value == 100000001) { TotalMas3Amount++; }
            if (retrievedAccount[i].attributes.new_socialstudiesclassification.value == 100000002) { TotalMenos3Amount++; }
            if (retrievedAccount[i].attributes.new_socialstudiesclassification.value == 100000003) { TotalNotOfferedAmount++; }
            if (retrievedAccount[i].attributes.new_socialstudiesclassification.value == 100000004) { TotalChangeAmount++; }
            if (retrievedAccount[i].attributes.new_socialstudiesclassification.value == 100000005) { TotalMantenianceAmount++; }
        }
        if (retrievedAccount[i].attributes.new_englishclassification) {
            if (retrievedAccount[i].attributes.new_englishclassification.value == 100000001) { TotalMas3Amount++; }
            if (retrievedAccount[i].attributes.new_englishclassification.value == 100000002) { TotalMenos3Amount++; }
            if (retrievedAccount[i].attributes.new_englishclassification.value == 100000003) { TotalNotOfferedAmount++; }
            if (retrievedAccount[i].attributes.new_englishclassification.value == 100000004) { TotalChangeAmount++; }
            if (retrievedAccount[i].attributes.new_englishclassification.value == 100000005) { TotalMantenianceAmount++; }
        }
        if (retrievedAccount[i].attributes.new_espedi) {
            if (retrievedAccount[i].attributes.new_espedi.value == 100000004) { EdSantillana++; }
            if (retrievedAccount[i].attributes.new_espedi.value == 100000008) { EdNorma++; }
            if (retrievedAccount[i].attributes.new_espedi.value == 100000032) { EdPanamericana++; }
            if (retrievedAccount[i].attributes.new_espedi.value == 100000001) { EdSM++; }
            if (retrievedAccount[i].attributes.new_espedi.value == 100000042) { EdGlencoe++; }
            if (retrievedAccount[i].attributes.new_espedi.value == 100000002) { EdHarBrace++; }
            if (retrievedAccount[i].attributes.new_espedi.value == 100000000) { EdHarMifflin++; }
            if (retrievedAccount[i].attributes.new_espedi.value == 100000003) { EdMcgrawHill++; }
            if (retrievedAccount[i].attributes.new_espedi.value == 100000005) { EdOther++; }
            if (retrievedAccount[i].attributes.new_espedi.value == 100000021) { EdPearson++; }
            if (retrievedAccount[i].attributes.new_espedi.value == 100000031) { EdPlazaMayor++; }
            if (retrievedAccount[i].attributes.new_espedi.value == 100000037) { EdPubEducativas++; }
        }
        if (retrievedAccount[i].attributes.new_matedi) {
            if (retrievedAccount[i].attributes.new_matedi.value == 100000004) { EdSantillana++; }
            if (retrievedAccount[i].attributes.new_matedi.value == 100000008) { EdNorma++; }
            if (retrievedAccount[i].attributes.new_matedi.value == 100000032) { EdPanamericana++; }
            if (retrievedAccount[i].attributes.new_matedi.value == 100000001) { EdSM++; }
            if (retrievedAccount[i].attributes.new_matedi.value == 100000042) { EdGlencoe++; }
            if (retrievedAccount[i].attributes.new_matedi.value == 100000002) { EdHarBrace++; }
            if (retrievedAccount[i].attributes.new_matedi.value == 100000000) { EdHarMifflin++; }
            if (retrievedAccount[i].attributes.new_matedi.value == 100000003) { EdMcgrawHill++; }
            if (retrievedAccount[i].attributes.new_matedi.value == 100000005) { EdOther++; }
            if (retrievedAccount[i].attributes.new_matedi.value == 100000021) { EdPearson++; }
            if (retrievedAccount[i].attributes.new_matedi.value == 100000031) { EdPlazaMayor++; }
            if (retrievedAccount[i].attributes.new_matedi.value == 100000037) { EdPubEducativas++; }
        }
        if (retrievedAccount[i].attributes.new_matingedi) {
            if (retrievedAccount[i].attributes.new_matingedi.value == 100000004) { EdSantillana++; }
            if (retrievedAccount[i].attributes.new_matingedi.value == 100000008) { EdNorma++; }
            if (retrievedAccount[i].attributes.new_matingedi.value == 100000032) { EdPanamericana++; }
            if (retrievedAccount[i].attributes.new_matingedi.value == 100000001) { EdSM++; }
            if (retrievedAccount[i].attributes.new_matingedi.value == 100000042) { EdGlencoe++; }
            if (retrievedAccount[i].attributes.new_matingedi.value == 100000002) { EdHarBrace++; }
            if (retrievedAccount[i].attributes.new_matingedi.value == 100000000) { EdHarMifflin++; }
            if (retrievedAccount[i].attributes.new_matingedi.value == 100000003) { EdMcgrawHill++; }
            if (retrievedAccount[i].attributes.new_matingedi.value == 100000005) { EdOther++; }
            if (retrievedAccount[i].attributes.new_matingedi.value == 100000021) { EdPearson++; }
            if (retrievedAccount[i].attributes.new_matingedi.value == 100000031) { EdPlazaMayor++; }
            if (retrievedAccount[i].attributes.new_matingedi.value == 100000037) { EdPubEducativas++; }
        }
        if (retrievedAccount[i].attributes.new_cieedi) {
            if (retrievedAccount[i].attributes.new_cieedi.value == 100000004) { EdSantillana++; }
            if (retrievedAccount[i].attributes.new_cieedi.value == 100000008) { EdNorma++; }
            if (retrievedAccount[i].attributes.new_cieedi.value == 100000032) { EdPanamericana++; }
            if (retrievedAccount[i].attributes.new_cieedi.value == 100000001) { EdSM++; }
            if (retrievedAccount[i].attributes.new_cieedi.value == 100000042) { EdGlencoe++; }
            if (retrievedAccount[i].attributes.new_cieedi.value == 100000002) { EdHarBrace++; }
            if (retrievedAccount[i].attributes.new_cieedi.value == 100000000) { EdHarMifflin++; }
            if (retrievedAccount[i].attributes.new_cieedi.value == 100000003) { EdMcgrawHill++; }
            if (retrievedAccount[i].attributes.new_cieedi.value == 100000005) { EdOther++; }
            if (retrievedAccount[i].attributes.new_cieedi.value == 100000021) { EdPearson++; }
            if (retrievedAccount[i].attributes.new_cieedi.value == 100000031) { EdPlazaMayor++; }
            if (retrievedAccount[i].attributes.new_cieedi.value == 100000037) { EdPubEducativas++; }
        }
        if (retrievedAccount[i].attributes.new_scieedi) {
            if (retrievedAccount[i].attributes.new_scieedi.value == 100000004) { EdSantillana++; }
            if (retrievedAccount[i].attributes.new_scieedi.value == 100000008) { EdNorma++; }
            if (retrievedAccount[i].attributes.new_scieedi.value == 100000032) { EdPanamericana++; }
            if (retrievedAccount[i].attributes.new_scieedi.value == 100000001) { EdSM++; }
            if (retrievedAccount[i].attributes.new_scieedi.value == 100000042) { EdGlencoe++; }
            if (retrievedAccount[i].attributes.new_scieedi.value == 100000002) { EdHarBrace++; }
            if (retrievedAccount[i].attributes.new_scieedi.value == 100000000) { EdHarMifflin++; }
            if (retrievedAccount[i].attributes.new_scieedi.value == 100000003) { EdMcgrawHill++; }
            if (retrievedAccount[i].attributes.new_scieedi.value == 100000005) { EdOther++; }
            if (retrievedAccount[i].attributes.new_scieedi.value == 100000021) { EdPearson++; }
            if (retrievedAccount[i].attributes.new_scieedi.value == 100000031) { EdPlazaMayor++; }
            if (retrievedAccount[i].attributes.new_scieedi.value == 100000037) { EdPubEducativas++; }
        }
        if (retrievedAccount[i].attributes.new_socedi) {
            if (retrievedAccount[i].attributes.new_socedi.value == 100000004) { EdSantillana++; }
            if (retrievedAccount[i].attributes.new_socedi.value == 100000008) { EdNorma++; }
            if (retrievedAccount[i].attributes.new_socedi.value == 100000032) { EdPanamericana++; }
            if (retrievedAccount[i].attributes.new_socedi.value == 100000001) { EdSM++; }
            if (retrievedAccount[i].attributes.new_socedi.value == 100000042) { EdGlencoe++; }
            if (retrievedAccount[i].attributes.new_socedi.value == 100000002) { EdHarBrace++; }
            if (retrievedAccount[i].attributes.new_socedi.value == 100000000) { EdHarMifflin++; }
            if (retrievedAccount[i].attributes.new_socedi.value == 100000003) { EdMcgrawHill++; }
            if (retrievedAccount[i].attributes.new_socedi.value == 100000005) { EdOther++; }
            if (retrievedAccount[i].attributes.new_socedi.value == 100000021) { EdPearson++; }
            if (retrievedAccount[i].attributes.new_socedi.value == 100000031) { EdPlazaMayor++; }
            if (retrievedAccount[i].attributes.new_socedi.value == 100000037) { EdPubEducativas++; }
        }
        if (retrievedAccount[i].attributes.new_socingedi) {
            if (retrievedAccount[i].attributes.new_socingedi.value == 100000004) { EdSantillana++; }
            if (retrievedAccount[i].attributes.new_socingedi.value == 100000008) { EdNorma++; }
            if (retrievedAccount[i].attributes.new_socingedi.value == 100000032) { EdPanamericana++; }
            if (retrievedAccount[i].attributes.new_socingedi.value == 100000001) { EdSM++; }
            if (retrievedAccount[i].attributes.new_socingedi.value == 100000042) { EdGlencoe++; }
            if (retrievedAccount[i].attributes.new_socingedi.value == 100000002) { EdHarBrace++; }
            if (retrievedAccount[i].attributes.new_socingedi.value == 100000000) { EdHarMifflin++; }
            if (retrievedAccount[i].attributes.new_socingedi.value == 100000003) { EdMcgrawHill++; }
            if (retrievedAccount[i].attributes.new_socingedi.value == 100000005) { EdOther++; }
            if (retrievedAccount[i].attributes.new_socingedi.value == 100000021) { EdPearson++; }
            if (retrievedAccount[i].attributes.new_socingedi.value == 100000031) { EdPlazaMayor++; }
            if (retrievedAccount[i].attributes.new_socingedi.value == 100000037) { EdPubEducativas++; }
        }
        if (retrievedAccount[i].attributes.new_engedi) {
            if (retrievedAccount[i].attributes.new_engedi.value == 100000004) { EdSantillana++; }
            if (retrievedAccount[i].attributes.new_engedi.value == 100000008) { EdNorma++; }
            if (retrievedAccount[i].attributes.new_engedi.value == 100000032) { EdPanamericana++; }
            if (retrievedAccount[i].attributes.new_engedi.value == 100000001) { EdSM++; }
            if (retrievedAccount[i].attributes.new_engedi.value == 100000042) { EdGlencoe++; }
            if (retrievedAccount[i].attributes.new_engedi.value == 100000002) { EdHarBrace++; }
            if (retrievedAccount[i].attributes.new_engedi.value == 100000000) { EdHarMifflin++; }
            if (retrievedAccount[i].attributes.new_engedi.value == 100000003) { EdMcgrawHill++; }
            if (retrievedAccount[i].attributes.new_engedi.value == 100000005) { EdOther++; }
            if (retrievedAccount[i].attributes.new_engedi.value == 100000021) { EdPearson++; }
            if (retrievedAccount[i].attributes.new_engedi.value == 100000031) { EdPlazaMayor++; }
            if (retrievedAccount[i].attributes.new_engedi.value == 100000037) { EdPubEducativas++; }
        }
    }
    Xrm.Page.getAttribute("new_editorialsantillana").setValue(EdSantillana);
    Xrm.Page.getAttribute("new_editorialnorma").setValue(EdNorma);
    Xrm.Page.getAttribute("new_editorialsm").setValue(EdSM);
    Xrm.Page.getAttribute("new_editorialpanamericana").setValue(EdPanamericana);
    Xrm.Page.getAttribute("new_editorialsantillana").setValue(EdSantillana);
    Xrm.Page.getAttribute("new_plublicacioneseducativas").setValue(EdPubEducativas);
    Xrm.Page.getAttribute("new_plazamayor").setValue(EdPlazaMayor);
    Xrm.Page.getAttribute("new_mcgrawhill").setValue(EdMcgrawHill);
    Xrm.Page.getAttribute("new_harcourtbrace").setValue(EdHarBrace);
    Xrm.Page.getAttribute("new_harcourtmifflin").setValue(EdHarMifflin);
    Xrm.Page.getAttribute("new_noeditorial").setValue(EdGlencoe);
    Xrm.Page.getAttribute("new_othereditorial").setValue(EdOther);
    Xrm.Page.getAttribute("new_personeducation").setValue(EdPearson);
    Xrm.Page.getAttribute("new_totalmaterial").setValue(EdSantillana);
    Xrm.Page.getAttribute("new_new_totalstdesp").setValue(TotalEsp);
    Xrm.Page.getAttribute("new_totalstdmat").setValue(TotalMat);
    Xrm.Page.getAttribute("new_totalstdcie").setValue(TotalCie);
    Xrm.Page.getAttribute("new_totalstdsoc").setValue(TotalSoc);
    Xrm.Page.getAttribute("new_totalstdeng").setValue(TotalIng);
    Xrm.Page.getAttribute("new_totalstdmating").setValue(TotalMatIng);
    Xrm.Page.getAttribute("new_totalstdcieing").setValue(TotalCieIng);
    Xrm.Page.getAttribute("new_totalstdsocing").setValue(TotalSocIng);
    Xrm.Page.getAttribute("new_totallicenses").setValue(TotalStudentsLicense);
    Xrm.Page.getAttribute("new_totalvalue").setValue(TotalStudentsLicense * costoporlicencia);
    Xrm.Page.getAttribute("new_totalvaluation").setValue(Xrm.Page.getAttribute("new_totalvalue").getValue());
    Xrm.Page.getAttribute("new_totalprofit").setValue(Xrm.Page.getAttribute("new_totalvalue").getValue() * Xrm.Page.getAttribute("new_agreementlength").getValue());
    Xrm.Page.getAttribute("new_santillanavaluation").setValue(TotalSantillanaValuation);
    Xrm.Page.getAttribute("new_santillanalicenses").setValue(TotalSantillanaValuation / costoporlicencia);
    Xrm.Page.getAttribute("new_totalsantillanavaluation").setValue(TotalSantillanaValuation * Xrm.Page.getAttribute("new_agreementlength").getValue());
    Xrm.Page.getAttribute("new_potentialvaluation").setValue(TotalPotentialValuation);
    Xrm.Page.getAttribute("new_totalpotentialvaluation").setValue(TotalPotentialValuation * Xrm.Page.getAttribute("new_agreementlength").getValue());
    Xrm.Page.getAttribute("new_objectivevaluation").setValue(TotalObjectiveValuation);
    Xrm.Page.getAttribute("new_totalobjectivevaluation").setValue(TotalObjectiveValuation * Xrm.Page.getAttribute("new_agreementlength").getValue());
    Xrm.Page.getAttribute("new_meta3valuation").setValue(TotalMetaValuation);
    Xrm.Page.getAttribute("new_goalvaluation").setValue(TotalMetaValuation * Xrm.Page.getAttribute("new_agreementlength").getValue());
    Xrm.Page.getAttribute("new_students").setValue(estudiantes);
    var porciento = 0;
    var convenio = Xrm.Page.data.entity.attributes.get("new_agreementlength").getValue();
    var total = Xrm.Page.data.entity.attributes.get("new_totalprofit").getValue();
    var santillana = Xrm.Page.data.entity.attributes.get("new_totalsantillanavaluation").getValue();
    var potential = Xrm.Page.data.entity.attributes.get("new_totalpotentialvaluation").getValue();
    var objective = Xrm.Page.data.entity.attributes.get("new_totalobjectivevaluation").getValue();
    var meta = Xrm.Page.data.entity.attributes.get("new_goalvaluation").getValue();
    if (convenio == '2') { porciento = 3; }
    if (convenio == '3') { porciento = 5; }
    if (convenio >= '4') { porciento = 7; }
    total = (total * porciento) / 100;
    santillana = (santillana * porciento) / 100;
    potential = (potential * porciento) / 100;
    objective = (objective * porciento) / 100;
    meta = (meta * porciento) / 100;
    Xrm.Page.data.entity.attributes.get("new_porciento").setValue(porciento);
    Xrm.Page.data.entity.attributes.get("new_porcientototalvaluation").setValue(total);
    Xrm.Page.data.entity.attributes.get("new_porcientosantillanavaluation").setValue(santillana);
    Xrm.Page.data.entity.attributes.get("new_porcientopotentialvalue").setValue(potential);
    Xrm.Page.data.entity.attributes.get("new_porcientoobjectivevalue").setValue(objective);
    Xrm.Page.data.entity.attributes.get("new_goalvalue").setValue(meta);
    Xrm.Page.getControl("new_porciento").setDisabled(true);
    document.getElementById("new_porciento_i").innerHTML =
        "<style type='text/css'>" + "#new_porciento .ms-crm-Inline-Value span {color:blue}" + "</style>";
    document.getElementById("new_porcientototalvaluation_i").innerHTML =
        "<style type='text/css'>" + "#new_porcientototalvaluation .ms-crm-Inline-Value span {color:red}" + "</style>";
    document.getElementById("new_porcientosantillanavaluation_i").innerHTML =
        "<style type='text/css'>" + "#new_porcientosantillanavaluation .ms-crm-Inline-Value span {color:red}" + "</style>";
    document.getElementById("new_porcientopotentialvalue_i").innerHTML =
        "<style type='text/css'>" + "#new_porcientopotentialvalue .ms-crm-Inline-Value span {color:red}" + "</style>";
    document.getElementById("new_porcientoobjectivevalue_i").innerHTML =
        "<style type='text/css'>" + "#new_porcientoobjectivevalue .ms-crm-Inline-Value span {color:red}" + "</style>";
    document.getElementById("new_goalvalue_i").innerHTML =
        "<style type='text/css'>" + "#new_goalvalue .ms-crm-Inline-Value span {color:red}" + "</style>";
    Xrm.Page.getAttribute("new_aaamount").setValue(TotalChangeAmount);
    Xrm.Page.getAttribute("new_maamount").setValue(TotalMantenianceAmount);
    Xrm.Page.getAttribute("new_poamount").setValue(TotalMas3Amount);
    Xrm.Page.getAttribute("new_obamount").setValue(TotalMenos3Amount);
    Xrm.Page.getAttribute("new_noamount").setValue(TotalNotOfferedAmount);
    var checkSantillana = Xrm.Page.data.entity.attributes.get("new_checksantillanavaluation").getValue();
    var checkPotencial = Xrm.Page.data.entity.attributes.get("new_checkpotentialvaluation").getValue();
    var checkObjective = Xrm.Page.data.entity.attributes.get("new_checkobjectivevaluation").getValue();
    var checkMeta = Xrm.Page.data.entity.attributes.get("new_checkgoalvaluation").getValue();
    var porcientoSantillana = Xrm.Page.data.entity.attributes.get("new_porcientosantillanavaluation").getValue();
    var porcientoPotencial = Xrm.Page.data.entity.attributes.get("new_porcientopotentialvalue").getValue();
    var porcientoObjective = Xrm.Page.data.entity.attributes.get("new_porcientoobjectivevalue").getValue();
    var porcientoMeta = Xrm.Page.data.entity.attributes.get("new_goalvalue").getValue();
    var acuerdo = 0;
    if (checkSantillana == true) { acuerdo = acuerdo + porcientoSantillana; }
    if (checkPotencial == true) { acuerdo = acuerdo + porcientoPotencial; }
    if (checkObjective == true) { acuerdo = acuerdo + porcientoObjective; }
    if (checkMeta == true) { acuerdo = acuerdo + porcientoMeta; }
    Xrm.Page.data.entity.attributes.get("new_totalagreement").setValue(Xrm.Page.data.entity.attributes.get("new_porcientoobjectivevalue").getValue());
    Xrm.Page.getControl("new_totalagreement").setDisabled(true);
    document.getElementById("new_totalagreement_i").innerHTML =
        "<style type='text/css'>" + "#new_totalagreement .ms-crm-Inline-Value span {color:green}" + "</style>";
}







function valuationFormAttributes() {
    var studentEnrollmentTotals = [
        'new_new_totalstdesp',
        'new_totalstdeng',
        'new_totalstdmat',
        'new_totalstdmating',
        'new_totalstdcie',
        'new_totalstdcieing',
        'new_totalstdsoc',
        'new_totalstdsocing'
    ],
        editorialsEnrollments = [
            'new_editorialsantillana',
            'new_editorialnorma',
            'new_editorialsm',
            'new_editorialpanamericana',
            'new_plublicacioneseducativas',
            'new_plazamayor',
            'new_mcgrawhill',
            'new_harcourtbrace',
            'new_harcourtmifflin',
            'new_personeducation',
            'new_noeditorial',
            'new_othereditorial'
        ],
        campaignEnrollments = [
            'new_aaamount',
            'new_poamount',
            'new_maamount',
            'new_obamount',
            'new_noamount'
        ],
        enrollmentValuations = [
            'new_students',
            'new_totalvaluation',
            'new_potentialvaluation',
            'new_santillanavaluation',
            'new_santillanalicenses',
            'new_totalmaterial',
            'new_meta3valuation',
            'new_objectivevaluation'
        ],
        enrollmentValueObjectives = [
            
        ],
        enrollmentCalculator = [
            'new_totallicenses',
            'new_totalvalue',
            'new_lengthagreement',
            'new_totalprofit',
            'new_porciento',
            'new_porcientototalvaluation',
            'new_totalsantillanavaluation',
            'new_totalpotentialvaluation',
            'new_porcientosantillanavaluation',
            'new_porcientopotentialvalue',
            'new_goalvaluation',
            'new_totalobjectivevaluation',
            'new_goalvalue',
            'new_porcientoobjectivevalue',
            'new_totalagreement'
        ];
}
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
        if (!account) {
            /* Xrm.Page.ui.setFormNotification('La cuenta de este contacto no tiene determinado el tipo de instituci\u00F3n \
como p\u00FAblico o privado.  Favor de editar este campo para mostrar informaci\u00F3n pertinente al contacto. Para editar haga \
clic en ' + account.Name + ' (abajo).', 'ERROR'); */
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
     * This function returns an array consisting on the Enrollment Adoptions
     * for the account. For this an Ajax request needs to be called to return
     * the JSON object.
     *
     * To call this function, for example, the success callback you would do it like this:
     * jsonObjectEnrollments(function (data, textStatus, XmlHttpRequest) { console.log(data.d); });
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
 *     jsonObjectEnrollments(function (data, textStatus, XmlHttpRequest) { console.log(data.d); });
 * }
 */
