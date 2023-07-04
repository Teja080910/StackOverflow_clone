import React from "react";
// import  { Leftbar,Rightbar,Mainbar } from "../bar/bars";
// import Navbar from "../navbar/navbar";
export const Questions=(questions)=>
{
    return(
        <>
        <div className="displyanswerscon">
            <div className="displayvotes">
                <p>{questions.votes}</p>
                <p>Votes</p>
            </div>
            <div></div>
        </div>
        </>
    )
}

export const QuestionsList=(questionslist)=>
{
    return(
        <>
        {
            questionslist.map((ques)=>
            (
                <Questions questions={ques} key={ques.id}/>
            ))
        }
        </>
    )
}