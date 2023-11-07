import Image from "next/image";
import logo from "../../../public/images/logos/food_network.png";
import SearchBar from "./SearchBar";
import {
  SunIcon,
  ArrowsUpDownIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import Icon from "./Icon";

const Header = () => {
  return (
    <div className="flex items-center py-2 px-3">
      {/* Logo section */}
      <div className="w-1/3">
        <Image src={logo} height={500} width={500} className="h-12 w-24" />
      </div>

      {/* Search bar section */}
      <div className="w-1/3 flex justify-center">
        <SearchBar />
      </div>

      {/* Header icons section */}
      <div className="w-1/3 flex justify-end gap-6">
        <Icon
          icon={<SunIcon />}
          iconExtraClassNames={"color-primary"}
          sidebarIcon={false}
          activeClass
        />
        <Icon
          icon={<ArrowsUpDownIcon />}
          sidebarIcon={false}
          activeClass={false}
        />
        <Icon icon={<Bars3Icon />} sidebarIcon={false} activeClass={false} />
      </div>
    </div>
  );
};

export default Header;
