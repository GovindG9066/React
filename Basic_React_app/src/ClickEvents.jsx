function ClickBtn() {
    console.log("Hello world");
    
}

export default function ClickEvents() {
    return(
        <div>
            <button onClick={ClickBtn}>Click me</button>
        </div>
    );
}