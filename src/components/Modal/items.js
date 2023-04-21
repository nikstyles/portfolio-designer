import { nanoid } from 'nanoid';
import { HiOutlineMail } from 'react-icons/hi';
import { BsInstagram } from 'react-icons/bs';
import { FaTelegramPlane } from 'react-icons/fa';

const items = [
  {
    id: nanoid(),
    icon: <HiOutlineMail size={30} />,
    link: 'mailto:nicsyle22@gmail.com',
    title: 'Email',
  },
  {
    id: nanoid(),
    icon: <BsInstagram size={30} />,
    link: 'https://www.instagram.com/nicstyle22/',
    title: 'Instagram',
  },
  {
    id: nanoid(),
    icon: <FaTelegramPlane size={30} />,
    link: 'https://t.me/nikita_kovpak',
    title: 'Telegram',
  },
];

export default items;
