import { useState } from "react";
export default function Comments(addNewComment){
    let [formData,setFormData]= useState({
        username:"",
        remarks:"",
        rating: 5,
    });

    let handleInputChange= (event)=>
    {
        setFormData((currData)=>{
            return{...currData, [event.target.name]: [event.target.value] };
        })
    }

    let handleSubmit =(event)=>{
        console.log(formData);
        addNewComment(formData);
        event.preventDefault();
        setFormData({
        username:"",
        remarks:"",
        rating: 5,
    })
    }

    return(
        <div>
            <h4>Give a Comment</h4>

            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    placeholder="Username" 
                    value={formData.username } 
                    onChange={handleInputChange}
                    id="username"
                    name="username"
                />
                <br /><br />

                <label htmlFor="remarks">Remarks</label>
                <textarea 
                    placeholder="Add few Remarks"
                    value={formData.remarks}
                    onChange={handleInputChange}
                    id="remarks"
                    name="remarks"
                >
                </textarea> 
                <br /><br />

                <label htmlFor="rating">Rating</label>
                <input 
                    type="number" 
                    value={formData.rating} 
                    placeholder="rating" 
                    min={1} 
                    max={5} 
                    onChange={handleInputChange}
                    id="rating"
                    name="rating"
                />
                    <br /><br />

                <button>Add Comment</button>
            </form>
        </div>
    )
}