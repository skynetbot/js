//This function injects a CSS file into Dynamics CRM
function loadCss(path) {  
    var head = document.getElementsByTagName('head')[0]; //gets the first head tag by name
    var link = document.createElement('link'); //creates a link element
    link.rel = 'stylesheet'; //CSS stylesheet declaration in HTML
    link.type = 'text/css';
    link.href = path; //this calls the location of the CSS files
    //usually if in Dynamics CRM, then it should be a WebResources file
    link.media = 'all';
    head.appendChild(link);
}

loadCss("/WebResources/new_accountInformation");
