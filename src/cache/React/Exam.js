import { useState } from "react";

function Exam(){
    const [cid,setCid] = useState("");
    const [pass,setPass] = useState("");
    const [email,setEmail] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        // if(!cid || !email || !pass){
        //     alert("all fields are required")
        // }
        const cidRegex = /^EXAM[A-Za-z0-9]{4}$/
        if(!cidRegex.test(cid)){
            alert("invalid candidate id")
        }
        const passRegex = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&])[A-Za-z0-9!@#$%^&]{8,10}/
        if(!passRegex.test(pass)){
            alert("invalid password")
        }
        
    }
    return(
        <div>
            <h2>Online Exam Login Form</h2>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <label>Candidate ID - </label>
                <input type="text" placeholder="Enter Candidate ID" value={cid} onChange={(e)=>setCid(e.target.value)}/>
                <br/>
                <br/>
                <label>Email</label>
                <input type="text" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <br/>
                <br/>
                <label>Password</label>
                <input type="text" placeholder="Enter Password" value={pass} onChange={(e)=>setPass(e.target.value)}/>
                <br/>
                <br/>
                <input type="submit" value="submit"/>
            </form>
        </div>
    )
}
export default Exam;