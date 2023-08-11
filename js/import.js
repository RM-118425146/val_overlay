function loadClient() {
    gapi.client.setApiKey("AIzaSyCMTmKWgb0Ox0PJsaYh0uC29jzDGUnin0k");
    return gapi.client.load("https://sheets.googleapis.com/$discovery/rest?version=v4")
        .then(function() { console.log("GAPI client loaded for API"); },
            function(err) { console.error("Error loading GAPI client for API", err); });
}
// Make sure the client is loaded and sign-in is complete before calling this method.
function execute1() {
    return gapi.client.sheets.spreadsheets.values.get({
        "spreadsheetId": "14kOLH6ogocDk6soKUWnZq_T2TL9v3-p_jmFz1A_vF-E",
        "range": "'Teams'!B1"
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
                document.getElementById('Team1').textContent = response.result.values[0].toString();
            },
            function(err) { console.error("Execute error", err); });
}
function execute2(){
    return gapi.client.sheets.spreadsheets.values.get({
        "spreadsheetId": "14kOLH6ogocDk6soKUWnZq_T2TL9v3-p_jmFz1A_vF-E",
        "range": "'Teams'!B2"
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
                document.getElementById('Team2').textContent = response.result.values[0].toString();
            },
            function(err) { console.error("Execute error", err); });
}

function execute3(){
    return gapi.client.sheets.spreadsheets.values.get({
        "spreadsheetId": "14kOLH6ogocDk6soKUWnZq_T2TL9v3-p_jmFz1A_vF-E",
        "range": "'Teams'!D1"
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
                document.getElementById('Score1').textContent = response.result.values[0].toString();
            },
            function(err) { console.error("Execute error", err); });
}

function execute4(){
    return gapi.client.sheets.spreadsheets.values.get({
        "spreadsheetId": "14kOLH6ogocDk6soKUWnZq_T2TL9v3-p_jmFz1A_vF-E",
        "range": "'Teams'!D2"
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
                document.getElementById('Score2').textContent = response.result.values[0].toString();
            },
            function(err) { console.error("Execute error", err); });
}
gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: "1004677156648-kftf2851sr1h4rsv43uqkrffmcmcle07.apps.googleusercontent.com"});
});

setInterval(function() {
    loadClient().then(execute1).then(execute2).then(execute3).then(execute4)
}, 10 * 1000);