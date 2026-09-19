/**
 * Google Apps Script to handle Medela Concertedly "Join Community" Submissions.
 * 
 * Setup Instructions:
 * 1. Open your Google Sheet
 * 2. Go to Extensions > Apps Script
 * 3. Delete the default code and paste this entire file's contents
 * 4. Click Deploy > New Deployment
 * 5. Select type "Web app"
 * 6. Set "Execute as" to "Me"
 * 7. Set "Who has access" to "Anyone"
 * 8. Click Deploy and authorize the script
 * 9. Copy the "Web app URL" provided to use in your frontend fetch request
 */

const SHEET_NAME = "Sheet1"; // Update this if your sheet tab is named differently (e.g., "Responses")

function doPost(e) {
  try {
    const doc = SpreadsheetApp.getActiveSpreadsheet();
    // Default to SHEET_NAME or the first sheet if not found
    const sheet = doc.getSheetByName(SHEET_NAME) || doc.getSheets()[0];
    
    let data = {};
    
    // Parse incoming data based on how it was sent from the client
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else if (e.parameter) {
      data = e.parameter;
    }
    
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

// Handle preflight requests for CORS if needed
function doOptions(e) {
  return ContentService
    .createTextOutput("OK")
    .setMimeType(ContentService.MimeType.TEXT);
}
