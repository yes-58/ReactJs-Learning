import React from "react";
import ReactDOM from "react-dom";

const  heading = React.createElement('h1',{},"heading");

//React Element
const jsxHeading = (
    <h1 className="head">
        JSX Heading in React
    </h1>
);






const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading)