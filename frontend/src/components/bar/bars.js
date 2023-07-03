import React from "react";
import { NavLink } from "react-router-dom";
import { Widget,WidgetTags } from "../widgets/widgets";
import earth from "../../assets/earth.svg"
export const Leftbar=()=>
{
    return(
        <>
        <div className="leftsidebar">
            <nav className="sidenav">
                <NavLink to="/" className='sidenavlinks' activeClassName='active'>
                    <p>Home</p>
                </NavLink>
                <div className="sidenavdiv">
                    <div><p>Public</p></div>
                    <NavLink to='/questions' className='sidenavlinks' activeClassName='active' style={{paddingLeft:'40px'}}>
                        <img src={earth} alt="globe" width={'15px'}/>
                        <p style={{paddingLeft:'10px'}}>Questions</p>
                    </NavLink>
                    <NavLink to='/tags' className='sidenavlinks' activeClassName='active' style={{paddingLeft:'40px'}}>
                        <p>Tags</p>
                    </NavLink>
                    <NavLink to='/users' className='sidenavlinks' activeClassName='active' style={{paddingLeft:'40px'}}>
                        <p>users</p>
                    </NavLink>
                </div>
            </nav>
        </div>
        </>
    )
}

export const Mainbar=()=>
{
    return(
        <>
        </>
    )
}

export const Rightbar=()=>
{
    return(
        <>
        <aside className="rightsidebar">
            <Widget/>
            <WidgetTags/>
        </aside>
        </>
    )
}