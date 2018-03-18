/* inspired by https://reddit.com/r/teacherscancode
*
*/

function doGet() {
  return HtmlService
      .createHtmlOutputFromFile('indexDoPost')
      .setTitle('Form')
}

function sendFormData(data) {
   var sheet = SpreadsheetApp.openById('145ChoodE5R8sVwvavTGuTIRcUI31cwFbVACiI4HoyHk').getActiveSheet()
   
   try{
   // now this is our active sheet, you pass an array and everyone of this is a column
   sheet.appendRow([data.studentName, data.email]);
  
   return 'Success!';
   } catch (err){
    
   }
  
}