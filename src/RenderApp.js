import React, {useState, useEffect, useRef} from 'react'

const RenderApp = () => {

    const [text, setText] = useState("");
    const renderRef = useRef(1);

    useEffect(() => {
        renderRef.current++;
    })
    return (
        <div>
            <input type="text" 
            value={text} 
            onChange={(e) => setText(e.target.value)}
            />      
            <h2>Render: {renderRef.current}</h2>{} 
        </div>
    )
}

export default RenderApp
