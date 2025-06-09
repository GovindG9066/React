import { useState } from "react";
import "./Activity2LikeBtn.css"

export default function LikeBtn() {
    const [likecount,setLikecount]=useState(false);
    function clicktoggleLike() {
        setLikecount(!likecount)
    }
    let likestyle={color:"red"}
    return(
        <div>
            <p onClick={clicktoggleLike}>
                
                 {
                 likecount ? (<i className="likeBtn fa-solid fa-heart" style={likestyle}></i>)
                 :
                  (<i className="likeBtn fa-regular fa-heart"></i>)
                 }
                 </p>
            <p>{likecount}</p>
        </div>
    );
}