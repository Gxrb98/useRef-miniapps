import React, {useRef, useState} from 'react'

const MediaPlayer = () => {

    const videoRef = useRef();
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        const video = videoRef.current;
        isPlaying ? video.pause() : video.play();
        setIsPlaying(!isPlaying);
    }
    
    return (
        <div>
            <video onClick={() => handlePlay()} width="400" ref={videoRef}>
                <source src="videos/Planet.mp4" type="video/mp4"/>
            </video>
            <button onClick={() => handlePlay()}>{isPlaying ? 'Pause' : 'Play'}</button> 
        </div>
    )
}

export default MediaPlayer
