import React from "react";
import ReactDOM from "react-dom";

const Title = ()=> {
    return <h1 className="title">React Js Component composition : Inner Component</h1>
}

const HeadingComponent = () => {
    return <div className="heading">
        <Title /> 
        <h1>Outer Component</h1>
    </div>
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />)