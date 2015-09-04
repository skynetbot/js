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