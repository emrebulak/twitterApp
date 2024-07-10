import { MdModeEditOutline } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";
import { toast } from "react-toastify";
const DropButton = ({ tweet }) => {
    const tweetsCol = doc(db, 'tweets', tweet.id);

    const handleDelete = async () => {
        try {
            await deleteDoc(tweetsCol);
            toast.success('Tweet başarıyla silindi')
        } catch (error) {
            console.log('Error : ', error)
            toast.error('Tweet silinirken bir hata oluştu')
        }
    }

    return (
        <label className="popup">
            <input type="checkbox" />
            <div className="burger" tabIndex="0">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav className="popup-window">
                <ul>
                    <li>
                        <span><MdModeEditOutline className="text-lg" /> <span>Düzenle</span></span>
                        <span onClick={handleDelete} ><FaRegTrashAlt className="text-md" /> <span>Sil</span></span>
                    </li>


                </ul>
            </nav>
        </label>

    )
}

export default DropButton