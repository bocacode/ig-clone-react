import React, { useEffect, useState } from "react"
import {Photo} from "../models/photo"
import PhotoView from "../component/PhotoView"
import "./Feed.css"

function Feed() {
    // keep tract of an array of type "Photo" from model above
    const [photos,setPhotos] = useState<Photo[]>([])
    // pull the ig-clone-backend photos from localhost:5001
    useEffect(
        ()=> {
            // fetch("https://live.floridajs.com/photos")
            fetch("http://localhost:5001/photos")
            .then(res => res.json())
            .then((data: Photo[])=> {
                //console.log(data)
                setPhotos(data)
            })
           
            
        }
        ,[]
    )


    return (
        <>
        <h1>The feed</h1>   
        <div>
            {photos.map((photo: Photo)=> {
                 return <PhotoView key={photo._id} photo={photo} />
                //return <div><img src={photo.photoUrl} /></div>
            })
                }
        </div>
        </>
    )
}

export default Feed