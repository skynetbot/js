function contactTypeOnChangeSection() {
    var contactTypeValuePrivate = Xrm.Page.getAttribute("new_contacttypeprivate").getValue();
    var contactTypeValuePublic = Xrm.Page.getAttribute("new_contacttypepublic").getValue();
    var teacherSection = Xrm.Page.ui.tabs.get("general").sections.get("teacher_section");
    var studentSection = Xrm.Page.ui.tabs.get("general").sections.get("student_section");
    var coachSection = Xrm.Page.ui.tabs.get("general").sections.get("coach_section");
    function sectionShow(show) { show.setVisible(true); }
    function sectionHide() {
        for (var i = 0; i < arguments.length; i++)
            arguments[i].setVisible(false);}
    if (contactTypeValuePrivate == 100000016 || contactTypeValuePublic == 100000026) {
        sectionShow(teacherSection);
        //sectionHide(studentSection);
        //sectionHide(coachSection);
    } else {
        //sectionHide(teacherSection);
        //sectionHide(studentSection);
        //sectionHide(coachSection);
    }
}