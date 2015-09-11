function Onload() {
    var a=Xrm.Page.getAttribute("new_contactnumber").getValue();
    if(a!=null) {
        a=a.replace(",","");
        a=a.replace(",","");
    }
    Xrm.Page.getAttribute("new_codigocontacto").setValue(a);
}
function OnTypeContactChange() {
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
    var contactTypeValue = Xrm.Page.getAttribute("new_contacttype").getValue();
    var section5 = Xrm.Page.ui.tabs.get("general").sections.get("general_section_5");
    var section6 = Xrm.Page.ui.tabs.get("general").sections.get("general_section_6");
    var section7 = Xrm.Page.ui.tabs.get("general").sections.get("general_section_7");
    function sectionShow(show, hide, hide2) {
        show.setVisible(true);
        hide.setVisible(false);
        hide2.setVisible(false);
    }
    function sectionHide() {
        section5.setVisible(false);
        section6.setVisible(false);
        section7.setVisible(false);
    }
    switch (contactTypeValue) {
        case 100000021 : //Student
            sectionShow(section5, section6, section7);
            break;
        case 100000000 : //Teacher
            sectionShow(section6, section5, section7);
            break;
        case 100000002 : //Coach
            sectionShow(section7, section5, section6);
            break;
        case default :
            sectionHide();
            break;
    }
}