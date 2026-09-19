function doPost(e) {
  try {
    // Connect to the active spreadsheet and select the first tab
    const doc = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = doc.getSheets()[0];
    
    // Because we are sending 'application/x-www-form-urlencoded' from the frontend,
    // Google Apps Script automatically parses the data into 'e.parameter'
    const data = e.parameter;
    
    // Map the incoming payload to your exact spreadsheet columns:
    // Column A: Name
    // Column B: Email
    // Column C: Ph No.
    // Column D: Wp No.
    // Column E: Profession
    // Column F: Why do you want to join us?
    
    const row = [
      data.name || "",
      data.email || "",
      data.phone || "",
      data.whatsapp || "",
      data.profession || "",
      data.reason || ""
    ];
    
    // Append the newly mapped row to the sheet
    sheet.appendRow(row);
    
    // Return a success response
    return ContentService
      .createTextOutput(JSON.stringify({ status: "success", message: "Row successfully added." }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return an error response if something fails
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
