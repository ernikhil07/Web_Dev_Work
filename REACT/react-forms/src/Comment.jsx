import { useState } from "react";
import "./Comment.css"
import CommentsForm from "./commentsForm";
export default function Comment(){

    let[comments, setComments]=useState([{
        username:"@nc",
        remarks:"Great",
        rating:4
    }]);

    let addNewComment = (comment)=>{
        setComments((currComments)=>[...currComments,comment]);
        console.log("Comment Added");
    };

    return(
        <>
        <div>
            <h3>All Comments</h3>
            {comments.map((comment,idx)=>(
                <div className="comment" key={idx}>
                <span>{comment.remarks}</span>
                &nbsp;
                <span>(rating={comment.rating})</span>
                <p>{comment.username}</p>
            </div>
            ))}
            
        </div>
        <hr />
        <hr />
        <CommentsForm addNewComment={addNewComment}></CommentsForm>
        </>
    )
}