import React from "react";
import comment from '../../assets/comment.svg'
import pen from "../../assets/pen.svg"
export const Widget=()=>
{
    return(
        <>
        <div className="widget">
            <h4>The Overflow Blog</h4>
            <div className="rightsidebardiv1">
               <div className="rightsidebardiv2">
                    <img src={pen} alt="pen" width='18'/>
                    <p>How Bloomberg’s engineers built a culture of knowledge sharing</p>
               </div>
               <div className="rightsidebardiv2">
                    <img src={pen} alt="pen" width='18'/>
                    <p>Making computer science more humane at Carnegie Mellon (ep. 585)</p>
               </div>
            </div>
            <h4>Featured on Meta</h4>
            <div className="rightsidebardiv1">
               <div className="rightsidebardiv2">
                    <img src={comment} alt="pen" width='18'/>
                    <p>Starting the Prompt Design Site: A New Home in our Stack Exchange Neighborhood</p>
               </div>
               <div className="rightsidebardiv2">
                    <img src={comment} alt="pen" width='18'/>
                    <p>Colors update: A more detailed look</p>
               </div>
               <div className="rightsidebardiv2">
                    <img src={"sologo.jpeg"} alt="pen" width='18'/>
                    <p>Temporary policy: Generative AI (e.g., ChatGPT) is banned</p>
               </div>
               <div className="rightsidebardiv2">
                    <img src={"sologo.jpeg"} alt="pen" width='18'/>
                    <p>Testing native, sponsored banner ads on Stack Overflow (starting July 6)</p>
               </div>
            </div>
            <h4>Hot Meta Posts</h4>
            <div className="rightsidebardiv1">
               <div className="rightsidebardiv2">
                    <p>36</p>
                    <p>Among 250 consecutive answers, how many are problematic?</p>
               </div>
               <div className="rightsidebardiv2">
                    <p>7</p>
                    <p>Audit failed: why? Reason was not given</p>
               </div>
            </div>
        </div>
        </>
    )
}

export const WidgetTags=()=>
{
    const tags=['c','c++','java','python','DataStructures','Database Management','javaScript','HTML','CSS','reactjs','nodejs','mongodb']
    return(
        <>
        <div className="widgettags">
            <h3>Watched Tags</h3>
            <div className="widgettagsdiv">
                {
                    tags.map((tag)=>
                    (
                        <p key={tag}>{tag}</p>
                    ))
                }
            </div>
        </div>
        </>
    )
}