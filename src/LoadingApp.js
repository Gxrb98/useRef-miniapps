import React, {useState} from 'react'
import Card from './Card'


const LoadingApp = () => {
    const [show, setShow] = useState(false);
    const [btn, setBtn] = useState(false)
    return (
        <div>
            <button onClick={() => {setShow(!show); setBtn(!btn)}}>
                {btn ? 'Hide' : 'Show '}
            </button>
            { show && <Card /> } 
        </div>
    )
}

export default LoadingApp
