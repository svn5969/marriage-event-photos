import React from 'react';
import ReactDOM from "react-dom";

import "./imageCompo.css";
import ImageComponent from "./ImageComponent"
const rootElement = document.getElementById("root");
const Gallery = () => {
    return (
        
             <div className="App">
      <h1>Modal popup</h1>
      <h4>To trigger the popup click the picture, please! </h4>
      <ImageComponent />
    </div>
        
    );
};

export default Gallery;
