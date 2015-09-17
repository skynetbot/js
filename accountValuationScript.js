/* Formerly new_accountCSS.js
   this script is being fixed by Milton Reyes */
function changeTextColor(fieldIdStu, fieldIdEdi, fieldIdCla, fieldIdYear, fieldIdObj) {
    "use strict";
    if (fieldIdEdi.getText() === "Editorial Santillana") {
        document.getElementById(fieldIdStu.getName()).childNodes[1].style.color = "green";
        document.getElementById(fieldIdStu.getName()).childNodes[1].style.fontWeight = "bold";
        document.getElementById(fieldIdEdi.getName()).childNodes[1].style.color = "green";
        document.getElementById(fieldIdEdi.getName()).childNodes[1].style.fontWeight = "bold";
        document.getElementById(fieldIdCla.getName()).childNodes[1].style.color = "green";
        document.getElementById(fieldIdCla.getName()).childNodes[1].style.fontWeight = "bold";
        document.getElementById(fieldIdYear.getName()).childNodes[1].style.color = "green";
        document.getElementById(fieldIdYear.getName()).childNodes[1].style.fontWeight = "bold";
    } else {
        document.getElementById(fieldIdStu.getName()).childNodes[1].style.color = "DimGray";
        document.getElementById(fieldIdStu.getName()).childNodes[1].style.fontWeight = "normal";
        document.getElementById(fieldIdEdi.getName()).childNodes[1].style.color = "DimGray";
        document.getElementById(fieldIdEdi.getName()).childNodes[1].style.fontWeight = "normal";
        if (fieldIdCla.getText() === "NOT OFFERED") {
            document.getElementById(fieldIdCla.getName()).childNodes[1].style.color = "red";
            document.getElementById(fieldIdCla.getName()).childNodes[1].style.fontWeight = "bold";
        } else if (fieldIdCla.getText() === "+3") {
            document.getElementById(fieldIdCla.getName()).childNodes[1].style.color = "blue";
            document.getElementById(fieldIdCla.getName()).childNodes[1].style.fontWeight = "bold";
        } else {
            document.getElementById(fieldIdCla.getName()).childNodes[1].style.color = "DimGray";
            document.getElementById(fieldIdCla.getName()).childNodes[1].style.fontWeight = "normal";
        }
        document.getElementById(fieldIdYear.getName()).childNodes[1].style.color = "DimGray";
        document.getElementById(fieldIdYear.getName()).childNodes[1].style.fontWeight = "normal";
    }
    if (Xrm.Page.getAttribute(fieldIdObj.getName()).getValue() == true) {
        document.getElementById(fieldIdObj.getName()).childNodes[1].style.color = "blue";
        document.getElementById(fieldIdObj.getName()).childNodes[1].style.fontWeight = "bold";
    } else {
        document.getElementById(fieldIdObj.getName()).childNodes[1].style.color = "black";
        document.getElementById(fieldIdObj.getName()).childNodes[1].style.fontWeight = "normal";
    }
}
function styleField() {
    "use strict";
    var espStudent = Xrm.Page.getAttribute("new_esp"),
        matStudent = Xrm.Page.getAttribute("new_mat"),
        matIngStudent = Xrm.Page.getAttribute("new_mating"),
        cieStudent = Xrm.Page.getAttribute("new_cie"),
        cieIngStudent = Xrm.Page.getAttribute("new_scie"),
        socStudent = Xrm.Page.getAttribute("new_soc"),
        socIngStudent = Xrm.Page.getAttribute("new_socing"),
        engStudent = Xrm.Page.getAttribute("new_eng"),
        espEditorial = Xrm.Page.getAttribute("new_espedi"),
        matEditorial = Xrm.Page.getAttribute("new_matedi"),
        matIngEditorial = Xrm.Page.getAttribute("new_matingedi"),
        cieEditorial = Xrm.Page.getAttribute("new_cieedi"),
        cieIngEditorial = Xrm.Page.getAttribute("new_scieedi"),
        socEditorial = Xrm.Page.getAttribute("new_socedi"),
        socIngEditorial = Xrm.Page.getAttribute("new_socingedi"),
        engEditorial = Xrm.Page.getAttribute("new_engedi"),
        espClass = Xrm.Page.getAttribute("new_espanolclassification"),
        matClass = Xrm.Page.getAttribute("new_matematicasclassification"),
        matIngClass = Xrm.Page.getAttribute("new_mathemathicsclassification"),
        cieClass = Xrm.Page.getAttribute("new_cienciasclassification"),
        cieIngClass = Xrm.Page.getAttribute("new_scienciesclassification"),
        socClass = Xrm.Page.getAttribute("new_socialesclassification"),
        socIngClass = Xrm.Page.getAttribute("new_socialstudiesclassification"),
        engClass = Xrm.Page.getAttribute("new_englishclassification"),
        espYear = Xrm.Page.getAttribute("new_espyear"),
        matYear = Xrm.Page.getAttribute("new_matyear"),
        matIngYear = Xrm.Page.getAttribute("new_matingyear"),
        cieYear = Xrm.Page.getAttribute("new_cieyear"),
        cieIngYear = Xrm.Page.getAttribute("new_scieyear"),
        socYear = Xrm.Page.getAttribute("new_socyear"),
        socIngYear = Xrm.Page.getAttribute("new_socingyear"),
        engYear = Xrm.Page.getAttribute("new_engyear"),
        espObj = Xrm.Page.getAttribute("new_objectivecheckesp"),
        matObj = Xrm.Page.getAttribute("new_objectivecheckmat"),
        matIngObj = Xrm.Page.getAttribute("new_objectivecheckmating"),
        cieObj = Xrm.Page.getAttribute("new_objectivecheckcie"),
        cieIngObj = Xrm.Page.getAttribute("new_objectivecheckcieing"),
        socObj = Xrm.Page.getAttribute("new_objectivechecksoc"),
        socIngObj = Xrm.Page.getAttribute("new_objectivechecksocing"),
        engObj = Xrm.Page.getAttribute("new_objectivechecking");
    changeTextColor(espStudent, espEditorial, espClass, espYear, espObj);
    changeTextColor(matStudent, matEditorial, matClass, matYear, matObj);
    changeTextColor(matIngStudent, matIngEditorial, matIngClass, matIngYear, matIngObj);
    changeTextColor(cieStudent, cieEditorial, cieClass, cieYear, cieObj);
    changeTextColor(cieIngStudent, cieIngEditorial, cieIngClass, cieIngYear, cieIngObj);
    changeTextColor(socStudent, socEditorial, socClass, socYear, socObj);
    changeTextColor(socIngStudent, socIngEditorial, socIngClass, socIngYear, socIngObj);
    changeTextColor(engStudent, engEditorial, engClass, engYear, engObj);
    document.getElementById("new_valuationm").childNodes[1].style.color = "blue";
    document.getElementById("new_valuationm").childNodes[1].style.fontWeight = "bold";
    document.getElementById("new_valuationo").childNodes[1].style.color = "blue";
    document.getElementById("new_valuationo").childNodes[1].style.fontWeight = "bold";
}
function adoptionConditions() {
    "use strict";
    var students = Xrm.Page.getAttribute("new_students").getValue(),
        studentsFieldArrayAtt = [
        Xrm.Page.getAttribute("new_esp"),
        Xrm.Page.getAttribute("new_mat"),
        Xrm.Page.getAttribute("new_mating"),
        Xrm.Page.getAttribute("new_cie"),
        Xrm.Page.getAttribute("new_scie"),
        Xrm.Page.getAttribute("new_soc"),
        Xrm.Page.getAttribute("new_socing"),
        Xrm.Page.getAttribute("new_eng")
        ],
        editorialsFieldArrayAtt = [
        Xrm.Page.getAttribute("new_espedi"),
        Xrm.Page.getAttribute("new_matedi"),
        Xrm.Page.getAttribute("new_matingedi"),
        Xrm.Page.getAttribute("new_cieedi"),
        Xrm.Page.getAttribute("new_scieedi"),
        Xrm.Page.getAttribute("new_socedi"),
        Xrm.Page.getAttribute("new_socingedi"),
        Xrm.Page.getAttribute("new_engedi")
        ],
        classFieldArrayAtt = [
        Xrm.Page.getAttribute("new_espanolclassification"),
        Xrm.Page.getAttribute("new_matematicasclassification"),
        Xrm.Page.getAttribute("new_mathemathicsclassification"),
        Xrm.Page.getAttribute("new_cienciasclassification"),
        Xrm.Page.getAttribute("new_scienciesclassification"),
        Xrm.Page.getAttribute("new_socialesclassification"),
        Xrm.Page.getAttribute("new_socialstudiesclassification"),
        Xrm.Page.getAttribute("new_englishclassification")
        ],
        yearFieldArrayAtt = [
        Xrm.Page.getAttribute("new_espyear"),
        Xrm.Page.getAttribute("new_matyear"),
        Xrm.Page.getAttribute("new_matingyear"),
        Xrm.Page.getAttribute("new_cieyear"),
        Xrm.Page.getAttribute("new_scieyear"),
        Xrm.Page.getAttribute("new_socyear"),
        Xrm.Page.getAttribute("new_socingyear"),
        Xrm.Page.getAttribute("new_engyear")
        ],
        objectiveFieldArrayAtt = [
        Xrm.Page.getAttribute("new_objectivecheckesp"),
        Xrm.Page.getAttribute("new_objectivecheckmat"),
        Xrm.Page.getAttribute("new_objectivecheckmating"),
        Xrm.Page.getAttribute("new_objectivecheckcie"),
        Xrm.Page.getAttribute("new_objectivecheckcieing"),
        Xrm.Page.getAttribute("new_objectivechecksoc"),
        Xrm.Page.getAttribute("new_objectivechecksocing"),
        Xrm.Page.getAttribute("new_objectivechecking")
        ],
        studentsFieldArrayControl = [
        Xrm.Page.getControl("new_esp"),
        Xrm.Page.getControl("new_mat"),
        Xrm.Page.getControl("new_mating"),
        Xrm.Page.getControl("new_cie"),
        Xrm.Page.getControl("new_scie"),
        Xrm.Page.getControl("new_soc"),
        Xrm.Page.getControl("new_socing"),
        Xrm.Page.getControl("new_eng")
        ],
        editorialsFieldArrayControl = [
        Xrm.Page.getControl("new_espedi"),
        Xrm.Page.getControl("new_matedi"),
        Xrm.Page.getControl("new_matingedi"),
        Xrm.Page.getControl("new_cieedi"),
        Xrm.Page.getControl("new_scieedi"),
        Xrm.Page.getControl("new_socedi"),
        Xrm.Page.getControl("new_socingedi"),
        Xrm.Page.getControl("new_engedi")
        ],
        classFieldArrayControl = [
        Xrm.Page.getControl("new_espanolclassification"),
        Xrm.Page.getControl("new_matematicasclassification"),
        Xrm.Page.getControl("new_mathemathicsclassification"),
        Xrm.Page.getControl("new_cienciasclassification"),
        Xrm.Page.getControl("new_scienciesclassification"),
        Xrm.Page.getControl("new_socialesclassification"),
        Xrm.Page.getControl("new_socialstudiesclassification"),
        Xrm.Page.getControl("new_englishclassification")
        ],
        yearFieldArrayControl = [
        Xrm.Page.getControl("new_espyear"),
        Xrm.Page.getControl("new_matyear"),
        Xrm.Page.getControl("new_matingyear"),
        Xrm.Page.getControl("new_cieyear"),
        Xrm.Page.getControl("new_scieyear"),
        Xrm.Page.getControl("new_socyear"),
        Xrm.Page.getControl("new_socingyear"),
        Xrm.Page.getControl("new_engyear")
        ],
        objectiveFieldArrayControl = [
        Xrm.Page.getControl("new_objectivecheckesp"),
        Xrm.Page.getControl("new_objectivecheckmat"),
        Xrm.Page.getControl("new_objectivecheckmating"),
        Xrm.Page.getControl("new_objectivecheckcie"),
        Xrm.Page.getControl("new_objectivecheckcieing"),
        Xrm.Page.getControl("new_objectivechecksoc"),
        Xrm.Page.getControl("new_objectivechecksocing"),
        Xrm.Page.getControl("new_objectivechecking")
        ];
    var totalLicence = Xrm.Page.getAttribute("new_totalstudents");
    var alertBool = false;
    for (var i in studentsFieldArrayAtt) {
        if (students == 0 || students == null) {
            studentsFieldArrayControl[i].setDisabled(true);
            editorialsFieldArrayControl[i].setDisabled(true);
            classFieldArrayControl[i].setDisabled(true);
            yearFieldArrayControl[i].setDisabled(true);
        } else {
            studentsFieldArrayControl[i].setDisabled(false);
            } if (students < studentsFieldArrayAtt[i].getValue()) {
                if (alertBool == false) {
                    if (students == 0) {
                        totalLicence.setValue(0);
                    }
                    alert("Entered value can't be null or greater than students");
                    alertBool=true;
                }
                studentsFieldArrayAtt[i].setValue(0);
            } if (studentsFieldArrayAtt[i].getValue() != 0) {
                editorialsFieldArrayControl[i].setDisabled(false);
                yearFieldArrayControl[i].setDisabled(false);
                objectiveFieldArrayControl[i].setDisabled(false);
            } else {
                editorialsFieldArrayControl[i].setDisabled(true);
                yearFieldArrayControl[i].setDisabled(true);
                objectiveFieldArrayControl[i].setDisabled(true);
            }
    }
    styleField();
}
function styleAgreement() {
    var agreementDifference=Xrm.Page.getAttribute("new_agreementdifference");
    var agreement = Xrm.Page.getAttribute("new_agreementdifference").getValue();
    if (agreement > 0) {
        document.getElementById(agreementDifference.getName()).childNodes[1].style.color="green";
        document.getElementById(agreementDifference.getName()).childNodes[1].style.fontWeight="bold";
    } else {
    document.getElementById(agreementDifference.getName()).childNodes[1].style.color="red";
    document.getElementById(agreementDifference.getName()).childNodes[1].style.fontWeight="bold";
    }
}
function formTitle() {
    var dateValue = new Date();
    var currentYear = dateValue.getFullYear();
    var currentYearPeriod = dateValue.getFullYear() + "-" + (dateValue.getFullYear() + 1);
    var selectedYear = Xrm.Page.getAttribute("new_project").getText();
    var selectedPeriod = Xrm.Page.getAttribute("new_project").getText();
    var selectedYearIndex = selectedYear.indexOf("-");
    var finalYearSelected = selectedYear.substr(0, selectedYearIndex);
    if (selectedPeriod == currentYearPeriod || finalYearSelected < currentYear) {
        document.getElementById("FormTitle").childNodes[0].innerHTML = "Adopciones Reales";
    } else {
        document.getElementById("FormTitle").childNodes[0].innerHTML = "Adopciones Objetivas";
    }
}
function bookAvailability() {
    var gradeField = Xrm.Page.getAttribute("new_grades").getText();
    var studentsFieldArrayAtt= [
        Xrm.Page.getAttribute("new_esp"),
        Xrm.Page.getAttribute("new_mat"),
        Xrm.Page.getAttribute("new_mating"),
        Xrm.Page.getAttribute("new_cie"),
        Xrm.Page.getAttribute("new_scie"),
        Xrm.Page.getAttribute("new_soc"),
        Xrm.Page.getAttribute("new_socing"),
        Xrm.Page.getAttribute("new_eng")
    ];
    var editorialsFieldArrayAtt = [
        Xrm.Page.getAttribute("new_espedi"),
        Xrm.Page.getAttribute("new_matedi"),
        Xrm.Page.getAttribute("new_matingedi"),
        Xrm.Page.getAttribute("new_cieedi"),
        Xrm.Page.getAttribute("new_scieedi"),
        Xrm.Page.getAttribute("new_socedi"),
        Xrm.Page.getAttribute("new_socingedi"),
        Xrm.Page.getAttribute("new_engedi")
    ];
    var classFieldArrayAtt = [
        Xrm.Page.getAttribute("new_espanolclassification"),
        Xrm.Page.getAttribute("new_matematicasclassification"),
        Xrm.Page.getAttribute("new_mathemathicsclassification"),
        Xrm.Page.getAttribute("new_cienciasclassification"),
        Xrm.Page.getAttribute("new_scienciesclassification"),
        Xrm.Page.getAttribute("new_socialesclassification"),
        Xrm.Page.getAttribute("new_socialstudiesclassification"),
        Xrm.Page.getAttribute("new_englishclassification")
    ];
    var yearFieldArrayAtt = [
        Xrm.Page.getAttribute("new_espyear"),
        Xrm.Page.getAttribute("new_matyear"),
        Xrm.Page.getAttribute("new_matingyear"),
        Xrm.Page.getAttribute("new_cieyear"),
        Xrm.Page.getAttribute("new_scieyear"),
        Xrm.Page.getAttribute("new_socyear"),
        Xrm.Page.getAttribute("new_socingyear"),
        Xrm.Page.getAttribute("new_engyear")
    ];
    var objectiveFieldArrayAtt = [
        Xrm.Page.getAttribute("new_objectivecheckesp"),
        Xrm.Page.getAttribute("new_objectivecheckmat"),
        Xrm.Page.getAttribute("new_objectivecheckmating"),
        Xrm.Page.getAttribute("new_objectivecheckcie"),
        Xrm.Page.getAttribute("new_objectivecheckcieing"),
        Xrm.Page.getAttribute("new_objectivechecksoc"),
        Xrm.Page.getAttribute("new_objectivechecksocing"),
        Xrm.Page.getAttribute("new_objectivechecking")
    ];
    var studentsFieldArrayControl = [
        Xrm.Page.getControl("new_esp"),
        Xrm.Page.getControl("new_mat"),
        Xrm.Page.getControl("new_mating"),
        Xrm.Page.getControl("new_cie"),
        Xrm.Page.getControl("new_scie"),
        Xrm.Page.getControl("new_soc"),
        Xrm.Page.getControl("new_socing"),
        Xrm.Page.getControl("new_eng")
    ];
    var editorialsFieldArrayControl = [
        Xrm.Page.getControl("new_espedi"),
        Xrm.Page.getControl("new_matedi"),
        Xrm.Page.getControl("new_matingedi"),
        Xrm.Page.getControl("new_cieedi"),
        Xrm.Page.getControl("new_scieedi"),
        Xrm.Page.getControl("new_socedi"),
        Xrm.Page.getControl("new_socingedi"),
        Xrm.Page.getControl("new_engedi")
    ];
    var classFieldArrayControl = [
        Xrm.Page.getControl("new_espanolclassification"),
        Xrm.Page.getControl("new_matematicasclassification"),
        Xrm.Page.getControl("new_mathemathicsclassification"),
        Xrm.Page.getControl("new_cienciasclassification"),
        Xrm.Page.getControl("new_scienciesclassification"),
        Xrm.Page.getControl("new_socialesclassification"),
        Xrm.Page.getControl("new_socialstudiesclassification"),
        Xrm.Page.getControl("new_englishclassification")
    ];
    var yearFieldArrayControl=[
        Xrm.Page.getControl("new_espyear"),
        Xrm.Page.getControl("new_matyear"),
        Xrm.Page.getControl("new_matingyear"),
        Xrm.Page.getControl("new_cieyear"),
        Xrm.Page.getControl("new_scieyear"),
        Xrm.Page.getControl("new_socyear"),
        Xrm.Page.getControl("new_socingyear"),
        Xrm.Page.getControl("new_engyear")
    ];
    var objectiveFieldArrayControl=[
        Xrm.Page.getControl("new_objectivecheckesp"),
        Xrm.Page.getControl("new_objectivecheckmat"),
        Xrm.Page.getControl("new_objectivecheckmating"),
        Xrm.Page.getControl("new_objectivecheckcie"),
        Xrm.Page.getControl("new_objectivecheckcieing"),
        Xrm.Page.getControl("new_objectivechecksoc"),
        Xrm.Page.getControl("new_objectivechecksocing"),
        Xrm.Page.getControl("new_objectivechecking")
    ];
    switch (gradeField) {
        case "PRE-PRE-KINDER":
        case "PRE-KINDER":
            bookAvailabilityCleanUp();
            for (var a in studentsFieldArrayControl) {
                studentsFieldArrayAtt[a].setValue(0);
                studentsFieldArrayControl[a].setDisabled(true);
            }
            for (var b in editorialsFieldArrayControl) {
                editorialsFieldArrayAtt[b].setValue(null);
                editorialsFieldArrayControl[b].setDisabled(true);
            }
            for (var c in classFieldArrayControl) {
                classFieldArrayControl[c].setDisabled(true);
                classFieldArrayAtt[c].setValue(100000003);
            }
            for(var d in yearFieldArrayControl) {
                yearFieldArrayAtt[d].setValue(null);
                yearFieldArrayControl[d].setDisabled(true);
            }
            for(var e in objectiveFieldArrayControl) {
                objectiveFieldArrayControl[e].setDisabled(true);
            }
            break;
        case "KINDER":
            bookAvailabilityCleanUp();
            for (var a in studentsFieldArrayControl) {
                studentsFieldArrayAtt[3].setValue(0);
                studentsFieldArrayControl[3].setDisabled(true);
                studentsFieldArrayAtt[5].setValue(0);
                studentsFieldArrayControl[5].setDisabled(true);
            }
            for (var b in editorialsFieldArrayControl) {
                editorialsFieldArrayAtt[3].setValue(null);
                editorialsFieldArrayControl[3].setDisabled(true);
                editorialsFieldArrayAtt[5].setValue(null);
                editorialsFieldArrayControl[5].setDisabled(true);
            }
            for (var c in classFieldArrayControl) {
                classFieldArrayControl[3].setDisabled(true);
                classFieldArrayAtt[3].setValue(100000003);
                classFieldArrayControl[5].setDisabled(true);
                classFieldArrayAtt[5].setValue(100000003);
            }
            for (var d in yearFieldArrayControl) {
                yearFieldArrayAtt[3].setValue(null);
                yearFieldArrayControl[3].setDisabled(true);
                yearFieldArrayAtt[5].setValue(null);
                yearFieldArrayControl[5].setDisabled(true);
            }
            for (var e in objectiveFieldArrayControl) {
                objectiveFieldArrayControl[3].setDisabled(true);
                objectiveFieldArrayControl[5].setDisabled(true);
            }
            break;
        case "1RO":
        case "2DO":
        case "3RO":
        case "4TO":
        case "5TO":
        case "6TO":
        case "8VO":
        case "9NO":
            bookAvailabilityCleanUp();
            break;
        case "10MO":
            bookAvailabilityCleanUp();
            for (var a in studentsFieldArrayControl) {
                if (studentsFieldArrayAtt[a].getName() != "new_esp" && studentsFieldArrayAtt[a].getName() != "new_soc") {
                    studentsFieldArrayAtt[a].setValue(0);
                    studentsFieldArrayControl[a].setDisabled(true);
                }
            }
            for (var b in editorialsFieldArrayControl) {
                if (editorialsFieldArrayAtt[b].getName() != "new_espedi" && editorialsFieldArrayAtt[b].getName() != "new_socedi") {
                    editorialsFieldArrayAtt[b].setValue(null);
                    editorialsFieldArrayControl[b].setDisabled(true);
                }
            }
            for (var c in classFieldArrayControl) {
                if (classFieldArrayAtt[c].getName() != "new_espanolclassification" && classFieldArrayAtt[c].getName() != "new_socialesclassification") {
                    classFieldArrayControl[c].setDisabled(true);
                    classFieldArrayAtt[c].setValue(100000003);
                }
            }
            for (var d in yearFieldArrayControl) {
                if (yearFieldArrayAtt[d].getName() != "new_espyear" && yearFieldArrayAtt[d].getName() != "new_socyear") {
                    yearFieldArrayAtt[d].setValue(null);
                    yearFieldArrayControl[d].setDisabled(true);
                }
            }
            for (var e in objectiveFieldArrayControl) {
                if (objectiveFieldArrayAtt[e].getName() != "new_objectivecheckesp" && objectiveFieldArrayAtt[e].getName() != "new_objectivechecksoc"){
                    objectiveFieldArrayControl[e].setDisabled(true);
                }
            }
            break;
        case "11VO":
        case "12VO":
            bookAvailabilityCleanUp();
            for (var a in studentsFieldArrayControl) {
                if(studentsFieldArrayAtt[a].getName() != "new_esp") {
                    studentsFieldArrayAtt[a].setValue(0);
                    studentsFieldArrayControl[a].setDisabled(true);
                }
            }
            for (var b in editorialsFieldArrayControl) {
                if (editorialsFieldArrayAtt[b].getName() != "new_espedi") {
                    editorialsFieldArrayAtt[b].setValue(null);
                    editorialsFieldArrayControl[b].setDisabled(true);
                }
            }
            for (var c in classFieldArrayControl) {
                if (classFieldArrayAtt[c].getName() != "new_espanolclassification") {
                    classFieldArrayControl[c].setDisabled(true);
                    classFieldArrayAtt[c].setValue(100000003);
                }
            }
            for (var d in yearFieldArrayControl) {
                if (yearFieldArrayAtt[d].getName() != "new_espyear") {
                    yearFieldArrayAtt[d].setValue(null);
                    yearFieldArrayControl[d].setDisabled(true);
                }
            }
            for (var e in objectiveFieldArrayControl) {
                if (objectiveFieldArrayControl[e].getName() != "new_objectivecheckesp") {
                    objectiveFieldArrayControl[e].setDisabled(true);
                }
            }
            break;
        default:
            bookAvailabilityCleanUp();
    }
    adoptionConditions();
    styleField();
}
function bookAvailabilityCleanUp() {
    var students = Xrm.Page.getControl("new_students");
    var studentsAtt = Xrm.Page.getAttribute("new_students").getValue();
    students.setDisabled(false);
    var studentsFieldArrayControl = [
        Xrm.Page.getControl("new_esp"),
        Xrm.Page.getControl("new_mat"),
        Xrm.Page.getControl("new_mating"),
        Xrm.Page.getControl("new_cie"),
        Xrm.Page.getControl("new_scie"),
        Xrm.Page.getControl("new_soc"),
        Xrm.Page.getControl("new_socing"),
        Xrm.Page.getControl("new_eng")
    ];
    for (var a in studentsFieldArrayControl) {
        studentsFieldArrayControl[a].setDisabled(true);
    }
    var editorialsFieldArrayControl = [
        Xrm.Page.getControl("new_espedi"),
        Xrm.Page.getControl("new_matedi"),
        Xrm.Page.getControl("new_matingedi"),
        Xrm.Page.getControl("new_cieedi"),
        Xrm.Page.getControl("new_scieedi"),
        Xrm.Page.getControl("new_socedi"),
        Xrm.Page.getControl("new_socingedi"),
        Xrm.Page.getControl("new_engedi")
    ];
    for (var a in editorialsFieldArrayControl) {
        editorialsFieldArrayControl[a].setDisabled(true);
    }
    var classFieldArrayControl = [
        Xrm.Page.getControl("new_espanolclassification"),
        Xrm.Page.getControl("new_matematicasclassification"),
        Xrm.Page.getControl("new_mathemathicsclassification"),
        Xrm.Page.getControl("new_cienciasclassification"),
        Xrm.Page.getControl("new_scienciesclassification"),
        Xrm.Page.getControl("new_socialesclassification"),
        Xrm.Page.getControl("new_socialstudiesclassification"),
        Xrm.Page.getControl("new_englishclassification")
    ];
    for (var a in classFieldArrayControl) {
        classFieldArrayControl[a].setDisabled(true);
    }
    var yearFieldArrayControl = [
        Xrm.Page.getControl("new_espyear"),
        Xrm.Page.getControl("new_matyear"),
        Xrm.Page.getControl("new_matingyear"),
        Xrm.Page.getControl("new_cieyear"),
        Xrm.Page.getControl("new_scieyear"),
        Xrm.Page.getControl("new_socyear"),
        Xrm.Page.getControl("new_socingyear"),
        Xrm.Page.getControl("new_engyear")
    ];
    for (var a in yearFieldArrayControl) {
        yearFieldArrayControl[a].setDisabled(true);
    }
    var objectiveFieldArrayControl = [
        Xrm.Page.getControl("new_objectivecheckesp"),
        Xrm.Page.getControl("new_objectivecheckmat"),
        Xrm.Page.getControl("new_objectivecheckmating"),
        Xrm.Page.getControl("new_objectivecheckcie"),
        Xrm.Page.getControl("new_objectivecheckcieing"),
        Xrm.Page.getControl("new_objectivechecksoc"),
        Xrm.Page.getControl("new_objectivechecksocing"),
        Xrm.Page.getControl("new_objectivechecking")
    ];
    for (var a in objectiveFieldArrayControl) {
        objectiveFieldArrayControl[a].setDisabled(true);
    }
    var studentsFieldArrayAtt = [
        Xrm.Page.getAttribute("new_esp"),
        Xrm.Page.getAttribute("new_mat"),
        Xrm.Page.getAttribute("new_mating"),
        Xrm.Page.getAttribute("new_cie"),
        Xrm.Page.getAttribute("new_scie"),
        Xrm.Page.getAttribute("new_soc"),
        Xrm.Page.getAttribute("new_socing"),
        Xrm.Page.getAttribute("new_eng")
    ];
    for (var a in studentsFieldArrayAtt) {
        studentsFieldArrayAtt[a].setValue(0);
    }
    var editorialsFieldArrayAtt = [
        Xrm.Page.getAttribute("new_espedi"),
        Xrm.Page.getAttribute("new_matedi"),
        Xrm.Page.getAttribute("new_matingedi"),
        Xrm.Page.getAttribute("new_cieedi"),
        Xrm.Page.getAttribute("new_scieedi"),
        Xrm.Page.getAttribute("new_socedi"),
        Xrm.Page.getAttribute("new_socingedi"),
        Xrm.Page.getAttribute("new_engedi")
    ];
    for (var a in editorialsFieldArrayAtt) {
        editorialsFieldArrayAtt[a].setValue(null);
    }
var classFieldArrayAtt = [
    Xrm.Page.getAttribute("new_espanolclassification"),
    Xrm.Page.getAttribute("new_matematicasclassification"),
    Xrm.Page.getAttribute("new_mathemathicsclassification"),
    Xrm.Page.getAttribute("new_cienciasclassification"),
    Xrm.Page.getAttribute("new_scienciesclassification"),
    Xrm.Page.getAttribute("new_socialesclassification"),
    Xrm.Page.getAttribute("new_socialstudiesclassification"),
    Xrm.Page.getAttribute("new_englishclassification")
];
    for (var a in classFieldArrayAtt) {
        classFieldArrayAtt[a].setValue(null);
    }
    var yearFieldArrayAtt = [
        Xrm.Page.getAttribute("new_espyear"),
        Xrm.Page.getAttribute("new_matyear"),
        Xrm.Page.getAttribute("new_matingyear"),
        Xrm.Page.getAttribute("new_cieyear"),
        Xrm.Page.getAttribute("new_scieyear"),
        Xrm.Page.getAttribute("new_socyear"),
        Xrm.Page.getAttribute("new_socingyear"),
        Xrm.Page.getAttribute("new_engyear")
    ];
    for (var a in yearFieldArrayAtt) {
        yearFieldArrayAtt[a].setValue(null);
    }
    var objectiveFieldArrayAtt = [
        Xrm.Page.getAttribute("new_objectivecheckesp"),
        Xrm.Page.getAttribute("new_objectivecheckmat"),
        Xrm.Page.getAttribute("new_objectivecheckmating"),
        Xrm.Page.getAttribute("new_objectivecheckcie"),
        Xrm.Page.getAttribute("new_objectivecheckcieing"),
        Xrm.Page.getAttribute("new_objectivechecksoc"),
        Xrm.Page.getAttribute("new_objectivechecksocing"),
        Xrm.Page.getAttribute("new_objectivechecking")
    ];
    for (var a in objectiveFieldArrayAtt) {
        objectiveFieldArrayAtt[a].setValue(false);
    }
}
function checkAdoptionYear() {
    var dateValue = new Date();
    var currentYear = dateValue.getFullYear();
    var editorialsFieldArrayAtt = [
        Xrm.Page.getAttribute("new_espedi"),
        Xrm.Page.getAttribute("new_matedi"),
        Xrm.Page.getAttribute("new_matingedi"),
        Xrm.Page.getAttribute("new_cieedi"),
        Xrm.Page.getAttribute("new_scieedi"),
        Xrm.Page.getAttribute("new_socedi"),
        Xrm.Page.getAttribute("new_socingedi"),
        Xrm.Page.getAttribute("new_engedi")
    ];
    var classFieldArrayAtt = [
        Xrm.Page.getAttribute("new_espanolclassification"),
        Xrm.Page.getAttribute("new_matematicasclassification"),
        Xrm.Page.getAttribute("new_mathemathicsclassification"),
        Xrm.Page.getAttribute("new_cienciasclassification"),
        Xrm.Page.getAttribute("new_scienciesclassification"),
        Xrm.Page.getAttribute("new_socialesclassification"),
        Xrm.Page.getAttribute("new_socialstudiesclassification"),
        Xrm.Page.getAttribute("new_englishclassification")
    ];
    var classFieldArrayControl = [
        Xrm.Page.getControl("new_espanolclassification"),
        Xrm.Page.getControl("new_matematicasclassification"),
        Xrm.Page.getControl("new_mathemathicsclassification"),
        Xrm.Page.getControl("new_cienciasclassification"),
        Xrm.Page.getControl("new_scienciesclassification"),
        Xrm.Page.getControl("new_socialesclassification"),
        Xrm.Page.getControl("new_socialstudiesclassification"),
        Xrm.Page.getControl("new_englishclassification")
    ];
    var yearFieldArrayAtt = [
        Xrm.Page.getAttribute("new_espyear"),
        Xrm.Page.getAttribute("new_matyear"),
        Xrm.Page.getAttribute("new_matingyear"),
        Xrm.Page.getAttribute("new_cieyear"),
        Xrm.Page.getAttribute("new_scieyear"),
        Xrm.Page.getAttribute("new_socyear"),
        Xrm.Page.getAttribute("new_socingyear"),
        Xrm.Page.getAttribute("new_engyear")
    ];
    for (var i in yearFieldArrayAtt) {
        if ((yearFieldArrayAtt[i].getValue() < 1000 || yearFieldArrayAtt[i].getValue() > 9999) && (yearFieldArrayAtt[i].getValue() != null)) {
            alert("Minimum value entered has to be at least 4 digits");
            yearFieldArrayAtt[i].setValue(null);
            if (classFieldArrayAtt[i].getText() != "NOT OFFERED") {
                classFieldArrayAtt[i].setValue(null);
            }
        }
        if (yearFieldArrayAtt[i].getValue() == null) {
            if (classFieldArrayAtt[i].getText() != "NOT OFFERED") {
                classFieldArrayAtt[i].setValue(null);
            }
        }
    }
    if ((editorialsFieldArrayAtt[0].getText() != "Editorial Santillana") && ((currentYear - yearFieldArrayAtt[0].getValue()) >= 3) && (yearFieldArrayAtt[0].getValue() != null)) {
        if (classFieldArrayAtt[0].getText() != "NOT OFFERED") {
            classFieldArrayAtt[0].setValue(100000001);
            classFieldArrayControl[0].setDisabled(true);
            styleField();
        }
    } else if ((editorialsFieldArrayAtt[0].getText() != "Editorial Santillana") && ((currentYear - yearFieldArrayAtt[0].getValue()) < 3) && (yearFieldArrayAtt[0].getValue() != null)) {
        if (classFieldArrayAtt[0].getText() != "NOT OFFERED") {
            classFieldArrayAtt[0].setValue(100000002);
            classFieldArrayControl[0].setDisabled(true);
            styleField();
        }
    } else if (editorialsFieldArrayAtt[0].getText() == "Editorial Santillana" && yearFieldArrayAtt[0].getValue() == currentYear && yearFieldArrayAtt[0].getValue() != null) {
        if (classFieldArrayAtt[0].getText() != "NOT OFFERED") {
            classFieldArrayAtt[0].setValue(100000005);
        }
    } else if (editorialsFieldArrayAtt[0].getText() == "Editorial Santillana" && yearFieldArrayAtt[0].getValue() != currentYear && yearFieldArrayAtt[0].getValue() != null) {
        if (classFieldArrayAtt[0].getText() != "NOT OFFERED") {
            classFieldArrayAtt[0].setValue(100000004);
        }
    }
    classFieldArrayControl[0].setDisabled(true);
    if ((editorialsFieldArrayAtt[1].getText() != "Editorial Santillana") && ((currentYear - yearFieldArrayAtt[1].getValue()) >= 3) && (yearFieldArrayAtt[1].getValue() != null)) {
        if (classFieldArrayAtt[1].getText() != "NOT OFFERED") {
            classFieldArrayAtt[1].setValue(100000001);
            classFieldArrayControl[1].setDisabled(true);
            styleField();
        }
    } else if ((editorialsFieldArrayAtt[1].getText() != "Editorial Santillana") && ((currentYear - yearFieldArrayAtt[1].getValue()) < 3) && (yearFieldArrayAtt[1].getValue() != null)) {
        if (classFieldArrayAtt[1].getText() != "NOT OFFERED") {
            classFieldArrayAtt[1].setValue(100000002);
            classFieldArrayControl[1].setDisabled(true);
            styleField();
        }
    } else if (editorialsFieldArrayAtt[1].getText() == "Editorial Santillana" && yearFieldArrayAtt[1].getValue() == currentYear && yearFieldArrayAtt[1].getValue() != null) {
        if (classFieldArrayAtt[1].getText() != "NOT OFFERED") {
            classFieldArrayAtt[1].setValue(100000005);
        }
    } else if (editorialsFieldArrayAtt[1].getText() == "Editorial Santillana" && yearFieldArrayAtt[1].getValue() != currentYear && yearFieldArrayAtt[1].getValue() != null) {
        if (classFieldArrayAtt[1].getText() != "NOT OFFERED") {
            classFieldArrayAtt[1].setValue(100000004);
        }
    }
    classFieldArrayControl[1].setDisabled(true);
    if ((editorialsFieldArrayAtt[2].getText() != "Editorial Santillana") && ((currentYear - yearFieldArrayAtt[2].getValue()) >= 3) && (yearFieldArrayAtt[2].getValue() != null)) {
        if (classFieldArrayAtt[2].getText() != "NOT OFFERED") {
            classFieldArrayAtt[2].setValue(100000001);classFieldArrayControl[2].setDisabled(true);styleField();}}else if((editorialsFieldArrayAtt[2].getText()! = "Editorial Santillana")&&((currentYear-yearFieldArrayAtt[2].getValue())<3)&&(yearFieldArrayAtt[2].getValue()! = null)){if(classFieldArrayAtt[2].getText()! = "NOT OFFERED"){classFieldArrayAtt[2].setValue(100000002);classFieldArrayControl[2].setDisabled(true);styleField();}}else if(editorialsFieldArrayAtt[2].getText() =  = "Editorial Santillana"&&yearFieldArrayAtt[2].getValue() =  = currentYear&&yearFieldArrayAtt[2].getValue()! = null){if(classFieldArrayAtt[2].getText()! = "NOT OFFERED"){classFieldArrayAtt[2].setValue(100000005);}}else if(editorialsFieldArrayAtt[2].getText() =  = "Editorial Santillana"&&yearFieldArrayAtt[2].getValue()! = currentYear&&yearFieldArrayAtt[2].getValue()! = null){if(classFieldArrayAtt[2].getText()! = "NOT OFFERED"){classFieldArrayAtt[2].setValue(100000004);}}
classFieldArrayControl[2].setDisabled(true);if((editorialsFieldArrayAtt[3].getText()! = "Editorial Santillana")&&((currentYear-yearFieldArrayAtt[3].getValue())> = 3)&&(yearFieldArrayAtt[3].getValue()! = null)){if(classFieldArrayAtt[3].getText()! = "NOT OFFERED"){classFieldArrayAtt[3].setValue(100000001);classFieldArrayControl[3].setDisabled(true);styleField();}}else if((editorialsFieldArrayAtt[3].getText()! = "Editorial Santillana")&&((currentYear-yearFieldArrayAtt[3].getValue())<3)&&(yearFieldArrayAtt[3].getValue()! = null)){if(classFieldArrayAtt[3].getText()! = "NOT OFFERED"){classFieldArrayAtt[3].setValue(100000002);classFieldArrayControl[3].setDisabled(true);styleField();}}else if(editorialsFieldArrayAtt[3].getText() =  = "Editorial Santillana"&&yearFieldArrayAtt[3].getValue() =  = currentYear&&yearFieldArrayAtt[3].getValue()! = null){if(classFieldArrayAtt[3].getText()! = "NOT OFFERED"){classFieldArrayAtt[3].setValue(100000005);}}else if(editorialsFieldArrayAtt[3].getText() =  = "Editorial Santillana"&&yearFieldArrayAtt[3].getValue()! = currentYear&&yearFieldArrayAtt[3].getValue()! = null){if(classFieldArrayAtt[3].getText()! = "NOT OFFERED"){classFieldArrayAtt[3].setValue(100000004);}}
classFieldArrayControl[3].setDisabled(true);if((editorialsFieldArrayAtt[4].getText()! = "Editorial Santillana")&&((currentYear-yearFieldArrayAtt[4].getValue())> = 3)&&(yearFieldArrayAtt[4].getValue()! = null)){if(classFieldArrayAtt[4].getText()! = "NOT OFFERED"){classFieldArrayAtt[4].setValue(100000001);classFieldArrayControl[4].setDisabled(true);styleField();}}else if((editorialsFieldArrayAtt[4].getText()! = "Editorial Santillana")&&((currentYear-yearFieldArrayAtt[4].getValue())<3)&&(yearFieldArrayAtt[4].getValue()! = null)){if(classFieldArrayAtt[4].getText()! = "NOT OFFERED"){classFieldArrayAtt[4].setValue(100000002);classFieldArrayControl[4].setDisabled(true);styleField();}}else if(editorialsFieldArrayAtt[4].getText() =  = "Editorial Santillana"&&yearFieldArrayAtt[4].getValue() =  = currentYear&&yearFieldArrayAtt[4].getValue()! = null){if(classFieldArrayAtt[4].getText()! = "NOT OFFERED"){classFieldArrayAtt[4].setValue(100000005);}}else if(editorialsFieldArrayAtt[4].getText() =  = "Editorial Santillana"&&yearFieldArrayAtt[4].getValue()! = currentYear&&yearFieldArrayAtt[4].getValue()! = null){if(classFieldArrayAtt[4].getText()! = "NOT OFFERED"){classFieldArrayAtt[4].setValue(100000004);}}
classFieldArrayControl[4].setDisabled(true);if((editorialsFieldArrayAtt[5].getText()! = "Editorial Santillana")&&((currentYear-yearFieldArrayAtt[5].getValue())> = 3)&&(yearFieldArrayAtt[5].getValue()! = null)){if(classFieldArrayAtt[5].getText()! = "NOT OFFERED"){classFieldArrayAtt[5].setValue(100000001);classFieldArrayControl[5].setDisabled(true);styleField();}}else if((editorialsFieldArrayAtt[5].getText()! = "Editorial Santillana")&&((currentYear-yearFieldArrayAtt[5].getValue())<3)&&(yearFieldArrayAtt[5].getValue()! = null)){if(classFieldArrayAtt[5].getText()! = "NOT OFFERED"){classFieldArrayAtt[5].setValue(100000002);classFieldArrayControl[5].setDisabled(true);styleField();}}else if(editorialsFieldArrayAtt[5].getText() =  = "Editorial Santillana"&&yearFieldArrayAtt[5].getValue() =  = currentYear&&yearFieldArrayAtt[5].getValue()! = null){if(classFieldArrayAtt[5].getText()! = "NOT OFFERED"){classFieldArrayAtt[5].setValue(100000005);}}else if(editorialsFieldArrayAtt[5].getText() =  = "Editorial Santillana"&&yearFieldArrayAtt[5].getValue()! = currentYear&&yearFieldArrayAtt[5].getValue()! = null){if(classFieldArrayAtt[5].getText()! = "NOT OFFERED"){classFieldArrayAtt[5].setValue(100000004);}}
classFieldArrayControl[5].setDisabled(true);if((editorialsFieldArrayAtt[6].getText()! = "Editorial Santillana")&&((currentYear-yearFieldArrayAtt[6].getValue())> = 3)&&(yearFieldArrayAtt[6].getValue()! = null)){if(classFieldArrayAtt[6].getText()! = "NOT OFFERED"){classFieldArrayAtt[6].setValue(100000001);classFieldArrayControl[6].setDisabled(true);styleField();}}else if((editorialsFieldArrayAtt[6].getText()! = "Editorial Santillana")&&((currentYear-yearFieldArrayAtt[6].getValue())<3)&&(yearFieldArrayAtt[6].getValue()! = null)){if(classFieldArrayAtt[6].getText()! = "NOT OFFERED"){classFieldArrayAtt[6].setValue(100000002);classFieldArrayControl[6].setDisabled(true);styleField();}}else if(editorialsFieldArrayAtt[6].getText() =  = "Editorial Santillana"&&yearFieldArrayAtt[6].getValue() =  = currentYear&&yearFieldArrayAtt[6].getValue()! = null){if(classFieldArrayAtt[6].getText()! = "NOT OFFERED"){classFieldArrayAtt[6].setValue(100000005);}}else if(editorialsFieldArrayAtt[6].getText() =  = "Editorial Santillana"&&yearFieldArrayAtt[6].getValue()! = currentYear&&yearFieldArrayAtt[6].getValue()! = null){if(classFieldArrayAtt[6].getText()! = "NOT OFFERED"){classFieldArrayAtt[6].setValue(100000004);}}
classFieldArrayControl[6].setDisabled(true);if((editorialsFieldArrayAtt[7].getText()! = "Editorial Santillana")&&((currentYear-yearFieldArrayAtt[7].getValue())> = 3)&&(yearFieldArrayAtt[7].getValue()! = null)){if(classFieldArrayAtt[7].getText()! = "NOT OFFERED"){classFieldArrayAtt[7].setValue(100000001);classFieldArrayControl[7].setDisabled(true);styleField();}}else if((editorialsFieldArrayAtt[7].getText()! = "Editorial Santillana")&&((currentYear-yearFieldArrayAtt[7].getValue())<3)&&(yearFieldArrayAtt[7].getValue()! = null)){if(classFieldArrayAtt[7].getText()! = "NOT OFFERED"){classFieldArrayAtt[7].setValue(100000002);classFieldArrayControl[7].setDisabled(true);styleField();}}else if(editorialsFieldArrayAtt[7].getText() =  = "Editorial Santillana"&&yearFieldArrayAtt[7].getValue() =  = currentYear&&yearFieldArrayAtt[7].getValue()! = null){if(classFieldArrayAtt[7].getText()! = "NOT OFFERED"){classFieldArrayAtt[7].setValue(100000005);}}else if(editorialsFieldArrayAtt[7].getText() =  = "Editorial Santillana"&&yearFieldArrayAtt[7].getValue()! = currentYear&&yearFieldArrayAtt[7].getValue()! = null){if(classFieldArrayAtt[7].getText()! = "NOT OFFERED"){classFieldArrayAtt[7].setValue(100000004);}}
classFieldArrayControl[7].setDisabled(true);}
function defaultFieldValueCondition(){var gradeField = Xrm.Page.getAttribute("new_grades");var studentsFieldArrayAtt = [Xrm.Page.getAttribute("new_esp"),Xrm.Page.getAttribute("new_mat"),Xrm.Page.getAttribute("new_mating"),Xrm.Page.getAttribute("new_cie"),Xrm.Page.getAttribute("new_scie"),Xrm.Page.getAttribute("new_soc"),Xrm.Page.getAttribute("new_socing"),Xrm.Page.getAttribute("new_eng")];var editorialsFieldArrayAtt = [Xrm.Page.getAttribute("new_espedi"),Xrm.Page.getAttribute("new_matedi"),Xrm.Page.getAttribute("new_matingedi"),Xrm.Page.getAttribute("new_cieedi"),Xrm.Page.getAttribute("new_scieedi"),Xrm.Page.getAttribute("new_socedi"),Xrm.Page.getAttribute("new_socingedi"),Xrm.Page.getAttribute("new_engedi")];var classFieldArrayAtt = [Xrm.Page.getAttribute("new_espanolclassification"),Xrm.Page.getAttribute("new_matematicasclassification"),Xrm.Page.getAttribute("new_mathemathicsclassification"),Xrm.Page.getAttribute("new_cienciasclassification"),Xrm.Page.getAttribute("new_scienciesclassification"),Xrm.Page.getAttribute("new_socialesclassification"),Xrm.Page.getAttribute("new_socialstudiesclassification"),Xrm.Page.getAttribute("new_englishclassification")];var yearFieldArrayAtt = [Xrm.Page.getAttribute("new_espyear"),Xrm.Page.getAttribute("new_matyear"),Xrm.Page.getAttribute("new_matingyear"),Xrm.Page.getAttribute("new_cieyear"),Xrm.Page.getAttribute("new_scieyear"),Xrm.Page.getAttribute("new_socyear"),Xrm.Page.getAttribute("new_socingyear"),Xrm.Page.getAttribute("new_engyear")];var objectiveFieldArrayAtt = [Xrm.Page.getAttribute("new_objectivecheckesp"),Xrm.Page.getAttribute("new_objectivecheckmat"),Xrm.Page.getAttribute("new_objectivecheckmating"),Xrm.Page.getAttribute("new_objectivecheckcie"),Xrm.Page.getAttribute("new_objectivecheckcieing"),Xrm.Page.getAttribute("new_objectivechecksoc"),Xrm.Page.getAttribute("new_objectivechecksocing"),Xrm.Page.getAttribute("new_objectivechecking")];var studentsFieldArrayControl = [Xrm.Page.getControl("new_esp"),Xrm.Page.getControl("new_mat"),Xrm.Page.getControl("new_mating"),Xrm.Page.getControl("new_cie"),Xrm.Page.getControl("new_scie"),Xrm.Page.getControl("new_soc"),Xrm.Page.getControl("new_socing"),Xrm.Page.getControl("new_eng")];var editorialsFieldArrayControl = [Xrm.Page.getControl("new_espedi"),Xrm.Page.getControl("new_matedi"),Xrm.Page.getControl("new_matingedi"),Xrm.Page.getControl("new_cieedi"),Xrm.Page.getControl("new_scieedi"),Xrm.Page.getControl("new_socedi"),Xrm.Page.getControl("new_socingedi"),Xrm.Page.getControl("new_engedi")];var classFieldArrayControl = [Xrm.Page.getControl("new_espanolclassification"),Xrm.Page.getControl("new_matematicasclassification"),Xrm.Page.getControl("new_mathemathicsclassification"),Xrm.Page.getControl("new_cienciasclassification"),Xrm.Page.getControl("new_scienciesclassification"),Xrm.Page.getControl("new_socialesclassification"),Xrm.Page.getControl("new_socialstudiesclassification"),Xrm.Page.getControl("new_englishclassification")];var yearFieldArrayControl = [Xrm.Page.getControl("new_espyear"),Xrm.Page.getControl("new_matyear"),Xrm.Page.getControl("new_matingyear"),Xrm.Page.getControl("new_cieyear"),Xrm.Page.getControl("new_scieyear"),Xrm.Page.getControl("new_socyear"),Xrm.Page.getControl("new_socingyear"),Xrm.Page.getControl("new_engyear")];var objectiveFieldArrayControl = [Xrm.Page.getControl("new_objectivecheckesp"),Xrm.Page.getControl("new_objectivecheckmat"),Xrm.Page.getControl("new_objectivecheckmating"),Xrm.Page.getControl("new_objectivecheckcie"),Xrm.Page.getControl("new_objectivecheckcieing"),Xrm.Page.getControl("new_objectivechecksoc"),Xrm.Page.getControl("new_objectivechecksocing"),Xrm.Page.getControl("new_objectivechecking")];var grades = Xrm.Page.getAttribute("new_grades").getValue();var students = Xrm.Page.getAttribute("new_students").getValue();var studentsControl = Xrm.Page.getControl("new_students");if(students =  = null){studentsControl.setDisabled(true);}else{studentsControl.setDisabled(false);}
if(students =  = 0){for(var a in studentsFieldArrayControl){studentsFieldArrayControl[a].setDisabled(true);}}
if(grades =  = null){studentsControl.setDisabled(true);}else{studentsControl.setDisabled(false);}
for(var i in studentsFieldArrayAtt){if(gradeField.getValue() =  = null){studentsFieldArrayControl[i].setDisabled(true);}
if(studentsFieldArrayAtt[i].getValue() =  = 0||studentsFieldArrayAtt[i].getValue() =  = null){editorialsFieldArrayAtt[i].setValue(null);editorialsFieldArrayControl[i].setDisabled(true);classFieldArrayControl[i].setDisabled(true);if(classFieldArrayAtt[i].getText()! = "NOT OFFERED"){classFieldArrayAtt[i].setValue(null);classFieldArrayControl[i].setDisabled(true);}
yearFieldArrayAtt[i].setValue(null);yearFieldArrayControl[i].setDisabled(true);objectiveFieldArrayAtt[i].setValue(false);objectiveFieldArrayControl[i].setDisabled(true);}else{editorialsFieldArrayControl[i].setDisabled(false);if(editorialsFieldArrayAtt[i].getText() =  = "Editorial Santillana"){if(classFieldArrayAtt[i].getText() =  = null){classFieldArrayControl[i].setDisabled(true);}}else{classFieldArrayControl[i].setDisabled(true);}
if(classFieldArrayAtt[i].getText()! = "NOT OFFERED"){}
yearFieldArrayControl[i].setDisabled(false);if(objectiveFieldArrayAtt[i].getValue()! = true){objectiveFieldArrayAtt[i].setValue(false);}
objectiveFieldArrayControl[i].setDisabled(false);}}}
function storeCurrentValues(){var FieldsArrayAttValues = [Xrm.Page.getAttribute("new_esp").getValue(),Xrm.Page.getAttribute("new_mat").getValue(),Xrm.Page.getAttribute("new_mating").getValue(),Xrm.Page.getAttribute("new_cie").getValue(),Xrm.Page.getAttribute("new_scie").getValue(),Xrm.Page.getAttribute("new_soc").getValue(),Xrm.Page.getAttribute("new_socing").getValue(),Xrm.Page.getAttribute("new_eng").getValue(),Xrm.Page.getAttribute("new_espedi").getValue(),Xrm.Page.getAttribute("new_matedi").getValue(),Xrm.Page.getAttribute("new_matingedi").getValue(),Xrm.Page.getAttribute("new_cieedi").getValue(),Xrm.Page.getAttribute("new_scieedi").getValue(),Xrm.Page.getAttribute("new_socedi").getValue(),Xrm.Page.getAttribute("new_socingedi").getValue(),Xrm.Page.getAttribute("new_engedi").getValue(),Xrm.Page.getAttribute("new_espanolclassification").getValue(),Xrm.Page.getAttribute("new_matematicasclassification").getValue(),Xrm.Page.getAttribute("new_mathemathicsclassification").getValue(),Xrm.Page.getAttribute("new_cienciasclassification").getValue(),Xrm.Page.getAttribute("new_scienciesclassification").getValue(),Xrm.Page.getAttribute("new_socialesclassification").getValue(),Xrm.Page.getAttribute("new_socialstudiesclassification").getValue(),Xrm.Page.getAttribute("new_englishclassification").getValue(),Xrm.Page.getAttribute("new_espyear").getValue(),Xrm.Page.getAttribute("new_matyear").getValue(),Xrm.Page.getAttribute("new_matingyear").getValue(),Xrm.Page.getAttribute("new_cieyear").getValue(),Xrm.Page.getAttribute("new_scieyear").getValue(),Xrm.Page.getAttribute("new_socyear").getValue(),Xrm.Page.getAttribute("new_socingyear").getValue(),Xrm.Page.getAttribute("new_engyear").getValue(),Xrm.Page.getAttribute("new_objectivecheckesp").getValue(),Xrm.Page.getAttribute("new_objectivecheckmat").getValue(),Xrm.Page.getAttribute("new_objectivecheckmating").getValue(),Xrm.Page.getAttribute("new_objectivecheckcie").getValue(),Xrm.Page.getAttribute("new_objectivecheckcieing").getValue(),Xrm.Page.getAttribute("new_objectivechecksoc").getValue(),Xrm.Page.getAttribute("new_objectivechecksocing").getValue(),Xrm.Page.getAttribute("new_objectivechecking").getValue()];var FieldsArrayAtt = [Xrm.Page.getAttribute("new_esp"),Xrm.Page.getAttribute("new_mat"),Xrm.Page.getAttribute("new_mating"),Xrm.Page.getAttribute("new_cie"),Xrm.Page.getAttribute("new_scie"),Xrm.Page.getAttribute("new_soc"),Xrm.Page.getAttribute("new_socing"),Xrm.Page.getAttribute("new_eng"),Xrm.Page.getAttribute("new_espedi"),Xrm.Page.getAttribute("new_matedi"),Xrm.Page.getAttribute("new_matingedi"),Xrm.Page.getAttribute("new_cieedi"),Xrm.Page.getAttribute("new_scieedi"),Xrm.Page.getAttribute("new_socedi"),Xrm.Page.getAttribute("new_socingedi"),Xrm.Page.getAttribute("new_engedi"),Xrm.Page.getAttribute("new_espanolclassification"),Xrm.Page.getAttribute("new_matematicasclassification"),Xrm.Page.getAttribute("new_mathemathicsclassification"),Xrm.Page.getAttribute("new_cienciasclassification"),Xrm.Page.getAttribute("new_scienciesclassification"),Xrm.Page.getAttribute("new_socialesclassification"),Xrm.Page.getAttribute("new_socialstudiesclassification"),Xrm.Page.getAttribute("new_englishclassification"),Xrm.Page.getAttribute("new_espyear"),Xrm.Page.getAttribute("new_matyear"),Xrm.Page.getAttribute("new_matingyear"),Xrm.Page.getAttribute("new_cieyear"),Xrm.Page.getAttribute("new_scieyear"),Xrm.Page.getAttribute("new_socyear"),Xrm.Page.getAttribute("new_socingyear"),Xrm.Page.getAttribute("new_engyear"),Xrm.Page.getAttribute("new_objectivecheckesp"),Xrm.Page.getAttribute("new_objectivecheckmat"),Xrm.Page.getAttribute("new_objectivecheckmating"),Xrm.Page.getAttribute("new_objectivecheckcie"),Xrm.Page.getAttribute("new_objectivecheckcieing"),Xrm.Page.getAttribute("new_objectivechecksoc"),Xrm.Page.getAttribute("new_objectivechecksocing"),Xrm.Page.getAttribute("new_objectivechecking")];formTitle();styleField();defaultFieldValueCondition();for(var i in FieldsArrayAtt){FieldsArrayAtt[i].setValue(FieldsArrayAttValues[i]);}}
function enrollmentOnSave(){var grade = Xrm.Page.getAttribute("new_grades").setSubmitMode("always");var classroom = Xrm.Page.getAttribute("new_classroom").setSubmitMode("always");var students = Xrm.Page.getAttribute("new_students").setSubmitMode("always");var totalLicences = Xrm.Page.getAttribute("new_totalstudents").setSubmitMode("always");var totalValuation = Xrm.Page.getAttribute("new_valuationt").setSubmitMode("always");var potential = Xrm.Page.getAttribute("new_valuationp").setSubmitMode("always");var santillana = Xrm.Page.getAttribute("new_valuations").setSubmitMode("always");var objective = Xrm.Page.getAttribute("new_valuationo").setSubmitMode("always");var goal = Xrm.Page.getAttribute("new_valuationm").setSubmitMode("always");var period = Xrm.Page.getAttribute("new_project").setSubmitMode("always");var studentsFieldArrayAtt = [Xrm.Page.getAttribute("new_esp"),Xrm.Page.getAttribute("new_mat"),Xrm.Page.getAttribute("new_mating"),Xrm.Page.getAttribute("new_cie"),Xrm.Page.getAttribute("new_scie"),Xrm.Page.getAttribute("new_soc"),Xrm.Page.getAttribute("new_socing"),Xrm.Page.getAttribute("new_eng")];for(var a in studentsFieldArrayAtt){studentsFieldArrayAtt[a].setSubmitMode("always");}
var editorialsFieldArrayAtt = [Xrm.Page.getAttribute("new_espedi"),Xrm.Page.getAttribute("new_matedi"),Xrm.Page.getAttribute("new_matingedi"),Xrm.Page.getAttribute("new_cieedi"),Xrm.Page.getAttribute("new_scieedi"),Xrm.Page.getAttribute("new_socedi"),Xrm.Page.getAttribute("new_socingedi"),Xrm.Page.getAttribute("new_engedi")];for(var b in editorialsFieldArrayAtt){editorialsFieldArrayAtt[b].setSubmitMode("always");}
var classFieldArrayAtt = [Xrm.Page.getAttribute("new_espanolclassification"),Xrm.Page.getAttribute("new_matematicasclassification"),Xrm.Page.getAttribute("new_mathemathicsclassification"),Xrm.Page.getAttribute("new_cienciasclassification"),Xrm.Page.getAttribute("new_scienciesclassification"),Xrm.Page.getAttribute("new_socialesclassification"),Xrm.Page.getAttribute("new_socialstudiesclassification"),Xrm.Page.getAttribute("new_englishclassification")];for(var c in classFieldArrayAtt){classFieldArrayAtt[c].setSubmitMode("always");}
var yearFieldArrayAtt = [Xrm.Page.getAttribute("new_espyear"),Xrm.Page.getAttribute("new_matyear"),Xrm.Page.getAttribute("new_matingyear"),Xrm.Page.getAttribute("new_cieyear"),Xrm.Page.getAttribute("new_scieyear"),Xrm.Page.getAttribute("new_socyear"),Xrm.Page.getAttribute("new_socingyear"),Xrm.Page.getAttribute("new_engyear")];for(var d in yearFieldArrayAtt){yearFieldArrayAtt[d].setSubmitMode("always");}
var objectiveFieldArrayAtt = [Xrm.Page.getAttribute("new_objectivecheckesp"),Xrm.Page.getAttribute("new_objectivecheckmat"),Xrm.Page.getAttribute("new_objectivecheckmating"),Xrm.Page.getAttribute("new_objectivecheckcie"),Xrm.Page.getAttribute("new_objectivecheckcieing"),Xrm.Page.getAttribute("new_objectivechecksoc"),Xrm.Page.getAttribute("new_objectivechecksocing"),Xrm.Page.getAttribute("new_objectivechecking")];for(var e in objectiveFieldArrayAtt){objectiveFieldArrayAtt[e].setSubmitMode("always");}}
function subgridColors(){document.getElementById("new_cambioperiodo_c").childNodes[0].style.fontSize = "20px";document.getElementById("new_cambioperiodo").childNodes[1].style.fontSize = "20px";document.getElementById("new_duplicar_c").childNodes[0].style.fontSize = "20px";document.getElementById("new_duplicar").childNodes[1].style.fontSize = "20px";if(document.getElementById("Editorials")){var grid = document.getElementById("Editorials").control;for(var rowNo = 0;rowNo<grid.GetRecordsFromInnerGrid().length;rowNo++){for(var cellNo=0;cellNo<grid.GetRecordsFromInnerGrid()[rowNo][3].cells.length;cellNo++){if(grid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].outerText=="Editorial Santillana"){grid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].style.color="green";grid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].style.fontWeight="bold";}}}}else{setTimeout("subgridColors();",2500);}
if(document.getElementById("Campaign")){var campaingGrid=document.getElementById("Campaign").control;for(var rowNo=0;rowNo<campaingGrid.GetRecordsFromInnerGrid().length;rowNo++){for(var cellNo=0;cellNo<campaingGrid.GetRecordsFromInnerGrid()[rowNo][3].cells.length;cellNo++){if(campaingGrid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].outerText=="CHANGE"||campaingGrid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].outerText=="MAINTENANCE"){campaingGrid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].style.color="green";campaingGrid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].style.fontWeight="bold";}
if(campaingGrid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].outerText=="NOT OFFERED"){campaingGrid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].style.color="Red";campaingGrid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].style.fontWeight="bold";}
if(campaingGrid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].outerText=="+3"){campaingGrid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].style.color="blue";campaingGrid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].style.fontWeight="bold";}}}}else{setTimeout("subgridColors();",2500);}
if(document.getElementById("Valuation")){var valuationGrid=document.getElementById("Valuation").control;for(var rowNo=0;rowNo<valuationGrid.GetRecordsFromInnerGrid().length;rowNo++){for(var cellNo=0;cellNo<valuationGrid.GetRecordsFromInnerGrid()[rowNo][3].cells.length;cellNo++){if(valuationGrid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].outerText=="CHANGE"||valuationGrid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].outerText=="MAINTENANCE"){valuationGrid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].style.color="green";valuationGrid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].style.fontWeight="bold";}
if(valuationGrid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].outerText=="NOT OFFERED"){valuationGrid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].style.color="Red";valuationGrid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].style.fontWeight="bold";}
if(valuationGrid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].outerText=="+3"){valuationGrid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].style.color="blue";valuationGrid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].style.fontWeight="bold";}
if(valuationGrid.GetRecordsFromInnerGrid()[rowNo][3].cells[16].outerText){valuationGrid.GetRecordsFromInnerGrid()[rowNo][3].cells[16].style.color="blue";valuationGrid.GetRecordsFromInnerGrid()[rowNo][3].cells[16].style.fontWeight="bold";}}}}else{setTimeout("subgridColors();",2500);}
if(document.getElementById("Objectives")){var objectivesGrid=document.getElementById("Objectives").control;for(var rowNo=0;rowNo<objectivesGrid.GetRecordsFromInnerGrid().length;rowNo++){for(var cellNo=0;cellNo<objectivesGrid.GetRecordsFromInnerGrid()[rowNo][3].cells.length;cellNo++){if(objectivesGrid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].outerText=="CHANGE"||objectivesGrid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].outerText=="MAINTENANCE"){objectivesGrid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].style.color="green";objectivesGrid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].style.fontWeight="bold";}
if(objectivesGrid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].outerText=="NOT OFFERED"){objectivesGrid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].style.color="Red";objectivesGrid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].style.fontWeight="bold";}
if(objectivesGrid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].outerText=="+3"){objectivesGrid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].style.color="blue";objectivesGrid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].style.fontWeight="bold";}
if(objectivesGrid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].outerText=='\u2714'){objectivesGrid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].style.color="blue";objectivesGrid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].style.fontWeight="bold";}
if(objectivesGrid.GetRecordsFromInnerGrid()[rowNo][3].cells[19].outerText){objectivesGrid.GetRecordsFromInnerGrid()[rowNo][3].cells[19].style.color="blue";objectivesGrid.GetRecordsFromInnerGrid()[rowNo][3].cells[19].style.fontWeight="bold";}}}}else{setTimeout("subgridColors();",2500);}}
function studentsPerClass(){var students=Xrm.Page.getAttribute("new_students").getValue();var studentsFieldArrayAtt=[Xrm.Page.getAttribute("new_esp"),Xrm.Page.getAttribute("new_mat"),Xrm.Page.getAttribute("new_mating"),Xrm.Page.getAttribute("new_cie"),Xrm.Page.getAttribute("new_scie"),Xrm.Page.getAttribute("new_soc"),Xrm.Page.getAttribute("new_socing"),Xrm.Page.getAttribute("new_eng")];studentsFieldArrayAtt[0].setValue(students);studentsFieldArrayAtt[1].setValue(students);studentsFieldArrayAtt[3].setValue(students);studentsFieldArrayAtt[5].setValue(students);studentsFieldArrayAtt[7].setValue(students);}
function calculatePerGrade(){var totalLicences=Xrm.Page.getAttribute("new_totalstudents");var totalValuation=Xrm.Page.getAttribute("new_valuationt");var potentialValuation=Xrm.Page.getAttribute("new_valuationp");var santillanaValuation=Xrm.Page.getAttribute("new_valuations");var objectiveValuation=Xrm.Page.getAttribute("new_valuationo");var goalValuation=Xrm.Page.getAttribute("new_valuationm");var studentsFieldArrayAtt=[Xrm.Page.getAttribute("new_esp"),Xrm.Page.getAttribute("new_mat"),Xrm.Page.getAttribute("new_mating"),Xrm.Page.getAttribute("new_cie"),Xrm.Page.getAttribute("new_scie"),Xrm.Page.getAttribute("new_soc"),Xrm.Page.getAttribute("new_socing"),Xrm.Page.getAttribute("new_eng")];var editorialsFieldArrayAtt=[Xrm.Page.getAttribute("new_espedi"),Xrm.Page.getAttribute("new_matedi"),Xrm.Page.getAttribute("new_matingedi"),Xrm.Page.getAttribute("new_cieedi"),Xrm.Page.getAttribute("new_scieedi"),Xrm.Page.getAttribute("new_socedi"),Xrm.Page.getAttribute("new_socingedi"),Xrm.Page.getAttribute("new_engedi")];var classFieldArrayAtt=[Xrm.Page.getAttribute("new_espanolclassification"),Xrm.Page.getAttribute("new_matematicasclassification"),Xrm.Page.getAttribute("new_mathemathicsclassification"),Xrm.Page.getAttribute("new_cienciasclassification"),Xrm.Page.getAttribute("new_scienciesclassification"),Xrm.Page.getAttribute("new_socialesclassification"),Xrm.Page.getAttribute("new_socialstudiesclassification"),Xrm.Page.getAttribute("new_englishclassification")];var yearFieldArrayAtt=[Xrm.Page.getAttribute("new_espyear"),Xrm.Page.getAttribute("new_matyear"),Xrm.Page.getAttribute("new_matingyear"),Xrm.Page.getAttribute("new_cieyear"),Xrm.Page.getAttribute("new_scieyear"),Xrm.Page.getAttribute("new_socyear"),Xrm.Page.getAttribute("new_socingyear"),Xrm.Page.getAttribute("new_engyear")];var objectiveFieldArrayAtt=[Xrm.Page.getAttribute("new_objectivecheckesp"),Xrm.Page.getAttribute("new_objectivecheckmat"),Xrm.Page.getAttribute("new_objectivecheckmating"),Xrm.Page.getAttribute("new_objectivecheckcie"),Xrm.Page.getAttribute("new_objectivecheckcieing"),Xrm.Page.getAttribute("new_objectivechecksoc"),Xrm.Page.getAttribute("new_objectivechecksocing"),Xrm.Page.getAttribute("new_objectivechecking")];var totalLicencesVal=0;for(var a in studentsFieldArrayAtt){totalLicencesVal+=studentsFieldArrayAtt[a].getValue();}
totalLicences.setValue(totalLicencesVal);var totalValuationVal=0;for(var b in studentsFieldArrayAtt){totalValuationVal+=studentsFieldArrayAtt[b].getValue()*68.75;}
totalValuation.setValue(totalValuationVal);var potentialValuationVal=0;for(var c in studentsFieldArrayAtt){if(classFieldArrayAtt[c].getText()!="NOT OFFERED"){potentialValuationVal+=studentsFieldArrayAtt[c].getValue()*68.75;}}
potentialValuation.setValue(potentialValuationVal);var santillanaValuationVal=0;for(var d in studentsFieldArrayAtt){if(editorialsFieldArrayAtt[d].getText()=="Editorial Santillana"){santillanaValuationVal+=studentsFieldArrayAtt[d].getValue()*68.75;}}
santillanaValuation.setValue(santillanaValuationVal);var objectiveValuationVal=0;for(var e in objectiveFieldArrayAtt){if(objectiveFieldArrayAtt[e].getValue()==true){objectiveValuationVal+=studentsFieldArrayAtt[e].getValue()*68.75;}}
objectiveValuation.setValue(objectiveValuationVal);var goalValuationVal=0;for(var f in studentsFieldArrayAtt){if(classFieldArrayAtt[f].getText()=="+3"){goalValuationVal+=studentsFieldArrayAtt[f].getValue()*68.75;}}
goalValuation.setValue(goalValuationVal);}
function agreementExpirationDate(){var agreementLength=Xrm.Page.getAttribute("new_agreementlength");var agreementDate=Xrm.Page.getAttribute("new_agreement");var agreementExpires=Xrm.Page.getAttribute("new_agreementexpires");if(agreementDate.getValue()!=null&&agreementLength.getValue()!=null){var expiredDate=new Date();expiredDate.setDate(agreementDate.getValue().getDate());expiredDate.setFullYear(agreementDate.getValue().getFullYear()+agreementLength.getValue());agreementExpires.setValue(expiredDate);}else if(agreementLength.getValue()==null){agreementExpires.setValue(null);}}
function filterSubgrids(){if(document.getElementById("Adoptions")&&document.getElementById("Editorials")&&document.getElementById("AdoptionYear")&&document.getElementById("Campaign")&&document.getElementById("AdoptionYear")&&document.getElementById("Valuation")&&document.getElementById("AdoptionYear")&&document.getElementById("Objectives")){var projectPeriod=Xrm.Page.getAttribute("new_cambioperiodo").getText();var projectSwitch=function(){switch(projectPeriod){case"2013-2014":subgridFetchXml("100000000");break;case"2014-2015":subgridFetchXml("100000001");break;case"2015-2016":subgridFetchXml("100000002");break;case"2016-2017":subgridFetchXml("100000003");break;case"2017-2018":subgridFetchXml("100000004");break;case"2018-2019":subgridFetchXml("100000005");break;}
setTimeout("subgridColors()",3000);setTimeout("mainFunction()",3000);};if(Xrm.Page.getAttribute("new_formhasloaded").getValue()==false){Xrm.Page.getAttribute("new_formhasloaded").setValue(true);setTimeout(projectSwitch,3000);}else{projectSwitch();}}
else{setTimeout("filterSubgrids();",3000);}}
function subgridFetchXml(periodValue){var subgridName=["Adoptions","Editorials","AdoptionYear","Campaign","Valuation","Objectives"];var filterId=Xrm.Page.data.entity.getId();var fetchXml="<fetch mapping='logical'>"+"<entity name='new_enrollmentadoptions'>"+"<all-attributes/>"+"<filter>"+"<condition attribute='new_project' operator='eq' value='"+periodValue+"' />"+"</filter>"+"</entity>"+"</fetch>";for(var i in subgridName){var subgrid=document.getElementById(subgridName[i]);if(subgrid==null||subgrid.readyState!="complete"){setTimeout('subgridFetchXml()',1000);return;}
if(filterId==null){return;}
subgrid.control.SetParameter("fetchXml",fetchXml);subgrid.control.refresh();}}
function setCurrentPeriod(){var period=Xrm.Page.getAttribute("new_cambioperiodo");var periodArray=Xrm.Page.getAttribute("new_cambioperiodo").getOptions();var date=new Date();var currentYear=date.getFullYear();if(date.getMonth()<7){currentYear--;}
for(var i in periodArray){var year=periodArray[i].text;year=year.substr(0,4);if(year==currentYear){period.setValue(periodArray[i].value);}}
Xrm.Page.getAttribute("new_duplicar").setValue(false);filterSubgrids();}
function closedCycle(){var closedField=Xrm.Page.getAttribute("new_cerrado").getValue();if(closedField==true){var studentsFieldArrayControl=[Xrm.Page.getControl("new_esp"),Xrm.Page.getControl("new_mat"),Xrm.Page.getControl("new_mating"),Xrm.Page.getControl("new_cie"),Xrm.Page.getControl("new_scie"),Xrm.Page.getControl("new_soc"),Xrm.Page.getControl("new_socing"),Xrm.Page.getControl("new_eng")];for(var a in studentsFieldArrayControl){studentsFieldArrayControl[a].setDisabled(true);}
var editorialsFieldArrayControl=[Xrm.Page.getControl("new_espedi"),Xrm.Page.getControl("new_matedi"),Xrm.Page.getControl("new_matingedi"),Xrm.Page.getControl("new_cieedi"),Xrm.Page.getControl("new_scieedi"),Xrm.Page.getControl("new_socedi"),Xrm.Page.getControl("new_socingedi"),Xrm.Page.getControl("new_engedi")];for(var b in editorialsFieldArrayControl){editorialsFieldArrayControl[b].setDisabled(true);}
var classFieldArrayControl=[Xrm.Page.getControl("new_espanolclassification"),Xrm.Page.getControl("new_matematicasclassification"),Xrm.Page.getControl("new_mathemathicsclassification"),Xrm.Page.getControl("new_cienciasclassification"),Xrm.Page.getControl("new_scienciesclassification"),Xrm.Page.getControl("new_socialesclassification"),Xrm.Page.getControl("new_socialstudiesclassification"),Xrm.Page.getControl("new_englishclassification")];for(var c in classFieldArrayControl){classFieldArrayControl[c].setDisabled(true);}
var yearFieldArrayControl=[Xrm.Page.getControl("new_espyear"),Xrm.Page.getControl("new_matyear"),Xrm.Page.getControl("new_matingyear"),Xrm.Page.getControl("new_cieyear"),Xrm.Page.getControl("new_scieyear"),Xrm.Page.getControl("new_socyear"),Xrm.Page.getControl("new_socingyear"),Xrm.Page.getControl("new_engyear")];for(var d in yearFieldArrayControl){yearFieldArrayControl[d].setDisabled(true);}
var objectiveFieldArrayControl=[Xrm.Page.getControl("new_objectivecheckesp"),Xrm.Page.getControl("new_objectivecheckmat"),Xrm.Page.getControl("new_objectivecheckmating"),Xrm.Page.getControl("new_objectivecheckcie"),Xrm.Page.getControl("new_objectivecheckcieing"),Xrm.Page.getControl("new_objectivechecksoc"),Xrm.Page.getControl("new_objectivechecksocing"),Xrm.Page.getControl("new_objectivechecking")];for(var e in objectiveFieldArrayControl){objectiveFieldArrayControl[e].setDisabled(true);}
var otherFieldArrayControl=[Xrm.Page.getControl("new_accountname"),Xrm.Page.getControl("new_project"),Xrm.Page.getControl("new_totalstudents"),Xrm.Page.getControl("new_valuationt"),Xrm.Page.getControl("new_valuationp"),Xrm.Page.getControl("new_valuations"),Xrm.Page.getControl("new_valuationm"),Xrm.Page.getControl("new_valuationo"),Xrm.Page.getControl("new_grades"),Xrm.Page.getControl("new_classroom"),Xrm.Page.getControl("new_students")];for(var f in otherFieldArrayControl){otherFieldArrayControl[f].setDisabled(true);}}}
function mainFunction(){totalStdEsp();totalStdMat();totalStdCie();totalStdSoc();totalStdIng();totalStdMatIng();totalStdCieIng();totalStdSocIng();totalLicenses();TotalValue();SantillanaValue();PotentialValue();ObjectiveValue();MetaValue();agreement();porciento();TotalStudents();counterAA();counterMA();counterPO();counterOB();counterNO();editorialCounter();}
function totalStdEsp(){if(document.getElementById("Adoptions")){var grid=document.getElementById("Adoptions").control;var sum_val=0;var intCell=3;var convertInt=0;for(var rowNo=0;rowNo<grid.GetRecordsFromInnerGrid().length;rowNo++){convertInt=parseInt(grid.GetRecordsFromInnerGrid()[rowNo][3].cells[intCell].outerText);if(convertInt>0){sum_val=sum_val+convertInt;}}
Xrm.Page.data.entity.attributes.get("new_new_totalstdesp").setValue(sum_val);Xrm.Page.getControl("new_new_totalstdesp").setDisabled(true);Xrm.Page.getAttribute("new_new_totalstdesp").setSubmitMode("always");}
else{setTimeout("totalStdEsp();",2500);}}
function totalStdMat(){if(document.getElementById("Adoptions")){var grid=document.getElementById("Adoptions").control;var sum_val=0;var intCell=4;var convertInt=0;for(var rowNo=0;rowNo<grid.GetRecordsFromInnerGrid().length;rowNo++){convertInt=parseInt(grid.GetRecordsFromInnerGrid()[rowNo][3].cells[intCell].outerText);if(convertInt>0){sum_val=sum_val+convertInt;}}
Xrm.Page.data.entity.attributes.get("new_totalstdmat").setValue(sum_val);Xrm.Page.getControl("new_totalstdmat").setDisabled(true);Xrm.Page.getAttribute("new_totalstdmat").setSubmitMode("always");}
else{setTimeout("totalStdMat();",2500);}}
function totalStdCie(){if(document.getElementById("Adoptions")){var grid=document.getElementById("Adoptions").control;var sum_val=0;var intCell=6;var convertInt=0;for(var rowNo=0;rowNo<grid.GetRecordsFromInnerGrid().length;rowNo++){convertInt=parseInt(grid.GetRecordsFromInnerGrid()[rowNo][3].cells[intCell].outerText);if(convertInt>0){sum_val=sum_val+convertInt;}}
Xrm.Page.data.entity.attributes.get("new_totalstdcie").setValue(sum_val);Xrm.Page.getControl("new_totalstdcie").setDisabled(true);Xrm.Page.getAttribute("new_totalstdcie").setSubmitMode("always");}
else{setTimeout("totalStdCie();",2500);}}
function totalStdSoc(){if(document.getElementById("Adoptions")){var grid=document.getElementById("Adoptions").control;var sum_val=0;var intCell=8;var convertInt=0;for(var rowNo=0;rowNo<grid.GetRecordsFromInnerGrid().length;rowNo++){convertInt=parseInt(grid.GetRecordsFromInnerGrid()[rowNo][3].cells[intCell].outerText);if(convertInt>0){sum_val=sum_val+convertInt;}}
Xrm.Page.data.entity.attributes.get("new_totalstdsoc").setValue(sum_val);Xrm.Page.getControl("new_totalstdsoc").setDisabled(true);Xrm.Page.getAttribute("new_totalstdsoc").setSubmitMode("always");}
else{setTimeout("totalStdSoc();",2500);}}
function totalStdIng(){if(document.getElementById("Adoptions")){var grid=document.getElementById("Adoptions").control;var sum_val=0;var intCell=10;var convertInt=0;for(var rowNo=0;rowNo<grid.GetRecordsFromInnerGrid().length;rowNo++){convertInt=parseInt(grid.GetRecordsFromInnerGrid()[rowNo][3].cells[intCell].outerText);if(convertInt>0){sum_val=sum_val+convertInt;}}
Xrm.Page.data.entity.attributes.get("new_totalstdeng").setValue(sum_val);Xrm.Page.getControl("new_totalstdeng").setDisabled(true);Xrm.Page.getAttribute("new_totalstdeng").setSubmitMode("always");}
else{setTimeout("totalStdIng();",2500);}}
function totalStdMatIng(){if(document.getElementById("Adoptions")){var grid=document.getElementById("Adoptions").control;var sum_val=0;var intCell=5;var convertInt=0;for(var rowNo=0;rowNo<grid.GetRecordsFromInnerGrid().length;rowNo++){convertInt=parseInt(grid.GetRecordsFromInnerGrid()[rowNo][3].cells[intCell].outerText);if(convertInt>0){sum_val=sum_val+convertInt;}}
Xrm.Page.data.entity.attributes.get("new_totalstdmating").setValue(sum_val);Xrm.Page.getControl("new_totalstdmating").setDisabled(true);Xrm.Page.getAttribute("new_totalstdmating").setSubmitMode("always");}
else{setTimeout("totalStdMatIng();",2500);}}
function totalStdCieIng(){if(document.getElementById("Adoptions")){var grid=document.getElementById("Adoptions").control;var sum_val=0;var intCell=7;var convertInt=0;for(var rowNo=0;rowNo<grid.GetRecordsFromInnerGrid().length;rowNo++){convertInt=parseInt(grid.GetRecordsFromInnerGrid()[rowNo][3].cells[intCell].outerText);if(convertInt>0){sum_val=sum_val+convertInt;}}
Xrm.Page.data.entity.attributes.get("new_totalstdcieing").setValue(sum_val);Xrm.Page.getControl("new_totalstdcieing").setDisabled(true);Xrm.Page.getAttribute("new_totalstdcieing").setSubmitMode("always");}
else{setTimeout("totalStdCieIng();",2500);}}
function totalStdSocIng(){if(document.getElementById("Adoptions")){var grid=document.getElementById("Adoptions").control;var sum_val=0;var intCell=9;var convertInt=0;for(var rowNo=0;rowNo<grid.GetRecordsFromInnerGrid().length;rowNo++){convertInt=parseInt(grid.GetRecordsFromInnerGrid()[rowNo][3].cells[intCell].outerText);if(convertInt>0){sum_val=sum_val+convertInt;}}
Xrm.Page.data.entity.attributes.get("new_totalstdsocing").setValue(sum_val);Xrm.Page.getControl("new_totalstdsocing").setDisabled(true);Xrm.Page.getAttribute("new_totalstdsocing").setSubmitMode("always");}
else{setTimeout("totalStdSocIng();",2500);}}
function totalLicenses(){if(document.getElementById("Adoptions")){var grid=document.getElementById("Adoptions").control;var sum_val=0;var intCell=11;var convertInt=0;var mul_val=68.75;var total=0;for(var rowNo=0;rowNo<grid.GetRecordsFromInnerGrid().length;rowNo++){convertInt=parseInt(grid.GetRecordsFromInnerGrid()[rowNo][3].cells[intCell].outerText);if(convertInt>0){sum_val=sum_val+convertInt;}}
total=sum_val*mul_val;Xrm.Page.data.entity.attributes.get("new_totallicenses").setValue(sum_val);Xrm.Page.data.entity.attributes.get("new_totalvalue").setValue(total);Xrm.Page.getControl("new_totallicenses").setDisabled(true);Xrm.Page.getControl("new_totalvalue").setDisabled(true);Xrm.Page.getAttribute("new_totallicenses").setSubmitMode("always");Xrm.Page.getAttribute("new_totalvalue").setSubmitMode("always");}
else{setTimeout("totalLicenses();",2500);}}
function TotalValue(){if(document.getElementById("Valuation")){var grid=document.getElementById("Valuation").control;var sum_val=0;var intCell=4;var value=0;var total=0;var convenio=Xrm.Page.data.entity.attributes.get("new_agreementlength").getValue();for(var rowNo=0;rowNo<grid.GetRecordsFromInnerGrid().length;rowNo++){value=grid.GetRecordsFromInnerGrid()[rowNo][3].cells[intCell].outerText;var number=Number(value.replace(/[^0-9\.]+/g,""));if(number>0){sum_val=sum_val+number;}}
total=sum_val*convenio;Xrm.Page.data.entity.attributes.get("new_totalprofit").setValue(total);Xrm.Page.data.entity.attributes.get("new_totalvaluation").setValue(sum_val);Xrm.Page.getControl("new_totalprofit").setDisabled(true);Xrm.Page.getControl("new_totalvaluation").setDisabled(true);Xrm.Page.getAttribute("new_totalprofit").setSubmitMode("always");Xrm.Page.getAttribute("new_totalvaluation").setSubmitMode("always");}
else{setTimeout("TotalValue();",2500);}}
function SantillanaValue(){if(document.getElementById("Valuation")){var grid=document.getElementById("Valuation").control;var sum_val=0;var intCell=14;var value=0;var total=0;var licencias=0;var costolicencias=68.75;var convenio=Xrm.Page.data.entity.attributes.get("new_agreementlength").getValue();for(var rowNo=0;rowNo<grid.GetRecordsFromInnerGrid().length;rowNo++){value=grid.GetRecordsFromInnerGrid()[rowNo][3].cells[intCell].outerText;var number=Number(value.replace(/[^0-9\.]+/g,""));if(number>0){sum_val=sum_val+number;}}
licencias=sum_val/costolicencias;total=sum_val*convenio;Xrm.Page.data.entity.attributes.get("new_santillanalicenses").setValue(licencias);Xrm.Page.data.entity.attributes.get("new_totalsantillanavaluation").setValue(total);Xrm.Page.data.entity.attributes.get("new_santillanavaluation").setValue(sum_val);Xrm.Page.getControl("new_santillanalicenses").setDisabled(true);Xrm.Page.getControl("new_totalsantillanavaluation").setDisabled(true);Xrm.Page.getControl("new_santillanavaluation").setDisabled(true);Xrm.Page.getAttribute("new_santillanalicenses").setSubmitMode("always");Xrm.Page.getAttribute("new_totalsantillanavaluation").setSubmitMode("always");Xrm.Page.getAttribute("new_santillanavaluation").setSubmitMode("always");}
else{setTimeout("SantillanaValue();",2500);}}
function PotentialValue(){if(document.getElementById("Valuation")){var grid=document.getElementById("Valuation").control;var sum_val=0;var intCell=13;var value=0;var total=0;var convenio=Xrm.Page.data.entity.attributes.get("new_agreementlength").getValue();for(var rowNo=0;rowNo<grid.GetRecordsFromInnerGrid().length;rowNo++){value=grid.GetRecordsFromInnerGrid()[rowNo][3].cells[intCell].outerText;var number=Number(value.replace(/[^0-9\.]+/g,""));if(number>0){sum_val=sum_val+number;}}
total=sum_val*convenio;Xrm.Page.data.entity.attributes.get("new_totalpotentialvaluation").setValue(total);Xrm.Page.data.entity.attributes.get("new_potentialvaluation").setValue(sum_val);Xrm.Page.getControl("new_totalpotentialvaluation").setDisabled(true);Xrm.Page.getControl("new_potentialvaluation").setDisabled(true);Xrm.Page.getAttribute("new_totalpotentialvaluation").setSubmitMode("always");Xrm.Page.getAttribute("new_potentialvaluation").setSubmitMode("always");}
else{setTimeout("PotentialValue();",2500);}}
function ObjectiveValue(){if(document.getElementById("Valuation")){var grid=document.getElementById("Valuation").control;var sum_val=0;var intCell=16;var value=0;var total=0;var convenio=Xrm.Page.data.entity.attributes.get("new_agreementlength").getValue();for(var rowNo=0;rowNo<grid.GetRecordsFromInnerGrid().length;rowNo++){value=grid.GetRecordsFromInnerGrid()[rowNo][3].cells[intCell].outerText;var number=Number(value.replace(/[^0-9\.]+/g,""));if(number>0){sum_val=sum_val+number;}}
total=sum_val*convenio;Xrm.Page.data.entity.attributes.get("new_totalobjectivevaluation").setValue(total);Xrm.Page.data.entity.attributes.get("new_objectivevaluation").setValue(sum_val);Xrm.Page.getControl("new_totalobjectivevaluation").setDisabled(true);Xrm.Page.getControl("new_objectivevaluation").setDisabled(true);Xrm.Page.getAttribute("new_totalobjectivevaluation").setSubmitMode("always");Xrm.Page.getAttribute("new_objectivevaluation").setSubmitMode("always");}
else{setTimeout("ObjectiveValue();",2500);}}
function MetaValue(){if(document.getElementById("Valuation")){var grid=document.getElementById("Valuation").control;var sum_val=0;var intCell=15;var value=0;var total=0;var convenio=Xrm.Page.data.entity.attributes.get("new_agreementlength").getValue();for(var rowNo=0;rowNo<grid.GetRecordsFromInnerGrid().length;rowNo++){value=grid.GetRecordsFromInnerGrid()[rowNo][3].cells[intCell].outerText;var number=Number(value.replace(/[^0-9\.]+/g,""));if(number>0){sum_val=sum_val+number;}}
total=sum_val*convenio;Xrm.Page.data.entity.attributes.get("new_goalvaluation").setValue(total);Xrm.Page.data.entity.attributes.get("new_meta3valuation").setValue(sum_val);Xrm.Page.getControl("new_goalvaluation").setDisabled(true);Xrm.Page.getControl("new_meta3valuation").setDisabled(true);Xrm.Page.getAttribute("new_goalvaluation").setSubmitMode("always");Xrm.Page.getAttribute("new_meta3valuation").setSubmitMode("always");}
else{setTimeout("MetaValue();",2500);}}
function agreement(){var convenio=Xrm.Page.data.entity.attributes.get("new_agreementlength").getValue();var acuerdo=0;if(convenio=='2')acuerdo=2;if(convenio=='3')acuerdo=3;if(convenio=='4')acuerdo=4;if(convenio=='5')acuerdo=5;Xrm.Page.data.entity.attributes.get("new_lengthagreement").setValue(acuerdo);Xrm.Page.getControl("new_lengthagreement").setDisabled(true);Xrm.Page.getControl("new_lengthagreement").setVisible(false);Xrm.Page.getAttribute("new_lengthagreement").setSubmitMode("always");}
function porciento(){var porciento=0;var convenio=Xrm.Page.data.entity.attributes.get("new_agreementlength").getValue();var total=Xrm.Page.data.entity.attributes.get("new_totalprofit").getValue();var santillana=Xrm.Page.data.entity.attributes.get("new_totalsantillanavaluation").getValue();var potential=Xrm.Page.data.entity.attributes.get("new_totalpotentialvaluation").getValue();var objective=Xrm.Page.data.entity.attributes.get("new_totalobjectivevaluation").getValue();var meta=Xrm.Page.data.entity.attributes.get("new_goalvaluation").getValue();if(convenio=='2')porciento=3;if(convenio=='3')porciento=5;if(convenio>='4')porciento=7;total=(total*porciento)/100;santillana=(santillana*porciento)/100;potential=(potential*porciento)/100;objective=(objective*porciento)/100;meta=(meta*porciento)/100;Xrm.Page.data.entity.attributes.get("new_porciento").setValue(porciento);Xrm.Page.data.entity.attributes.get("new_porcientototalvaluation").setValue(total);Xrm.Page.data.entity.attributes.get("new_porcientosantillanavaluation").setValue(santillana);Xrm.Page.data.entity.attributes.get("new_porcientopotentialvalue").setValue(potential);Xrm.Page.data.entity.attributes.get("new_porcientoobjectivevalue").setValue(objective);Xrm.Page.data.entity.attributes.get("new_goalvalue").setValue(meta);Xrm.Page.getControl("new_porciento").setDisabled(true);Xrm.Page.getControl("new_porcientototalvaluation").setDisabled(true);Xrm.Page.getControl("new_porcientosantillanavaluation").setDisabled(true);Xrm.Page.getControl("new_porcientopotentialvalue").setDisabled(true);Xrm.Page.getControl("new_porcientoobjectivevalue").setDisabled(true);Xrm.Page.getControl("new_goalvalue").setDisabled(true);Xrm.Page.getAttribute("new_porciento").setSubmitMode("always");Xrm.Page.getAttribute("new_porcientototalvaluation").setSubmitMode("always");Xrm.Page.getAttribute("new_porcientosantillanavaluation").setSubmitMode("always");Xrm.Page.getAttribute("new_porcientopotentialvalue").setSubmitMode("always");Xrm.Page.getAttribute("new_porcientoobjectivevalue").setSubmitMode("always");Xrm.Page.getAttribute("new_goalvalue").setSubmitMode("always");document.getElementById("new_porciento_i").innerHTML="<style type='text/css'>"+"#new_porciento .ms-crm-Inline-Value span {color:blue}"+"</style>";document.getElementById("new_porcientototalvaluation_i").innerHTML="<style type='text/css'>"+"#new_porcientototalvaluation .ms-crm-Inline-Value span {color:red}"+"</style>";document.getElementById("new_porcientosantillanavaluation_i").innerHTML="<style type='text/css'>"+"#new_porcientosantillanavaluation .ms-crm-Inline-Value span {color:red}"+"</style>";document.getElementById("new_porcientopotentialvalue_i").innerHTML="<style type='text/css'>"+"#new_porcientopotentialvalue .ms-crm-Inline-Value span {color:red}"+"</style>";document.getElementById("new_porcientoobjectivevalue_i").innerHTML="<style type='text/css'>"+"#new_porcientoobjectivevalue .ms-crm-Inline-Value span {color:red}"+"</style>";document.getElementById("new_goalvalue_i").innerHTML="<style type='text/css'>"+"#new_goalvalue .ms-crm-Inline-Value span {color:red}"+"</style>";Xrm.Page.data.entity.attributes.get("new_totalagreement").setValue(objective);Xrm.Page.getControl("new_totalagreement").setDisabled(true);Xrm.Page.getAttribute("new_totalagreement").setSubmitMode("always");document.getElementById("new_totalagreement_i").innerHTML="<style type='text/css'>"+"#new_totalagreement .ms-crm-Inline-Value span {color:green}"+"</style>";}
function TotalStudents(){if(document.getElementById("Valuation")){var grid=document.getElementById("Valuation").control;var sum_val=0;var intCell=3;var convertInt=0;for(var rowNo=0;rowNo<grid.GetRecordsFromInnerGrid().length;rowNo++){convertInt=parseInt(grid.GetRecordsFromInnerGrid()[rowNo][3].cells[intCell].outerText);if(convertInt>0){sum_val=sum_val+convertInt;}}
Xrm.Page.data.entity.attributes.get("new_students").setValue(sum_val);Xrm.Page.getControl("new_students").setDisabled(true);Xrm.Page.getAttribute("new_students").setSubmitMode("always");}
else{setTimeout("TotalStudents();",2500);}}
function CheckMarck(){var checkSantillana=Xrm.Page.data.entity.attributes.get("new_checksantillanavaluation").getValue();var checkPotencial=Xrm.Page.data.entity.attributes.get("new_checkpotentialvaluation").getValue();var checkObjective=Xrm.Page.data.entity.attributes.get("new_checkobjectivevaluation").getValue();var checkMeta=Xrm.Page.data.entity.attributes.get("new_checkgoalvaluation").getValue();var porcientoSantillana=Xrm.Page.data.entity.attributes.get("new_porcientosantillanavaluation").getValue();var porcientoPotencial=Xrm.Page.data.entity.attributes.get("new_porcientopotentialvalue").getValue();var porcientoObjective=Xrm.Page.data.entity.attributes.get("new_porcientoobjectivevalue").getValue();var porcientoMeta=Xrm.Page.data.entity.attributes.get("new_goalvalue").getValue();var acuerdo=0;if(checkSantillana==true)acuerdo=acuerdo+porcientoSantillana;if(checkPotencial==true)acuerdo=acuerdo+porcientoPotencial;if(checkObjective==true)acuerdo=acuerdo+porcientoObjective;if(checkMeta==true)acuerdo=acuerdo+porcientoMeta;Xrm.Page.data.entity.attributes.get("new_totalagreement").setValue(acuerdo);Xrm.Page.getControl("new_totalagreement").setDisabled(true);Xrm.Page.getAttribute("new_totalagreement").setSubmitMode("always");document.getElementById("new_totalagreement_i").innerHTML="<style type='text/css'>"+"#new_totalagreement .ms-crm-Inline-Value span {color:green}"+"</style>";}
function counterAA(){if(document.getElementById("Campaign")){var grid=document.getElementById("Campaign").control;var counter=0;for(var rowNo=0;rowNo<grid.GetRecordsFromInnerGrid().length;rowNo++){for(var cellNo=0;cellNo<grid.GetRecordsFromInnerGrid()[rowNo][3].cells.length;cellNo++){if(grid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].outerText=='CHANGE'){counter++;}}}
Xrm.Page.data.entity.attributes.get("new_aaamount").setValue(counter);Xrm.Page.getControl("new_aaamount").setDisabled(true);Xrm.Page.getAttribute("new_aaamount").setSubmitMode("always");}
else{setTimeout("counterAA();",2500);}}
function counterMA(){if(document.getElementById("Campaign")){var grid=document.getElementById("Campaign").control;var counter=0;for(var rowNo=0;rowNo<grid.GetRecordsFromInnerGrid().length;rowNo++){for(var cellNo=0;cellNo<grid.GetRecordsFromInnerGrid()[rowNo][3].cells.length;cellNo++){if(grid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].outerText=='MAINTENANCE'){counter++;}}}
Xrm.Page.data.entity.attributes.get("new_maamount").setValue(counter);Xrm.Page.getControl("new_maamount").setDisabled(true);Xrm.Page.getAttribute("new_maamount").setSubmitMode("always");}
else{setTimeout("counterMA();",2500);}}
function counterPO(){if(document.getElementById("Campaign")){var grid=document.getElementById("Campaign").control;var counter=0;for(var rowNo=0;rowNo<grid.GetRecordsFromInnerGrid().length;rowNo++){for(var cellNo=0;cellNo<grid.GetRecordsFromInnerGrid()[rowNo][3].cells.length;cellNo++){if(grid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].outerText=='+3'){counter++;}}}
Xrm.Page.data.entity.attributes.get("new_poamount").setValue(counter);Xrm.Page.getControl("new_poamount").setDisabled(true);Xrm.Page.getAttribute("new_poamount").setSubmitMode("always");}
else{setTimeout("counterPO();",2500);}}
function counterOB(){if(document.getElementById("Campaign")){var grid=document.getElementById("Campaign").control;var counter=0;for(var rowNo=0;rowNo<grid.GetRecordsFromInnerGrid().length;rowNo++){for(var cellNo=0;cellNo<grid.GetRecordsFromInnerGrid()[rowNo][3].cells.length;cellNo++){if(grid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].outerText=='-3'){counter++;}}}
Xrm.Page.data.entity.attributes.get("new_obamount").setValue(counter);Xrm.Page.getControl("new_obamount").setDisabled(true);Xrm.Page.getAttribute("new_obamount").setSubmitMode("always");}
else{setTimeout("counterOB();",2500);}}
function counterNO(){if(document.getElementById("Campaign")){var grid=document.getElementById("Campaign").control;var counter=0;for(var rowNo=0;rowNo<grid.GetRecordsFromInnerGrid().length;rowNo++){for(var cellNo=0;cellNo<grid.GetRecordsFromInnerGrid()[rowNo][3].cells.length;cellNo++){if(grid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].outerText=='NOT OFFERED'){counter++;}}}
Xrm.Page.data.entity.attributes.get("new_noamount").setValue(counter);Xrm.Page.getControl("new_noamount").setDisabled(true);Xrm.Page.getAttribute("new_noamount").setSubmitMode("always");}
else{setTimeout("counterNO();",2500);}}
function editorialCounter(){if(document.getElementById("Editorials")){var grid=document.getElementById("Editorials").control;var counterSM=0;var counterNorma=0;var counterPanamericana=0;var counterHBrace=0;var counterHMifflin=0;var counterMHill=0;var counterOtras=0;var counterPearson=0;var counterPMayor=0;var counterPEducativa=0;var counterSantillana=0;var counterNula=0;for(var rowNo=0;rowNo<grid.GetRecordsFromInnerGrid().length;rowNo++){for(var cellNo=3;cellNo<grid.GetRecordsFromInnerGrid()[rowNo][3].cells.length;cellNo++){if(grid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].outerText=="Editorial SM"){counterSM++;}
if(grid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].outerText=="Editorial Norma"){counterNorma++;}
if(grid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].outerText=="Editorial Panamericana"){counterPanamericana++;}
if(grid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].outerText=="Harcourt Brace"){counterHBrace++;}
if(grid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].outerText=="Harcourt Mifflin"){counterHMifflin++;}
if(grid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].outerText=="McGraw Hill"){counterMHill++;}
if(grid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].outerText=="Other Editorial"){counterOtras++;}
if(grid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].outerText=="Pearson Education"){counterPearson++;}
if(grid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].outerText=="Plaza Mayor"){counterPMayor++;}
if(grid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].outerText=="Publicaciones Educativas"){counterPEducativa++;}
if(grid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].outerText=="Editorial Santillana"){counterSantillana++;}
if(grid.GetRecordsFromInnerGrid()[rowNo][3].cells[cellNo].outerText=="Glencoe"){counterNula++;}}}
Xrm.Page.data.entity.attributes.get("new_editorialsm").setValue(counterSM);Xrm.Page.data.entity.attributes.get("new_editorialnorma").setValue(counterNorma);Xrm.Page.data.entity.attributes.get("new_editorialpanamericana").setValue(counterPanamericana);Xrm.Page.data.entity.attributes.get("new_harcourtbrace").setValue(counterHBrace);Xrm.Page.data.entity.attributes.get("new_harcourtmifflin").setValue(counterHMifflin);Xrm.Page.data.entity.attributes.get("new_mcgrawhill").setValue(counterMHill);Xrm.Page.data.entity.attributes.get("new_othereditorial").setValue(counterOtras);Xrm.Page.data.entity.attributes.get("new_personeducation").setValue(counterPearson);Xrm.Page.data.entity.attributes.get("new_plazamayor").setValue(counterPMayor);Xrm.Page.data.entity.attributes.get("new_plublicacioneseducativas").setValue(counterPEducativa);Xrm.Page.data.entity.attributes.get("new_editorialsantillana").setValue(counterSantillana);Xrm.Page.data.entity.attributes.get("new_noeditorial").setValue(counterNula);Xrm.Page.getControl("new_editorialsm").setDisabled(true);Xrm.Page.getControl("new_editorialnorma").setDisabled(true);Xrm.Page.getControl("new_editorialpanamericana").setDisabled(true);Xrm.Page.getControl("new_harcourtbrace").setDisabled(true);Xrm.Page.getControl("new_harcourtmifflin").setDisabled(true);Xrm.Page.getControl("new_mcgrawhill").setDisabled(true);Xrm.Page.getControl("new_othereditorial").setDisabled(true);Xrm.Page.getControl("new_personeducation").setDisabled(true);Xrm.Page.getControl("new_plazamayor").setDisabled(true);Xrm.Page.getControl("new_plublicacioneseducativas").setDisabled(true);Xrm.Page.getControl("new_editorialsantillana").setDisabled(true);Xrm.Page.getControl("new_noeditorial").setDisabled(true);Xrm.Page.getAttribute("new_editorialsm").setSubmitMode("always");Xrm.Page.getAttribute("new_editorialnorma").setSubmitMode("always");Xrm.Page.getAttribute("new_editorialpanamericana").setSubmitMode("always");Xrm.Page.getAttribute("new_harcourtbrace").setSubmitMode("always");Xrm.Page.getAttribute("new_harcourtmifflin").setSubmitMode("always");Xrm.Page.getAttribute("new_mcgrawhill").setSubmitMode("always");Xrm.Page.getAttribute("new_othereditorial").setSubmitMode("always");Xrm.Page.getAttribute("new_personeducation").setSubmitMode("always");Xrm.Page.getAttribute("new_plazamayor").setSubmitMode("always");Xrm.Page.getAttribute("new_plublicacioneseducativas").setSubmitMode("always");Xrm.Page.getAttribute("new_editorialsantillana").setSubmitMode("always");Xrm.Page.getAttribute("new_noeditorial").setSubmitMode("always");Xrm.Page.data.entity.attributes.get("new_totalmaterial").setValue(counterSantillana);Xrm.Page.getControl("new_totalmaterial").setDisabled(true);Xrm.Page.getAttribute("new_totalmaterial").setSubmitMode("always");}
else{setTimeout("editorialCounter();",2500);}}