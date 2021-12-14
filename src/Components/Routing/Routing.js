import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import ContactUs from "../ContactUs/ContactUs";
import Pagination from "../Pagination/Pagination";

export default class Routing extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<h1>Home Page Works!!!</h1>} />
          <Route path="/about" element={<h1>About us Component</h1>} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/users" element={<Pagination />} />
        </Routes>
      </div>
    );
  }
}
