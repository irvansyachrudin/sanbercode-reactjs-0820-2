import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">

      <header class="content">
        <div class="border">
          <h2>Form Pembelian Buah</h2>
          <div class="justify">
            Nama Pelanggan :&nbsp;
            <input type="text" />
          </div>
          <div class="justify">
            <div class="justify left">
              <input type="radio" />
              Semangka
              <br />
              <input type="radio" />
              Jeruk
              <br />
              <input type="radio" />
              Nanas
              <br />
              <input type="radio" />
              Salak
              <br />
              <input type="radio" />
              Anggur
              <br />
            </div>
            <div class="justify">
              Daftar Item :&nbsp;
              <input class="left2" type="radio" />
              Semangka
              <br />
            </div>
          </div>
          <div class="justify">
            <input type="submit" class="mintul" value="kirim"></input>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
