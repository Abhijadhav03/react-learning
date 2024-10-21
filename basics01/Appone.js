// Manipulate the HTML DOM using Javscript
// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste Everyone";
// const root = document.getElementById("root");
// root.appendChild(heading);

// Manipulate the HTML DOM using React

// Create nested React Elements



// #parcel 
// -dev build
// -local server
// -hmr = hot module replacement
// -file watching algorithm- written in c++
// -caching - faster builds
// -image optimization
// -minification of file
// -bundling
// -compress 
// -consistent hashing 
// -code splitting 
// -differential bundling- to support older browsers
// -error handling
// -https hosting
// -tree shaking- remove unused code
// -differnt dev and prod bundles
// -


import React from 'react';
import ReactDOM from 'react-dom/client'
const heading = React.createElement(
    "h1",
    {
      id: "title",
      style: {
        background:"red",
      },
      className:"title"
    },
    "THIS IS NAMASTE REACT"
  );
  const heading1 = React.createElement(
    "h1",
    {
      id: "title",
    },
    "ABHISHEK JADHAV"
  );
  const heading2 = React.createElement(
    "h1",
    {
      id: "title",
    },
    "ABHISHEK JADHAV"
  );
  const container = React.createElement(
    "div",
    {
      id: "container",
    },
    [heading, heading1, heading2]
  );
  
  // create root using createRoot
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // passing react element inside root
  root.render(container);