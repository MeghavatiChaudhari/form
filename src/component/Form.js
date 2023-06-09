
import React from "react";

export const Form=()=>(
    <div className="container">
        <form className="form-group">
            <span  id="span1" style={{ marginLeft: "-500px", color: "grey" }}>TECHFACT</span>
            <br></br>
            <br></br>

            <h1 style={{ marginLeft: "-250px", color: "black" }}>Data Science Course</h1>
            <p style={{ marginLeft: "19px", padding: "16px" }}>
                Learn how to make informed decisions, create beautiful
                visualizations, and even try to predict future events
                through Machine Learning.
            </p>

            <button id="button1" style={{ padding: "7px", marginLeft: "-500px", borderRadius: "9px" }}>Learn more</button>

            <br></br>
            <br></br>
            <label className="labs" style={{ marginLeft: "-459px" }}>Knowledge level</label>
            <br></br>
            <br></br>
             <select className="abc" name="Knowledge level">
                <option value={"Beginner"}>Beginner</option>
                <option value={"Intermediate"}>Intermediate</option>
                <option value={"Advance"}>Advance</option>
            </select> 
        
            <br></br>
            <br></br>
            <label className="labs" style={{ padding: "40px", marginLeft: "-508px" }}>First Name</label>
            <br></br>
            <br></br>
            <input style={{ marginLeft: "-102px", borderRadius: "3px", padding: "6px", width:"488px" }} type="name" placeholder="Enter First name" required></input>
            <br></br>
            <br></br>
            <label className="labs" style={{ marginLeft: "-515px" }}>Last Name</label>
            <br></br>
            <br></br>
            <input style={{ marginLeft: "-100px", padding: "7px", borderRadius: "3px" , width:"488px" }} type="name" placeholder="Enter last name" required></input>
            <br></br>
            <br></br>
            <label  className="labs" style={{ marginLeft: "-558px" }}>Email</label>
            <br></br>
            <br></br>
            <input style={{ marginLeft: "-100px", padding: "7px", borderRadius: "3px" , width:"488px" }} type="email" placeholder="xyz@email.com"></input>
            <br></br>
            <br></br>
            <label  className="labs" style={{ marginLeft: "-478px" }}>Phone Number</label>
            <br></br>
            <br></br>
            <input style={{ marginLeft: "-100px", padding: "7px", borderRadius: "3px" , width:"488px"}}  placeholder="xxxxxxxxxx"></input>
            <br></br>
            <br></br>
            <label className="labs" style={{ marginLeft: "-380px" }}>I'd like to attend the course:</label>
            <br></br>
            <br></br>
            <select style={{marginLeft:"-100px" , padding:"7px", width:"180px" , borderRadius:"3px", width:"510px"}}>
                <option value={"Monday"}>Monday</option>
                <option value={"Tuesday"}>Tuesday</option>
                <option value={"Wednesday"}>Wednesday</option>
                <option value={"Thursday"}>Thursday</option>
                <option value={"Friday"}>Friday</option>
                <option value={"Saturday"}>Saturday</option>
                <option value={"Sunday"}>Sunay</option>
            </select>
            <br></br>
            <br></br>
            <label className="labs" style={{marginLeft:"-310px"}}>I'm interested in the following topics:</label>
            <br></br>
            <br></br>
            <select style={{marginLeft:"-100px" , width:"180px" , padding:"7px" , borderRadius:"3px", width:"510px"}}>
                <option value={"Statics"}>Statics</option>
                <option value={"Data Analysis"}>Data Analysis</option>
                <option value={"Data Visualization"}>Data Visualization"</option>
            </select>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <input style={{marginLeft:"-110px"}} type="checkbox" value={"I would like to subscribe to a Data Science online newsletter."}></input> I would like to subscribe to a Data Science online newsletter
            <br></br>
            <br></br>
            <label  className="labs" style={{marginLeft:"-470px"}}>Signature</label>
            <br></br>
            <br></br>
            <button style={{ height: "30px" , marginLeft:"-370px" , padding:"50px" , width:"180px" , borderRadius:"3px"}}></button>
            <br></br>
            <br></br>
            <br></br>
            <button style={{height:"40px" , width:"450px", padding:"7px", borderRadius:"3px", backgroundColor:"blue" , color:"white"}} type="Submit">SUBMIT</button>
        </form>
    </div>
)