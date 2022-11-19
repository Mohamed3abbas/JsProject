window.onload = check;


function check() {

    if (GetCookie("Email") && GetCookie("Password")) {

        document.getElementById('mydiv1').style.display = 'none'; //Login
        document.getElementById('mydiv2').style.display = 'none'; // Register
        document.getElementById('mydiv3').style.display = 'block'; //Log Out

    }
    else {

        document.getElementById('mydiv1').style.display = 'block'; //Login
        document.getElementById('mydiv2').style.display = 'block'; // Register
        document.getElementById('mydiv3').style.display = 'none';  //Log Out
    }
}


function GetCookie(Key) {
    try {
        var CookiesArray = AllCookies();
        if (CookiesArray[Key]) {
            return CookiesArray[Key];
        } else {
            return false;
        }
    } catch {
        return false;
    }
}


function AllCookies() {
    if (document.cookie) {
        var KeyValueArray = [];
        var CookieString = document.cookie;
        var CookiePairs = CookieString.split("; ");
        for (pair of CookiePairs) {
            var keyValue = pair.split("=");
            KeyValueArray[keyValue[0]] = keyValue[1];
        }
        return KeyValueArray;
    }
    else {
        console.log('Barcelona 2–8 Bayern Munich');
        return false;
    }
}




function CreateCookie(Key, Value, Exp) {
    if (Key != "" && Value != "" && Exp instanceof Date) {
        document.cookie = `${Key}=${Value};expires=${Exp.toUTCString()}      
        `;
        return true;
    }
    else {
        console.log('Barcelona 2–8 Bayern Munich');
    }
}



function DeleteCookie() {
    document.cookie = "Password=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/Views;";
    document.cookie = "Email=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/Views;";
    document.cookie = "FullName=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/Views;";
    document.cookie = "mp_52e5e0805583e8a410f1ed50d8e0c049_mixpanel=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    location.replace("login.html");
}
