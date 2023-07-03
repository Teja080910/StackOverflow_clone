import React from "react";
import Navbar from "../navbar/navbar";
import { Leftbar,Mainbar,Rightbar } from "../bar/bars";
export const Home=()=>
{
    return(
        <>
        <Navbar/>
        <div className="homecon1">
            <Leftbar/>
            <div className="homecon2">
                <Mainbar/>
                <Rightbar/>
            </div>
        </div>
        </>
    )
}