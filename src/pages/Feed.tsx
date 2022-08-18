import React, { useEffect, useState } from "react"
import {Photo} from "../models/photo"
import { getPhotos } from "../service/PhotoService"
import PhotoView from "../component/PhotoView"
import "./Feed.css"

function Feed() {
    // keep tract of an array of type "Photo" from model above
    const [photos,setPhotos] = useState<Photo[]>([])
    // pull the ig-clone-backend photos from localhost:5001
    useEffect(
        ()=> {
            // suggested patern of using fetch in async
            (async() => {
                const photosReturned: Photo[] = await getPhotos()
                setPhotos(photosReturned)
            })();

            // using then
            // fetch("http://localhost:5001/photos")
            // .then(res => res.json())
            // .then((data: Photo[])=> {
            //     //console.log(data)
            //     setPhotos(data)
            // })
           
            
        }
        ,[]
    )

    function updatePhotoLikes(id:string,newlikes: number): void{
        // use a map to go through and update the like to one more than it was for this photo id
        // it's being called AFTER PhotoView connects and get's a like from 
        let updatedPhotos: Photo[] = photos.map((photo:Photo) => photo._id==id ? {...photo,likes: newlikes}:  photo)
        setPhotos(updatedPhotos)
    }


    return (
        <>
        <h1>The feed</h1>   
        <div>
            {photos.map((photo: Photo)=> {
                 return <PhotoView key={photo._id} photo={photo} updatePhotoLikes={updatePhotoLikes} />
                //return <div><img src={photo.photoUrl} /></div>
            })
                }
        </div>
        </>
    )
}

export default Feed