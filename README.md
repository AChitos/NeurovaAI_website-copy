# Neurova AI Website

Static site for Neurova AI hosted on GitHub Pages.

## Google Sheets integration (Newsletter + Contact)

Both the newsletter and contact forms post to a Google Apps Script Web App. Configure these globals in `index.html`:

- `window.NEWSLETTER_SHEET_ENDPOINT`: Your deployed Apps Script Web App URL
- `window.CONTACT_SHEET_ENDPOINT`: Optional; fallback to `NEWSLETTER_SHEET_ENDPOINT` if not set

Frontend JS posts FormData with `type` set to `newsletter` or `contact`, plus helpful fields like `source` and `page`.

Below is a minimal Apps Script you can paste in a new project (Extensions → Apps Script), then Deploy → New deployment → Type: Web app → Execute as: Me → Who has access: Anyone:

```javascript
function doPost(e) {
  try {
    const params = e.parameter || {};
    const type = (params.type || '').toLowerCase();
    const ts = new Date();

    // Configure sheet names
    const SUBSCRIBERS_SHEET = 'Subscribers';
    const LEADS_SHEET = 'Leads';

    const ss = SpreadsheetApp.getActive();
    const sheetName = type === 'contact' ? LEADS_SHEET : SUBSCRIBERS_SHEET;
    const sheet = ss.getSheetByName(sheetName) || ss.insertSheet(sheetName);

    // Ensure header row exists
    const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn() || 8).getValues()[0];
    const needed = type === 'contact'
      ? ['timestamp','name','email','phone','service','message','source','page']
      : ['timestamp','email','source','page'];
    let headerRowChanged = false;
    needed.forEach((h, i) => {
      if (!headers[i]) headerRowChanged = true;
    });
    if (headerRowChanged || headers.length === 0) {
      sheet.getRange(1, 1, 1, needed.length).setValues([needed]);
    }

    // Simple dedupe on email for newsletter only
    if (type !== 'contact' && params.email) {
      const data = sheet.getDataRange().getValues();
      const emailIx = data[0].indexOf('email');
      if (emailIx >= 0) {
        const found = data.slice(1).some(r => (r[emailIx] || '').toString().toLowerCase() === params.email.toLowerCase());
        if (found) return ContentService.createTextOutput(JSON.stringify({ ok: true, message: 'Already subscribed' })).setMimeType(ContentService.MimeType.JSON);
      }
    }

    // Build row
    const row = (type === 'contact')
      ? [ts, params.name || '', params.email || '', params.phone || '', params.service || '', params.message || '', params.source || '', params.page || '']
      : [ts, params.email || '', params.source || '', params.page || ''];
    sheet.appendRow(row);

    return ContentService.createTextOutput(JSON.stringify({ ok: true, message: 'Success' })).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, message: err.message })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

Notes:
- If you want separate spreadsheets for subscribers vs leads, change `SpreadsheetApp.getActive()` to `openById('<SHEET_ID>')` for each.
- The frontend uses `mode: 'no-cors'`, so the browser won’t read the response. The Apps Script still receives the data.
