import { useState } from "react";

function Ecom(){
    const [fname,setFname] = useState("");
    const [lname,setLname] = useState("");
    const [pincode,setPincode] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        if(!fname || !lname || !pincode || !email || !phone){
            alert("all fields are required")
        }
        const pincodeRegex = /^[0-9]{6}$/
        if(!pincodeRegex.test(pincode)){
            alert("invalid pincode")
        }
        const phoneRegex = /^[0-9]{10}$/
        if(!phoneRegex.test(phone)){
            alert("invalid phone number")
        }
        alert("form submitted")

        
    }
    return(
        <div>
            <h2>Checkout Form Ecom Website</h2>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <label>First Name</label>
                <input type="text" placeholder="Enter first name" value={fname} onChange={(e)=>setFname(e.target.value)}/>
                <br/>
                <br/>
                <label>Last Name</label>
                <input type="text" placeholder="Enter last name" value={lname} onChange={(e)=>setLname(e.target.value)}/>
                <br/>
                <br/>
                <label>Pincode</label>
                <input type="number" placeholder="Enter pincode" value={pincode} onChange={(e)=>setPincode(e.target.value)}/>
                <br/>
                <br/>
                <label>Email</label>
                <input type="text" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <br/>
                <br/>
                <label>Phone No</label>
                <input type="number" placeholder="Enter phone no" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                <br/>
                <br/>
                <input type="submit" value="submit"/>
            </form>
        </div>
    )
}
export default Ecom;