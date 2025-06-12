function ClickBtn() {
    console.log("Hello world");
    
}
function nowHover() {
    console.log("I am not Click");
    
}
function DoubleClickme() {
    console.log("I was click twice");
    
}
function KeyClick() {
    console.log("down key was click");
    
}

export default function ClickEvents() {
    return(
        <div>
            <button onClick={ClickBtn}>Click me</button>
            <p onMouseOver={nowHover}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt eaque error odio quia unde deleniti culpa facere ut quasi sapiente exercitationem ad, nobis ipsum perspiciatis architecto veritatis autem ea! Cum?</p>
            <button onDoubleClick={DoubleClickme}>Click me Twice</button>
            <div onKeyDown={KeyClick}>hello i was click</div>
        </div>
    );
}