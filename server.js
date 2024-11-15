// server.js
const PORT = process.env.PORT || 3000;

const express = require("express");
const XLSX = require("xlsx");
const cors = require('cors');
const path = require('path');

var app = express();
app.use(express.json());



// Access headers
app.use(cors({
  origin: '*',
  methods: 'GET, POST',
  allowedHeaders: 'Content-Type',
}));

// Endpoint to read and return the Excel file data
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

// Download excel file
app.get('/download-excel', (req, res) => {
  const filePath = path.join(__dirname, 'public', 'Test.xlsx');
  console.log("Excel file path:", filePath)
  res.download(filePath, 'Test.xlsx', (err) => {
      if (err) {
          console.error('Error downloading file:', err);
          res.status(500).send('File not found');
      }
  });
});

// Display While Rounding Page
app.get("/WR", (req, res) => {
    res.sendFile("WhileRounding.html", {root: __dirname });
})

// Post form to send to excel file
app.post("/WR", (req, res) => {
  

  data = req.body;

  console.log(data)


  var site = data.Site;

  console.log("Site", site)
  var sheetCreated = false;
  console.log("data: ", data)

  const workbook = XLSX.readFile("public/Test.xlsx");
  // Convert XLSX to JSON
  let worksheets = {};
  for (const sheetName of workbook.SheetNames) {
  
      worksheets[sheetName] = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
  
      if(site == sheetName){
          console.log("Sheet is found.")
          sheetCreated = true;
  
      }
  }
  
  // console.log("json test of worksheets:\n", JSON.stringify(worksheets, null, 5), "\n\n");
  
  if(sheetCreated == false) {
      console.log("Sheet not found. Creating sheet...")
      jdata = [
        data
      ]
      // convert JSON to worksheet
      var worksheet = XLSX.utils.json_to_sheet(jdata);
      XLSX.utils.book_append_sheet(workbook, worksheet, site);
      XLSX.writeFile(workbook, "public/Test.xlsx")

      console.log("Sheet ", site, " added.")
  
  } else {
      console.log("Sheet was already created. Pushing to next row")
      // Sorted by South to North
      if(site == "PBH"){
          console.log("Adding info to PBH Sheet...")
          worksheets.PBH.push({  
            "UID": data.CustomerUID,
            "Summary": data.Summary,
            "Description": data.Description,
            "Notes": data.Notes,
            "Area": data.Area,
            "Status": data.Status,
            "Owner": data.OwnerID
          });
          XLSX.utils.sheet_add_json(workbook.Sheets[site], worksheets.PBH)
          XLSX.writeFile(workbook, "public/Test.xlsx")
          console.log("Row added to PBH sheet successfully...")
      }
  
      if(site == "CCMC"){
  
          console.log("Adding info to CCMC Sheet...")
          worksheets.CCMC.push({  
            "UID": data.CustomerUID,
            "Summary": data.Summary,
            "Description": data.Description,
            "Notes": data.Notes,
            "Area": data.Area,
            "Status": data.Status,
            "Owner": data.OwnerID
          });
          XLSX.utils.sheet_add_json(workbook.Sheets[site], worksheets.CCMC)
          XLSX.writeFile(workbook, "public/Test.xlsx")
          console.log("Row added to CCMC sheet successfully...")
      }
  
      if(site == "HRMC"){
        console.log("Adding info to HRMC Sheet...")
        worksheets.HRMC.push({
          "UID": data.CustomerUID,
          "Summary": data.Summary,
          "Description": data.Description,
          "Notes": data.Notes,
          "Area": data.Area,
          "Status": data.Status,
          "Owner": data.OwnerID
        });
        XLSX.utils.sheet_add_json(workbook.Sheets[site], worksheets.HRMC)
        XLSX.writeFile(workbook, "public/Test.xlsx")
        console.log("Row added to HRMC sheet successfully...")        
  
      }
  
      if(site == "GTWY"){
  
        console.log("Adding info to GTWY Sheet...")
        worksheets.GTWY.push({  
          "UID": data.CustomerUID,
          "Summary": data.Summary,
          "Description": data.Description,
          "Notes": data.Notes,
          "Area": data.Area,
          "Status": data.Status,
          "Owner": data.OwnerID
        });
        XLSX.utils.sheet_add_json(workbook.Sheets[site], worksheets.GTWY)
        XLSX.writeFile(workbook, "public/Test.xlsx")
        console.log("Row added to GTWY sheet successfully...")
      }
  
      if(site == "CORP"){
        console.log("Adding info to CORP Sheet...")
        worksheets.CORP.push({  
          "UID": data.CustomerUID,
          "Summary": data.Summary,
          "Description": data.Description,
          "Notes": data.Notes,
          "Area": data.Area,
          "Status": data.Status,
          "Owner": data.OwnerID
        });
        XLSX.utils.sheet_add_json(workbook.Sheets[site], worksheets.CORP)
        XLSX.writeFile(workbook, "public/Test.xlsx")
        console.log("Row added to CORP sheet successfully...")
      }  
  
      if(site == "HFBC"){
        console.log("Adding info to HFBC Sheet...")
        worksheets.HFBC.push({  
          "UID": data.CustomerUID,
          "Summary": data.Summary,
          "Description": data.Description,
          "Notes": data.Notes,
          "Area": data.Area,
          "Status": data.Status,
          "Owner": data.OwnerID
        });
        XLSX.utils.sheet_add_json(workbook.Sheets[site], worksheets.HFBC)
        XLSX.writeFile(workbook, "public/Test.xlsx")
        console.log("Row added to HFBC sheet successfully...")
      }
  
      if(site == "VH"){
        console.log("Adding info to VH Sheet...")
        worksheets.VH.push({  
          "UID": data.CustomerUID,
          "Summary": data.Summary,
          "Description": data.Description,
          "Notes": data.Notes,
          "Area": data.Area,
          "Status": data.Status,
          "Owner": data.OwnerID
        });
        XLSX.utils.sheet_add_json(workbook.Sheets[site], worksheets.VH)
        XLSX.writeFile(workbook, "public/Test.xlsx")
        console.log("Row added to VH sheet successfully...")
      }
      if(site == "CCH"){
        console.log("Adding info to CCH Sheet...")
        worksheets.CCH.push({  
          "UID": data.CustomerUID,
          "Summary": data.Summary,
          "Description": data.Description,
          "Notes": data.Notes,
          "Area": data.Area,
          "Status": data.Status,
          "Owner": data.OwnerID
        });
        XLSX.utils.sheet_add_json(workbook.Sheets[site], worksheets.CCH)
        XLSX.writeFile(workbook, "public/Test.xlsx")
        console.log("Row added to CCH sheet successfully...")
      }
  }
  return res.sendStatus(201);
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
