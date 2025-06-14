import { useState } from "react";

export default function LudoGame2(){
    let[click,setClick]=useState({Green:0,Blue:0,Yellow:0,Red:0});

    function GreenClick() {
        setClick((preClick)=>{
            return{...preClick,Green:preClick.Green+1}
        })
    }
    function BlueClick() {
        setClick((preClick)=>{
            return{...preClick,Blue:preClick.Blue+1}
        })
    }
    return(
        <div>
            
            <button onClick={GreenClick} style={{backgroundColor:"green"}} >+1</button>
            <p>Green Move- {click.Green}</p>
            <button style={{backgroundColor:"red"}}>+1</button>
            <p>red Move</p>
            <button style={{backgroundColor:"blue"}} onClick={BlueClick}>+1</button>
            <p>blue Move- {click.Blue}</p>
            <button style={{backgroundColor:"yellow"}}>+1</button>
            <p>yellow Move</p>
        </div>
    );
}