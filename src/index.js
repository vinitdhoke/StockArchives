import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";
var Papa = require("papaparse");
function convertCsvToJson() {
  const csvFilePath = require("../assets/files/test.csv");

  Papa.parse(csvFilePath, {
    header: true,
    download: true,
    skipEmptyLines: true,
    // Here this is also available. So we can call our custom class method
    complete: function(results) {
      console.log("Finished:", results.data);
    }
  });
}
function App() {
  return (
    <div className="App">
      <h1>Hellss CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="App">
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {/* Pass FilePond properties as attributes */}
        <FilePond server="../assets/files/" onupdatefiles={fileItems => {}} />
        <button className="pressMe" onClick={() => convertCsvToJson()}>
          Click Mes!
        </button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
