
import React from "react";
import { useState } from "react";
export const Form=()=>{


    const[firstname , setFirstname] = useState('');
    const[lastname , setLastname]=useState('');
    const[email,setEmail]=useState('');
    const[phoneno , setPhoneno]=useState('');
    const[knowledgelevel , setKnowledgelevel] = useState('');
    const[day ,setDay]=useState('');
    const[course , setCourse]=useState('');
    const[subscribe ,setSubscribe]=useState('');
    const handleData=(e)=>{
        e.preventDefault();
        console.log(knowledgelevel,firstname,lastname,email,phoneno, day,course,subscribe);
    }

    return(
    <div className="container">
        <form className="form-group" autoComplete="off" onSubmit={handleData}>
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
             <select className="abc" name="Knowledge level" onChange={(e)=>setKnowledgelevel(e.target.value)} value={knowledgelevel}>
                <option value={"Beginner"}>Beginner</option>
                <option value={"Intermediate"}>Intermediate</option>
                <option value={"Advance"}>Advance</option>
            </select> 
        
            <br></br>
            <br></br>
            <label className="labs" style={{ padding: "40px", marginLeft: "-508px" }}>First Name</label>
            <br></br>
            <br></br>
            <input style={{ marginLeft: "-102px", borderRadius: "3px", padding: "6px", width:"488px" }} type="name" placeholder="Enter First name" required 
             onChange={(e)=>setFirstname(e.target.value)} value={firstname}
             ></input>
            <br></br>
            <br></br>
            <label className="labs" style={{ marginLeft: "-515px" }}>Last Name</label>
            <br></br>
            <br></br>
            <input style={{ marginLeft: "-100px", padding: "7px", borderRadius: "3px" , width:"488px" }} type="name" placeholder="Enter last name" required
              onChange={(e)=>setLastname(e.target.value)} value={lastname}
              ></input>
            <br></br>
            <br></br>
            <label  className="labs" style={{ marginLeft: "-558px" }}>Email</label>
            <br></br>
            <br></br>
            <input style={{ marginLeft: "-100px", padding: "7px", borderRadius: "3px" , width:"488px" }} type="email" placeholder="xyz@email.com" onChange={(e)=>setEmail(e.target.value)} value={email}></input>
            <br></br>
            <br></br>
            <label  className="labs" style={{ marginLeft: "-478px" }}>Phone Number</label>
            <br></br>
            <br></br>
            <input style={{ marginLeft: "-100px", padding: "7px", borderRadius: "3px" , width:"488px"}}  placeholder="xxxxxxxxxx"
            onChange={(e)=>setPhoneno(e.target.value)} value={phoneno}
            ></input>
            <br></br>
            <br></br>
            <label className="labs" style={{ marginLeft: "-380px" }}>I'd like to attend the course:</label>
            <br></br>
            <br></br>
            <select style={{marginLeft:"-100px" , padding:"7px", width:"180px" , borderRadius:"3px", width:"510px"}} 
             onChange={(e)=>setDay(e.target.value)} value={day}>
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
            <select style={{marginLeft:"-100px" , width:"180px" , padding:"7px" , borderRadius:"3px", width:"510px"}}
             onChange={(e)=>setCourse(e.target.value)} value={course}>
                <option value={"Statics"}>Statics</option>
                <option value={"Data Analysis"}>Data Analysis</option>
                <option value={"Data Visualization"}>Data Visualization"</option>
            </select>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <input style={{marginLeft:"-110px"}} type="checkbox" 
            onChange={(e)=>setSubscribe(e.target.value)} value={subscribe} ></input> I would like to subscribe to a Data Science online newsletter
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
    }