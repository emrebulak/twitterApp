import { FaRegImage } from "react-icons/fa6";
import person from '../assets/user.png';
import { useEffect, useRef, useState } from "react";
import { auth } from "../firebase/config";
import { toast } from "react-toastify";
import { db } from '../firebase/config';
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { v4 } from "uuid";

const Send = () => {

    const tweetsCol = collection(db, 'tweets');
    const tweetRef = useRef(null)
    const fileRef = useRef(null)
    const storage = getStorage();

    const [user, setUser] = useState(null)
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                setUser(user)
            }
        })
    }, [])

    const handleCreate = async () => {
        let tweet = tweetRef.current.value;
        let imageUrl = "";

        if (tweet == '') {
            return toast.error('Tweet içeriği boş olamaz')
        }

        if (fileRef.current.files.length > 0 && fileRef.current.files[0].type.startsWith('image')) {
            const storageRef = ref(storage, v4() + "_" + fileRef.current.files[0].name);
            await uploadBytes(storageRef, fileRef.current.files[0]);
            imageUrl = await getDownloadURL(storageRef);
        }

        try {
            await addDoc(tweetsCol, {
                user: {
                    id: user?.uid,
                    email: user?.email,
                    name: user?.displayName,
                    userPhotoUrl: user?.photoURL,
                },
                message: tweet,
                photoURL: imageUrl,
                likes: [],
                isUpdated: false,
                createdAt: serverTimestamp()
            })

            toast.success('Tweet başarıyla oluşturuldu')
            tweetRef.current.value = ''

        } catch (error) {
            console.log("Error : ", error)
            toast.error('Tweet oluşturulurken bir hata oluştu')
        }

    }

    return (

        <div className="py-5 px-7 border-b border-zinc-400">
            <div className="flex gap-3 items-center">
                <img className='mb-3 rounded-full object-cover' width={56} src={user?.photoURL == null ? person : user?.photoURL} alt="user" />
                <input ref={tweetRef} className="w-full border-none outline-none bg-transparent text-lg" placeholder="Neler Oluyor?" type="text" />
            </div>
            <div className="flex justify-between items-center px-4 py-2">
                <div className="p-4 rounded-full transition duration-300 hover:bg-[#1F2937] cursor-pointer">
                    <input ref={fileRef} id="fileInp" className="hidden" type="file" />
                    <label htmlFor="fileInp">
                        <FaRegImage className="text-lg cursor-pointer" />
                    </label>
                </div>
                <button onClick={handleCreate} className="bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-700">Tweetle</button>
            </div>
        </div>
    )
}

export default Send