import ClassComp from "./ClassComp";
import React from "react";
import ReactDOM from "react-dom/client";

const elementClass = <ClassComp FullName="Phạm Lê Sơn" Company="VPTech"/>
ReactDOM.render(
    elementClass,
    document.getElementById("root")
)