import { CiHome } from "react-icons/ci";
import { PiSuitcaseSimple, PiAddressBookTabsLight } from "react-icons/pi";
import { FaRegFileAlt } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { CiSettings } from "react-icons/ci";
import { GoQuestion } from "react-icons/go";
import StyledIcon from "./StyledIcon";

export const sidebarItems = [
  {
    id: 1,
    icon: (
      <StyledIcon>
        <CiHome size={40} />
      </StyledIcon>
    ),
  },
  {
    id: 2,
    icon: (
      <StyledIcon>
        <PiSuitcaseSimple size={40} />
      </StyledIcon>
    ),
  },
  {
    id: 3,
    icon: (
      <StyledIcon>
        <PiAddressBookTabsLight size={40} />
      </StyledIcon>
    ),
  },
  {
    id: 4,
    icon: (
      <StyledIcon>
        <FaRegFileAlt size={40} />
      </StyledIcon>
    ),
  },
  {
    id: 5,
    icon: (
      <StyledIcon>
        <FiSearch size={40} />
      </StyledIcon>
    ),
  },
  {
    id: 6,
    icon: (
      <StyledIcon>
        <CiSettings size={40} />
      </StyledIcon>
    ),
  },
  {
    id: 7,
    icon: (
      <StyledIcon>
        <GoQuestion size={40} />
      </StyledIcon>
    ),
  },
];
