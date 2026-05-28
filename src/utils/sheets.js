/**
 * Google Sheets Integration for PathWave International
 *
 * SETUP INSTRUCTIONS:
 * ─────────────────────────────────────────────────────
 * 1. Go to https://script.google.com and create a New Project.
 *
 * 2. Paste this Apps Script code:
 *
 *   function doPost(e) {
 *     var sheet = SpreadsheetApp.openById('YOUR_SHEET_ID').getActiveSheet();
 *     var data = JSON.parse(e.postData.contents);
 *     var row = [
 *       new Date(),
 *       data.formType || '',
 *       data.name || '',
 *       data.email || '',
 *       data.phone || '',
 *       data.destination || '',
 *       data.level || '',
 *       data.message || '',
 *       data.recommend || '',
 *       data.overallRating || '',
 *       data.guidanceRating || '',
 *       data.visaRating || '',
 *     ];
 *     sheet.appendRow(row);
 *     return ContentService
 *       .createTextOutput(JSON.stringify({ result: 'success' }))
 *       .setMimeType(ContentService.MimeType.JSON);
 *   }
 *
 * 3. Create a Google Sheet at sheets.google.com using your
 *    pathwaveinternational.com Google account.
 *    Add headers in Row 1:
 *    Timestamp | Form Type | Name | Email | Phone | Destination |
 *    Level | Message | Recommend | Overall Rating | Guidance Rating | Visa Rating
 *
 * 4. Copy the Sheet ID from its URL:
 *    https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit
 *    Paste it in the Apps Script where it says 'YOUR_SHEET_ID'.
 *
 * 5. In Apps Script: click Deploy > New Deployment > Web App.
 *    Set "Execute as" = Me, "Who has access" = Anyone.
 *    Click Deploy and copy the Web App URL.
 *
 * 6. Paste that URL below as SHEETS_WEBHOOK_URL.
 * ─────────────────────────────────────────────────────
 */

// ✅ REPLACE THIS with your deployed Apps Script Web App URL:
const SHEETS_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbzYBtyk4MUagMOq68cRnv4qTusZyEibtUR0s_ZZRk_70-jE1RCU7VWD8HCrgvLJOKM0/exec';

/**
 * Submit any form data to Google Sheets via the Apps Script webhook.
 * @param {Object} data - Key/value pairs to log
 * @param {string} formType - Label like 'Consultation' or 'Feedback'
 * @returns {Promise<{success: boolean, error?: string}>}
 */
export async function submitToSheets(data, formType = 'General') {
  try {
    const payload = { formType, ...data };
    const response = await fetch(SHEETS_WEBHOOK_URL, {
      method: 'POST',
      // Note: Google Apps Script requires 'no-cors' for cross-origin POST from browser
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    // no-cors means we can't read the response body, but if no error thrown it succeeded
    return { success: true };
  } catch (err) {
    console.error('Google Sheets submission error:', err);
    return { success: false, error: err.message };
  }
}
