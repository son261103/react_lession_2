import './App.css';
import JSX_Expression from "./components/JSX_Expression";
import FunComp from "./components/FunComp";
// import FunCom1 from "./components/FunCom1";
import ClassComp from "./components/ClassComp";
import ClassCompState from "./components/ClassCompState";
function App() {
    return (
        <div className="App">
            <header>
                <div className="container">
                    <img src={"https://vptech.vn/wp-content/uploads/2023/07/Phone-2.png"} alt="logo của tôi"/>
                </div>
                <hr/>
            </header>
            <JSX_Expression/>
            <hr/>
            <FunComp rendeFullName= "Phạm Lê Sơn" renderCompany="VPTech" />
            <hr/>
            {/*<FunCom1 renderData="data owr ddaay"/>*/}
            <hr/>
            {/*<ClassComp FullName="Phạm Lê Sơn" Company="VPTech"/>*/}
            <ClassComp FullName="Phạm Lê Sơnnnnnnnnnnnn" Company="VPTech"/>
            <hr/>
            <ClassCompState />
        </div>
    );

}

export default App;
