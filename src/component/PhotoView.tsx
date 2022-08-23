import React from "react"
import {Photo} from "../models/photo"
import { updateLike } from "../services/photoServices"

interface PhotoViewProp {
    photo: Photo,
    setPhotos: Function
}

function PhotoView({photo,setPhotos}: PhotoViewProp) {

    async function handleLike(photoId: string)  {
        const newLike = await updateLike(photoId)
        console.log(newLike)
        setPhotos((photos: Photo[]) => {
            return photos.map((photo:Photo)=> 
            photo._id==photoId 
            ? 
            {...photo,likes: newLike}
            : 
            photo)
        })
        
    }

    return (
        <>
        <div>
            <h2>{photo.description || ""}</h2>
            <img src={photo.photoUrl} />
            <div onClick={()=> {handleLike(photo._id || "0")}}>🤙🏼 {photo.likes || 0}</div>
        </div>

        </>
    )
}

export default PhotoView