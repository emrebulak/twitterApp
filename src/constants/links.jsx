import { AiOutlineCheckCircle } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaRegBookmark, FaRegEnvelope, FaRegListAlt } from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { PiDotsThreeCircle } from "react-icons/pi";

const links =[
    {
        title: 'Anasayfa',
        icon: <HiOutlineHome />
    },
    {
        title: 'Bildirimler',
        icon: <IoMdNotificationsOutline  />
    },
    {
        title: 'Mesajlar',
        icon: <FaRegEnvelope  />
    },
    {
        title: 'Listeler',
        icon: <FaRegListAlt  />
    },
    {
        title: 'Yer İşaretleri',
        icon: <FaRegBookmark  />
    },
    {
        title: 'Onaylanmış',
        icon: <AiOutlineCheckCircle />,
      },
      {
        title: 'Profil',
        icon: <CgProfile />,
      },
      {
        title: 'Daha Fazla',
        icon: <PiDotsThreeCircle />,
      }
]

export default links;