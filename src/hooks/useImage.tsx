import { useState } from "react"
import { ref, uploadBytesResumable, getDownloadURL  } from "firebase/storage";
import storage from '../configs/firebase.config';
import { v4 as uuidv4 } from 'uuid';


const useImage = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [progress, setProgress] = useState(0)
    const [url, setUrl] = useState("")
    const uui = uuidv4()

    
    const uploadImage = (file: File) => {
        setError(null)
        setProgress(0)
        setLoading(true)

        const storageRef = ref(storage, `images/${uui}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed', 
            (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(progress)
            // console.log('Upload is ' + progress + '% done');
    
            switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
            }
            }, 
            (error: any) => {
                setError(error)
                setLoading(false)
                console.log("error", error)
            // Handle unsuccessful uploads
            }, 
            () => {
                setError(null)
                setProgress(100)
                setLoading(false)
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL: string) => {
                console.log('File available at', downloadURL);
                setUrl(downloadURL)
            });
            }
        );
    }

    const downloadImage = (name: string) => {
        // setLoading(true)
        const storageRef = ref(storage, `images/${name}`);
        getDownloadURL(storageRef)
            .then((url) => {
                // Insert url into an <img> tag to "download"
                setUrl(url)
                // console.log('Downloaded image from storage', url);
            })
            .catch((error) => {
                // A full list of error codes is available at
                // https://firebase.google.com/docs/storage/web/handle-errors
                // console.log('Error downloading image from storage', error);
                switch (error.code) {
                    case 'storage/object-not-found':
                        // File doesn't exist
                        // setError("file doesn't exist")
                        break;
                    case 'storage/unauthorized':
                        // User doesn't have permission to access the object
                        // setError("User doesn't have permission to access the object")
                        break;
                    case 'storage/canceled':
                        // User canceled the download
                        // setError("User canceled the download")
                        break;
    
                    // ...
    
                    case 'storage/unknown':
                        // Unknown error occurred, inspect the server response
                        // setError("Unknown error occurred, inspect the server response")
                        break;
                    default:
                        // setError("Unknown error occurred, inspect the server response")
                }
            }
        );
        // setLoading(false)
    }

    
    return { url, uploadImage, downloadImage, error, progress, setError, loading }
}

export default useImage