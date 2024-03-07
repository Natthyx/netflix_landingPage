import React, {useState} from "react";

function Button(props){
const [isClicked ,setIsClicked] = useState(false)
function handleClick(){
    setIsClicked(!isClicked)
}
return(
    <div>
        <button onClick={handleClick}>{props.question} {isClicked? <span>X</span> : <span>+</span>}</button>
        {isClicked && <p>{props.answer}</p>}
    </div>
)
}

export default Button
