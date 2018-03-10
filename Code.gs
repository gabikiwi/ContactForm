function doGet() {
return HtmlService.createHtmlOutputFromFile('index')
.setSandboxMode(HtmlService.SandboxMode.IFRAME);
}

function doSomething(s1,s2,s3,s4,s5){

Logger.log('data:'+s1+"  "+s2+"  "+s3+" "+s4+"  "+s5);
var link="https://docs.google.com/spreadsheets/d/11lKwlTB_lTAogfUpnTFbUhtH5xt_GTda_GR3yS1EIrs/edit";
var ss = SpreadsheetApp.getActiveSpreadsheet();
var ss = SpreadsheetApp.openByUrl(link);
var sheet = ss.getSheets()[0];
sheet.appendRow([s1, s2, s3, s4, s5]);
Logger.log(ss.getName());
}
