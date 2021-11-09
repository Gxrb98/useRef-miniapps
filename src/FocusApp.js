import React, {useState, useRef} from 'react'

const FocusApp = () => {
    //Normalmente las variables finalizan con ref al usar useRef para identificarlas como una referencia
    const inputRef = useRef(); 
    const [text, setText] = useState("");
    
    
   
   
    const handleFocus = () => {
    const input = inputRef.current;
    input.focus();
    } 
    return (
        
        <div>
            <button onClick={() => handleFocus()}>Focus</button>
            <input ref={inputRef} type="text" value={text} onChange={(e) => setText(e.target.value)}/>
            
        </div>
    )
}

export default FocusApp;