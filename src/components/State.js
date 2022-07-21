import React, {useState} from "react";

const State = () => {

    const [text, setText] = useState("No click")

    return (
        <div className="container">
            <button onClick={() => setText("Click")}>Click me</button>
            <p>{ text }</p>
        </div>


    )

}
export default State;