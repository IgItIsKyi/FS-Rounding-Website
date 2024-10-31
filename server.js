// server.js
const express = require("express");
const XLSX = require("xlsx");


var app = express();
app.use(express.json());
const PORT = 3000;

// Endpoint to read and return the Excel file data
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

app.get("/WR", (req, res) => {
    res.sendFile("WhileRounding.html", {root: __dirname });
})

app.post("/contact", (req, res) => {
  res.status(200).json({ message: "Data received" });

  data = req.body;

  var site = data.Site;
  var sheetCreated = false;
  console.log("data: ", data)

  const workbook = XLSX.readFile("Test.xlsx");
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
  
      // convert JSON to worksheet
      var worksheet = XLSX.utils.json_to_sheet(data);
      XLSX.utils.book_append_sheet(workbook, worksheet, site);
      XLSX.writeFile(workbook, "Test.xlsx")
  
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
          XLSX.writeFile(workbook, "Test.xlsx")
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
          XLSX.writeFile(workbook, "Test.xlsx")
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
        XLSX.writeFile(workbook, "Test.xlsx")
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
        XLSX.writeFile(workbook, "Test.xlsx")
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
        XLSX.writeFile(workbook, "Test.xlsx")
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
        XLSX.writeFile(workbook, "Test.xlsx")
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
        XLSX.writeFile(workbook, "Test.xlsx")
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
        XLSX.writeFile(workbook, "Test.xlsx")
        console.log("Row added to CCH sheet successfully...")
      }
  }
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
