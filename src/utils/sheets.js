// ============================================================
//  GOOGLE SHEETS INTEGRATION
//  Replace the URL below with your Apps Script Web App URL
//  Full setup guide is in README.md
// ============================================================
const SHEETS_WEBHOOK_URL = 'https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec';

export async function submitToSheets(data, formType = 'General') {
  try {
    await fetch(SHEETS_WEBHOOK_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ formType, ...data }),
    });
    return { success: true };
  } catch (err) {
    console.error('Sheets error:', err);
    return { success: false, error: err.message };
  }
}
