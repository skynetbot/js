function Onload() { // Previously removed commas to contact number value
    var a=Xrm.Page.getAttribute("new_contactnumber").getValue();
    if(a!=null) {
        a=a.replace(",","");
        a=a.replace(",","");
    }
    Xrm.Page.getAttribute("new_codigocontacto").setValue(a);
}
function OnTypeContactChange() {
    // This function is not in use. See contactTypeOnChange()
    var Contacttype=Xrm.Page.getAttribute("new_contacttype");
    if (Contacttype.getValue()==100000021) { // Student
        Xrm.Page.ui.tabs.get("general").sections.get("general_section_5").setVisible(true);
        Xrm.Page.ui.tabs.get("general").sections.get("general_section_6").setVisible(false);
        Xrm.Page.ui.tabs.get("general").sections.get("general_section_7").setVisible(false);
    } else if (Contacttype.getValue()==100000000) { // Teacher
        Xrm.Page.ui.tabs.get("general").sections.get("general_section_6").setVisible(true);
        Xrm.Page.ui.tabs.get("general").sections.get("general_section_5").setVisible(false);
        Xrm.Page.ui.tabs.get("general").sections.get("general_section_7").setVisible(false);
    } else if (Contacttype.getValue()==100000002) { // Coach
        Xrm.Page.ui.tabs.get("general").sections.get("general_section_7").setVisible(true);
        Xrm.Page.ui.tabs.get("general").sections.get("general_section_5").setVisible(false);
        Xrm.Page.ui.tabs.get("general").sections.get("general_section_6").setVisible(false);
    } else {
        Xrm.Page.ui.tabs.get("general").sections.get("general_section_5").setVisible(false);
        Xrm.Page.ui.tabs.get("general").sections.get("general_section_6").setVisible(false);
        Xrm.Page.ui.tabs.get("general").sections.get("general_section_7").setVisible(false);
    }
}
function contactTypeOnChange() {
    var contactTypeValue = Xrm.Page.getAttribute("new_contacttype").getValue(),
    // Student section
        studentSection = Xrm.Page.ui.tabs.get("general").sections.get("student_section"),
    // Teacher section
        teacherSection = Xrm.Page.ui.tabs.get("general").sections.get("teacher_section"),
    // Coach section
        coachSection = Xrm.Page.ui.tabs.get("general").sections.get("coach_section");
    function sectionShow(show) {
        // Shows a section while hiding the other two
        show.setVisible(true);
    }
    function sectionHide() { //Hides all sections
        for (var i = 0; i < arguments.length; i++) {
            arguments[i].setVisible(false);
        }
    }
    switch (contactTypeValue) {
        case 100000021: //Student
            //If the contact type is a student, 
            //display the student section hide not relevant
            sectionShow(studentSection);
            sectionHide(teacherSection, coachSection);
            break;
        case 100000000: //Teacher
            //If a teacher display teacher section, hide not relevant
            sectionShow(teacherSection);
            sectionHide(studentSection, coachSection);
            break;
        case 100000002: //Coach
            //if a coach, show coach section, hide not relevant
            sectionShow(coachSection);
            sectionHide(studentSection, teacherSection);
            break;
        default: //default action should hide all sections
            sectionHide(studentSection, teacherSection, coachSection);
            break;
    }
}
function getAccountName() { //Gets the account value
    var accountValue = Xrm.Page.getAttribute("parentcustomerid").getValue();
    alert(accountValue[0].name);  //alerts the object value name
}
