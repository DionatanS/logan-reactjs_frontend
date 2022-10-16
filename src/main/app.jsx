import React from "react";
import '../common/template/dependencies'
import Footer from "../common/template/footer";
import Header from "../common/template/header";
import SideBar from "../common/template/sideBar";

export default props => (
    <div className="wrapper">
        <Header/>
        <SideBar/>
        <div className="content-wrapper">
            <h1>teste</h1>
        </div>
        <Footer/>
    </div>
)