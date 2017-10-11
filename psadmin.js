
function setLogin(defaultURL) {

    var docLoc = new String(document.location);
    var deepURL = ""; 
    var iLast = docLoc.lastIndexOf("?&");

    if (docLoc.length == (iLast + 2)) {
          docLoc = docLoc.substring(0, iLast);
    }

    // Build a "Deep Link" URL for the form's action 
    if (docLoc.indexOf("?cmd=") == -1 && docLoc.indexOf("?") != -1) {
        if (docLoc.indexOf("cmd=login") == -1) {
            var urlQuery = docLoc.substring(docLoc.indexOf("?")+1, docLoc.length);
            var docQuery = "";
            var formQuery = document.forms.login.action.substring(document.forms.login.action.indexOf("?")+1, document.forms.login.action.length);
            var arrQrys = formQuery.split("&");
            for (var x=0; x < arrQrys.length; x++) {
                if ((arrQrys[x] !== "") && (urlQuery.indexOf(arrQrys[x]) == -1)) {
                    if (arrQrys[x].indexOf("uninavdefaultURL=") != -1) // If found then skip it.
                        continue;
                    docQuery += "&" + arrQrys[x];
                }
            } 
            deepURL = docLoc + docQuery;
        } 
    }

    // If the deepURL is blank, use the default URL
    if (deepURL == "") {
        loginURL = defaultURL;
    } else {

        // If the URL matches the "default" login URL, go there. 
        //If not, use the URL in the address bar (for links from emails, etc)
    

        // Get the host name for the submitted defaultURL
        var defaultURLHREF = document.createElement('a');
        defaultURLHREF.href = defaultURL;
        var defaultURLDomain = defaultURLHREF.host;
        // and the defaultURL from the address bar
        var deepURLHREF = document.createElement('a');
        deepURLHREF.href = deepURL;
        var deepURLDomain = deepURLHREF.host;
        
        if (defaultURLDomain == deepURLDomain) {
            loginURL = deepURL;
        } else {
            loginURL = defaultURL;
        }
    }

    var form = document.forms.login;
    form.setAttribute("action", loginURL);
    form.submit();
}

function setFocus() {
    try
        {document.login.userid.focus()}
    catch (e)
        {};
    return;
}

function setErrorImg() {
    var login_error = document.getElementById('login_error').innerHTML;
    var discovery_error = document.getElementById('discovery_error').innerHTML;
    // var browsercheck_error = document.getElementById('browsercheck_error').innerHTML;
    
    if (login_error.length != 0 || discovery_error.length != 0 || browsercheck_error.length != 0)
        {
        //document.getElementById('error_img').style.display = 'block';
        if (login_error.length != 0)
            document.getElementById('login_error').style.visibility = 'visible';
        if (discovery_error.length != 0)
            document.getElementById('discovery_error').style.visibility = 'visible';
        //document.getElementById('error_link').focus();
        }
    else {
        setFocus();
    }
}

function clearRecentSearch() {
    if (typeof(window.sessionStorage) !== "undefined") {
        try {
            sessionStorage.clear();
        } catch (e) {}
    }
}
/* Toggle Login Backdoor*/
function hideLogin(isHidden) {
	if (isHidden) {
		document.getElementById('signon').style.display = "none";
	} else {
		document.getElementById('signon').style.display = "block";
	}
}

/* Toggle HR Button Backdoor*/
function hideHRLogin(isHidden) {
	if (isHidden) {
        	document.getElementById('hrdev').disabled = true;
	} else {
        	document.getElementById('hrdev').disabled = false;
	}
}

/* Toggle FS Button Backdoor*/
function hideFSLogin(isHidden) {
	if (isHidden) {
        	document.getElementById('fsdev').disabled = true;
	} else {
        	document.getElementById('fsdev').disabled = false;
	}
}


/* define a handler */
function doc_keyUp(e) {
/* http://www.javascripter.net/faq/keycodes.htm */
	if (e.ctrlKey && e.keyCode == 192) {hideLogin(false);hideHRLogin(false);hideFSLogin(false);} 	/* Ctrl+Tick */
}
/* register the handler */
document.addEventListener('keyup', doc_keyUp, false);
