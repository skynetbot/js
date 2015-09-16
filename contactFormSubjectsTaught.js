function contactTypeOnChangeSection() {
    var contactTypeValuePrivate = Xrm.Page.getAttribute("new_contacttypeprivate").getValue();
    var contactTypeValuePublic = Xrm.Page.getAttribute("new_contacttypepublic").getValue();
    if ((contactTypeValuePrivate == 100000016 || contactTypeValuePublic == 100000026)) {
        var teacherSection = Xrm.Page.ui.tabs.get("general").sections.get("teacher_section");
        function sectionShow(show) {
            show.setVisible(true);
        }
        function sectionHide(hide) {
            hide.setVisible(false);
        }
    }
}