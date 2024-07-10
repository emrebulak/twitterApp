import moment from 'moment';
import 'moment/dist/locale/tr';
import person from '../assets/user.png'
import { FaRegComment, FaRegHeart, FaHeart } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import DropButton from './DropButton';
import { auth, db, storage } from '../firebase/config';
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { useRef, useState } from 'react';
import { FaRegSave } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { FaTrashCanArrowUp } from "react-icons/fa6";
import { IoReturnDownBack } from "react-icons/io5";
import { deleteObject, ref } from 'firebase/storage';

const Tweet = ({ tweet }) => {
    const { user, message, photoURL, isUpdated, likes, createdAt } = tweet;
    const loginUser = auth.currentUser.uid;
    const tweetsCol = doc(db, "tweets", tweet.id);
    const [isEdit, setIsEdit] = useState(false);
    const [isDeletedPhoto, setIsDeletedPhoto] = useState(false);
    const updateRef = useRef();

    const handleLike = async () => {
        const isLiked = tweet.likes.includes(loginUser);
        await updateDoc(tweetsCol, {
            likes: isLiked ? arrayRemove(loginUser) : arrayUnion(loginUser)
        });
    }

    const changeEdit = () => {
        setIsEdit(!isEdit);
    }

    const handleUpdate = async () => {

        await updateDoc(tweetsCol, {
            message: updateRef.current.value,
            isUpdated: true,
            photoURL: isDeletedPhoto ? "" : photoURL
        });
        setIsEdit(false);
        setIsDeletedPhoto(false);
    }

    let date = moment(createdAt?.toDate()).fromNow();
    return (
        <div className="py-5 px-7 border-b border-zinc-400">

            <div className='flex items-center justify-between text-sm text-zinc-300'>
                <img className='rounded-full' width={40} src={user.userPhotoUrl ? user.userPhotoUrl : person} alt="person" />
                <p>{user?.name.toUpperCase()}</p>
                <p>{date}</p>
                {
                    isUpdated ? <p>*düzenlendi</p> : <p>&nbsp;</p>
                }

                {
                    loginUser == user.id ? <DropButton edit={changeEdit} tweet={tweet} /> : <p>&nbsp;</p>
                }

            </div>

            <div className='p-4'>
                {
                    isEdit ?
                        <div className='flex items-center gap-3 mb-3'>
                            <input ref={updateRef} className='w-full text-black rounded-md border-none outline-none px-2 py-1' type="text" defaultValue={message} />
                            <button onClick={handleUpdate} className='bg-green-400 text-white rounded-md px-4 py-2'><FaRegSave className='text-lg' /></button>
                            <button onClick={changeEdit} className='bg-red-400 text-white rounded-md px-4 py-2'><MdOutlineCancel className='text-lg' /></button>

                        </div>
                        :
                        <p>{message}</p>
                }

                {
                    photoURL && isEdit ? <div className='relative'>
                        <img className={`w-full max-h-60 object-contain ${isDeletedPhoto && 'blur'}`} src={photoURL} alt="Image" />
                        <div onClick={() => setIsDeletedPhoto(!isDeletedPhoto)} className='p-3 bg-zinc-100 absolute text-red-500 top-5 right-1 text-lg rounded-full cursor-pointer hover:scale-105 transition'>
                            {isDeletedPhoto ? <IoReturnDownBack /> : <FaTrashCanArrowUp />}
                        </div>
                    </div> : photoURL && <img className='w-full max-h-60 object-contain' src={photoURL} alt="Image" />

                }
            </div>

            <div className='flex justify-between items-center text-xl'>
                <button className='p-4 rounded-full hover:bg-blue-400 transition duration-300'><FaRegComment /></button>
                <button className='p-4 rounded-full hover:bg-green-400 transition duration-300'><FaRetweet /></button>
                <div onClick={handleLike} className='flex items-center gap-1 hover:text-purple-400'>
                    <button className='p-4 rounded-full hover:bg-purple-400 hover:text-white transition duration-300'>
                        {
                            likes.some(like => like == loginUser) ? <FaHeart className='text-red-500' /> : <FaRegHeart />
                        }
                    </button>
                    <span className='text-sm'>{likes.length}</span>
                </div>
                <button className='p-4 rounded-full hover:bg-gray-400 transition duration-300'><IoShareSocialOutline /></button>

            </div>
        </div>
    )
}

export default Tweet