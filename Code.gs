function doGet() {
  
}

function doPost(e) {
  
  var json =JSON.parse(e.postData.contents())
  var response = sendMail({
    name : json.name,
    email : json.email,
    subject : json.subject,
    body : json.body   
  })
  
  return ContentService.createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}

