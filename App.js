import React from "react";
import ReactDOM from "react-dom";

const Title = ()=> {
    return <h1 className="title">React Js Component composition : Inner Component</h1>
}
const name = "Learn React"
const HeadingComponent = () => {
    return <div className="heading">
        <Title /> 
        <h1>Outer Component {name}</h1>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />)