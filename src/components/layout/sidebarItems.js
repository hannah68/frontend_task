import { CiHome } from "react-icons/ci";
import { PiSuitcaseSimple, PiAddressBookTabsLight } from "react-icons/pi";
import { FaRegFileAlt } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { CiSettings } from "react-icons/ci";
import { GoQuestion } from "react-icons/go";

export const sidebarItems = [
  {
    id: 1,
    icon: <CiHome size={40} />,
  },
  {
    id: 2,
    icon: <PiSuitcaseSimple size={40} />,
  },
  {
    id: 3,
    icon: <PiAddressBookTabsLight size={40} />,
  },
  {
    id: 4,
    icon: <FaRegFileAlt size={40} />,
  },
  {
    id: 5,
    icon: <FiSearch size={40} />,
  },
  {
    id: 6,
    icon: <CiSettings size={40} />,
  },
  {
    id: 7,
    icon: <GoQuestion size={40} />,
  },
];
