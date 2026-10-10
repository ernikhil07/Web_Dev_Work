import { useState } from "react";
export default function Form(){

    let [formData, setFormData] = useState({
        fullName: "",
        username: "",
        password: "",
    });
    let handleInputChange= (event) =>{
    setFormData((currData) =>{
            return{...currData,[event.target.name]:event.target.value};
        });
    };

    let handleSubmit=(event)=>{
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            username: "",
            password: "",
        });
    };
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullname">Full Name</label>
            
            <input 
                onChange={handleInputChange} 
                placeholder="Enter Full Name" 
                type="text" 
                value={formData.fullName} 
                id="fullname"
                name="fullName"
            />
            <br /><br />
            <label htmlFor="username">Username</label>
            <input 
                onChange={handleInputChange} 
                placeholder="Enter Username Name" 
                type="text" 
                value={formData.username} 
                id="username"
                name="username"
            />
            <br /><br />
            <label htmlFor="password">Password</label>
            <input 
                onChange={handleInputChange} 
                placeholder="Enter Password" 
                type="password" 
                value={formData.password} 
                id="password"
                name="password"
            />
            <br /><br />
            <button>Submit</button>
        </form>
    )
}