import { Photo } from "../models/photo";

const photoAPIUrl = "http://localhost:5001/photos/"


async function updateLike (photoId: string): Promise<number> {

    // PATCH /photos/{PHOTO_ID}  with a body of { likes: 1}
   // "http://localhost:5001/photos/87438734873847348"
    const fetchPhotos = await fetch(photoAPIUrl+photoId,{
        method:"PATCH",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ likes: 1})
    })
    const photo: Photo = await fetchPhotos.json()
    return photo.likes || 0
}

async function getPhotos() : Promise<Photo[]> {
    try {
    const fetchPhotos = await fetch(photoAPIUrl)
    const photoList: Photo[] = await fetchPhotos.json()
    return photoList
    } catch(error) {
        console.error(error)
        return [] // we have crashed BUT we can return an empty array
    }

    // fetch("http://localhost:5001/photos")
    // .then(res => res.json())
    // .then((data: Photo[])=> {
    //     //console.log(data)
    //     setPhotos(data)
    // })
}