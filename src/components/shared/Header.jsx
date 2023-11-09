import Image from "next/image";
import logo from "../../../public/images/logos/logo.png";
import SearchBar from "./SearchBar";
import {
  SunIcon,
  ArrowsUpDownIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import Icon from "./Icon";
import Link from "next/link";

const Header = () => {
  return (
    <section className="flex items-center py-2 px-3 justify-between">
      {/* Logo section */}
      <Link href="/" className="w-1/3">
        <Image
          src={logo}
          alt="logo"
          height={500}
          width={500}
          className="h-12 w-24"
        />
      </Link>

      {/* Search bar section */}
      <div className="hidden w-1/3 lg:flex justify-center">
        <SearchBar width={"w-96"} placeholder={"Search Best Food"} />
      </div>

      {/* Header icons section */}
      <div className="w-1/3 flex justify-end gap-6">
        <div className="hidden lg:block">
          <Icon
            icon={<SunIcon />}
            iconExtraClassNames={"text-color-primary"}
            sidebarIcon={false}
            activeClass
          />
        </div>
        <div className="hidden lg:block">
          <Icon
            icon={<ArrowsUpDownIcon />}
            sidebarIcon={false}
            activeClass={false}
          />
        </div>
        <div className="lg:hidden">
          <Icon
            icon={<MagnifyingGlassIcon />}
            iconExtraClassNames={"text-color-primary"}
            sidebarIcon={false}
            activeClass
          />
        </div>
        <Icon icon={<Bars3Icon />} sidebarIcon={false} activeClass={false} />
      </div>
    </section>
  );
};

export default Header;
