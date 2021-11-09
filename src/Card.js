import React, {useState, useEffect, useRef} from 'react';
import GetPost from './helper/GetPost';
const Card = () => {
    const [post, setPost] = useState({title: "post1"});
    const [loading, setLoading] = useState(true);
    const isMountedRef = useRef(true);
    const updatePost = () =>{
        GetPost()
            .then( (newPost) =>{ 
                
               setTimeout( () => {
                if(isMountedRef.current){    
                setPost(newPost);
                setLoading(false)
                }
               }, 2000)
            } )
    }

    useEffect( () =>{
        updatePost();
        return () => {
            isMountedRef.current = false;
        }
    }, [])

    if(loading) return <h3>Loading...</h3>
    return (
        <div>
            <h3>{post.title}</h3>
        </div>
    )
}

export default Card
