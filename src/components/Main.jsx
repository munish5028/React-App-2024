import React, { useState } from "react";
import "./Style.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
export default function Main() {
  return (
    <>
      <Sidebar />
      <div className="container-right">
        <div className="container-body">
          <div className="box-1">
            <div className="img-1">
              <img src="" />
            </div>
            <h2 className="Name">Munish Kumar</h2>
            <p className="para"> Developer in Toxsl Technologies</p>
          </div>
          <div className="box-2">
            <div className="img-1">
              <img src="" />
            </div>
            <h2>Ajay</h2>
            <p>Developer in Toxsl Technologies</p>
          </div>
          <div className="box-3">
            <div className="img-1">
              <img src="" />
            </div>
            <h2>Himanshu</h2>
            <p>Developer in Toxsl Technologies</p>
          </div>
          <div className="box-4">
            <div className="img-1">
              <img src="" />
            </div>
            <h2>Akash</h2>
            <p>Developer in Toxsl Technologies</p>
          </div>
        </div>
      </div>
    </>
  );
}
