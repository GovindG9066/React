import { useState } from "react";

export default function LudoGame() {
    let [move,setMove]=useState({blue:0,red:0,green:0,yellow:0});

    let updataBlue=()=>{
        setMove((premove)=>{
            return {...premove,blue:premove.blue+1}           
        })
    }
     let updateGreen=()=>{
        setMove((premove)=>{
            return {...premove,green:premove.green+1}
        })

    }
     let updataYellow=()=>{
        setMove((premove)=>{
            return {...premove,yellow:premove.yellow+1}
        })

    }
     let updataRed=()=>{
        setMove((premove)=>{
            return{...premove,red:premove.red+1}
        })

    }
    
    return(
        <div>
            <p>Game Begin</p>
            <p>green moves- {move.green}</p>
            <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>

            <p>blue moves- {move.blue}</p>
            <button style={{backgroundColor:"blue"}} onClick={updataBlue}>+1</button>

            <p>yellow moves- {move.yellow}</p>
            <button style={{backgroundColor:"yellow"}} onClick={updataYellow}>+1</button>

            <p>red moves- {move.red}</p>
            <button style={{backgroundColor:"red"}} onClick={updataRed}>+1</button>
        </div>
    );
}