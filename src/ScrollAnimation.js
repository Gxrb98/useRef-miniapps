import React, {useState, useEffect, useRef} from 'react'

const ScrollAnimation = () => {
    const [background, setBackground] = useState("pink");
    const divRef = useRef();
    useEffect(() => {
        const handleScroll = () => {
            const div = divRef.current;
            /* Como el metodo getBoundingClientRect devuelve un objeto se puede
             desestructurar,  asi que lo hacemos con la variable y */
            const { y } = div.getBoundingClientRect();
            const backgroundColor = y <= 0 ? 'orange' : 'pink';
            setBackground(backgroundColor)
        } 

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);
    
    return (
        <div ref={divRef} style={{height: "180vh", background}}>  
            <h3>Scroll To change Background color</h3>
        </div>
    )
}

export default ScrollAnimation
