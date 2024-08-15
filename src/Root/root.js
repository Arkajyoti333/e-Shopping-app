import React from "react";
import { Footer, Navbar } from "../components/IndexCom";
import { Outlet } from "react-router-dom";

const Root=()=>{

    return(
        <>
           <Navbar/>
           <Outlet/>
           <Footer/>
        </>
    );
}

export default Root;