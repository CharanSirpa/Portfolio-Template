const RECEIPIENT_MAIL = "sricharansirpa@gmail.com";
const EMAIL_SUBJECT = "tried reaching you";
const filterValueKey = "NO"
const setValueKey = "YES"
function execute()
{
  filterRowsByColumn("sheet1")
}

function filterRowsByColumn(sheet) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheet);
  var dataRange = sheet.getDataRange();
  var values = dataRange.getValues();
  console.log(values)
  values.forEach((row,Index)=>{
    if(row[3] ===filterValueKey){
      sendMail(row)
      setColumnValueInRow("sheet1",Index,3,setValueKey)
    }
  })
}

function sendMail(record){
  const emailSubject = `${record[0]}  ${EMAIL_SUBJECT}`;
    console.log(record);
    const emailBody = `Hi Teja,\n  \t\t ${record[0]} tried to reach out through your portfolio...below are the details  \n 
    Mobile: ${record[1]} 
    Message: ${record[2] ?? ''}`;
    GmailApp.sendEmail(RECEIPIENT_MAIL,emailSubject,emailBody);
}

function setColumnValueInRow(sheetName, rowIndex,columnIndex, value) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  var cell = sheet.getRange(rowIndex+1, columnIndex+1).setValue(value);
  console.log(cell.getValue());
}