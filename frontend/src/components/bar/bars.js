import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import earth from "../../assets/earth.svg";
import { Questions, QuestionsList } from "../questions/questions";
import { Widget, WidgetTags } from "../widgets/widgets";
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
    var questionslist=[{
        id:1,
        votes:2,
        noOfAnswers:2,
        QuestionTitle:'what is your name',
        QuestionBody:'your name',
        QuestionTags:["Html","css"],
        userPosted:'teja',
        askedOn:'oct 9'
    }]
    const location=useLocation();
    return(
        <>
        <div className="mainbar">
            <div className="mainbarheader">
                {
                    location.pathname==='/'?<h1>Top Questions</h1>:<h1>All Questions</h1>
                }
                <Link to='/askquestions' className="askquestion">Ask Questions</Link>
            </div>
            <div>
                {
                    questionslist===null?<h1>Loading...</h1>:
                    <>
                    <p>{questionslist.length} questions</p>
                    <QuestionsList questionslist={questionslist}/>
                    </>
                }
            </div>
        </div>
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