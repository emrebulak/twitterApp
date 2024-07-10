import moment from 'moment';
import 'moment/dist/locale/tr';
import person from '../assets/user.png'
import { FaRegComment, FaRegHeart, FaHeart } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import DropButton from './DropButton';
import { auth, db } from '../firebase/config';
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';

const Tweet = ({ tweet }) => {
    const { user, message, photoURL, isUpdated, likes, createdAt } = tweet;
    const loginUser = auth.currentUser.uid;
    const tweetsCol = doc(db, "tweets", tweet.id);

    const handleLike = async () => {
        const isLiked = tweet.likes.includes(loginUser);
        await updateDoc(tweetsCol, {
            likes: isLiked ? arrayRemove(loginUser) : arrayUnion(loginUser)
        });
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
                    loginUser == user.id ? <DropButton tweet={tweet} /> : <p>&nbsp;</p>
                }

            </div>

            <div className='p-4'>
                <p>{message}</p>
                {
                    photoURL && <img className='w-full max-h-60 object-contain' src={photoURL} alt="Image" />
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