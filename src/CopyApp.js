import React, {useState, useRef} from 'react'

const CopyApp = () => {
    const [text, setText] = useState("Hola mundo");
    const [copied, setCopied] = useState(false);
    const inputRef = useRef();
//Funcion encargada de copiar el contenido del input
const handleCopy = () => {
    const input = inputRef.current;
    input.select();
    document.execCommand('copy');

    setCopied(true)
    setTimeout( () => setCopied(false), 2000 )
}
    return (
        <div>
            <input ref={inputRef}  type="text" value={text} onChange={(e) => setText(e.target.value)}/>
            <button onClick={() => handleCopy()}>Copy</button>
            {copied && <h4>Copied</h4>}
        </div>
    )
}

export default CopyApp;
