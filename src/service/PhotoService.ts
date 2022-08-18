import {Photo} from "../models/photo"

//const APIUrl = "http://localhost:5001/photos/";
const APIUrl = "https://live.floridajs.com/photos/";

export const getPhotos = async () : Promise<Photo[]> => {
    try {
        let photofetch = await fetch(APIUrl)
        let photolist: Photo[] = await photofetch.json()
        return photolist
    } catch (ex) {
        console.error(ex)
        alert("Doh! Error with the server!")
        return []
    }
    
}

export const like =  async (PhotoId: string): Promise<number> =>  {
    try {
        let likeFetch = await fetch(APIUrl+PhotoId,
        {method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({likes: 1})
        })
        let listReply: Photo = await likeFetch.json() as Photo
        return listReply.likes ?? 0
    } catch (ex) {
        console.error(ex)
        alert("error on like!")
    }
    return 0
    
}
