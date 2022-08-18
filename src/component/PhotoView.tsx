import React from "react"
import {Photo} from "../models/photo"
import { like } from "../service/PhotoService"
interface PhotoViewProp {
    photo: Photo,
    updatePhotoLikes: Function
}



function PhotoView({photo,updatePhotoLikes}: PhotoViewProp) {

    async function clickLike(id: string) {
        let newlikes = await like(photo._id)
        updatePhotoLikes(photo._id,newlikes)
    }

    return (
        <>
        <div>{photo.description ?? ""}</div>
        <div><img src={photo.photoUrl} /></div>
        <div onClick={() => clickLike(photo._id)}>🤙🏼's {photo.likes ?? 0}</div>
        <hr />
        </>
    )
}

export default PhotoView